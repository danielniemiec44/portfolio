import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Row, Col, Image, Modal, Carousel, Container, Button } from "react-bootstrap";

interface GalleryImage {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: number;
  hideThumbnails?: boolean;
}

const GalleryInner = ({ images, columns = 3, hideThumbnails = false }: GalleryProps) => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handler = (e: any) => {
      const i = e?.detail?.index ?? 0;
      if (typeof i === "number") {
        setIndex(i);
        setShow(true);
      }
    };
    window.addEventListener("gallery-open", handler as EventListener);
    return () => window.removeEventListener("gallery-open", handler as EventListener);
  }, []);

  if (!images || images.length === 0) return null;

  const openAt = (i: number) => {
    setIndex(i);
    setShow(true);
  };

  return (
    <>
      {!hideThumbnails && (
        <Container className="py-4">
          <Row xs={1} sm={2} md={columns} className="g-3">
            {images.map((img, i) => (
              <Col key={i}>
                <div
                  role="button"
                  onClick={() => openAt(i)}
                  onKeyDown={(e) => {
                    if ((e as any).key === "Enter") openAt(i);
                  }}
                  tabIndex={0}
                  className="rounded-3 overflow-hidden border bg-white shadow-sm"
                  style={{ cursor: "pointer" }}
                >
                  <div style={{ aspectRatio: "16/9", width: "100%", overflow: "hidden" }}>
                    <Image src={img.src} alt={img.alt || img.title || `image-${i}`} fluid loading="lazy" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                  </div>
                  <div className="p-2">
                    <div className="fw-semibold small mb-1">{img.title}</div>
                    <div className="text-muted small" style={{ maxHeight: 56, overflow: "hidden" }}>{img.description}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}

      <Modal show={show} onHide={() => setShow(false)} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{images[index]?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={index} onSelect={(selectedIndex: number) => setIndex(selectedIndex)} variant="dark" interval={null} indicators>
            {images.map((img, i) => (
              <Carousel.Item key={i}>
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 360 }}>
                  <img src={img.src} alt={img.alt || img.title} style={{ maxWidth: "100%", maxHeight: "60vh", objectFit: "contain" }} />
                </div>
                <Carousel.Caption className="bg-transparent text-start mt-2 d-none d-md-block" style={{ bottom: "0" }}>
                  <div className="bg-white bg-opacity-90 p-3 rounded text-body shadow-sm" style={{ maxHeight: 200, overflowY: "auto" }}>
                    <div className="fw-bold mb-1">{img.title}</div>
                    <div className="small text-muted">{img.description}</div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default forwardRef(function Gallery({ images, columns = 3, hideThumbnails = false }: GalleryProps, ref) {
  // Create a function to open modal via custom event
  const open = (i: number) => {
    const ev = new CustomEvent("gallery-open", { detail: { index: i } });
    window.dispatchEvent(ev);
  };

  useImperativeHandle(ref, () => ({ open }));

  // The inner component will listen to the custom event to open modal
  return <GalleryInner images={images} columns={columns} hideThumbnails={hideThumbnails} />;
});

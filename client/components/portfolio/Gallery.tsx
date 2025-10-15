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
          <div
            onPointerDown={(e) => {
              const el = e.currentTarget as HTMLDivElement;
            }}
            style={{ userSelect: "none" }}
          >
            {/* Pointer drag handling for desktop and touch */}
            <CarouselWrapper images={images} index={index} setIndex={setIndex} />
          </div>

          <div className="d-flex justify-content-center mt-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === index ? "btn btn-sm btn-dark rounded-circle mx-1" : "btn btn-sm btn-light rounded-circle mx-1"}
                onClick={() => setIndex(i)}
                aria-label={`Przejdź do slajdu ${i + 1}`}
                aria-current={i === index}
                style={{ width: 10, height: 10, padding: 0 }}
              />
            ))}
          </div>
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

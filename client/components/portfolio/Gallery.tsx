import React, { useState, forwardRef, useImperativeHandle } from "react";
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
}

export default function Gallery({ images, columns = 3 }: GalleryProps) {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const openAt = (i: number) => {
    setIndex(i);
    setShow(true);
  };

  return (
    <Container className="py-4">
      <Row xs={1} sm={2} md={columns} className="g-3">
        {images.map((img, i) => (
          <Col key={i}>
            <div
              role="button"
              onClick={() => openAt(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter") openAt(i);
              }}
              tabIndex={0}
              className="rounded-3 overflow-hidden border bg-white shadow-sm"
              style={{ cursor: "pointer" }}
            >
              <div style={{ aspectRatio: "16/9", width: "100%", overflow: "hidden" }}>
                <Image src={img.src} alt={img.alt || img.title || `image-${i}`} fluid style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <div className="p-2">
                <div className="fw-semibold small mb-1">{img.title}</div>
                <div className="text-muted small" style={{ maxHeight: 56, overflow: "hidden" }}>{img.description}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={() => setShow(false)} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{images[index]?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={index} onSelect={(selected) => setIndex(selected)} variant="dark" interval={null} indicators>
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
    </Container>
  );
}

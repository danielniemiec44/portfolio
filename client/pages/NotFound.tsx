import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="py-5">
      <Container className="text-center">
        <h1 className="display-4 fw-bold mb-2">404</h1>
        <p className="text-muted mb-4">Nie znaleziono strony</p>
        <Button href="/" variant="primary" className="px-4">Wróć do strony głównej</Button>
      </Container>
    </section>
  );
};

export default NotFound;

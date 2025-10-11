import { useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AuthorCard from "../components/portfolio/AuthorCard";
import ProjectCard from "../components/portfolio/ProjectCard";

export default function Index() {
  const authors = useMemo(
    () => [
      {
        id: "autor1",
        name: "Defective",
        role: "Frontend Developer",
        bio: "Specjalizuje się w tworzeniu nowoczesnych aplikacji webowych z użyciem React oraz TypeScript. Skupia się na wydajności, dostępności i dopracowanym UI.",
        skills: ["React", "TypeScript", "React-Bootstrap", "Vite", "UX"],
        projects: [],
      },
      {
        id: "autor2",
        name: "DeeRave",
        role: "Full‑Stack Developer",
        bio: "Buduje kompletne rozwiązania – od API po dopracowane interfejsy. Koncentruje się na niezawodności, testach i skalowalności.",
        skills: ["Node.js", "Express", "PostgreSQL", "React", "Tests"],
        projects: [
          {
            title: "Webowy System Magazynowy",
            description: "Praca inżynierska obroniona 10.10.2025 — webowy system do zarządzania magazynem, obejmujący backend, API oraz interfejs użytkownika.",
            tags: ["Node.js", "React", "PostgreSQL"],
            date: "2025-10-10",
          },
          {
            title: "API analityczne",
            description: "Skalowalny serwis zbierający i raportujący metryki w czasie rzeczywistym.",
            tags: ["Node", "Streams", "Postgres"],
          },
          {
            title: "Portal klienta",
            description: "Aplikacja do obsługi klientów z modułami faktur i ticketów wsparcia.",
            tags: ["Auth", "RBAC", "PDF"],
          },
          {
            title: "Monitor wydajności",
            description: "Dashboard prezentujący KPI i alerty, z naciskiem na czytelność.",
            tags: ["Metrics", "Dashboards", "UX"],
          },
        ],
      },
    ],
    [],
  );

  return (
    <>
      {/* Hero */}
      <section className="softify-hero py-5 py-lg-6 position-relative overflow-hidden">
        <Container className="text-center text-lg-start position-relative" style={{ zIndex: 1 }}>
          <Row className="align-items-center g-4">
            <Col lg={7} className="mx-auto mx-lg-0">
              <h1 className="display-5 fw-extrabold mb-3 text-white">
                Softify — Zespół kreatywnych twórców
              </h1>
              <p className="lead text-white-50 mb-4">
                Portfolio dwóch autorów, którzy łączą estetykę i technologię, aby tworzyć dopracowane produkty cyfrowe.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <Button variant="light" href="#projekty" className="px-4 py-2 fw-semibold">
                  Zobacz projekty
                </Button>
                <Button variant="outline-light" href="#autor1" className="px-4 py-2 fw-semibold">
                  Poznaj autorów
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="softify-hero-blur" />
      </section>

      {/* Authors & Portfolio split */}
      <section id="projekty" className="py-5">
        <Container>
          <div className="d-flex flex-column flex-lg-row align-items-start gap-4">
            <div className="w-100 w-lg-25" style={{ maxWidth: 420 }}>
              <h2 className="h4 fw-bold mb-3">Autorzy</h2>
              <div className="d-grid gap-3">
                <AuthorCard
                  id={authors[0].id}
                  name={authors[0].name}
                  role={authors[0].role}
                  bio={authors[0].bio}
                  skills={authors[0].skills}
                />
                <AuthorCard
                  id={authors[1].id}
                  name={authors[1].name}
                  role={authors[1].role}
                  bio={authors[1].bio}
                  skills={authors[1].skills}
                />
              </div>
            </div>

            <div className="flex-grow-1 w-100">
              <h2 className="h4 fw-bold mb-4">Portfolio</h2>

              {authors.map((a) => (
                <section key={a.id} className="mb-5">
                  <h3 className="h5 fw-semibold mb-3">{a.name}</h3>
                  <Row xs={1} md={2} lg={3} className="g-4">
                    {a.projects.map((p) => (
                      <Col key={p.title}>
                        <ProjectCard title={p.title} description={p.description} tags={p.tags} />
                      </Col>
                    ))}
                  </Row>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

import { useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AuthorCard from "../components/portfolio/AuthorCard";
import ProjectCard from "../components/portfolio/ProjectCard";
import Gallery from "../components/portfolio/Gallery";

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
        ],
      },
    ],
    [],
  );

  const deeRaveImages = useMemo(() => [
    {
      src: "/assets/realizacja/rysunek-1.jpg",
      title: "Ekran logowania do systemu WSM",
      description:
        "Strona logowania umożliwiająca uwierzytelnienie użytkownika (login + hasło). Widok jest prosty i czytelny, z walidacją pól i komunikatami błędów dla niepoprawnych danych.",
    },
    {
      src: "/assets/realizacja/rysunek-2.jpg",
      title: "Główny widok aplikacji po zalogowaniu",
      description:
        "Centralny panel nawigacyjny z kaflami do najważniejszych modułów: Magazyn, Klienci, Przyjęcia i Wydania. Widok jest responsywny i utrzymany w stylistyce Material Design.",
    },
    {
      src: "/assets/realizacja/rysunek-3.jpg",
      title: "Menu zakładek modułów w trybie mobilnym",
      description:
        "Zoptymalizowane menu mobilne dające szybki dostęp do kluczowych sekcji aplikacji. Pozycje są kontekstowe i zależne od uprawnień aktualnego użytkownika.",
    },
    {
      src: "/assets/realizacja/rysunek-4.jpg",
      title: "Główna strona modułu 'Magazyn' – bez wybranej kategorii",
      description:
        "Widok informuje użytkownika o konieczności wyboru kategorii produktów, pokazuje przyciski akcji (wybierz kategorię, dodaj produkt) i stan paginacji.",
    },
    {
      src: "/assets/realizacja/rysunek-5.jpg",
      title: "Menu wyboru dostępnych kategorii produktów",
      description:
        "Okno wyboru kategorii z listą istniejących grup produktowych oraz możliwością dodania lub edycji kategorii (ikona ołówka).",
    },
    {
      src: "/assets/realizacja/rysunek-6.jpg",
      title: "Dodawanie i modyfikacja kategorii produktów",
      description:
        "Formularz pozwalający zdefiniować nazwę kategorii oraz dodać dowolną liczbę pól własnych (nazwa, typ, wartość domyślna).",
    },
    {
      src: "/assets/realizacja/rysunek-7.jpg",
      title: "Widok tabeli produktów w wybranej kategorii",
      description:
        "Tabela produktów (przykład: Komputer PC) z kolumnami: nazwa, ilość, kod kreskowy oraz dodatkowe właściwości. Umożliwia filtrowanie i zaznaczanie pozycji.",
    },
    {
      src: "/assets/realizacja/rysunek-8.jpg",
      title: "Szczegóły ilościowe produktu – widok pusty",
      description:
        "Modal analizy ilościowej produktu z zakładkami: spis wydań, spis przyjęć, wykres. Widok pusty oznacza brak historii dla danego towaru.",
    },
    {
      src: "/assets/realizacja/rysunek-9.jpg",
      title: "Szczegóły ilościowe produktu – spis wydań zewnętrznych",
      description:
        "Lista zrealizowanych wydań z detalami: numer dokumentu, kontrahent, ilość, data, operator oraz stan magazynowy przed i po operacji.",
    },
    {
      src: "/assets/realizacja/rysunek-10.jpg",
      title: "Szczegóły ilościowe produktu – spis przyjęć zewnętrznych",
      description:
        "Zakładka z listą przyjęć (PZ) zawierająca numer dokumentu, datę, dostawcę i liczbę pozycji, umożliwiająca przejście do szczegółów kontrahenta.",
    },
    {
      src: "/assets/realizacja/rysunek-11.jpg",
      title: "Szczegóły ilościowe produktu – łączony spis wydań i przyjęć",
      description:
        "Chronologiczne zestawienie wszystkich operacji magazynowych dotyczących produktu z wyróżnieniem przyjęć i wydań oraz zmianą stanów.",
    },
    {
      src: "/assets/realizacja/rysunek-12.jpg",
      title: "Szczegóły ilościowe produktu – wizualizacja w formie wykresu",
      description:
        "Wizualizacja liniowa prezentująca liczbę przyjęć i wydań w czasie, z podsumowaniem sum przyjęć i wydań oraz identyfikacją trendów.",
    },
  ], []);

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
                  {a.projects.length === 1 ? (
                    <Row className="g-4">
                      <Col>
                        <ProjectCard title={a.projects[0].title} description={a.projects[0].description} tags={a.projects[0].tags} />
                      </Col>
                    </Row>
                  ) : (
                    <Row xs={1} md={2} lg={3} className="g-4">
                      {a.projects.map((p) => (
                        <Col key={p.title}>
                          <ProjectCard title={p.title} description={p.description} tags={p.tags} />
                        </Col>
                      ))}
                    </Row>
                  )}

                  {a.id === "autor2" && (
                    <div className="mt-4" id="realizacja-galeria">
                      <h4 className="h6 fw-semibold mb-3">Galeria — Realizacja SI (zrzuty ekranu)</h4>
                      <Gallery images={deeRaveImages} columns={3} />
                    </div>
                  )}

                  {a.id === "autor2" && a.projects.length === 1 && (
                    <div className="mt-3">
                      <Button
                        variant="primary"
                        onClick={() => {
                          const el = document.getElementById("realizacja-galeria");
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                      >
                        Zobacz galerię projektu
                      </Button>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

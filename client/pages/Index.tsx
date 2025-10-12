import React, { useMemo, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AuthorCard from "../components/portfolio/AuthorCard";
import ProjectCard from "../components/portfolio/ProjectCard";
import Gallery from "../components/portfolio/Gallery";

export default function Index() {
  const galleryRef = useRef<any>(null);
  const authors = useMemo(
    () => [
      {
        id: "autor1",
        name: "Defective",
        role: "Java Backend & Embedded Systems Developer",
        bio: "Java backend developer z doświadczeniem w frameworkach Spring, Javalin i Hibernate. Projektuję oraz wdrażam skalowalne API i rozwiązania oparte na SQL. Posiadam doświadczenie w administracji systemów Linux oraz pracach serwerowych. Dodatkowo pracuję z Pythonem (DSP) i C++ (AVR), tworzę modyfikacje i pluginy do Minecraft (Forge, Fabric, Spigot/Paper) oraz boty i aplikacje dla Discord.",
        skills: ["Java", "Spring", "Javalin", "Hibernate", "SQL", "Python (DSP)", "C++ (AVR)", "Linux", "Minecraft Forge", "Fabric", "Bukkit/Spigot/Paper", "Discord bots", "API Design"],
        projects: [],
      },
      {
        id: "autor2",
        name: "DeeRave",
        role: "Full‑Stack & Game/Plugins Developer",
        bio: "Full‑Stack developer specjalizujący się w budowie skalowalnych aplikacji webowych z wykorzystaniem Node.js i React. Doświadczenie w projektowaniu API, integracji z bazami danych oraz automatyzacji (boty Discord). Tworzę również wtyczki do Minecraft (Spigot/Paper) oraz aplikacje w Unity (C#). Posiadam praktyczną znajomość administracji Linux i Windows Server.",
        skills: ["Node.js", "Express", "React", "PostgreSQL", "Python", "Discord bots", "Minecraft plugins (Spigot/Paper)", "Unity", "C#", "Linux", "Windows Server", "Java"],
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
        "Strona logowania umożliwiająca uwierzytelnienie u��ytkownika (login + hasło). Widok jest prosty i czytelny, z walidacją pól i komunikatami błędów dla niepoprawnych danych.",
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
      title: "Szczeg��ły ilościowe produktu – widok pusty",
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
        "Wizualizacja liniowa prezentująca liczbę przyjęć i wydań w czasie, z podsumowaniem sum przyjęć i wydań oraz identyfikacj�� trendów.",
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
                <Button variant="primary" href="#portfolio-autor2" className="px-4 py-2 fw-semibold">
                  Case study: WSM
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="softify-hero-blur" />
      </section>

      {/* Authors & Portfolio: authors side-by-side with projects beneath each */}
      <section id="projekty" className="py-5">
        <Container>
          <h2 className="h4 fw-bold mb-4">Autorzy</h2>

          <Row className="g-4 mb-5">
            {authors.map((a) => (
              <Col key={a.id} xs={12} md={6}>
                <AuthorCard id={a.id} name={a.name} role={a.role} bio={a.bio} skills={a.skills} />
              </Col>
            ))}
          </Row>

          <h2 className="h4 fw-bold mb-4">Portfolio</h2>

          <Row className="g-4">
            {authors.map((a) => (
              <Col key={a.id} id={`portfolio-${a.id}`} xs={12} md={6}>
                <h3 className="h5 fw-semibold mb-3">{a.name}</h3>

                {a.projects.length === 1 ? (
                  <ProjectCard
                    title={a.projects[0].title}
                    description={a.projects[0].description}
                    tags={a.projects[0].tags}
                    galleryLabel="Zobacz galerię projektu"
                    onGallery={() => galleryRef.current?.open(0)}
                  />
                ) : a.projects.length > 1 ? (
                  <Row xs={1} className="g-3">
                    {a.projects.map((p) => (
                      <Col key={p.title}>
                        <ProjectCard title={p.title} description={p.description} tags={p.tags} />
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <div className="text-muted">Brak projektów do wyświetlenia.</div>
                )}
              </Col>
            ))}
          </Row>

          {/* Contact / Social */}
          <section className="mt-5 pt-4 border-top">
            <h3 className="h5 fw-semibold mb-3">Kontakt</h3>
            <p className="mb-2">Masz pytania lub chcesz współpracować? Napisz do nas.</p>
            <div className="d-flex flex-wrap gap-2">
              <a className="btn btn-outline-dark" href="mailto:kontakt@softify.local">kontakt@softify.local</a>
              <a className="btn btn-outline-dark" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-outline-dark" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </section>
        </Container>
      </section>

      {/* Hidden gallery modal instance (no inline grid) */}
      <Gallery ref={galleryRef} images={deeRaveImages} hideThumbnails columns={3} />
    </>
  );
}

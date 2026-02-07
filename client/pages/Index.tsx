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
        id: "autor2",
        name: "Daniel Niemiec",
        avatarUrl: "/assets/daniel.jpg",
        role: "CEO",
        bio: `Specjalizuję się w projektowaniu, tworzeniu i wdrażaniu systemów informatycznych. Stawiam na nowoczesne podejście do rozwiązywania problemów — analizuję potrzeby klienta i dostarczam rozwiązania, które są funkcjonalne, skalowalne i przyjazne w codziennym użytkowaniu.

Pracuję w pełnym zakresie — od interfejsu użytkownika, przez logikę biznesową, po infrastrukturę serwerową i bazodanową. Moje doświadczenie obejmuje zarówno aplikacje webowe, jak i automatyzację procesów, integracje systemowe czy narzędzia wewnętrzne.

🛠️ Zakres moich kompetencji obejmuje m.in.:
– projektowanie i wdrażanie systemów IT
– aplikacje webowe (Node.js, React, PostgreSQL)
– automatyzację procesów i skrypty (Python)
– administrację serwerami (Linux, Windows Server)
– pluginy i rozszerzenia (Minecraft, Discord)`,
        skills: [
          "Node.js",
          "Express",
          "React",
          "PostgreSQL",
          "Python",
          "Java",
          "Discord bots",
          "Minecraft plugins (Spigot/Paper)",
          "Linux",
          "Windows Server",
          "Unity",
        ],
        projects: [
          {
            title: "Webowy System Magazynowy (WSM)",
            description: `Webowy System Magazynowy [Node.js, React, PostgreSQL]\nPełnowymiarowy system do zarządzania magazynem stworzony jako praca inżynierska (obroniona 10.10.2025).\n\nSystem oferuje:\n• Zarządzanie stanami magazynowymi z obsługą kategorii i atrybutów produktów\n• Rejestrację operacji magazynowych (WZ, PZ) z automatycznym śleedzeniem stanów\n• Panel administracyjny z zarządzaniem użytkownikami i uprawnieniami\n• System audytu z pełną historią operacji\n• Zaawansowaną wizualizację danych (wykresy, raporty)\n• Responsywny interfejs użytkownika z obsługą urządzeń mobilnych\n• API RESTful z pełną dokumentacją\n• Mechanizmy bezpieczeństwa (JWT, hashowanie, walidacja)\n\nStack technologiczny:\nBackend: Node.js, Express, PostgreSQL, Sequelize, JWT\nFrontend: React, MUI, Chart.js\nNarzędzia: Docker, Git`,
            image: "/assets/realizacja/wsm_page12_img1.png",
            tags: [
              "Node.js",
              "React",
              "PostgreSQL",
              "Express",
              "MUI",
              "Sequelize",
            ],
            date: "2025-10-10",
            showGallery: true,
          },
          {
            title: "Strona wizytówkowa — Gabinet Psychoterapii",
            description: `Strona internetowa dla gabinetu psychoterapeutycznego Piwowarczyk Terapia.\n\nProjekt obejmował zaprojektowanie i wdrożenie responsywnej strony wizytówkowej, prezentującej ofertę gabinetu, informacje o terapeucie oraz dane kontaktowe z integracją mapy Google.\n\nStrona została zoptymalizowana pod kątem SEO i szybkości ładowania, aby zapewnić widoczność w wynikach wyszukiwania i wygodne korzystanie na urządzeniach mobilnych.`,
            tags: [
              "HTML",
              "CSS",
              "JavaScript",
              "Responsywność",
              "SEO",
            ],
            link: "https://www.piwowarczykterapia.pl/",
            date: "2025",
            showGallery: false,
          },
        ],
      },
    ],
    [],
  );

  const deeRaveImages = useMemo(
    () => [
      {
        src: "/assets/realizacja/wsm_page11_img1.png",
        title: "Ekran logowania do systemu WSM",
        description:
          "Mechanizm logowania chroni dostęp do systemu; błędne próby są odrzucane, co zabezpiecza dane uwierzytelniające.",
      },
      {
        src: "/assets/realizacja/wsm_page12_img1.png",
        title: "Główny widok aplikacji po zalogowaniu",
        description:
          "Centralny panel nawigacyjny z odnośnikami do modułów. Single‑page application zapewnia szybkie przejścia między sekcjami bez przeładowania strony.",
      },
      {
        src: "/assets/realizacja/wsm_page13_img1.png",
        title: "Menu zakładek modułów – tryb mobilny",
        description:
          "Mobilne menu z listą modułów (Strona główna, Magazyn, Wydania, Przyjęcia, Klienci, Panel, Logi). Dostępne opcje zależą od uprawnień użytkownika.",
      },
      {
        src: "/assets/realizacja/wsm_page14_img1.png",
        title: "Główna strona modułu 'Magazyn' – brak wybranej kategorii",
        description:
          "Widok zachęcający do wyboru kategorii lub dodania produktu. Tabela stanów magazynowych jest niedostępna bez wyboru kategorii.",
      },
      {
        src: "/assets/realizacja/wsm_page15_img1.png",
        title: "Menu wyboru dostępnych kategorii produktów",
        description:
          "Okno z listą kategorii (np. Cement, Komputer PC, Ławka, Telefon) oraz ikonami edycji i przyciskiem dodawania nowej kategorii.",
      },
      {
        src: "/assets/realizacja/wsm_page16_img1.png",
        title: "Dodawanie i modyfikacja kategorii produktów",
        description:
          "Formularz umożliwia tworzenie i edycję kategorii oraz definiowanie pól opisujących cechy produktów; zapewnia integralność danych.",
      },
      {
        src: "/assets/realizacja/wsm_page17_img1.png",
        title: "Widok tabeli produktów w wybranej kategorii",
        description:
          "Tabela produktów zawiera kolumny takie jak nazwa, ilość, kod kreskowy i właściwości kategorii; oferuje filtrowanie i zaznaczanie wierszy.",
      },
      {
        src: "/assets/realizacja/wsm_page18_img1.png",
        title: "Szczegóły ilościowe produktu – widok pusty",
        description:
          "Modal do analizy danych ilościowych z zakładkami (wydania, przyjęcia, łączone, wykres). W prezentowanym przykładzie brak operacji.",
      },
      {
        src: "/assets/realizacja/wsm_page19_img1.png",
        title: "Szczegóły ilościowe produktu – spis wydań zewnętrznych",
        description:
          "Lista wydań zewnętrznych z danymi dokumentu, kontrahenta, ilości oraz stanu przed i po operacji; zawiera filtry zakresu dat.",
      },
      {
        src: "/assets/realizacja/wsm_page20_img1.png",
        title: "Szczegóły ilościowe produktu – spis przyjęć zewnętrznych",
        description:
          "Zakładka spisu przyjęć prezentuje PZ‑ki wraz z datą, dostawcą, ilością i stanem magazynowym; umożliwia filtrowanie po dacie.",
      },
      {
        src: "/assets/realizacja/wsm_page21_img1.png",
        title: "Szczegóły ilościowe produktu – łączony spis wydań i przyjęć",
        description:
          "Chronologiczny wykaz operacji magazynowych (przyjęcia i wydania) z informacją o typie, dokumencie, kontrahencie i zmianach ilości.",
      },
      {
        src: "/assets/realizacja/wsm_page22_img1.png",
        title: "Szczegóły ilościowe produktu – wizualizacja w formie wykresu",
        description:
          "Wykres liniowy obrazuje przyjęcia (zielone) i wydania (czerwone) w funkcji daty; nad wykresem podsumowanie liczby operacji.",
      },
      {
        src: "/assets/realizacja/wsm_page23_img1.png",
        title: "Dodawanie nowego produktu do systemu",
        description:
          "Formularz dodawania produktu obejmuje nazwę, ilość początkową, kod kreskowy oraz cechy kategorii; dane podstawowe nie mogą być edytowane po zapisie.",
      },
      {
        src: "/assets/realizacja/wsm_page24_img1.png",
        title: "Lista wszystkich wydań zewnętrznych",
        description:
          "Widok listy WZ przedstawia numer dokumentu, odbiorcę i liczbę pozycji; pozwala wyszukiwać i sortować dokumenty.",
      },
      {
        src: "/assets/realizacja/wsm_page25_img1.png",
        title: "Szczegóły wydania zewnętrznego – przedmioty",
        description:
          "Szczegóły wydania pokazują produkty z linkiem do szczegółów, kategorię, stany przed/po, parametry techniczne, wydaną ilość oraz brakujące kody kreskowe.",
      },
      {
        src: "/assets/realizacja/wsm_page26_img1.png",
        title: "Lista przyjęć zewnętrznych",
        description:
          "Lista PZ zawiera numer, dostawcę (z NIP), osobę odpowiedzialną i liczbę pozycji; udostępnia filtr wyszukiwania i sortowanie.",
      },
      {
        src: "/assets/realizacja/wsm_page27_img1.png",
        title: "Szczegóły przyjęcia zewnętrznego – lista przedmiotów",
        description:
          "Widok szczegółów przyjęcia prezentuje listę pozycji z ilością, nazwą, kategorią, stanami przed/po oraz cechami produktu.",
      },
      {
        src: "/assets/realizacja/wsm_page28_img1.png",
        title: "Wyświetlanie klientów / kontrahentów",
        description:
          "Panel klientów zawiera listę kontrahentów z nazwą, e‑mailem, telefonem i ikoną typu; umożliwia wyszukiwanie i dodawanie nowych.",
      },
      {
        src: "/assets/realizacja/wsm_page29_img1.png",
        title: "Wyświetlanie szczegółów kontrahenta",
        description:
          "Szczegóły klienta pokazują nazwę, adres e‑mail, telefon, adres oraz możliwość powrotu do listy wszystkich kontrahentów.",
      },
      {
        src: "/assets/realizacja/wsm_page30_img1.png",
        title: "Panel zarządzania użytkownikami",
        description:
          "Panel administracyjny umożliwia przeglądanie i zarządzanie kontami magazynierów (dodawanie, edycja haseł, usuwanie); konto admin jest ukryte.",
      },
      {
        src: "/assets/realizacja/wsm_page31_img1.png",
        title: "Dodawanie nowego magazyniera",
        description:
          "Okno dodawania użytkownika wymaga nazwy i hasła; nowy magazynier otrzymuje rolę z pełnymi uprawnieniami do operacji magazynowych.",
      },
      {
        src: "/assets/realizacja/wsm_page32_img1.png",
        title: "Zmiana hasła magazyniera",
        description:
          "Modal zmiany hasła pozwala administratorowi zaktualizować hasło pracownika; użytkownik zostanie wylogowany ze wszystkich sesji.",
      },
      {
        src: "/assets/realizacja/wsm_page33_img1.png",
        title: "Logi audytu systemu",
        description:
          "Panel logów audytu prezentuje historię operacji systemowych (data, użytkownik, metoda, endpoint, status, czas i IP) z opcjami filtrowania.",
      },
    ],
    [],
  );

  return (
    <>
      {/* Hero */}
      <section className="softify-hero position-relative">
        <Container
          className="text-center text-lg-start position-relative px-3 px-sm-4 pt-4"
          style={{ zIndex: 1 }}
        >
          <Row className="align-items-center g-3">
            <Col xs={12} lg={8} xl={7} className="mx-auto mx-lg-0">
              <div className="hero-tagline mb-3">
                <span className="hero-tagline-dot" />
                Dostępny do współpracy
              </div>
              <h1 className="fw-extrabold mb-3 mb-md-4 text-white hero-title">
                Tworzę rzeczy,<br />
                które <span className="hero-gradient-text">działają</span> i{" "}
                <span className="hero-gradient-text">wyglądają.</span>
              </h1>
              <p className="hero-subtitle mb-4">
                Nowoczesne podejście do rozwiązywania problemów — projektuję,
                buduję i wdrażam systemy IT dopasowane do potrzeb klienta.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3 justify-content-center justify-content-lg-start">
                <Button
                  variant="light"
                  href="#projekty"
                  className="hero-btn-primary px-4 py-2 fw-semibold rounded-pill"
                >
                  Zobacz projekty →
                </Button>
                <Button
                  variant="outline-light"
                  href="#autorzy"
                  className="hero-btn-secondary px-4 py-2 fw-semibold rounded-pill"
                >
                  Poznaj mnie
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="softify-hero-blur" />
        <div className="hero-grid-bg" />
      </section>

      {/* Sekcja O mnie */}
      <section id="autorzy" className="section-about py-4 py-md-5">
        <Container className="px-3 px-sm-4">
          <div className="section-header mb-3 mb-md-4">
            <span className="section-kicker">Sekcja</span>
            <h2 className="section-title h4 h3 fw-bold mb-0">O mnie</h2>
          </div>
          {authors.map((a) => (
            <AuthorCard
              key={a.id}
              id={a.id}
              name={a.name}
              avatarUrl={a.avatarUrl}
              role={a.role}
              bio={a.bio}
              skills={a.skills}
            />
          ))}
        </Container>
      </section>

      {/* Sekcja Portfolio */}
      <section id="projekty" className="section-portfolio py-4 py-md-5">
        <Container className="px-3 px-sm-4">
          <div className="section-header mb-3 mb-md-4">
            <span className="section-kicker">Sekcja</span>
            <h2 className="section-title h4 h3 fw-bold mb-0">Portfolio</h2>
          </div>
          {authors[0]?.projects.length ? (
            <div className="d-flex flex-column gap-3 gap-md-4">
              {authors[0].projects.map((p, idx) => (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  description={p.description}
                  image={p.image}
                  tags={p.tags}
                  galleryLabel="Zobacz galerię projektu"
                  onGallery={p.showGallery ? () => galleryRef.current?.open(0) : undefined}
                  link={p.link}
                  projectNumber={idx + 1}
                />
              ))}
            </div>
          ) : (
            <div className="text-muted">Brak projektów do wyświetlenia.</div>
          )}
        </Container>
      </section>

      {/* Sekcja Kontakt */}
      <section id="kontakt" className="section-contact py-4 py-md-5">
        <Container className="px-3 px-sm-4">
          <div className="section-header mb-3">
            <span className="section-kicker">Sekcja</span>
            <h3 className="section-title h5 h4 fw-semibold mb-0">Kontakt</h3>
          </div>
          <p className="mb-3 text-muted">
            Masz pytania lub chcesz współpracować? Napisz do mnie.
          </p>
          <div className="d-flex flex-column flex-sm-row flex-wrap gap-2 gap-sm-3">
            <a
              className="btn btn-outline-dark btn-sm w-100 w-sm-auto"
              href="mailto:kontakt@softify.com.pl"
            >
              kontakt@softify.com.pl
            </a>
            <a
              className="btn btn-outline-dark btn-sm w-100 w-sm-auto"
              href="tel:+48514397827"
              aria-label="Zadzwoń pod numer +48 514 397 827"
            >
              +48 514 397 827
            </a>
          </div>
        </Container>
      </section>

      {/* Hidden gallery modal instance (no inline grid) */}
      <Gallery
        ref={galleryRef}
        images={deeRaveImages}
        hideThumbnails
        columns={3}
      />
    </>
  );
}

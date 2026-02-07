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
        avatarUrl:
          "https://cdn.builder.io/api/v1/image/assets%2Fa60aa1fec7fb40aab924339183f3fd58%2F6fea1051fc794253aad97e01a82730f6?format=webp&width=800",
        role: "Full‑Stack & Game Developer",
        bio: `Zajmuję się projektowaniem i tworzeniem nowoczesnych aplikacji internetowych oraz gier. Łączę wiedzę techniczną z wyczuciem estetyki, dbając o to, by to, co tworzę, było nie tylko funkcjonalne, ale też wygodne i przyjazne w codziennym użytkowaniu.

Mam umiejętności w zakresie tworzenia kompletnych systemów – od wyglądu i działania strony, przez logikę działania aplikacji, aż po zarządzanie danymi i serwerami. Potrafię też tworzyć boty na Discorda, dodatki do gier takich jak Minecraft oraz proste gry w silniku Unity.

🛠️ Zakres moich kompetencji obejmuje m.in.:
– aplikacje internetowe (Node.js, React, PostgreSQL)
– automatyzację i skrypty (Python)
– gry i silniki gier (Unity, C#, Java)
– pracę na serwerach (Linux, Windows Server)`,
        skills: [
          "Node.js",
          "Express",
          "React",
          "PostgreSQL",
          "Python",
          "Discord bots",
          "Minecraft plugins (Spigot/Paper)",
          "Unity",
          "C#",
          "Linux",
          "Windows Server",
          "Java",
        ],
        projects: [
          {
            title: "Webowy System Magazynowy (WSM)",
            description: `Webowy System Magazynowy [Node.js, React, PostgreSQL]\nPełnowymiarowy system do zarządzania magazynem stworzony jako praca inżynierska (obroniona 10.10.2025).\n\nSystem oferuje:\n• Zarządzanie stanami magazynowymi z obsługą kategorii i atrybutów produktów\n• Rejestrację operacji magazynowych (WZ, PZ) z automatycznym śleedzeniem stanów\n• Panel administracyjny z zarządzaniem użytkownikami i uprawnieniami\n• System audytu z pełną historią operacji\n• Zaawansowaną wizualizację danych (wykresy, raporty)\n• Responsywny interfejs użytkownika z obsługą urządzeń mobilnych\n• API RESTful z pełną dokumentacją\n• Mechanizmy bezpieczeństwa (JWT, hashowanie, walidacja)\n\nStack technologiczny:\nBackend: Node.js, Express, PostgreSQL, Sequelize, JWT\nFrontend: React, MUI, Chart.js\nNarzędzia: Docker, Git`,
            tags: ["Node.js", "React", "PostgreSQL", "Express", "MUI", "Sequelize"],
            date: "2025-10-10",
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
      <section className="softify-hero py-5 py-lg-6 position-relative overflow-hidden">
        <Container
          className="text-center text-lg-start position-relative"
          style={{ zIndex: 1 }}
        >
          <Row className="align-items-center g-4">
            <Col lg={7} className="mx-auto mx-lg-0">
              <h1 className="display-5 fw-extrabold mb-3 text-white">
                Softify — Zespół kreatywnych twórców
              </h1>
              <p className="lead text-white-50 mb-4">
                Portfolio dwóch autorów, którzy łączą estetykę i technologię,
                aby tworzyć dopracowane produkty cyfrowe.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <Button
                  variant="light"
                  href="#projekty"
                  className="px-4 py-2 fw-semibold"
                >
                  Zobacz projekty
                </Button>
                <Button
                  variant="outline-light"
                  href="#autorzy"
                  className="px-4 py-2 fw-semibold"
                >
                  Poznaj autorów
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="softify-hero-blur" />
      </section>

      {/* Authors */}
      <section id="autorzy" className="py-5">
        <Container>
          <h2 className="h4 fw-bold mb-4">Autorzy</h2>

          <Row className="g-4 mb-5">
            {authors.map((a) => (
              <Col key={a.id} xs={12} md={6}>
                <AuthorCard
                  id={a.id}
                  name={a.name}
                  avatarUrl={a.avatarUrl}
                  role={a.role}
                  bio={a.bio}
                  skills={a.skills}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Portfolio */}
      <section id="projekty" className="py-5">
        <Container>
          <h2 className="h4 fw-bold mb-4">Portfolio</h2>

          <Row className="g-4">
            {authors.map((a) => (
              <Col key={a.id} id={`portfolio-${a.id}`} xs={12} md={6}>
                <h3 className="h5 fw-semibold mb-3">{a.name}</h3>

                <div className="portfolio-column">
                  {a.id === "autor2" && a.projects.length === 1 ? (
                    <ProjectCard
                      title={a.projects[0].title}
                      description={a.projects[0].description}
                      tags={a.projects[0].tags}
                      galleryLabel="Zobacz galerię projektu"
                      onGallery={() => galleryRef.current?.open(0)}
                      link={a.projects[0].link}
                    />
                  ) : a.projects.length > 1 ? (
                    <Row xs={1} className="g-3">
                      {a.projects.map((p) => (
                        <Col key={p.title}>
                          <ProjectCard
                            title={p.title}
                            description={p.description}
                            tags={p.tags}
                            link={p.link}
                          />
                        </Col>
                      ))}
                    </Row>
                  ) : (
                    <div className="text-muted">
                      Brak projektów do wyświetlenia.
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>

          {/* Contact / Social */}
          <section id="kontakt" className="mt-5 pt-4 border-top">
            <h3 className="h5 fw-semibold mb-3">Kontakt</h3>
            <p className="mb-2">
              Masz pytania lub chcesz współpracować? Napisz do nas.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a
                className="btn btn-outline-dark"
                href="mailto:kontakt@softify.com.pl"
              >
                kontakt@softify.com.pl
              </a>
              <a
                className="btn btn-outline-dark"
                href="tel:+48514397827"
                aria-label="Zadzwoń pod numer +48 514 397 827"
              >
                +48 514 397 827
              </a>
            </div>
          </section>
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

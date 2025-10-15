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
        skills: [
          "Java",
          "Spring",
          "Javalin",
          "Hibernate",
          "SQL",
          "Python (DSP)",
          "C++ (AVR)",
          "Linux",
          "Minecraft Forge",
          "Fabric",
          "Bukkit/Spigot/Paper",
          "Discord bots",
          "API Design",
        ],
        projects: [
          {
            title: "Generator map pogodowych",
            description: `Generator map pogodowych [Java] [Closed-Source]
Program do generowania map pogodowych napisany dla ekipy Myszkowskich Łowców Burz.
Zawiera narzędzia do generowania graficznych mapek i do zarządzania członkami ekipy - wbudowany grafik prognoz, lista nieobecności.
Projekt ma posta�� aplikacji na komputer, oraz aplikacji mobilnej wraz z obsługą powiadomień w czasie rzeczywistym.`,
            tags: ["Java"],
            date: "2023-06-01",
          },
          {
            title: "SDR Toolkit",
            description: `SDR Toolkit [Java]
Zestaw narzędzi do interakcji z serwerami RTL-TCP i do podstawowej manipulacji cyfrowymi sygnałami

https://github.com/Defective4/sdr-toolkit`,
            tags: ["Java", "SDR"],
            link: "https://github.com/Defective4/sdr-toolkit",
            date: "2022-11-12",
          },
          {
            title: "JDocDex",
            description: `JDocDex [Java] [Closed-Source]
Self-hostowalna usługa pozwalajaca na zarządzanie swoją biblioteką dokumentacji w formacie JavaDoc.
Posiada backend oparty na frameworku Javalin i frontend korzystający z Bootstrap

<Tu będzie link do demo jak zaczne hostować>`,
            tags: ["Java", "Javalin"],
            date: "2024-02-20",
          },
          {
            title: "VCD4J",
            description: `VCD4J [Java]
Prosta biblioteka do manipulacji plikami VCD (Value Change Dump).
Pozwala na odczyt i modyfikację plików VCD, odtwarzanie i symulację istniejących nagrań jak i nagrywanie nowych z zewnętrznych źródeł.

https://github.com/Defective4/vcd4j`,
            tags: ["Java", "VCD"],
            link: "https://github.com/Defective4/vcd4j",
            date: "2021-08-05",
          },
        ],
      },
      {
        id: "autor2",
        name: "DeeRave",
        role: "Full‑Stack & Game Developer",
        bio: "Full‑Stack developer specjalizujący się w budowie skalowalnych aplikacji webowych z wykorzystaniem Node.js i React. Doświadczenie w projektowaniu API, integracji z bazami danych oraz automatyzacji (boty Discord). Tworzę również wtyczki do Minecraft (Spigot/Paper) oraz aplikacje w Unity (C#). Posiadam praktyczną znajomość administracji Linux i Windows Server.",
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
            title: "Webowy System Magazynowy",
            description:
              "Praca inżynierska obroniona 10.10.2025 — webowy system do zarządzania magazynem, obejmujący backend, API oraz interfejs użytkownika.",
            tags: ["Node.js", "React", "PostgreSQL"],
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
        src: "/assets/realizacja/page11_img1.png",
        title: "Dashboard — strona główna po zalogowaniu",
        description:
          "Główny ekran aplikacji prezentujący kafle z modułami (Magazyn, Klienci, Przyjęcia, Wydania) oraz górną nawigację i CTA.",
      },
      {
        src: "/assets/realizacja/page12_img1.png",
        title: "Menu boczne — widok mobilny",
        description:
          "Responsywne menu boczne zapewniające szybki dostęp do sekcji aplikacji; pozycje zależne od uprawnień użytkownika.",
      },
      {
        src: "/assets/realizacja/page13_img1.png",
        title: "Moduł Magazyn — widok bez wybranej kategorii",
        description:
          "Ekran informujący użytkownika o konieczności wyboru kategorii przed przeglądaniem produktów oraz przyciski akcji.",
      },
      {
        src: "/assets/realizacja/page14_img1.png",
        title: "Wybór kategorii — modal",
        description:
          "Modal z listą kategorii produktowych, możliwością dodania nowej kategorii i edycji istniejących.",
      },
      {
        src: "/assets/realizacja/page15_img1.png",
        title: "Konfiguracja kategorii — pola własne",
        description:
          "Formularz konfiguracji pól własnych dla kategorii (nazwa, typ pola, wartość domyślna) umożliwiający elastyczne modelowanie produktów.",
      },
      {
        src: "/assets/realizacja/page16_img1.png",
        title: "Lista produktów — tabela kategorii",
        description:
          "Tabela z listą produktów w wybranej kategorii z funkcjami filtrowania, sortowania i zaznaczania pozycji.",
      },
      {
        src: "/assets/realizacja/page17_img1.png",
        title: "Analiza ilościowa — podsumowanie",
        description:
          "Modal prezentujący dostępne narzędzia analityczne: filtr dat, zakładki z historią wydań/przyjęć i wykresy.",
      },
      {
        src: "/assets/realizacja/page18_img1.png",
        title: "Szczegóły wydań — lista zewnętrzna",
        description:
          "Widok listy wydań zewnętrznych pokazujący numer dokumentu, kontrahenta, ilość, datę i operatora.",
      },
      {
        src: "/assets/realizacja/page19_img1.png",
        title: "Szczegóły wydań — rozwinięcie wpisu",
        description:
          "Rozszerzone informacje o pojedynczym wydaniu: szczegóły kontrahenta, stan magazynowy przed/po operacji oraz notatki.",
      },
      {
        src: "/assets/realizacja/page20_img1.png",
        title: "Lista przyjęć (PZ)",
        description:
          "Zakładka z listą przyjęć zewnętrznych zawierająca numer PZ, datę przyjęcia, dostawcę i liczbę pozycji.",
      },
      {
        src: "/assets/realizacja/page21_img1.png",
        title: "Historia operacji magazynowych",
        description:
          "Chronologiczne zestawienie operacji (przyjęcia i wydania) z informacją o zmianach stanu i operatorach.",
      },
      {
        src: "/assets/realizacja/page22_img1.png",
        title: "Konsolidowany widok operacji",
        description:
          "Widok łączący spis wydań i przyjęć oraz prezentujący zmiany stanów magazynowych przed i po.",
      },
      {
        src: "/assets/realizacja/page23_img1.png",
        title: "Wykres ilościowy — analiza trendów",
        description:
          "Interaktywny wykres ilustrujący liczbę przyjęć i wydań w zadanym przedziale czasowym oraz podsumowania.",
      },
      {
        src: "/assets/realizacja/page24_img1.png",
        title: "Dodawanie pozycji — formularz",
        description:
          "Modal tworzenia nowego wpisu produktu z polami podstawowymi (nazwa, ilość, kod kreskowy) i dodatkowymi właściwościami.",
      },
      {
        src: "/assets/realizacja/page25_img1.png",
        title: "Wydania — przegląd dokumentów",
        description:
          "Lista dokumentów wydania z możliwością wyszukiwania, filtrowania i przechodzenia do szczegółów pozycji.",
      },
      {
        src: "/assets/realizacja/page26_img1.png",
        title: "Wydania — szczegóły dokumentu",
        description:
          "Szczegółowy widok wpisu wydania z metadanymi kontrahenta oraz listą pozycji i ich ilości.",
      },
      {
        src: "/assets/realizacja/page27_img1.png",
        title: "Przyjęcia — lista dokumentów PZ",
        description:
          "Lista przyjęć zewnętrznych z numerami PZ, datami i ilościami pozycji; umożliwia szybkie przejście do szczegółów.",
      },
      {
        src: "/assets/realizacja/page28_img1.png",
        title: "Przyjęcia — szczegóły wpisu",
        description:
          "Rozwinięty widok pojedynczego przyjęcia zawierający dane dostawcy, ilość i dodatkowe atrybuty towaru.",
      },
      {
        src: "/assets/realizacja/page29_img1.png",
        title: "Klienci — lista kontaktów",
        description:
          "Panel listy klientów z wyszukiwarką i szybkim dostępem do karty kontrahenta oraz danych kontaktowych.",
      },
      {
        src: "/assets/realizacja/page30_img1.png",
        title: "Karta klienta — szczegóły",
        description:
          "Szczegółowy widok klienta z adresem, numerem telefonu, e‑mailem oraz dodatkowymi informacjami.",
      },
      {
        src: "/assets/realizacja/page31_img1.png",
        title: "Zarządzanie użytkownikami — lista",
        description:
          "Panel administracyjny z listą użytkowników systemu i akcjami (edytuj, usuń, zmień rolę).",
      },
      {
        src: "/assets/realizacja/page32_img1.png",
        title: "Zarządzanie użytkownikami — dodawanie/zmiana hasła",
        description:
          "Modal do dodawania nowego magazyniera oraz formularz zmiany hasła z ostrzeżeniem o wylogowaniu sesji.",
      },
      {
        src: "/assets/realizacja/page33_img1.png",
        title: "Logi audytu — inspekcja zdarzeń",
        description:
          "Widok logów audytowych zawierający datę, użytkownika, endpoint, status odpowiedzi i czas wykonania żądania.",
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
                          <ProjectCard
                            title={p.title}
                            description={p.description}
                            tags={p.tags}
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
                href="mailto:kontakt@softify.local"
              >
                kontakt@softify.local
              </a>
              <a
                className="btn btn-outline-dark"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn btn-outline-dark"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
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

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Moon, Sun } from "lucide-react";
import { chooseActiveSection } from "./activeSection";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [active, setActive] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true); // Default to dark theme
  // Block scroll-based updates while smooth-scrolling after a nav click
  const scrollLockRef = useRef(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-preference");
    if (savedTheme === "light" || savedTheme === "dark") {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    if (isDark) {
      htmlElement.setAttribute("data-theme", "dark");
      bodyElement.classList.add("dark-mode");
      bodyElement.classList.remove("light-mode");
    } else {
      htmlElement.setAttribute("data-theme", "light");
      bodyElement.classList.add("light-mode");
      bodyElement.classList.remove("dark-mode");
    }
    localStorage.setItem("theme-preference", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    // Respect URL hash on initial load
    const initialHash = (window.location.hash || "").replace("#", "");
    if (initialHash) {
      setActive(initialHash);
    }

    const ids = ["autorzy", "projekty", "kontakt"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    let ticking = false;

    const computeActive = () => {
      const nav = document.querySelector(
        ".softify-navbar",
      ) as HTMLElement | null;
      const navHeight = nav?.offsetHeight ?? 0;

      const sectionsData = sections.map((s) => {
        const rect = s.getBoundingClientRect();
        return {
          id: s.id,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      });
      const chosen = chooseActiveSection(
        sectionsData,
        window.scrollY,
        navHeight,
        window.innerHeight,
        document.documentElement.scrollHeight,
      );
      setActive((prev) => (prev === chosen ? prev : chosen));
    };

    const onScroll = () => {
      // Skip scroll-based updates while animating a nav-click scroll
      if (scrollLockRef.current) return;

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          computeActive();
          ticking = false;
        });
      }
    };

    // run once on mount to set initial active if applicable
    requestAnimationFrame(() => computeActive());

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleNavClick =
    (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const target = document.getElementById(id);
      const nav = document.querySelector(
        ".softify-navbar",
      ) as HTMLElement | null;
      if (!target) return;
      const navHeight = nav?.offsetHeight ?? 0;
      const top =
        target.getBoundingClientRect().top + window.scrollY - navHeight - 8;

      // Lock scroll tracking during smooth scroll animation
      scrollLockRef.current = true;
      setActive(id);

      window.scrollTo({ top, behavior: "smooth" });

      // update URL hash without jumping
      if (history && history.replaceState) {
        history.replaceState(null, "", `#${id}`);
      } else {
        window.location.hash = `#${id}`;
      }

      // Unlock after scroll animation finishes (detect via scrollend or timeout)
      let unlockTimer: ReturnType<typeof setTimeout>;

      const unlock = () => {
        scrollLockRef.current = false;
        window.removeEventListener("scrollend", unlock);
        clearTimeout(unlockTimer);
      };

      // Modern browsers fire 'scrollend' when smooth scroll completes
      window.addEventListener("scrollend", unlock, { once: true });
      // Fallback timeout for browsers without scrollend support
      unlockTimer = setTimeout(unlock, 800);
    };

  const navItems = [
    { label: "O mnie", id: "autorzy" },
    { label: "Portfolio", id: "projekty" },
    { label: "Kontakt", id: "kontakt" },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        expand="lg"
        className="softify-navbar sticky-top w-100"
        variant="light"
        style={{ zIndex: 1030 }}
      >
        <Container fluid className="px-3 px-sm-4 px-lg-3">
          <Navbar.Brand
            href="/"
            className="fw-bold text-primary d-flex align-items-center"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fa60aa1fec7fb40aab924339183f3fd58%2F15aac3ea074c4328a2d0d02199bbede8?format=webp&width=800"
              alt="Softify logo"
              className="softify-logo-img me-1 me-sm-2"
            />
            <span className="d-inline">Softify</span>
          </Navbar.Brand>

          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-ghost-theme ms-auto me-2 d-lg-none"
            aria-label="Toggle dark/light theme"
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex flex-column flex-lg-row gap-2 gap-lg-3 align-items-start align-items-lg-center pe-lg-3 pt-2 pt-lg-0">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={handleNavClick(n.id)}
                  aria-current={active === n.id ? "page" : undefined}
                  className={`nav-btn ${active === n.id ? "active" : ""}`}
                >
                  {n.label}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="btn btn-sm btn-ghost-theme ms-lg-2 d-none d-lg-flex"
                aria-label="Toggle dark/light theme"
                title={isDark ? "Light mode" : "Dark mode"}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1 main-content">
        {children}
      </main>

      <footer className="py-4 mt-auto border-top">
        <Container className="d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div>
            © {new Date().getFullYear()} Softify. Wszelkie prawa zastrzeżone.
          </div>
        </Container>
      </footer>
    </div>
  );
}

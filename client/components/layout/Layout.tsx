import React, { ReactNode, useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Respect URL hash on initial load
    const initialHash = (window.location.hash || '').replace('#', '');
    if (initialHash) {
      setActive(initialHash);
      return; // if explicit hash provided, don't auto-switch
    }

    // If no hash, wait for user's first scroll to start active-tracking
    const sections = Array.from(document.querySelectorAll('#autorzy, #projekty, #kontakt')) as HTMLElement[];
    if (!sections.length) return;

    let started = false;
    let ticking = false;

    const updateActiveFromScroll = () => {
      const nav = document.querySelector('.softify-navbar') as HTMLElement | null;
      const navHeight = nav?.offsetHeight ?? 0;

      // choose section whose top is closest to the nav offset but not below it
      let best: string | null = null;
      let bestOffset = -Infinity;

      sections.forEach((s) => {
        const rect = s.getBoundingClientRect();
        const offset = rect.top - navHeight; // distance from nav bottom
        if (offset <= 20 && offset > bestOffset) {
          best = s.id;
          bestOffset = offset;
        }
      });

      // if none found, optionally select first section below the nav
      if (!best) {
        // find the section closest to top
        let minAbs = Infinity;
        sections.forEach((s) => {
          const rect = s.getBoundingClientRect();
          const offset = Math.abs(rect.top - navHeight);
          if (offset < minAbs) {
            minAbs = offset;
            best = s.id;
          }
        });
      }

      setActive((prev) => (best === prev ? prev : best));
    };

    const onScroll = () => {
      if (!started) return; // ignore until user explicitly scrolls
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateActiveFromScroll();
          ticking = false;
        });
      }
    };

    const onFirstScroll = () => {
      started = true;
      updateActiveFromScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.removeEventListener('scroll', onFirstScroll);
    };

    window.addEventListener('scroll', onFirstScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onFirstScroll);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(id);
    const nav = document.querySelector('.softify-navbar') as HTMLElement | null;
    if (!target) return;
    const navHeight = nav?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
    // update URL hash without jumping
    if (history && history.replaceState) {
      history.replaceState(null, '', `#${id}`);
    } else {
      window.location.hash = `#${id}`;
    }
    setActive(id);
  };

  const navItems = [
    { href: '#autorzy', label: 'Autorzy', id: 'autorzy' },
    { href: '#projekty', label: 'Portfolio', id: 'projekty' },
    { href: '#kontakt', label: 'Kontakt', id: 'kontakt' },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar expand={false} className="py-1 softify-navbar position-fixed top-0 w-100" bg="light" variant="light" style={{ zIndex: 1200 }}>
        <Container>
          <Navbar.Brand href="/" className="fw-bold text-primary">
            <span className="softify-logo bg-gradient">S</span> Softify
          </Navbar.Brand>

          <Nav className="ms-auto d-flex flex-row gap-3 align-items-center">
            {navItems.map((n) => (
              <Nav.Link key={n.id} href={n.href} onClick={handleNavClick(n.id)} active={active === n.id} className={active === n.id ? 'fw-semibold' : ''}>
                {n.label}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>

      <main className="flex-grow-1">{children}</main>

      <footer className="py-4 mt-auto border-top bg-white-50">
        <Container className="d-flex flex-wrap align-items-center justify-content-between gap-2 text-muted">
          <div>© {new Date().getFullYear()} Softify. Wszelkie prawa zastrzeżone.</div>
          <div className="d-flex gap-3 small">
            <a href="#autor1" className="link-secondary text-decoration-none">Autor 1</a>
            <a href="#autor2" className="link-secondary text-decoration-none">Autor 2</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}

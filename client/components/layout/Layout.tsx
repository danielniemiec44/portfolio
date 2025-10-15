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

    const ids = ['autorzy', 'projekty', 'kontakt'];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    let ticking = false;

    const computeActive = () => {
      const nav = document.querySelector('.softify-navbar') as HTMLElement | null;
      const navHeight = nav?.offsetHeight ?? 0;
      const scrollY = window.scrollY;

      // Use section document-top positions relative to navbar to pick the active one.
      // Choose the last section whose top is <= current scroll position + small buffer.
      let candidate: string | null = null;
      sections.forEach((s) => {
        const top = s.getBoundingClientRect().top + window.scrollY - navHeight - 8;
        if (top <= scrollY + 20) {
          candidate = s.id;
        }
      });

      // If none matched yet, and we're close to the top of the first section, pick it
      if (!candidate) {
        const first = sections[0];
        if (first) {
          const rect = first.getBoundingClientRect();
          if (rect.top <= navHeight + 100) {
            candidate = first.id;
          }
        }
      }

      // If user is near page bottom, force last section active
      const distToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      if (distToBottom <= 200) {
        const last = sections[sections.length - 1];
        if (last) {
          setActive((prev) => (prev === last.id ? prev : last.id));
          return;
        }
      }

      if (candidate) {
        setActive((prev) => (prev === candidate ? prev : candidate));
      } else {
        setActive((prev) => (prev === null ? prev : null));
      }
    };

    const onScroll = () => {
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

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
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

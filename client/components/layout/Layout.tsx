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
      const viewportTop = navHeight; // content starts below navbar
      const viewportBottom = window.innerHeight;

      let bestId: string | null = null;
      let bestVisible = 0;

      sections.forEach((s) => {
        const rect = s.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, viewportTop);
        const visibleBottom = Math.min(rect.bottom, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        if (visibleHeight > bestVisible) {
          bestVisible = visibleHeight;
          bestId = s.id;
        }
      });

      // Only set active if the best visible amount is meaningful.
      // This prevents a tiny sliver of a section from making it active.
      const minVisible = Math.max(120, window.innerHeight * 0.12);
      if (bestVisible >= minVisible) {
        setActive((prev) => (prev === bestId ? prev : bestId));
      } else {
        // if nothing sufficiently visible, clear active to avoid premature highlighting
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

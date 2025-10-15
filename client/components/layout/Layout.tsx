import React, { ReactNode, useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { chooseActiveSection } from "./activeSection";

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

      const sectionsData = sections.map((s) => {
      const rect = s.getBoundingClientRect();
      return { id: s.id, top: rect.top + window.scrollY, bottom: rect.bottom + window.scrollY };
    });
    const chosen = chooseActiveSection(sectionsData, window.scrollY, navHeight, window.innerHeight, document.documentElement.scrollHeight);
    setActive((prev) => (prev === chosen ? prev : chosen));
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
      <Navbar expand={false} className="py-1 softify-navbar position-fixed top-0 w-100" bg="light" variant="light" style={{ zIndex: 1030, paddingRight: '1.25rem' }}>
        <Container fluid className="px-3">
          <Navbar.Brand href="/" className="fw-bold text-primary d-flex align-items-center">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fa60aa1fec7fb40aab924339183f3fd58%2F15aac3ea074c4328a2d0d02199bbede8?format=webp&width=800" alt="Softify logo" className="softify-logo-img me-2" />
            <span>Softify</span>
          </Navbar.Brand>

          <Nav className="ms-auto d-flex flex-row gap-3 align-items-center pe-5">
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
        </Container>
      </footer>
    </div>
  );
}

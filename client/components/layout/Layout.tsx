import React, { ReactNode, useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // IntersectionObserver to update active link on scroll
    const sections = Array.from(document.querySelectorAll('#autorzy, #projekty, #kontakt')) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { threshold: 0.5 });

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(id);
    const nav = document.querySelector('.softify-navbar') as HTMLElement | null;
    if (!target) return;
    const navHeight = nav?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
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

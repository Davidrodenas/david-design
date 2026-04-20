'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proceso', href: '/proceso' },
  { label: 'Sobre mí', href: '/sobre-mi' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          height: 60,
          background: scrolled ? 'rgba(15,15,15,0.96)' : 'rgba(15,15,15,0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
          transition: 'all 0.3s ease',
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 17,
            fontWeight: 500,
            color: '#fff',
            textDecoration: 'none',
            letterSpacing: '-0.3px',
          }}
        >
          David Ródenas<span style={{ color: 'var(--cyan)', opacity: 0.8 }}>.</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  fontSize: 14,
                  color: active ? '#fff' : 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                  borderBottom: active ? '1px solid rgba(0,255,255,0.5)' : 'none',
                  paddingBottom: active ? 2 : 0,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#fff')}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = active
                    ? '#fff'
                    : 'rgba(255,255,255,0.6)')
                }
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/#contacto"
            style={{
              background: '#fff',
              color: '#0a0a0a',
              padding: '7px 20px',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: '-0.1px',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            Solicita presupuesto
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
          className="show-mobile"
        >
          <span
            style={{
              display: 'block',
              width: 20,
              height: 1.5,
              background: '#fff',
              borderRadius: 2,
              transition: 'all 0.3s',
              transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 20,
              height: 1.5,
              background: '#fff',
              borderRadius: 2,
              transition: 'all 0.3s',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: 20,
              height: 1.5,
              background: '#fff',
              borderRadius: 2,
              transition: 'all 0.3s',
              transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'rgba(15,15,15,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s',
        }}
      >
        {LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: 'clamp(32px, 8vw, 52px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              letterSpacing: '-0.5px',
            }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/#contacto"
          onClick={() => setMenuOpen(false)}
          style={{
            fontSize: 'clamp(32px, 8vw, 52px)',
            fontWeight: 400,
            color: 'var(--cyan)',
            textDecoration: 'none',
            letterSpacing: '-0.5px',
          }}
        >
          Solicita presupuesto
        </Link>
      </div>

    </>
  );
}

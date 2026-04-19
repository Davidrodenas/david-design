'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import NetworkCanvas from './NetworkCanvas';

const ACCENT_RGB = '0,255,255';

export default function HeroGlow() {
  const tagRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([tagRef.current, h1Ref.current, paraRef.current, btnsRef.current], {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 48px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <NetworkCanvas accentRGB={ACCENT_RGB} />

      {/* Cobalt glow */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 500,
          background: `radial-gradient(ellipse at center, rgba(0,7,205,0.3) 0%, rgba(0,255,255,0.04) 45%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: 760 }}>
        <div ref={tagRef} style={{ marginBottom: 28 }}>
          <span className="tag">Automatización · IA · n8n</span>
        </div>

        <h1
          ref={h1Ref}
          style={{
            fontSize: 'clamp(44px, 7vw, 80px)',
            fontWeight: 400,
            lineHeight: 0.92,
            color: '#fff',
            letterSpacing: '-1px',
            marginBottom: 28,
          }}
        >
          Automatiza y escala
          <br />
          <span style={{ color: 'var(--cyan)' }}>tu negocio</span> con IA
        </h1>

        <p
          ref={paraRef}
          style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 520,
            margin: '0 auto 44px',
          }}
        >
          Elimino tareas repetitivas, conecto tus sistemas y despliego agentes inteligentes.
          Tu empresa opera sola mientras tú creces.
        </p>

        <div
          ref={btnsRef}
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="#contacto"
            style={{
              background: '#fff',
              color: '#0a0a0a',
              padding: '11px 32px',
              borderRadius: 4,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            Solicita presupuesto
          </Link>
          <Link
            href="#servicios"
            style={{
              background: `rgba(${ACCENT_RGB},0.08)`,
              color: '#fff',
              padding: '11px 28px',
              borderRadius: 4,
              border: `1px solid rgba(${ACCENT_RGB},0.3)`,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'all 0.15s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = `rgba(${ACCENT_RGB},0.14)`)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = `rgba(${ACCENT_RGB},0.08)`)
            }
          >
            Ver servicios
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: 'linear-gradient(0deg, #0f0f0f 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}

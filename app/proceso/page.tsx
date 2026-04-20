'use client';

import Link from 'next/link';
import { useState } from 'react';

const ACCENT_RGB = '0,255,255';
const mono = "var(--font-jetbrains), 'JetBrains Mono', monospace";

const STEPS = [
  {
    n: '01',
    title: 'Primera llamada',
    duration: '30 min — Gratuita',
    desc: 'Nos conocemos. Me cuentas qué hace tu empresa, qué procesos te quitan más tiempo y qué herramientas usas. Yo te digo con honestidad si puedo ayudarte y de qué manera.',
    deliverable: null as string | null,
    details: [
      'Análisis inicial de tu stack tecnológico',
      'Identificación de los 3 procesos con mayor potencial',
      'Estimación de complejidad y coste aproximado',
      'Siguientes pasos claros sin compromiso',
    ],
  },
  {
    n: '02',
    title: 'Diagnóstico',
    duration: '3–5 días laborables',
    desc: 'Analizo en profundidad tu operación. Me integro en tu flujo de trabajo, reviso tus herramientas y mapeo cada proceso manual con su coste real en tiempo y dinero.',
    deliverable: 'Informe de diagnóstico con oportunidades priorizadas',
    details: [
      'Mapa completo de procesos actuales',
      'Cuantificación del tiempo perdido por proceso',
      'Priorización por impacto y viabilidad técnica',
      'Recomendación de herramientas y arquitectura',
    ],
  },
  {
    n: '03',
    title: 'Diseño de la solución',
    duration: '1 semana',
    desc: 'Diseño la arquitectura completa del sistema de automatización: qué se automatiza, cómo se conecta, qué herramientas se usan y qué métricas mediremos. Lo revisamos juntos antes de construir.',
    deliverable: 'Blueprint técnico + estimación de ROI',
    details: [
      'Diagrama de flujos y arquitectura del sistema',
      'Selección definitiva de herramientas',
      'Plan de implementación por fases',
      'Proyección de ahorro de tiempo y retorno',
    ],
  },
  {
    n: '04',
    title: 'Implementación',
    duration: '1–4 semanas según alcance',
    desc: 'Construyo, pruebo e integro el sistema en tu operación real. Trabajo en paralelo a tu equipo para minimizar fricciones y asegurar que todo funciona antes de la puesta en marcha.',
    deliverable: 'Sistema funcionando en producción',
    details: [
      'Desarrollo e integración en tu entorno real',
      'Tests exhaustivos con datos reales',
      'Formación del equipo en el nuevo flujo',
      'Documentación completa del sistema',
    ],
  },
  {
    n: '05',
    title: 'Seguimiento y optimización',
    duration: 'Continuo — 30 días incluidos',
    desc: 'Los primeros 30 días monitorizo el sistema, resuelvo cualquier incidencia y mido los resultados reales versus la proyección. Después, disponible para optimizaciones y ampliaciones.',
    deliverable: 'Informe de resultados al mes 1',
    details: [
      'Monitorización en tiempo real del sistema',
      'Resolución de incidencias en menos de 24h',
      'Informe de ahorro real vs proyectado',
      'Plan de mejoras y próximas automatizaciones',
    ],
  },
];

function StepCard({
  step,
  isActive,
  onClick,
}: {
  step: (typeof STEPS)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background: isActive ? '#000' : 'transparent',
        border: `1px solid ${isActive ? `rgba(${ACCENT_RGB},0.2)` : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 4,
        padding: '20px 24px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        marginBottom: 8,
        boxShadow: isActive ? '4px 4px 0 rgba(0,0,0,0.15)' : 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 13,
            color: isActive ? `rgba(${ACCENT_RGB},0.7)` : 'rgba(255,255,255,0.2)',
            letterSpacing: '-0.5px',
            flexShrink: 0,
            transition: 'color 0.2s',
          }}
        >
          {step.n}
        </div>
        <div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
              transition: 'color 0.2s',
              letterSpacing: '-0.1px',
            }}
          >
            {step.title}
          </div>
          <div
            style={{
              fontFamily: mono,
              fontSize: 10,
              color: isActive ? `rgba(${ACCENT_RGB},0.5)` : 'rgba(255,255,255,0.25)',
              marginTop: 3,
              letterSpacing: '0.2px',
            }}
          >
            {step.duration}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Proceso() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          padding: '140px 48px 80px',
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            width: 500,
            height: 300,
            background: 'radial-gradient(ellipse at center, rgba(0,7,205,0.2) 0%, transparent 70%)',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            fontFamily: mono,
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: `rgba(${ACCENT_RGB},0.6)`,
            marginBottom: 20,
          }}
        >
          Proceso
        </div>
        <h1
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 400,
            lineHeight: 0.92,
            color: '#fff',
            letterSpacing: '-1px',
            marginBottom: 24,
          }}
        >
          De cero a sistema
          <br />
          automatizado
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 500,
          }}
        >
          5 fases pensadas para que el cambio sea limpio, medible y sin interrumpir tu
          operación diaria.
        </p>
      </section>

      {/* Interactive steps */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px 100px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 340px) 1fr',
            gap: 24,
            alignItems: 'start',
          }}
          className="proceso-grid"
        >
          {/* Left: step list */}
          <div style={{ position: 'sticky', top: 80 }}>
            {STEPS.map((s, i) => (
              <StepCard
                key={s.n}
                step={s}
                isActive={active === i}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          {/* Right: step detail */}
          <div
            style={{
              background: '#000',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 4,
              padding: '40px 40px 44px',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 480,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                fontFamily: mono,
                fontSize: 120,
                fontWeight: 400,
                color: `rgba(${ACCENT_RGB},0.04)`,
                lineHeight: 1,
                letterSpacing: '-4px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              {step.n}
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 9,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: `rgba(${ACCENT_RGB},0.6)`,
                  marginBottom: 8,
                }}
              >
                Fase {step.n}
              </div>
              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 400,
                  lineHeight: 1,
                  color: '#fff',
                  letterSpacing: '-0.5px',
                  marginBottom: 8,
                }}
              >
                {step.title}
              </h2>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: 28,
                  letterSpacing: '0.2px',
                }}
              >
                {step.duration}
              </div>

              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: 36,
                }}
              >
                {step.desc}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {step.details.map((d) => (
                  <div
                    key={d}
                    style={{
                      display: 'flex',
                      gap: 10,
                      alignItems: 'flex-start',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 4,
                      padding: '12px 14px',
                    }}
                  >
                    <span
                      style={{
                        color: `rgba(${ACCENT_RGB},0.55)`,
                        fontFamily: mono,
                        fontSize: 10,
                        marginTop: 2,
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                    <span style={{ fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)' }}>
                      {d}
                    </span>
                  </div>
                ))}
              </div>

              {step.deliverable && (
                <div
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center',
                    background: `rgba(${ACCENT_RGB},0.04)`,
                    border: `1px solid rgba(${ACCENT_RGB},0.15)`,
                    borderRadius: 4,
                    padding: '14px 16px',
                    marginBottom: 36,
                  }}
                >
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 10,
                      color: `rgba(${ACCENT_RGB},0.6)`,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      flexShrink: 0,
                    }}
                  >
                    Entregable
                  </span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                    {step.deliverable}
                  </span>
                </div>
              )}

              <div style={{ display: 'flex', gap: 8, marginTop: step.deliverable ? 0 : 36 }}>
                {active > 0 && (
                  <button
                    onClick={() => setActive(active - 1)}
                    style={{
                      background: 'transparent',
                      color: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 4,
                      padding: '9px 20px',
                      fontSize: 13,
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                    }}
                  >
                    ← Anterior
                  </button>
                )}
                {active < STEPS.length - 1 && (
                  <button
                    onClick={() => setActive(active + 1)}
                    style={{
                      background: '#fff',
                      color: '#0a0a0a',
                      border: 'none',
                      borderRadius: 4,
                      padding: '9px 24px',
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                    }}
                  >
                    Siguiente fase →
                  </button>
                )}
                {active === STEPS.length - 1 && (
                  <Link
                    href="/#contacto"
                    style={{
                      background: '#fff',
                      color: '#0a0a0a',
                      borderRadius: 4,
                      padding: '9px 24px',
                      fontSize: 13,
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}
                  >
                    Solicita presupuesto →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

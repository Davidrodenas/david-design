import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios — David Ródenas',
};

const ACCENT_RGB = '0,255,255';
const mono = "var(--font-jetbrains), 'JetBrains Mono', monospace";

const SERVICES = [
  {
    id: 'agentes',
    tag: 'Agentes IA',
    title: 'Sistemas autónomos que trabajan por ti',
    subtitle: 'Tu negocio operando al 100%, las 24 horas',
    desc: 'Diseño y despliego agentes de IA que ejecutan tareas complejas de forma autónoma: gestionan emails, actualizan registros en tu CRM, generan informes, responden consultas y toman decisiones basadas en datos — sin intervención humana.',
    bullets: [
      'Agentes multi-herramienta con memoria y contexto',
      'Integración con OpenAI, Anthropic, Google Gemini',
      'Conexión nativa con tus apps existentes',
      'Panel de supervisión y logs en tiempo real',
      'Escalado automático según carga de trabajo',
    ],
    use_cases: [
      { title: 'Gestión de leads', desc: 'El agente cualifica, clasifica y asigna leads automáticamente al comercial correcto con contexto completo.' },
      { title: 'Soporte al cliente', desc: 'Resuelve el 80% de consultas repetitivas antes de que lleguen a tu equipo.' },
      { title: 'Reporting automático', desc: 'Genera y envía informes de negocio cada semana sin tocar una hoja de cálculo.' },
      { title: 'Onboarding de clientes', desc: 'Automatiza el proceso completo: bienvenida, documentación, accesos y seguimiento.' },
    ],
    glow: false,
    brutalist: true,
  },
  {
    id: 'n8n',
    tag: 'n8n · Automatización',
    title: 'Flujos que conectan todo tu stack',
    subtitle: 'Cero trabajo manual, cero errores humanos',
    desc: 'Con n8n construyo flujos de automatización robustos que conectan todas tus herramientas: cuando pasa X en una app, automáticamente ocurre Y en otra. Sin código propio, sin dependencias externas, sin costes de licencia infinitos.',
    bullets: [
      'Automatización de procesos end-to-end',
      'Conexión con +400 apps (CRM, email, hojas de cálculo, ERP...)',
      'Lógica condicional, bucles y manejo de errores',
      'Webhooks y triggers en tiempo real',
      'Despliegue self-hosted o en cloud según necesidad',
    ],
    use_cases: [
      { title: 'Pipeline de ventas', desc: 'Desde el lead en LinkedIn hasta el contrato firmado en DocuSign, automatizado.' },
      { title: 'Facturación', desc: 'Genera y envía facturas automáticamente cuando se cierra un proyecto.' },
      { title: 'Sync de datos', desc: 'Mantén sincronizados tu CRM, ERP y hojas de cálculo sin copia-pega manual.' },
      { title: 'Notificaciones inteligentes', desc: 'Alertas al equipo solo cuando importa, con el contexto exacto que necesitan.' },
    ],
    glow: true,
    brutalist: false,
  },
  {
    id: 'consultoria',
    tag: 'Consultoría',
    title: 'La estrategia antes que la tecnología',
    subtitle: 'Claridad sobre qué automatizar y en qué orden',
    desc: 'Antes de tocar una sola herramienta, analizo tu operación en detalle. Identifico qué procesos tienen mayor impacto si se automatizan, qué tecnología encaja mejor con tu equipo y diseño una hoja de ruta realista con resultados medibles.',
    bullets: [
      'Auditoría completa de procesos operativos',
      'Identificación de quick wins de alto impacto',
      'Diseño de arquitectura de automatización',
      'Estimación de ROI por cada iniciativa',
      'Formación del equipo en las herramientas implantadas',
    ],
    use_cases: [
      { title: 'Diagnóstico inicial', desc: 'Sesión de 2h donde mapeamos tu operación y priorizamos las automatizaciones de mayor impacto.' },
      { title: 'Auditoría profunda', desc: 'Análisis exhaustivo de todos tus flujos de trabajo con informe detallado de oportunidades.' },
      { title: 'Roadmap IA', desc: 'Plan de 3-12 meses con fases, herramientas, costes y métricas de éxito por cada iniciativa.' },
      { title: 'Acompañamiento', desc: 'Soporte continuo durante la implementación para asegurar la adopción del equipo.' },
    ],
    glow: false,
    brutalist: false,
  },
];

function ServiceDetail({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <div
      id={service.id}
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <div
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 80,
            marginBottom: 56,
            alignItems: 'start',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                fontFamily: mono,
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                color: service.glow ? `rgba(${ACCENT_RGB},0.7)` : 'rgba(255,255,255,0.35)',
                border: `1px solid ${service.glow ? `rgba(${ACCENT_RGB},0.2)` : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 2,
                padding: '2px 7px',
                marginBottom: 20,
              }}
            >
              {service.tag}
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 400,
                lineHeight: 1,
                color: '#fff',
                letterSpacing: '-0.5px',
                marginBottom: 12,
              }}
            >
              {service.title}
            </h2>
            <div
              style={{
                fontSize: 15,
                color: `rgba(${ACCENT_RGB},0.6)`,
                fontFamily: mono,
                letterSpacing: '-0.2px',
              }}
            >
              {service.subtitle}
            </div>
          </div>
          <div style={{ paddingTop: 4 }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>
              {service.desc}
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
          }}
        >
          {/* What's included */}
          <div
            style={{
              background: '#000',
              border: `1px solid ${service.brutalist ? 'rgba(255,255,255,0.10)' : service.glow ? `rgba(${ACCENT_RGB},0.15)` : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 4,
              padding: 28,
              boxShadow: service.brutalist ? '4px 4px 0 rgba(0,0,0,0.15)' : 'none',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {service.glow && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(ellipse at 50% -20%, rgba(${ACCENT_RGB},0.1) 0%, transparent 65%)`,
                  pointerEvents: 'none',
                }}
              />
            )}
            <div
              style={{
                fontFamily: mono,
                fontSize: 9,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: 20,
              }}
            >
              Qué incluye
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
              {service.bullets.map((b) => (
                <div key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span
                    style={{
                      color: `rgba(${ACCENT_RGB},0.6)`,
                      fontFamily: mono,
                      fontSize: 11,
                      marginTop: 2,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)' }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative' }}>
              <Link
                href="/#contacto"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#0a0a0a',
                  padding: 10,
                  borderRadius: 4,
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Solicitar presupuesto
              </Link>
            </div>
          </div>

          {/* Use cases */}
          <div
            data-stagger
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 12,
            }}
          >
            {service.use_cases.map((uc) => (
              <div
                data-stagger-item
                key={uc.title}
                style={{
                  background: '#050505',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 4,
                  padding: '20px 20px 22px',
                }}
              >
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 9,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: `rgba(${ACCENT_RGB},0.45)`,
                    marginBottom: 8,
                  }}
                >
                  Caso de uso
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: '#fff',
                    marginBottom: 8,
                    letterSpacing: '-0.2px',
                  }}
                >
                  {uc.title}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.6)' }}>
                  {uc.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Servicios() {
  return (
    <main>
      {/* Page hero */}
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
            left: '20%',
            width: 600,
            height: 400,
            background: 'radial-gradient(ellipse at center, rgba(0,7,205,0.2) 0%, transparent 70%)',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        />
        <div
          data-reveal
          style={{
            fontFamily: mono,
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: `rgba(${ACCENT_RGB},0.6)`,
            marginBottom: 20,
          }}
        >
          Servicios
        </div>
        <h1
          data-reveal
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 400,
            lineHeight: 0.92,
            color: '#fff',
            letterSpacing: '-1px',
            marginBottom: 24,
          }}
        >
          Tres servicios.
          <br />
          Un objetivo.
        </h1>
        <p
          data-reveal
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 520,
          }}
        >
          Automatización a medida para pymes que quieren operar con más eficiencia y menos
          esfuerzo manual.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 48, flexWrap: 'wrap' }}>
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              style={{
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: '0.3px',
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 2,
                padding: '6px 14px',
                transition: 'all 0.15s',
              }}
            >
              {s.tag}
            </a>
          ))}
        </div>
      </section>

      {SERVICES.map((s) => (
        <ServiceDetail key={s.id} service={s} />
      ))}

      {/* Bottom CTA */}
      <section
        style={{
          padding: '80px 48px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(0,7,205,0.08) 0%, transparent 100%)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            fontFamily: mono,
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: 16,
          }}
        >
          ¿Listo para empezar?
        </div>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            lineHeight: 1,
            color: '#fff',
            letterSpacing: '-0.5px',
            marginBottom: 20,
          }}
        >
          Cuéntame tu proyecto
        </h2>
        <p
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: 36,
            maxWidth: 440,
            margin: '0 auto 36px',
          }}
        >
          Primera llamada gratuita. Te digo en 30 minutos si puedo ayudarte y cómo.
        </p>
        <Link
          href="/#contacto"
          style={{
            display: 'inline-block',
            background: '#fff',
            color: '#0a0a0a',
            padding: '12px 36px',
            borderRadius: 4,
            fontSize: 15,
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          Solicita presupuesto
        </Link>
      </section>
    </main>
  );
}

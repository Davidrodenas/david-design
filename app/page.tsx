import HeroGlow from '@/components/HeroGlow';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

const ACCENT_RGB = '0,255,255';
const mono = "var(--font-jetbrains), 'JetBrains Mono', monospace";

function StatsBand() {
  const stats = [
    { num: 30, prefix: '+', suffix: '', label: 'Empresas automatizadas', sub: 'pymes en España y LATAM' },
    { num: 200, prefix: '', suffix: 'h', label: 'Ahorradas al mes', sub: 'por empresa de media' },
    { num: 100, prefix: '', suffix: '%', label: 'Proyectos entregados', sub: 'a tiempo y con resultados' },
  ];
  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '56px 48px', background: 'rgba(0,0,0,0.3)' }}>
      <div data-stagger style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {stats.map(({ num, prefix, suffix, label, sub }, i) => (
          <div key={label} data-stagger-item style={{ textAlign: 'center', padding: '16px 32px', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', flex: '1 1 200px' }}>
            <div
              data-count={num}
              data-prefix={prefix}
              data-suffix={suffix}
              style={{ fontSize: 44, fontFamily: mono, color: '#fff', letterSpacing: '-1.5px', marginBottom: 6 }}
            >
              {prefix}{num}{suffix}
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{label}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontFamily: mono }}>{sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ tag, title, desc, glow, brutalist }: { tag: string; title: string; desc: string; glow: boolean; brutalist: boolean }) {
  const borderColor = brutalist ? 'rgba(255,255,255,0.10)' : glow ? `rgba(${ACCENT_RGB},0.15)` : 'rgba(255,255,255,0.08)';
  return (
    <div data-stagger-item style={{ background: glow ? `rgba(${ACCENT_RGB},0.03)` : '#000', border: `1px solid ${borderColor}`, borderRadius: 4, padding: '28px 28px 32px', position: 'relative', overflow: 'hidden', boxShadow: brutalist ? '4px 4px 0px rgba(0,0,0,0.15)' : 'none' }}>
      {glow && <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% -20%, rgba(${ACCENT_RGB},0.12) 0%, transparent 65%)`, pointerEvents: 'none' }} />}
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'inline-block', fontFamily: mono, fontSize: 9, fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase', color: glow ? `rgba(${ACCENT_RGB},0.7)` : 'rgba(255,255,255,0.35)', border: `1px solid ${glow ? `rgba(${ACCENT_RGB},0.2)` : 'rgba(255,255,255,0.08)'}`, borderRadius: 2, padding: '2px 7px', marginBottom: 16 }}>{tag}</div>
        <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', marginBottom: 12, lineHeight: 1.2, letterSpacing: '-0.2px' }}>{title}</div>
        <div style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>{desc}</div>
        <div style={{ marginTop: 24, fontSize: 12, color: `rgba(${ACCENT_RGB},0.6)`, fontFamily: mono }}>
          <Link href="#contacto" style={{ color: 'inherit', textDecoration: 'none' }}>Solicitar información →</Link>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    { tag: 'Agentes IA', title: 'Sistemas que trabajan solos', desc: 'Despliego agentes autónomos que ejecutan tareas complejas — gestionan emails, actualizan CRMs, generan informes — sin intervención humana. Tu operación funciona 24/7.', glow: false, brutalist: true },
    { tag: 'n8n · Automatización', title: 'Flujos sin fricción', desc: 'Conecto todas tus apps —Notion, Sheets, HubSpot, WhatsApp— y elimino el trabajo manual. Construyo flujos que escalan con tu negocio sin necesidad de programadores.', glow: true, brutalist: false },
    { tag: 'Consultoría', title: 'Hoja de ruta IA', desc: 'Analizo tu operación, identifico los cuellos de botella y diseño la estrategia de automatización más rentable para tu negocio. Sin humo, sin buzzwords.', glow: false, brutalist: false },
  ];
  return (
    <section id="servicios" style={{ padding: '100px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div data-reveal style={{ display: 'flex', gap: 80, marginBottom: 64, flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Servicios</div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, lineHeight: 0.97, color: '#fff', letterSpacing: '-0.5px', maxWidth: 400 }}>Lo que hago<br />por tu negocio</h2>
        </div>
        <div style={{ flex: 1, minWidth: 260 }}>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: 420 }}>Tres servicios especializados, un objetivo: liberar el tiempo de tu equipo para que se enfoque en lo que realmente importa.</p>
        </div>
      </div>
      <div data-stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {services.map((s) => <ServiceCard key={s.tag} {...s} />)}
      </div>
      <div style={{ marginTop: 40 }}>
        <Link href="/servicios" style={{ fontFamily: mono, fontSize: 13, color: `rgba(${ACCENT_RGB},0.6)`, textDecoration: 'none', letterSpacing: '0.3px', border: `1px solid rgba(${ACCENT_RGB},0.2)`, borderRadius: 2, padding: '8px 20px' }}>Ver todos los servicios →</Link>
      </div>
    </section>
  );
}

function About() {
  const skills = ['n8n', 'OpenAI', 'LangChain', 'Python', 'Make', 'Zapier', 'Airtable', 'Notion API', 'REST APIs'];
  const specs = ['Automatización de procesos de negocio', 'Integración de LLMs en operaciones', 'Diseño de flujos con n8n y Make', 'Agentes autónomos multi-herramienta'];
  return (
    <section id="sobre-mi" style={{ padding: '100px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center' }}>
        <div data-reveal>
          <div style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Sobre mí</div>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 400, lineHeight: 1, color: '#fff', letterSpacing: '-0.5px', marginBottom: 28 }}>Especialista en<br /><span style={{ color: 'var(--cyan)' }}>automatización</span><br />con IA</h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>Soy David Ródenas, consultor independiente especializado en implementar sistemas de automatización e inteligencia artificial para pequeñas y medianas empresas.</p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', marginBottom: 36 }}>No vendo soluciones genéricas. Analizo tu operación específica y construyo sistemas a medida que funcionan desde el primer día.</p>
          <Link href="/sobre-mi" style={{ display: 'inline-block', background: 'transparent', color: 'var(--cyan)', padding: '10px 24px', borderRadius: 4, border: `1px solid rgba(${ACCENT_RGB},0.3)`, fontSize: 14, textDecoration: 'none' }}>Más sobre mí →</Link>
        </div>
        <div data-reveal>
          <div style={{ background: '#000', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 4, padding: '28px 28px 32px' }}>
            <div style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Stack técnico</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {skills.map((s) => <span key={s} style={{ fontFamily: mono, fontSize: 12, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 2, padding: '5px 12px', background: 'rgba(255,255,255,0.03)' }}>{s}</span>)}
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24 }}>
              <div style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>Especialización</div>
              {specs.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 10 }}>
                  <span style={{ color: `rgba(${ACCENT_RGB},0.6)`, fontFamily: mono, fontSize: 11 }}>✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: '01', title: 'Diagnóstico', desc: 'Analizamos tu operación actual, identificamos cuellos de botella y mapeamos las tareas con mayor potencial de automatización.' },
    { n: '02', title: 'Diseño', desc: 'Definimos la arquitectura del sistema, las herramientas necesarias y la hoja de ruta de implementación con resultados medibles.' },
    { n: '03', title: 'Implementación', desc: 'Construyo e integro los flujos y agentes en tu stack existente. Sin interrupciones, sin migraciones complejas.' },
    { n: '04', title: 'Seguimiento', desc: 'Monitorizamos el sistema, medimos el ahorro de tiempo real y optimizamos continuamente para maximizar el retorno.' },
  ];
  return (
    <section id="proceso" style={{ padding: '100px 48px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(0,7,205,0.06) 0%, transparent 60%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div data-reveal style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Proceso</div>
        <h2 data-reveal style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 400, lineHeight: 1, color: '#fff', letterSpacing: '-0.5px', marginBottom: 64 }}>Cómo trabajo</h2>
        <div data-stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 2 }}>
          {steps.map((step, i) => (
            <div data-stagger-item key={step.n} style={{ padding: '28px 24px', borderLeft: i === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none', borderRight: '1px solid rgba(255,255,255,0.08)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontFamily: mono, fontSize: 36, fontWeight: 400, color: `rgba(${ACCENT_RGB},0.15)`, letterSpacing: '-1px', lineHeight: 1, marginBottom: 16 }}>{step.n}</div>
              <div style={{ fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 10, letterSpacing: '-0.2px' }}>{step.title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>{step.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: 'right' }}>
          <Link href="/proceso" style={{ fontFamily: mono, fontSize: 13, color: `rgba(${ACCENT_RGB},0.6)`, textDecoration: 'none' }}>Ver proceso completo →</Link>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" style={{ padding: '100px 48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'start' }}>
        <div data-reveal>
          <div style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Contacto</div>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 400, lineHeight: 1, color: '#fff', letterSpacing: '-0.5px', marginBottom: 28 }}>Hablemos de<br /><span style={{ color: 'var(--cyan)' }}>tu negocio</span></h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>Cuéntame qué procesos quieres automatizar. En 24h te respondo con un diagnóstico inicial sin compromiso.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[{ label: 'Email', val: 'hola@davidrodenas.com' }, { label: 'LinkedIn', val: 'linkedin.com/in/davidrodenas' }].map(({ label, val }) => (
              <div key={label}>
                <div style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
        <div data-reveal><ContactForm /></div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroGlow />
      <StatsBand />
      <Services />
      <About />
      <Process />
      <Contact />
    </main>
  );
}

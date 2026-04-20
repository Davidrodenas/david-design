import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre mí — David Ródenas',
};

const ACCENT_RGB = '0,255,255';
const mono = "var(--font-jetbrains), 'JetBrains Mono', monospace";

const STACK = [
  { cat: 'Automatización', items: ['n8n', 'Make (Integromat)', 'Zapier'] },
  { cat: 'IA & Agentes', items: ['OpenAI GPT-4o', 'Anthropic Claude', 'LangChain', 'LlamaIndex'] },
  { cat: 'Bases de datos', items: ['Airtable', 'Supabase', 'PostgreSQL', 'Notion'] },
  { cat: 'Integraciones', items: ['REST APIs', 'Webhooks', 'HubSpot', 'Slack', 'Google Workspace'] },
  { cat: 'Lenguajes', items: ['Python', 'JavaScript', 'SQL'] },
];

const VALORES = [
  { n: '01', title: 'Sin humo', desc: 'Si no puedo ayudarte, te lo digo. No vendo proyectos que no tienen sentido. La honestidad va antes que la factura.' },
  { n: '02', title: 'Resultados medibles', desc: 'Cada proyecto empieza definiendo una métrica de éxito. Al final, medimos si la alcanzamos. Si no, seguimos hasta lograrlo.' },
  { n: '03', title: 'Tú eres el dueño', desc: 'Todo lo que construyo queda documentado y en tus manos. No genero dependencia. Te enseño a operar el sistema.' },
  { n: '04', title: 'Velocidad de ejecución', desc: 'Proyectos pequeños en días, proyectos grandes en semanas. Sin procesos eternos ni burocracia innecesaria.' },
];

export default function SobreMi() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '140px 48px 80px', maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', right: '10%', width: 500, height: 400, background: 'radial-gradient(ellipse at center, rgba(0,7,205,0.18) 0%, transparent 70%)', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center' }}>
          <div>
            <div data-reveal style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: `rgba(${ACCENT_RGB},0.6)`, marginBottom: 20 }}>Sobre mí</div>
            <h1 data-reveal style={{ fontSize: 'clamp(40px, 5.5vw, 64px)', fontWeight: 400, lineHeight: 0.93, color: '#fff', letterSpacing: '-0.8px', marginBottom: 28 }}>David Ródenas</h1>
            <div style={{ fontFamily: mono, fontSize: 13, color: `rgba(${ACCENT_RGB},0.55)`, letterSpacing: '-0.2px', marginBottom: 32, borderLeft: `2px solid rgba(${ACCENT_RGB},0.2)`, paddingLeft: 16 }}>
              Consultor independiente<br />Automatización con IA · n8n · Agentes
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>
              Llevo años ayudando a pequeñas y medianas empresas a eliminar el trabajo manual de sus operaciones usando inteligencia artificial y automatización.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', marginBottom: 36 }}>
              No soy una agencia. Soy una persona que trabaja directamente contigo, entiende tu negocio y construye soluciones que duran.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/#contacto" style={{ background: '#fff', color: '#0a0a0a', padding: '11px 28px', borderRadius: 4, fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Hablemos</Link>
              <Link href="/servicios" style={{ background: 'transparent', color: 'rgba(255,255,255,0.6)', padding: '11px 24px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.08)', fontSize: 14, textDecoration: 'none' }}>Ver servicios</Link>
            </div>
          </div>

          {/* Photo */}
          <div>
            <div style={{ width: '100%', aspectRatio: '4/5', maxWidth: 360, margin: '0 auto', borderRadius: 4, overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Image
                src="/david.jpg"
                alt="David Ródenas"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '48px 48px', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-around', gap: 0, flexWrap: 'wrap' }}>
          {[
            { num: '+30', label: 'empresas automatizadas' },
            { num: '200h', label: 'ahorradas/mes por empresa' },
            { num: '100%', label: 'proyectos entregados' },
            { num: '3', label: 'servicios especializados' },
          ].map(({ num, label }, i) => (
            <div key={num} style={{ textAlign: 'center', padding: '12px 32px', flex: '1 1 180px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <div style={{ fontSize: 36, fontFamily: mono, color: '#fff', letterSpacing: '-1px', marginBottom: 6 }}>{num}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontFamily: mono, letterSpacing: '0.2px', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '100px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Cómo trabajo</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, lineHeight: 1, color: '#fff', letterSpacing: '-0.5px', marginBottom: 56 }}>Lo que me diferencia</h2>
        <div data-stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {VALORES.map((v) => (
            <div data-stagger-item key={v.n} style={{ background: '#000', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '28px 24px', transition: 'border-color 0.2s' }}>
              <div style={{ fontFamily: mono, fontSize: 32, color: `rgba(${ACCENT_RGB},0.12)`, letterSpacing: '-1px', lineHeight: 1, marginBottom: 20 }}>{v.n}</div>
              <div style={{ fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 10, letterSpacing: '-0.2px' }}>{v.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '100px 48px', background: 'linear-gradient(180deg, rgba(0,7,205,0.05) 0%, transparent 60%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Herramientas</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, lineHeight: 1, color: '#fff', letterSpacing: '-0.5px', marginBottom: 56 }}>Stack técnico</h2>
          <div data-stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {STACK.map((cat) => (
              <div data-stagger-item key={cat.cat} style={{ background: '#000', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: 24 }}>
                <div style={{ fontFamily: mono, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.5px', color: `rgba(${ACCENT_RGB},0.5)`, marginBottom: 16 }}>{cat.cat}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {cat.items.map((item) => (
                    <div key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', paddingLeft: 10, borderLeft: '1px solid rgba(255,255,255,0.06)' }}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '80px 48px', textAlign: 'center' }}>
        <div style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>¿Conectamos?</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, lineHeight: 1, color: '#fff', letterSpacing: '-0.5px', marginBottom: 20 }}>Cuéntame tu proyecto</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 400, margin: '0 auto 36px', lineHeight: 1.65 }}>Primera llamada gratuita. Sin formularios eternos, sin demos de ventas.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/#contacto" style={{ background: '#fff', color: '#0a0a0a', padding: '12px 36px', borderRadius: 4, fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Solicita presupuesto</Link>
          <Link href="/servicios" style={{ background: 'transparent', color: 'rgba(255,255,255,0.6)', padding: '12px 28px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, fontSize: 15, textDecoration: 'none' }}>Ver servicios</Link>
        </div>
      </section>
    </main>
  );
}

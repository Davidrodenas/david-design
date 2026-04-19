'use client';

import { useState } from 'react';

const mono = "var(--font-jetbrains), 'JetBrains Mono', monospace";
const ACCENT_RGB = '0,255,255';

const labelStyle = {
  display: 'block',
  fontFamily: mono,
  fontSize: 9,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  color: 'rgba(255,255,255,0.35)',
  marginBottom: 6,
};

const inputBase = {
  width: '100%',
  background: '#0a0a0a',
  border: '1px solid rgba(255,255,255,0.10)',
  borderRadius: 4,
  padding: '12px 16px',
  fontSize: 14,
  color: '#fff',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.15s',
};

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div
      style={{
        background: '#000',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: 4,
        padding: '36px 32px',
      }}
    >
      {!sent ? (
        <>
          <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Nombre</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                style={inputBase}
                onFocus={(e) =>
                  (e.target.style.borderColor = `rgba(${ACCENT_RGB},0.4)`)
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = 'rgba(255,255,255,0.10)')
                }
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@empresa.com"
                style={inputBase}
                onFocus={(e) =>
                  (e.target.style.borderColor = `rgba(${ACCENT_RGB},0.4)`)
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = 'rgba(255,255,255,0.10)')
                }
              />
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>¿Qué quieres automatizar?</label>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Cuéntame qué procesos manuales te quitan más tiempo..."
              rows={5}
              style={{ ...inputBase, resize: 'vertical' }}
              onFocus={(e) =>
                (e.target.style.borderColor = `rgba(${ACCENT_RGB},0.4)`)
              }
              onBlur={(e) =>
                (e.target.style.borderColor = 'rgba(255,255,255,0.10)')
              }
            />
          </div>
          <button
            onClick={() => setSent(true)}
            style={{
              width: '100%',
              background: '#fff',
              color: '#0a0a0a',
              padding: 12,
              borderRadius: 4,
              border: 'none',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            Solicita presupuesto
          </button>
          <div
            style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.25)',
              textAlign: 'center',
              marginTop: 12,
            }}
          >
            Respuesta en menos de 24 horas
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div
            style={{
              fontSize: 24,
              color: 'var(--cyan)',
              fontFamily: mono,
              marginBottom: 16,
            }}
          >
            ✓
          </div>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 8 }}>
            Mensaje recibido
          </div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
            Te responderé en menos de 24 horas.
          </div>
        </div>
      )}
    </div>
  );
}

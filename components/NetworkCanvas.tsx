'use client';

import { useEffect, useRef } from 'react';

interface Props {
  accentRGB: string;
}

const GRID = 80;
const SPEED = 1.4;
const TRAIL_SEGMENTS = 10;
const MAX_PULSES = 28;
const PULSE_INTERVAL = 42;

const DIRS = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
];

type Pulse = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  trail: { x: number; y: number }[];
  remaining: number;
  life: number;
  segs: number;
  alpha: number;
};

function spawnPulse(canvasW: number, canvasH: number): Pulse {
  const c = Math.ceil(canvasW / GRID) + 1;
  const r = Math.ceil(canvasH / GRID) + 1;
  const dir = DIRS[Math.floor(Math.random() * 4)];
  return {
    x: Math.floor(Math.random() * c) * GRID,
    y: Math.floor(Math.random() * r) * GRID,
    dx: dir.dx,
    dy: dir.dy,
    trail: [],
    remaining: GRID,
    life: 6 + Math.floor(Math.random() * 10),
    segs: 0,
    alpha: 0.55 + Math.random() * 0.35,
  };
}

export default function NetworkCanvas({ accentRGB }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    let frame = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const nodeGlow = Array.from({ length: 21 * 15 }, (_, k) => ({
      gx: Math.floor(k / 15),
      gy: k % 15,
      phase: Math.random() * Math.PI * 2,
      speed: 0.008 + Math.random() * 0.01,
      base: Math.random() * 0.06 + 0.02,
    }));

    let pulses: Pulse[] = Array.from({ length: 12 }, () =>
      spawnPulse(canvas.width, canvas.height)
    );

    const draw = () => {
      frame++;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Grid lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      for (let x = 0; x * GRID <= w + GRID; x++) {
        ctx.beginPath();
        ctx.moveTo(x * GRID, 0);
        ctx.lineTo(x * GRID, h);
        ctx.stroke();
      }
      for (let y = 0; y * GRID <= h + GRID; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * GRID);
        ctx.lineTo(w, y * GRID);
        ctx.stroke();
      }

      // Node glows
      nodeGlow.forEach((n) => {
        n.phase += n.speed;
        const px = n.gx * GRID;
        const py = n.gy * GRID;
        if (px > w + GRID || py > h + GRID) return;
        const alpha = n.base * (0.6 + 0.4 * Math.sin(n.phase));
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 7);
        grad.addColorStop(0, `rgba(${accentRGB},${alpha})`);
        grad.addColorStop(1, `rgba(${accentRGB},0)`);
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Spawn
      if (frame % PULSE_INTERVAL === 0 && pulses.length < MAX_PULSES) {
        pulses.push(spawnPulse(w, h));
      }

      // Update + draw pulses
      pulses = pulses.filter((p) => p.segs < p.life);
      pulses.forEach((p) => {
        const step = Math.min(SPEED, p.remaining);
        p.trail.push({ x: p.x, y: p.y });
        const maxTrail = TRAIL_SEGMENTS * (GRID / SPEED);
        if (p.trail.length > maxTrail) p.trail.shift();

        p.x += p.dx * step;
        p.y += p.dy * step;
        p.remaining -= step;

        if (p.remaining <= 0) {
          p.x = Math.round(p.x / GRID) * GRID;
          p.y = Math.round(p.y / GRID) * GRID;
          p.segs++;
          p.remaining = GRID;
          const valid = DIRS.filter((d) => !(d.dx === -p.dx && d.dy === -p.dy));
          const straight = valid.find((d) => d.dx === p.dx && d.dy === p.dy);
          const choice =
            straight && Math.random() < 0.55
              ? straight
              : valid[Math.floor(Math.random() * valid.length)];
          p.dx = choice.dx;
          p.dy = choice.dy;
        }

        if (
          p.x < -GRID * 2 ||
          p.x > w + GRID * 2 ||
          p.y < -GRID * 2 ||
          p.y > h + GRID * 2
        ) {
          p.segs = p.life;
          return;
        }

        if (p.trail.length < 2) return;
        for (let i = 1; i < p.trail.length; i++) {
          const t = i / p.trail.length;
          ctx.beginPath();
          ctx.moveTo(p.trail[i - 1].x, p.trail[i - 1].y);
          ctx.lineTo(p.trail[i].x, p.trail[i].y);
          ctx.strokeStyle = `rgba(${accentRGB},${t * p.alpha * 0.5})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        const headGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 10);
        headGrad.addColorStop(0, `rgba(${accentRGB},${p.alpha * 0.8})`);
        headGrad.addColorStop(1, `rgba(${accentRGB},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = headGrad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentRGB},${p.alpha})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [accentRGB]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}

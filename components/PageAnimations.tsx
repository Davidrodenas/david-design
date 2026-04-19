'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PageAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Individual reveals
    const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });

    // Staggered group reveals
    const groups = document.querySelectorAll<HTMLElement>('[data-stagger]');
    groups.forEach((group) => {
      const children = group.querySelectorAll<HTMLElement>('[data-stagger-item]');
      if (!children.length) return;
      gsap.fromTo(
        children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
            once: true,
          },
        }
      );
    });

    // Counter animations
    const counters = document.querySelectorAll<HTMLElement>('[data-count]');
    counters.forEach((el) => {
      const target = parseInt(el.getAttribute('data-count') ?? '0', 10);
      const suffix = el.getAttribute('data-suffix') ?? '';
      const prefix = el.getAttribute('data-prefix') ?? '';
      const obj = { val: 0 };
      let started = false;
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          if (started) return;
          started = true;
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate() {
              el.textContent = prefix + Math.round(obj.val) + suffix;
            },
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}

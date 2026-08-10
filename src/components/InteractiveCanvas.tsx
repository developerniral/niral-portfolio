import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
}

interface PulseRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export const InteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Mouse tracking state across full viewport
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const particles: Particle[] = [];
    const pulseRings: PulseRing[] = [];

    // Palette matching gold/amber/sky blue luxury theme
    const colors = [
      '#D4AF37', // Gold
      '#F59E0B', // Amber
      '#38BDF8', // Sky Blue
      '#94A3B8', // Slate
    ];

    const initCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    const initParticles = () => {
      particles.length = 0;
      // Scale particle density with viewport size
      const count = Math.floor((width * height) / 11000);
      const total = Math.min(Math.max(count, 55), 110);

      for (let i = 0; i < total; i++) {
        const radius = Math.random() * 2 + 1.2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius,
          baseRadius: radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.55 + 0.3,
        });
      }
    };

    initCanvasSize();
    initParticles();

    // Mouse Listeners attached to window for whole page cursor tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      pulseRings.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 180,
        alpha: 0.85,
      });
    };

    const handleResize = () => {
      initCanvasSize();
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const render = () => {
      // Smooth easing for mouse cursor position
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 48;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Interactive Cursor Radial Glow Spotlight
      if (mouse.x > -500 && mouse.y > -500) {
        const radGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          280
        );
        radGrad.addColorStop(0, 'rgba(212, 175, 55, 0.16)'); // Warm Gold
        radGrad.addColorStop(0.45, 'rgba(245, 158, 11, 0.06)'); // Amber Glow
        radGrad.addColorStop(1, 'rgba(11, 17, 32, 0)');

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 280, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Update & Draw Pulse Rings from Clicks
      for (let i = pulseRings.length - 1; i >= 0; i--) {
        const ring = pulseRings[i];
        ring.radius += 3.5;
        ring.alpha -= 0.015;

        if (ring.alpha <= 0 || ring.radius >= ring.maxRadius) {
          pulseRings.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(212, 175, 55, ${ring.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 4. Update & Draw Particles and Proximity Web
      const maxDistance = 115;
      const mouseRadius = 190;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Particle position drift
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off canvas viewport walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interaction with mouse cursor
        if (mouse.x > -500 && mouse.y > -500) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius;
            const angle = Math.atan2(dy, dx);
            p.x -= Math.cos(angle) * force * 1.2;
            p.y -= Math.sin(angle) * force * 1.2;

            p.radius = p.baseRadius + force * 2.5;

            // Connect particle to cursor
            const lineAlpha = (1 - dist / mouseRadius) * 0.55;
            ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          } else {
            p.radius = p.baseRadius;
          }
        }

        // Draw particle dot
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-500"
    />
  );
};

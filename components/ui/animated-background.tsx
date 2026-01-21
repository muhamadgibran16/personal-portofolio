"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let particles: Particle[] = [];
		let sparks: Spark[] = [];
		let animationFrameId: number;
		let mouse = { x: 0, y: 0, active: false };

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			initParticles();
		};

		class Particle {
			x: number;
			y: number;
			vx: number;
			vy: number;
			size: number;
			baseAlpha: number;
			alpha: number;
			pulseSpeed: number;

			constructor() {
				this.x = Math.random() * canvas!.width;
				this.y = Math.random() * canvas!.height;
				this.vx = (Math.random() - 0.5) * 0.5;
				this.vy = (Math.random() - 0.5) * 0.5;
				this.size = Math.random() * 2 + 1;
				this.baseAlpha = Math.random() * 0.5 + 0.1;
				this.alpha = this.baseAlpha;
				this.pulseSpeed = Math.random() * 0.02 + 0.005;
			}

			update() {
				this.x += this.vx;
				this.y += this.vy;

				// Bounce off walls
				if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
				if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

				// Pulse effect
				this.alpha += this.pulseSpeed;
				if (this.alpha > 0.8 || this.alpha < 0.1) this.pulseSpeed *= -1;
			}

			draw() {
				if (!ctx) return;
				ctx.fillStyle = `rgba(100, 255, 218, ${this.alpha})`;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();

				// Glow effect
				ctx.shadowBlur = 10;
				ctx.shadowColor = "rgba(100, 255, 218, 0.5)";
				ctx.shadowBlur = 0; // Reset
			}
		}

		class Spark {
			x: number;
			y: number;
			vx: number;
			vy: number;
			life: number;
			color: string;

			constructor(x: number, y: number) {
				this.x = x;
				this.y = y;
				const angle = Math.random() * Math.PI * 2;
				const speed = Math.random() * 2 + 1;
				this.vx = Math.cos(angle) * speed;
				this.vy = Math.sin(angle) * speed;
				this.life = 1.0;
				this.color = Math.random() > 0.5 ? "100, 255, 218" : "255, 255, 255"; // Teal or White
			}

			update() {
				this.x += this.vx;
				this.y += this.vy;
				this.life -= 0.03; // Fade out
			}

			draw() {
				if (!ctx) return;
				ctx.fillStyle = `rgba(${this.color}, ${this.life})`;
				ctx.beginPath();
				ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		const initParticles = () => {
			particles = [];
			const particleCount = Math.min(window.innerWidth / 8, 150);
			for (let i = 0; i < particleCount; i++) {
				particles.push(new Particle());
			}
		};

		const handleMouseMove = (e: MouseEvent) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
			mouse.active = true;

			// Add sparks on mouse move
			if (Math.random() > 0.5) {
				sparks.push(new Spark(mouse.x, mouse.y));
			}
		};

		const animate = () => {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Mouse connection line (Repulsor/Attractor)

			particles.forEach((p, i) => {
				p.update();
				p.draw();

				// Connect particles
				for (let j = i; j < particles.length; j++) {
					const p2 = particles[j];
					const dx = p.x - p2.x;
					const dy = p.y - p2.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 100) {
						ctx.beginPath();
						// Random "zap" effect for connections
						const isZap = Math.random() > 0.999;
						const opacity = isZap ? 0.8 : 0.15 - distance / 1000;
						const lineWidth = isZap ? 2 : 1;

						ctx.strokeStyle = `rgba(100, 255, 218, ${opacity})`;
						ctx.lineWidth = lineWidth;
						ctx.moveTo(p.x, p.y);
						ctx.lineTo(p2.x, p2.y);
						ctx.stroke();
					}
				}

				// Connect to mouse
				if (mouse.active) {
					const dx = p.x - mouse.x;
					const dy = p.y - mouse.y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < 150) {
						ctx.beginPath();
						ctx.strokeStyle = `rgba(100, 255, 218, ${0.2 - distance / 1000})`;
						ctx.lineWidth = 1;
						ctx.moveTo(p.x, p.y);
						ctx.lineTo(mouse.x, mouse.y);
						ctx.stroke();
					}
				}
			});

			// Update and draw sparks
			sparks = sparks.filter((s) => s.life > 0);
			sparks.forEach((s) => {
				s.update();
				s.draw();
			});

			animationFrameId = requestAnimationFrame(animate);
		};

		window.addEventListener("resize", resizeCanvas);
		window.addEventListener("mousemove", handleMouseMove);
		resizeCanvas();
		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			window.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950"
		/>
	);
}

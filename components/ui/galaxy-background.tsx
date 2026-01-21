"use client";

import { useEffect, useRef } from "react";

export function GalaxyBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let width = 0;
		let height = 0;
		let stars: Star[] = [];
		let animationId: number;

		const resize = () => {
			width = canvas.offsetWidth;
			height = canvas.offsetHeight;
			canvas.width = width;
			canvas.height = height;
			initGalaxy();
		};

		class Star {
			x: number;
			y: number;
			size: number;
			color: string;
			speed: number;
			orbitRadius: number;
			orbitAngle: number;
			baseSize: number;

			constructor() {
				// Galaxy properties
				const armCount = 3;
				const armIndex = Math.floor(Math.random() * armCount);

				// Random distance from center, tailored for spiral
				const randomDist = Math.random();
				// Use power to concentrate more stars near center but allow large extent
				this.orbitRadius =
					Math.pow(randomDist, 0.8) * (Math.max(width, height) / 1.5);

				// Spiral equation with randomness
				const spreadOffset = (Math.random() - 0.5) * 1.5; // Spread of the arm
				// Angle increases with radius (winding)
				const spiralProp = 4; // How tight the spiral winds
				const spiralAngle =
					this.orbitRadius / (Math.min(width, height) / spiralProp) +
					armIndex * ((Math.PI * 2) / armCount);

				this.orbitAngle = spiralAngle + spreadOffset;

				// Kepler-ish speed (slower at edges)
				this.speed = 0.0002 + (100 / (this.orbitRadius + 50)) * 0.0005;

				// Size variation
				this.baseSize = Math.random() * 1.5 + 0.5;
				this.size = this.baseSize;

				this.x = 0;
				this.y = 0;

				// Initialize position
				this.updatePosition();

				// Colors based on distance and random variation
				const distRatio = this.orbitRadius / (Math.max(width, height) / 2);

				if (Math.random() > 0.97) {
					// Occasional bright bright stars
					this.color = "rgba(255, 255, 255, 0.9)";
					this.baseSize *= 1.5;
				} else if (distRatio < 0.2) {
					this.color = `rgba(255, 230, 200, ${0.7 + Math.random() * 0.3})`; // Core: Warm
				} else if (distRatio < 0.5) {
					this.color = `rgba(100, 255, 218, ${0.5 + Math.random() * 0.4})`; // Mid: Teal
				} else {
					// Outer arms: Blue/Purple mix
					this.color =
						Math.random() > 0.6
							? `rgba(96, 165, 250, ${0.4 + Math.random() * 0.4})` // Blue
							: `rgba(168, 85, 247, ${0.4 + Math.random() * 0.4})`; // Purple
				}
			}

			updatePosition() {
				const centerX = width / 2;
				const centerY = height / 2;
				this.x = centerX + Math.cos(this.orbitAngle) * this.orbitRadius;
				this.y = centerY + Math.sin(this.orbitAngle) * this.orbitRadius;
			}

			update() {
				this.orbitAngle += this.speed;
				this.updatePosition();
			}

			draw() {
				if (!ctx) return;

				// Twinkle effect
				if (Math.random() > 0.9) {
					this.size = this.baseSize * (0.8 + Math.random() * 0.4);
				}

				ctx.fillStyle = this.color;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		const initGalaxy = () => {
			stars = [];
			const starCount = 2000; // High density for realism
			for (let i = 0; i < starCount; i++) {
				stars.push(new Star());
			}
		};

		const animate = () => {
			if (!ctx) return;
			ctx.clearRect(0, 0, width, height);

			// Central Glow
			const centerGradient = ctx.createRadialGradient(
				width / 2,
				height / 2,
				0,
				width / 2,
				height / 2,
				width / 4,
			);
			centerGradient.addColorStop(0, "rgba(255, 240, 220, 0.08)");
			centerGradient.addColorStop(0.5, "rgba(100, 200, 255, 0.03)");
			centerGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
			ctx.fillStyle = centerGradient;
			ctx.fillRect(0, 0, width, height);

			stars.forEach((star) => {
				star.update();
				star.draw();
			});

			animationId = requestAnimationFrame(animate);
		};

		const resizeObserver = new ResizeObserver(() => resize());
		resizeObserver.observe(canvas);

		resize();
		animate();

		return () => {
			resizeObserver.disconnect();
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 w-full h-full -z-10 pointer-events-none mix-blend-screen"
		/>
	);
}

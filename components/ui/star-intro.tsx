"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function StarIntro({ onComplete }: { onComplete: () => void }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let width = 0;
		let height = 0;
		let stars: Star[] = [];
		let animationId: number;
		let speed = 2; // Initial speed

		const colors = [
			"255, 255, 255", // White
			"100, 255, 218", // Teal
			"59, 130, 246", // Blue
			"168, 85, 247", // Purple
			"236, 72, 153", // Pink
		];

		const resize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = width;
			canvas.height = height;
			initStars();
		};

		class Star {
			x: number;
			y: number;
			z: number;
			xPrev: number;
			yPrev: number;
			color: string;

			constructor() {
				this.x = Math.random() * width - width / 2;
				this.y = Math.random() * height - height / 2;
				this.z = Math.random() * width;
				this.xPrev = this.x;
				this.yPrev = this.y;
				this.color = colors[Math.floor(Math.random() * colors.length)];
			}

			update() {
				this.z = this.z - speed;
				if (this.z <= 0) {
					this.z = width;
					this.x = Math.random() * width - width / 2;
					this.y = Math.random() * height - height / 2;
					this.xPrev = this.x;
					this.yPrev = this.y;
					// Randomize color again on respawn
					this.color = colors[Math.floor(Math.random() * colors.length)];
				}
			}

			draw() {
				if (!ctx) return;

				const x = (this.x / this.z) * width + width / 2;
				const y = (this.y / this.z) * height + height / 2;

				// Draw star trail
				ctx.beginPath();
				ctx.strokeStyle = `rgba(${this.color}, ${1 - this.z / width})`;
				ctx.lineWidth = Math.max(0.1, (1 - this.z / width) * 2);
				ctx.moveTo(x, y);

				// Calculate previous position for trail
				const xPrev = (this.x / (this.z + speed * 2)) * width + width / 2;
				const yPrev = (this.y / (this.z + speed * 2)) * height + height / 2;

				ctx.lineTo(xPrev, yPrev);
				ctx.stroke();
			}
		}

		const initStars = () => {
			stars = [];
			const starCount = 600; // Increased count for better colorful effect
			for (let i = 0; i < starCount; i++) {
				stars.push(new Star());
			}
		};

		const animate = () => {
			if (!ctx || !canvas) return;

			// Trail effect
			ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
			ctx.fillRect(0, 0, width, height);

			stars.forEach((star) => {
				star.update();
				star.draw();
			});

			animationId = requestAnimationFrame(animate);
		};

		window.addEventListener("resize", resize);
		resize();
		animate();

		// Accelerate then finish
		const accelerationTimer = setTimeout(() => {
			speed = 15; // Warp speed
		}, 1500);

		const finishTimer = setTimeout(() => {
			setIsVisible(false);
			setTimeout(onComplete, 500); // Wait for fade out
		}, 3500);

		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(animationId);
			clearTimeout(accelerationTimer);
			clearTimeout(finishTimer);
		};
	}, [onComplete]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="fixed inset-0 z-50 bg-black flex items-center justify-center">
					<canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
						transition={{ duration: 1 }}
						className="relative z-10 text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-white tracking-[0.2em] uppercase font-mono">
							System Initializing
						</h1>
						<div className="mt-4 flex justify-center gap-1">
							{[0, 1, 2].map((i) => (
								<motion.div
									key={i}
									className="w-2 h-2 bg-teal-500 rounded-full"
									animate={{ opacity: [0.2, 1, 0.2] }}
									transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
								/>
							))}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

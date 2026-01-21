"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { GalaxyBackground } from "@/components/ui/galaxy-background";

export function Hero() {
	return (
		<section className="min-h-screen flex flex-col justify-center items-center text-center p-4 relative z-10 overflow-hidden">
			<div className="absolute inset-0 -z-20 opacity-80">
				<GalaxyBackground />
			</div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-4xl relative">
				{/* Name Introduction */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2 }}
					className="mb-2 text-teal-300 font-mono lg:text-4xl md:text-3xl text-2xl font-medium tracking-wide">
					Hi, I'm Muhamad Gibran
				</motion.div>

				<div className="flex items-center justify-center gap-2 mb-6">
					<span className="p-2 bg-slate-800 rounded-lg border border-slate-700">
						<Terminal className="w-5 h-5 text-teal-400" />
					</span>
					<span className="text-teal-400 font-mono text-sm tracking-wider uppercase">
						System Online
					</span>
				</div>

				<div className="relative inline-block">
					{/* Looping Background Animation */}

					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-600/20 blur-3xl -z-20 rounded-full"
						animate={{
							scale: [1, 1.1, 1],
							opacity: [0.3, 0.5, 0.3],
							rotate: [0, 180, 360],
						}}
						transition={{
							duration: 15,
							repeat: Infinity,
							ease: "linear",
						}}
					/>

					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight relative z-10 drop-shadow-lg">
						Backend Engineering <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
							Meets DevOps
						</span>
					</h1>
				</div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="text-slate-400 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
					Building scalable systems and robust cloud infrastructure. Passionate
					about clean code, automation, and continuous improvement.
					{/*Building scalable, resilient systems and automating infrastructure
					with precision.*/}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="#projects"
						className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-lg hover:bg-teal-400 hover:text-slate-900 transition-colors flex items-center justify-center gap-2">
						View Projects
						<ArrowRight className="w-5 h-5" />
					</a>
					<a
						href="#contact"
						className="px-8 py-3 bg-slate-800 text-white font-bold rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors">
						Contact Me
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
}

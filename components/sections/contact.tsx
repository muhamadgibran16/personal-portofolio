"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
	return (
		<section id="contact" className="py-20 px-4 relative z-10">
			<div className="max-w-4xl mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}>
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
						Get In Touch
					</h2>
					<p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
						I'm currently looking for new opportunities as a Backend or DevOps
						engineer. Whether you have a question or just want to say hi, I'll
						try my best to get back to you!
					</p>

					<div className="flex justify-center gap-6 mb-12">
						<a
							href="mailto:braanngibran@gmail.com"
							className="p-4 bg-slate-800 rounded-full hover:bg-teal-500 hover:text-white transition-all transform hover:scale-110">
							<Mail className="w-6 h-6" />
						</a>
						<a
							href="https://github.com/muhamadgibran16"
							className="p-4 bg-slate-800 rounded-full hover:bg-teal-500 hover:text-white transition-all transform hover:scale-110">
							<Github className="w-6 h-6" />
						</a>
						<a
							href="https://linkedin.com/in/muhamad-gibran-al-mumbait"
							className="p-4 bg-slate-800 rounded-full hover:bg-teal-500 hover:text-white transition-all transform hover:scale-110">
							<Linkedin className="w-6 h-6" />
						</a>
					</div>

					<a
						href="mailto:braanngibran@gmail.com"
						className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-lg hover:bg-teal-400 hover:text-slate-900 transition-colors inline-block">
						Say Hello
					</a>
				</motion.div>

				<footer className="mt-20 pt-8 border-t border-slate-800 text-slate-500 text-sm">
					<p>© {new Date().getFullYear()} Gibran. All rights reserved.</p>
				</footer>
			</div>
		</section>
	);
}

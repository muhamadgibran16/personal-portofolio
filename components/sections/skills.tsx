"use client";

import { motion } from "framer-motion";
import {
	Server,
	Database,
	Cloud,
	Code,
	GitBranch,
	Terminal,
} from "lucide-react";

export function Skills() {
	const skills = [
		{
			category: "Backend",
			icon: <Server className="w-8 h-8 text-teal-400" />,
			items: ["Node.js", "Go", "Python", "Microservices", "gRPC", "REST APIs"],
		},
		{
			category: "Databases",
			icon: <Database className="w-8 h-8 text-blue-400" />,
			items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Prisma"],
		},
		{
			category: "DevOps",
			icon: <Cloud className="w-8 h-8 text-purple-400" />,
			items: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
		},
		{
			category: "Tools & Others",
			icon: <Terminal className="w-8 h-8 text-yellow-400" />,
			items: ["Linux", "Git", "Grafana", "Prometheus", "Bash Scripting"],
		},
	];

	return (
		<section id="skills" className="py-20 px-4 relative z-10">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Technical Arsenal
					</h2>
					<p className="text-slate-400 text-lg">
						Tools and technologies I use to build robust solutions.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-teal-500/50 transition-colors">
							<div className="mb-4">{skill.icon}</div>
							<h3 className="text-xl font-bold text-white mb-4">
								{skill.category}
							</h3>
							<ul className="space-y-2">
								{skill.items.map((item, i) => (
									<li
										key={i}
										className="text-slate-400 flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										{item}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

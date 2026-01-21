"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
	const projects = [
		{
			title: "Microservices E-commerce",
			description:
				"A scalable e-commerce backend built with Go and gRPC, handling 10k+ concurrent requests. Implemented distributed tracing with Jaeger.",
			tags: ["Go", "gRPC", "Docker", "PostgreSQL"],
			links: { demo: "#", code: "#" },
		},
		{
			title: "Cloud Infrastructure Automation",
			description:
				"Terraform modules for provisioning a complete AWS environment with EKS, RDS, and VPC peering. Automated CI/CD pipelines with GitHub Actions.",
			tags: ["Terraform", "AWS", "Kubernetes", "CI/CD"],
			links: { demo: "#", code: "#" },
		},
		{
			title: "Real-time Analytics Engine",
			description:
				"Node.js streaming service processing IoT data using Apache Kafka and storing aggregations in TimescaleDB.",
			tags: ["Node.js", "Kafka", "TimescaleDB", "WebSockets"],
			links: { demo: "#", code: "#" },
		},
	];

	return (
		<section id="projects" className="py-20 px-4 relative z-10">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Featured Projects
					</h2>
					<p className="text-slate-400 text-lg">
						Showcase of high-performance systems and infrastructure code.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/50 transition-colors group">
							<div className="p-6">
								<h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
									{project.title}
								</h3>
								<p className="text-slate-400 mb-6 line-clamp-3">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{project.tags.map((tag, i) => (
										<span
											key={i}
											className="px-3 py-1 bg-slate-800 text-teal-400 text-xs rounded-full border border-slate-700">
											{tag}
										</span>
									))}
								</div>
								<div className="flex items-center gap-4">
									<a
										href={project.links.code}
										className="text-slate-400 hover:text-white transition-colors">
										<Github className="w-5 h-5" />
									</a>
									<a
										href={project.links.demo}
										className="text-slate-400 hover:text-white transition-colors">
										<ExternalLink className="w-5 h-5" />
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

"use client";

import { motion } from "framer-motion";

export function Experience() {
	const experiences = [
		{
			company: "Hudoro Solusi Digital",
			role: "DevOps Engineer",
			period: "July 2025 - Present",
			description:
				"Managed Google Cloud infrastructure. Set up CI/CD pipelines with Jenkins and GitHub Actions.",
		},
		{
			company: "Hudoro Solusi Digital",
			role: "Backend Engineer",
			period: "July 2024 - Present",
			description:
				"Building REST APIs, implement microservices architecture and optimized database queries reducing latency.",
		},
		{
			company: "Widya Robotics",
			role: "Backend Engineer Intern",
			period: "August 2023 - June 2024",
			description: [
				"Research and developed backend features for internal company applications. Learned software development best practices and clean code architecture. Contributed to code reviews and technical documentation.",
			],
		},
		{
			company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
			role: "Cloud Computing Student",
			period: "February 2023 - June 2023",
			description:
				"Specialized in Distributed Systems and Cloud Computing. Hands-on experience with GCP services. Completed Cloud Computing specialization. Team collaboration in capstone project.",
		},
		{
			company: "University of Bina Sarana Informatics",
			role: "Information System Student",
			period: "August 2021 - November 2024",
			description:
				"Focused on Software Engineering, Database Management, and Network Infrastructure. Graduated with a strong foundation in backend development concepts.",
		},
	];

	return (
		<section id="experience" className="py-20 px-4 relative z-10">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Experience
					</h2>
					<p className="text-slate-400 text-lg">
						My professional journey and career milestones.
					</p>
				</motion.div>

				<div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
							<div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-[.is-active]:border-teal-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
								<div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" />
							</div>
							<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-teal-500/30 transition-colors shadow-lg">
								<div className="flex items-center justify-between space-x-2 mb-1">
									<h3 className="font-bold text-white">{exp.role}</h3>
									<time className="text-xs font-medium text-teal-400">
										{exp.period}
									</time>
								</div>
								<div className="text-slate-500 mb-2">{exp.company}</div>
								<p className="text-slate-400 text-sm">{exp.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

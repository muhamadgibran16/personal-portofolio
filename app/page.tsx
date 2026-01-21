"use client";

import { useState } from "react";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { StarIntro } from "@/components/ui/star-intro";

export default function Page() {
	const [showContent, setShowContent] = useState(false);

	return (
		<main className="bg-slate-950 min-h-screen relative overflow-hidden text-slate-200 selection:bg-teal-500/30">
			<StarIntro onComplete={() => setShowContent(true)} />

			{showContent && (
				<>
					<AnimatedBackground />
					<div className="relative z-10 animate-in fade-in duration-1000">
						<Hero />
						<Skills />
						<Experience />
						<Projects />
						<Contact />
					</div>
				</>
			)}
		</main>
	);
}

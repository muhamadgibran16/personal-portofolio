import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const viewport: Viewport = {
	themeColor: "#0f172a", // slate-900 matches the theme
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	title: {
		default: "Muhamad Gibran | Backend & DevOps Engineer",
		template: "%s | Muhamad Gibran",
	},
	description:
		"Portfolio of Muhamad Gibran, a Backend Engineer specialized in building scalable systems and DevOps automation. Expertise in Node.js, GCP, and Docker Container Orchestration.",
	keywords: [
		"Backend Engineer",
		"DevOps Engineer",
		"Muhamad Gibran",
		"Muhamad Gibran Al Mumbait",
		"Portfolio",

	],
	authors: [
		{ name: "Muhamad Gibran", url: "https://github.com/muhamadgibran16" },
	],
	creator: "Muhamad Gibran",
	publisher: "Muhamad Gibran",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://muhamadgibran.vercel.app", // Placeholder URL, best practice to have one
		title: "Muhamad Gibran | Backend & DevOps Engineer",
		description:
			"Building scalable, resilient systems and automating infrastructure with precision.",
		siteName: "Muhamad Gibran Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Muhamad Gibran | Backend & DevOps Engineer",
		description:
			"Building scalable, resilient systems and automating infrastructure with precision.",
		creator: "@muhamadgibran", // Placeholder
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={inter.variable}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}

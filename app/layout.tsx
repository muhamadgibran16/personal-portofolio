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
	metadataBase: new URL("https://muhamadgibran.vercel.app"),
	title: {
		default: "Muhamad Gibran | Backend & DevOps Engineer",
		template: "%s | Muhamad Gibran",
	},
	description:
		"Portfolio of Muhamad Gibran, a Backend Engineer specialized in building scalable systems and DevOps automation. Expertise in Node.js, GCP, and Docker Container Orchestration.",
	keywords: [
		"Backend Engineer",
		"DevOps Engineer",
		"Gibran",
		"Portfolio of Muhamad Gibran",
		"Muhamad Gibran",
		"Software Engineer",
		"System Architecture",
		"Cloud Infrastructure",
	],
	authors: [
		{ name: "Muhamad Gibran", url: "https://github.com/muhamadgibran16" },
	],
	creator: "Muhamad Gibran",
	publisher: "Muhamad Gibran",
	alternates: {
		canonical: "/",
	},
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
	verification: {
		//google: "google-site-verification=4kI-zMFvqyDV7aQTpZrcioJfxzolL7CZY9YMCul3phQ", // Replace with your actual code
		google: "KgNYI2lezaV030dxC8U7uBftZaApJnmn1cxJdTddSZ4",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://muhamadgibran.vercel.app",
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
		creator: "@muhamadgibran",
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

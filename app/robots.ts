import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/private/",
		},
		sitemap: "https://gibran-portfolio.vercel.app/sitemap.xml", // Replace with actual domain
	};
}

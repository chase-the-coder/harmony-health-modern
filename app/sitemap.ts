import type { MetadataRoute } from "next";
import config from "@/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${config.domainName}`;

  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services-and-pricing", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/hormone-replacement-therapy-athens-ga", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/medical-weight-loss-athens-ga", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/peptide-therapy-athens-ga", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/aesthetic-treatments-athens-ga", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/iv-hydration-therapy-athens-ga", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pricing-mens-hrt", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/pricing-womens-hrt", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/tos", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

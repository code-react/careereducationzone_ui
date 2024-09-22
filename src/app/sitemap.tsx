import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://careereducationzone.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://careereducationzone.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://careereducationzone.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://careereducationzone.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://careereducationzone.com/careers",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://careereducationzone.com/portfolio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ];
}

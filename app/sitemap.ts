import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://viremontadvisorygroup.com",
      lastModified: new Date(),
    },
    {
      url: "https://viremontadvisorygroup.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://viremontadvisorygroup.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://viremontadvisorygroup.com/sectors",
      lastModified: new Date(),
    },
    {
      url: "https://viremontadvisorygroup.com/contact",
      lastModified: new Date(),
    },
  ];
}

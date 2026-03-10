import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function SEOHead({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = "/assets/generated/cafe-hero.dim_1400x600.png",
  ogUrl,
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const attr = selector.includes("[name=") ? "name" : "property";
        const value = selector.match(/["']([^"']+)["']/)?.[1] || "";
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', ogTitle || title);
    setMeta('meta[property="og:description"]', ogDescription || description);
    setMeta('meta[property="og:image"]', ogImage);
    if (ogUrl) setMeta('meta[property="og:url"]', ogUrl);
    setMeta('meta[name="twitter:title"]', ogTitle || title);
    setMeta('meta[name="twitter:description"]', ogDescription || description);
    setMeta('meta[name="twitter:image"]', ogImage);

    return () => {
      document.title = "ICC Computer & Online Service – Mahipalpur, Delhi";
    };
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl]);

  return null;
}

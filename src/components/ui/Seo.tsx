import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSiteSettingsContext } from "../../context/SiteSettingsContext";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

function getOrCreateMeta(name: string, attribute: string): HTMLMetaElement {
  const selector = attribute === "name" ? `meta[name="${name}"]` : `meta[property="${name}"]`;
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  return el;
}

export default function Seo({ title, description, path, ogImage }: SeoProps) {
  const location = useLocation();
  const { get } = useSiteSettingsContext();
  const siteUrl = import.meta.env.VITE_SITE_URL || "";
  const siteName = get("site_name", "ZHS AI Agency");
  const currentPath = path || location.pathname;
  const canonicalUrl = siteUrl ? `${siteUrl}${currentPath}` : "";
  const ogImageUrl = ogImage
    ? siteUrl ? `${siteUrl}${ogImage}` : ogImage
    : "/og-image.svg";

  useEffect(() => {
    document.title = title;

    getOrCreateMeta("description", "name").setAttribute("content", description);
    getOrCreateMeta("og:title", "property").setAttribute("content", title);
    getOrCreateMeta("og:description", "property").setAttribute("content", description);
    getOrCreateMeta("og:type", "property").setAttribute("content", "website");
    getOrCreateMeta("og:site_name", "property").setAttribute("content", siteName);

    if (canonicalUrl) {
      getOrCreateMeta("og:url", "property").setAttribute("content", canonicalUrl);
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalUrl);
    } else {
      getOrCreateMeta("og:url", "property").setAttribute("content", currentPath);
    }

    getOrCreateMeta("og:image", "property").setAttribute("content", ogImageUrl);
    getOrCreateMeta("twitter:image", "name").setAttribute("content", ogImageUrl);

    getOrCreateMeta("twitter:card", "name").setAttribute("content", "summary_large_image");
    getOrCreateMeta("twitter:title", "name").setAttribute("content", title);
    getOrCreateMeta("twitter:description", "name").setAttribute("content", description);
  }, [title, description, canonicalUrl, ogImageUrl, location.pathname, currentPath, siteName]);

  return null;
}

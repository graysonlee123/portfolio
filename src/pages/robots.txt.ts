import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const isPreview = import.meta.env.VERCEL_ENV === "preview";
  const content = isPreview
    ? "User-Agent: *\nDisallow: /\n"
    : `User-Agent: *\nAllow: /\nSitemap: ${new URL("sitemap-index.xml", site)}\n`;
  return new Response(content, { headers: { "Content-Type": "text/plain" } });
};

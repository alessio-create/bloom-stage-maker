import { useEffect, useRef } from "react";

interface FunnelPageProps {
  head: string;
  body: string;
}

/**
 * Renders a static EuroMedPartner funnel page (extracted HTML).
 * - Inlines page <style>/<link> at the top of the body so styles apply
 *   synchronously with the markup (no FOUC during route transitions).
 * - Re-executes any inline <script> tags after mount (innerHTML doesn't run them).
 */
export function FunnelPage({ head, body }: FunnelPageProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  // Re-execute inline scripts inside the body.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const scripts = Array.from(root.querySelectorAll("script"));
    scripts.forEach((old) => {
      const s = document.createElement("script");
      Array.from(old.attributes).forEach((a) => s.setAttribute(a.name, a.value));
      const inline = old.textContent ?? "";
      // Wrap inline scripts in an IIFE so top-level `const`/`let` declarations
      // (e.g. IntersectionObservers named `io`) don't collide across route remounts.
      s.text = inline ? `(function(){\n${inline}\n})();` : "";
      old.parentNode?.replaceChild(s, old);
    });
  }, [body]);

  // Inline <link rel="stylesheet"> and <style> at the very top of the body so
  // they paint synchronously with the markup. Browsers accept these tags in
  // body and they participate in the document's CSSOM immediately.
  const html = head + body;

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: html }} />;
}

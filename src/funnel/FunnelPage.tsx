import { useEffect, useRef } from "react";

interface FunnelPageProps {
  head: string;
  body: string;
}

/**
 * Renders a static EuroMedPartner funnel page (extracted HTML).
 * - Injects the page's <style>/<link> tags into document.head on mount.
 * - Renders the <body> markup verbatim.
 * - Re-executes any inline <script> tags after mount (innerHTML doesn't run them).
 */
export function FunnelPage({ head, body }: FunnelPageProps) {
  const bodyRef = useRef<HTMLDivElement>(null);

  // Inject the page-specific <style> and <link> into <head>.
  useEffect(() => {
    const container = document.createElement("div");
    container.innerHTML = head;
    const injected: Element[] = [];
    Array.from(container.children).forEach((node) => {
      const clone = node.cloneNode(true) as Element;
      document.head.appendChild(clone);
      injected.push(clone);
    });
    return () => {
      injected.forEach((n) => n.parentNode?.removeChild(n));
    };
  }, [head]);

  // Re-execute inline scripts inside the body.
  useEffect(() => {
    const root = bodyRef.current;
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

  return <div ref={bodyRef} dangerouslySetInnerHTML={{ __html: body }} />;
}

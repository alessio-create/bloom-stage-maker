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
 * - Wires shared premium micro-interactions (page enter/exit, scroll reveal,
 *   sticky-bar elevation) for every funnel page via the .funnel-page wrapper.
 */
export function FunnelPage({ head, body }: FunnelPageProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // 1) Re-execute inline scripts (innerHTML doesn't run them).
    const scripts = Array.from(root.querySelectorAll("script"));
    scripts.forEach((old) => {
      const s = document.createElement("script");
      Array.from(old.attributes).forEach((a) => s.setAttribute(a.name, a.value));
      const inline = old.textContent ?? "";
      // Wrap inline scripts in an IIFE so top-level `const`/`let` declarations
      // don't collide across route remounts.
      s.text = inline ? `(function(){\n${inline}\n})();` : "";
      old.parentNode?.replaceChild(s, old);
    });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 2) Auto-tag top-level sections + already-marked .reveal nodes for the
    //    shared scroll-reveal observer. We skip the sticky bars so they
    //    don't fade in awkwardly.
    const skip = new Set(["FUNNEL-BAR", "PROGRESS", "SS-BAR", "SCRIPT", "STYLE", "LINK"]);
    if (!reduced) {
      Array.from(root.children).forEach((child, i) => {
        if (!(child instanceof HTMLElement)) return;
        if (skip.has(child.tagName)) return;
        if (child.classList.contains("funnel-bar") || child.classList.contains("progress") || child.classList.contains("ss-bar")) return;
        if (!child.hasAttribute("data-reveal")) {
          child.setAttribute("data-reveal", "");
          if (i < 6) child.setAttribute("data-stagger", String(Math.min(i, 5)));
        }
      });
      root.querySelectorAll(".reveal").forEach((el) => {
        if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
      });
    }

    // 3) IntersectionObserver — flips .is-in for both legacy .reveal nodes
    //    and the new [data-reveal] auto-tagged nodes.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    root.querySelectorAll("[data-reveal], .reveal, .draw").forEach((el) => io.observe(el));

    // 4) Sticky-bar elevation on scroll.
    const bars = Array.from(root.querySelectorAll<HTMLElement>(".funnel-bar, .progress, .ss-bar"));
    const onScroll = () => {
      const scrolled = window.scrollY > 8;
      bars.forEach((b) => b.classList.toggle("is-scrolled", scrolled));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // 5) Smooth in-page anchor scroll for any hash link inside the funnel.
    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      ev.preventDefault();
      target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    };
    root.addEventListener("click", onClick);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      root.removeEventListener("click", onClick);
    };
  }, [body]);

  // Inline <link rel="stylesheet"> and <style> at the very top of the body so
  // they paint synchronously with the markup. Browsers accept these tags in
  // body and they participate in the document's CSSOM immediately.
  const html = head + body;

  return <div ref={rootRef} className="funnel-page" dangerouslySetInnerHTML={{ __html: html }} />;
}

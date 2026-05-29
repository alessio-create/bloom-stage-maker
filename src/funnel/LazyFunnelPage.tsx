import { lazy, Suspense, useEffect, useState } from "react";

const FunnelPage = lazy(() =>
  import("./FunnelPage").then((m) => ({ default: m.FunnelPage }))
);

type PageModule = { head: string; body: string };

interface LazyFunnelPageProps {
  load: () => Promise<PageModule>;
}

/**
 * Client-only loader for funnel pages.
 *
 * - Renders an empty shell during SSR / first paint so the giant HTML string
 *   (with inline <script> tags) never participates in hydration. This avoids
 *   the React hydration mismatch we were seeing on every funnel route.
 * - Dynamically imports the heavy page module on the client, keeping the
 *   ~25–70KB markup strings out of the route's critical JS bundle.
 */
export function LazyFunnelPage({ load }: LazyFunnelPageProps) {
  const [page, setPage] = useState<PageModule | null>(null);

  useEffect(() => {
    let cancelled = false;
    load().then((mod) => {
      if (!cancelled) setPage({ head: mod.head, body: mod.body });
    });
    return () => {
      cancelled = true;
    };
  }, [load]);

  if (!page) return <div className="funnel-page" aria-busy="true" />;

  return (
    <Suspense fallback={<div className="funnel-page" aria-busy="true" />}>
      <FunnelPage head={page.head} body={page.body} />
    </Suspense>
  );
}

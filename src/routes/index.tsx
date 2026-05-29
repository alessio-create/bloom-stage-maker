import { createFileRoute } from "@tanstack/react-router";
import { LazyFunnelPage } from "@/funnel/LazyFunnelPage";

const title = "Smart&Start Italia · Scopri se sei finanziabile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: "Scopri in 2 minuti se il tuo progetto è finanziabile con EuroMedPartner — la boutique di finanza agevolata." },
      { property: "og:title", content: title },
      { property: "og:description", content: "Scopri in 2 minuti se il tuo progetto è finanziabile." },
    ],
  }),
  component: () => <LazyFunnelPage load={() => import("@/funnel/start.page")} />,
});

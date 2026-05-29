import { createFileRoute } from "@tanstack/react-router";
import { LazyFunnelPage } from "@/funnel/LazyFunnelPage";

const title = "Smart&Start Italia · Prenota la tua call";

export const Route = createFileRoute("/booking")({
  head: () => ({ meta: [{ title }] }),
  component: () => <LazyFunnelPage load={() => import("@/funnel/booking.page")} />,
});

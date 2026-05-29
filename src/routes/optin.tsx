import { createFileRoute } from "@tanstack/react-router";
import { LazyFunnelPage } from "@/funnel/LazyFunnelPage";

const title = "Smart&Start Italia · Ricevi il report";

export const Route = createFileRoute("/optin")({
  head: () => ({ meta: [{ title }] }),
  component: () => <LazyFunnelPage load={() => import("@/funnel/optin.page")} />,
});

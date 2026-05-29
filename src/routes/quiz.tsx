import { createFileRoute } from "@tanstack/react-router";
import { LazyFunnelPage } from "@/funnel/LazyFunnelPage";

const title = "Smart&Start Italia · Quiz di idoneità";

export const Route = createFileRoute("/quiz")({
  head: () => ({ meta: [{ title }] }),
  component: () => <LazyFunnelPage load={() => import("@/funnel/quiz.page")} />,
});

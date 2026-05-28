import { createFileRoute } from "@tanstack/react-router";
import { FunnelPage } from "@/funnel/FunnelPage";
import { title, head, body } from "@/funnel/booking.page";

export const Route = createFileRoute("/booking")({
  head: () => ({ meta: [{ title }] }),
  component: () => <FunnelPage head={head} body={body} />,
});

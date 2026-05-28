import { createFileRoute } from "@tanstack/react-router";
import { FunnelPage } from "@/funnel/FunnelPage";
import { title, head, body } from "@/funnel/optin.page";

export const Route = createFileRoute("/optin")({
  head: () => ({ meta: [{ title }] }),
  component: () => <FunnelPage head={head} body={body} />,
});

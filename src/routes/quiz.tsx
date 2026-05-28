import { createFileRoute } from "@tanstack/react-router";
import { FunnelPage } from "@/funnel/FunnelPage";
import { title, head, body } from "@/funnel/quiz.page";

export const Route = createFileRoute("/quiz")({
  head: () => ({ meta: [{ title }] }),
  component: () => <FunnelPage head={head} body={body} />,
});

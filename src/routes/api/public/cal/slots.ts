import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const EVENT_TYPE_ID = 5914095;
const TIME_ZONE = "Europe/Rome";

const QuerySchema = z.object({
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const Route = createFileRoute("/api/public/cal/slots")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const apiKey = process.env.CAL_API_KEY;
        if (!apiKey) {
          return Response.json(
            { error: "Calendar not configured" },
            { status: 500 }
          );
        }

        const url = new URL(request.url);
        const parsed = QuerySchema.safeParse({
          startDate: url.searchParams.get("startDate"),
          endDate: url.searchParams.get("endDate"),
        });
        if (!parsed.success) {
          return Response.json({ error: "Invalid range" }, { status: 400 });
        }

        const upstream = new URL("https://api.cal.com/v2/slots");
        upstream.searchParams.set("eventTypeId", String(EVENT_TYPE_ID));
        upstream.searchParams.set(
          "start",
          `${parsed.data.startDate}T00:00:00.000Z`
        );
        upstream.searchParams.set(
          "end",
          `${parsed.data.endDate}T23:59:59.999Z`
        );
        upstream.searchParams.set("timeZone", TIME_ZONE);

        const res = await fetch(upstream.toString(), {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "cal-api-version": "2024-09-04",
          },
        });

        if (!res.ok) {
          const text = await res.text();
          console.error("Cal slots upstream error", res.status, text);
          return Response.json({ slotsByDate: {} }, { status: 200 });
        }

        const json = (await res.json()) as {
          data?: Record<string, Array<{ start: string }>>;
        };

        const slotsByDate: Record<string, string[]> = {};
        for (const [date, slots] of Object.entries(json.data ?? {})) {
          slotsByDate[date] = slots.map((s) => s.start);
        }
        return Response.json({ slotsByDate });
      },
    },
  },
});

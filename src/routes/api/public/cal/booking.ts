import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const EVENT_TYPE_ID = 5914095;
const TIME_ZONE = "Europe/Rome";

const BodySchema = z.object({
  start: z.string().min(10).max(64),
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional(),
  notes: z.string().max(2000).optional(),
});

export const Route = createFileRoute("/api/public/cal/booking")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.CAL_API_KEY;
        if (!apiKey) {
          return Response.json(
            { error: "Calendar not configured" },
            { status: 500 }
          );
        }

        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return Response.json({ error: "Invalid body" }, { status: 400 });
        }

        const parsed = BodySchema.safeParse(raw);
        if (!parsed.success) {
          return Response.json({ error: "Invalid input" }, { status: 400 });
        }

        const { start, name, email, phone, notes } = parsed.data;

        const upstreamBody: Record<string, unknown> = {
          start,
          eventTypeId: EVENT_TYPE_ID,
          attendee: {
            name,
            email,
            timeZone: TIME_ZONE,
            language: "it",
            ...(phone ? { phoneNumber: phone } : {}),
          },
          ...(notes ? { bookingFieldsResponses: { notes } } : {}),
        };

        const res = await fetch("https://api.cal.com/v2/bookings", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "cal-api-version": "2024-08-13",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(upstreamBody),
        });

        const text = await res.text();
        if (!res.ok) {
          console.error("Cal booking upstream error", res.status, text);
          let msg = "Impossibile creare la prenotazione.";
          try {
            const j = JSON.parse(text) as {
              error?: { message?: string };
            };
            if (j?.error?.message) msg = j.error.message;
          } catch {
            // ignore
          }
          return Response.json({ error: msg }, { status: 400 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});

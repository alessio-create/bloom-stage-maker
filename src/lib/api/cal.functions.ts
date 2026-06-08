import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const EVENT_TYPE_ID = 5914095;
const EVENT_TYPE_SLUG = "15min";
const USERNAME = "euromedpartner";
const TIME_ZONE = "Europe/Rome";

function getApiKey(): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const key = (globalThis as any).process?.env?.CAL_API_KEY as
    | string
    | undefined;
  if (!key) throw new Error("CAL_API_KEY is not configured");
  return key;
}

export const getCalSlots = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      // ISO date strings: YYYY-MM-DD
      startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    })
  )
  .handler(async ({ data }) => {
    const apiKey = getApiKey();
    const url = new URL("https://api.cal.com/v2/slots");
    url.searchParams.set("eventTypeId", String(EVENT_TYPE_ID));
    url.searchParams.set("start", `${data.startDate}T00:00:00.000Z`);
    url.searchParams.set("end", `${data.endDate}T23:59:59.999Z`);
    url.searchParams.set("timeZone", TIME_ZONE);
    url.searchParams.set("format", "range");

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "cal-api-version": "2024-09-04",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Cal slots error", res.status, text);
      return { slotsByDate: {} as Record<string, string[]> };
    }

    const json = (await res.json()) as {
      data?: Record<
        string,
        Array<{ start: string; end?: string }>
      >;
    };

    const slotsByDate: Record<string, string[]> = {};
    const raw = json.data ?? {};
    for (const [date, slots] of Object.entries(raw)) {
      slotsByDate[date] = slots.map((s) => s.start);
    }
    return { slotsByDate };
  });

export const createCalBooking = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      start: z.string().min(1), // ISO datetime
      name: z.string().min(1).max(200),
      email: z.string().email().max(200),
      phone: z.string().max(40).optional(),
      notes: z.string().max(2000).optional(),
    })
  )
  .handler(async ({ data }) => {
    const apiKey = getApiKey();

    const body: Record<string, unknown> = {
      start: data.start,
      eventTypeId: EVENT_TYPE_ID,
      eventTypeSlug: EVENT_TYPE_SLUG,
      username: USERNAME,
      attendee: {
        name: data.name,
        email: data.email,
        timeZone: TIME_ZONE,
        language: "it",
        ...(data.phone ? { phoneNumber: data.phone } : {}),
      },
      ...(data.notes ? { bookingFieldsResponses: { notes: data.notes } } : {}),
      metadata: {},
    };

    const res = await fetch("https://api.cal.com/v2/bookings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "cal-api-version": "2024-08-13",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    let parsed: unknown = null;
    try {
      parsed = JSON.parse(text);
    } catch {
      // ignore
    }

    if (!res.ok) {
      console.error("Cal booking error", res.status, text);
      const message =
        (parsed as { error?: { message?: string } } | null)?.error?.message ??
        "Impossibile creare la prenotazione. Riprova.";
      return { ok: false as const, error: message };
    }

    return { ok: true as const };
  });

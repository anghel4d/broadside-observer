import { CanvasIdSchema, CardIdSchema, type CanvasId, type CardId, type Route } from "./schema.ts";

const CARD_HASH = /^#card\/(.+)$/u;
const CANVAS_HASH = /^#canvas\/(.+)$/u;

export function isCanvasHash(hash: string): boolean {
  return hash.startsWith("#canvas/");
}

function parseCanvasRoute(hash: string): Route | null {
  const match = CANVAS_HASH.exec(hash);
  const raw = match?.[1];
  if (raw === undefined) return isCanvasHash(hash) ? { _tag: "Catalog" } : null;
  try {
    const id = CanvasIdSchema.safeParse(decodeURIComponent(raw));
    return id.success ? { _tag: "Canvas", id: id.data } : { _tag: "Catalog" };
  } catch {
    return { _tag: "Catalog" };
  }
}

export function parseRoute(hash: string): Route {
  const canvas = parseCanvasRoute(hash);
  if (canvas !== null) return canvas;
  const match = CARD_HASH.exec(hash);
  const slug = match?.[1];
  if (slug === undefined) return { _tag: "Catalog" };
  const id = CardIdSchema.safeParse(decodeURIComponent(slug));
  return id.success ? { _tag: "Card", id: id.data } : { _tag: "Catalog" };
}

export function printRoute(route: Route): string {
  switch (route._tag) {
    case "Catalog":
      return "";
    case "Card":
      return `#card/${encodeURIComponent(route.id)}`;
    case "Canvas":
      return `#canvas/${encodeURIComponent(route.id)}`;
  }
}

export function routeId(route: Route): CardId | null {
  return route._tag === "Card" ? route.id : null;
}

export function canvasRouteId(route: Route): CanvasId | null {
  return route._tag === "Canvas" ? route.id : null;
}

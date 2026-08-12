import { CardIdSchema, type CardId, type Route } from "./schema.ts";

const CARD_HASH = /^#card\/(.+)$/u;

export function parseRoute(hash: string): Route {
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
  }
}

export function routeId(route: Route): CardId | null {
  return route._tag === "Card" ? route.id : null;
}

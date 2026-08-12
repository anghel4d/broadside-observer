import type { SeedCard, Topic } from "../domain/schema.ts";

/**
 * Topics to show next to a lineage chip. Drops duplicates and any topic
 * whose slug equals the lineage (e.g. `radiance-cascades` on both fields).
 */
export function displayTopics(card: Pick<SeedCard, "topics" | "lineage">): ReadonlyArray<Topic> {
  const seen = new Set<string>();
  if (card.lineage !== null) seen.add(card.lineage);
  const out: Topic[] = [];
  for (const topic of card.topics) {
    if (seen.has(topic)) continue;
    seen.add(topic);
    out.push(topic);
  }
  return out;
}

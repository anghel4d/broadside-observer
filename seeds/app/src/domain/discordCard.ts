import { SECTION_HEADING, SECTION_KEYS, type Cite, type SeedCard } from "./schema.ts";

/** Discord treats unpaired `*` / `_` / `~` / `` ` `` as formatting; escape them. */
export function escapeDiscordMarkdown(value: string): string {
  return value.replace(/([\\*_~`|])/gu, "\\$1");
}

function citeLine(cite: Cite): string {
  const bits = [escapeDiscordMarkdown(cite.title)];
  if (cite.year !== null) bits.push(String(cite.year));
  if (cite.url !== null) bits.push(cite.url);
  else if (cite.arxiv !== null) bits.push(`https://arxiv.org/abs/${cite.arxiv}`);
  else if (cite.doi !== null) bits.push(`https://doi.org/${cite.doi}`);
  return `- ${bits.join(" · ")}`;
}

function field(label: string, value: string | number | null): string | null {
  if (value === null) return null;
  const text = typeof value === "number" ? String(value) : value;
  if (text.length === 0) return null;
  return `**${label}:** ${escapeDiscordMarkdown(text)}`;
}

/** Entire card as Discord-safe markdown (no YAML, no MCP scaffolding). */
export function formatDiscordCard(card: SeedCard): string {
  const meta = [
    field("Authors", card.authors.join(", ")),
    field("Year", card.year),
    field("Venue", card.venue),
    field("Id", `#${card.seed_rank}`),
    field("Pool", card.pool),
    field("Lineage", card.lineage),
    field("Topics", card.topics.join(", ")),
    field("Relevance", card.relevance_score),
    field("Batch", card.seed_batch),
    field("Reviewed", card.reviewed),
    card.arxiv === null ? null : `**arXiv:** https://arxiv.org/abs/${card.arxiv}`,
    card.doi === null ? null : `**DOI:** https://doi.org/${card.doi}`,
    card.source.length === 0 ? null : `**Source:** ${card.source}`,
  ].filter((line): line is string => line !== null);

  const cites =
    card.cites.length === 0 ? [] : ["", "**Cites**", ...card.cites.map(citeLine)];
  const see =
    card.see.length === 0
      ? []
      : ["", "**See**", ...card.see.map((id) => `- \`${id}\``)];
  const sections = SECTION_KEYS.filter((key) => key !== "caveats").flatMap((key) => [
    "",
    `**${SECTION_HEADING[key]}**`,
    "",
    escapeDiscordMarkdown(card.sections[key]),
  ]);

  return [`# ${escapeDiscordMarkdown(card.title)}`, "", ...meta, ...cites, ...see, ...sections, ""].join(
    "\n",
  );
}

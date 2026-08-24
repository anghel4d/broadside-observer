import { parse as parseYamlValue } from "yaml";
import { assertNever } from "./never.ts";
import { chain, err, ok, type Result } from "./result.ts";
import {
  CardIdSchema,
  FrontmatterSchema,
  HEADING_TO_SECTION,
  SECTION_HEADING,
  SECTION_KEYS,
  SectionsSchema,
  issuesFromZod,
  type CardId,
  type Frontmatter,
  type ParseError,
  type SectionKey,
  type Sections,
  type SeedCard,
} from "./schema.ts";

export type CardSource = {
  readonly file: string;
  readonly markdown: string;
};

type FrontmatterBlock = {
  readonly yaml: string;
  readonly body: string;
};

function splitFrontmatter(source: CardSource): Result<ParseError, FrontmatterBlock> {
  const raw = source.markdown;
  if (!raw.startsWith("---")) {
    return err({ _tag: "MissingFrontmatter", file: source.file });
  }
  const close = raw.indexOf("\n---", 3);
  if (close === -1) {
    return err({ _tag: "MissingFrontmatter", file: source.file });
  }
  const yamlStart = raw.startsWith("---\r\n") ? 5 : 4;
  let body = raw.slice(close + 4);
  if (body.startsWith("\r\n")) body = body.slice(2);
  else if (body.startsWith("\n")) body = body.slice(1);
  return ok({ yaml: raw.slice(yamlStart, close), body });
}

function parseYaml(file: string, yaml: string): Result<ParseError, unknown> {
  try {
    return ok(parseYamlValue(quoteBareBibliographicIds(yaml)));
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    return err({ _tag: "YamlError", file, message });
  }
}

function wrapSingleton(value: unknown): unknown {
  return typeof value === "string" ? [value] : value;
}

function asNumber(value: unknown): unknown {
  if (typeof value === "string" && /^-?\d+$/u.test(value)) return Number(value);
  return value;
}

function asString(value: unknown): unknown {
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  return value;
}

function emptyToNull(value: unknown): unknown {
  return value === "" || value === undefined ? null : value;
}

/** Keep bare numeric arxiv/doi as text so YAML floats do not drop trailing zeros. */
function quoteBareBibliographicIds(yaml: string): string {
  return yaml.replace(
    /^([ \t]*(?:-[ \t]+)?(?:arxiv|doi):[ \t]*)([+-]?(?:\d+\.\d+|\d+\.|\.\d+|\d+)(?:[eE][+-]?\d+)?)[ \t]*$/gm,
    `$1"$2"`,
  );
}

function asCardStem(value: unknown): unknown {
  if (typeof value !== "string") return emptyToNull(value);
  const trimmed = value.trim();
  if (trimmed.length === 0) return null;
  return trimmed.replace(/\.md$/u, "");
}

function normalizeCite(raw: unknown): unknown {
  if (raw === null || typeof raw !== "object" || Array.isArray(raw)) return raw;
  const record = raw as Record<string, unknown>;
  return {
    ...record,
    title: record.title,
    url: emptyToNull(record.url),
    year: record.year === undefined || record.year === null || record.year === "" ? null : asNumber(record.year),
    arxiv: emptyToNull(asString(record.arxiv)),
    doi: emptyToNull(asString(record.doi)),
  };
}

function normalizeCites(value: unknown): unknown {
  if (value === undefined || value === null) return [];
  if (Array.isArray(value)) return value.map(normalizeCite);
  if (typeof value === "object") return [normalizeCite(value)];
  return value;
}

function normalizeSee(value: unknown): unknown {
  if (value === undefined || value === null) return [];
  if (typeof value === "string") {
    const stem = asCardStem(value);
    return typeof stem === "string" ? [stem] : [];
  }
  if (!Array.isArray(value)) return value;
  const stems: string[] = [];
  for (const item of value) {
    const stem = asCardStem(item);
    if (typeof stem === "string") stems.push(stem);
  }
  return stems;
}

/** Tolerant wire-format cleanup. Does not invent fields; only normalizes encodings. */
function normalizeFrontmatter(raw: unknown): unknown {
  if (raw === null || typeof raw !== "object" || Array.isArray(raw)) return raw;
  const record = raw as Record<string, unknown>;
  return {
    ...record,
    authors: wrapSingleton(record.authors),
    topics: wrapSingleton(record.topics),
    year: asNumber(record.year),
    seed_rank: asNumber(record.seed_rank),
    relevance_score:
      record.relevance_score === undefined ? null : asNumber(record.relevance_score),
    arxiv: emptyToNull(asString(record.arxiv)),
    doi: emptyToNull(asString(record.doi)),
    pool: record.pool === "" || record.pool === undefined ? null : record.pool,
    venue: record.venue ?? "",
    source: record.source ?? "",
    lineage: emptyToNull(record.lineage),
    cites: normalizeCites(record.cites),
    see: normalizeSee(record.see),
  };
}

function decodeFrontmatter(file: string, raw: unknown): Result<ParseError, Frontmatter> {
  const parsed = FrontmatterSchema.safeParse(normalizeFrontmatter(raw));
  if (!parsed.success) {
    return err({ _tag: "SchemaError", file, issues: issuesFromZod(parsed.error) });
  }
  return ok(parsed.data);
}

function isSectionHeading(value: string): value is keyof typeof HEADING_TO_SECTION {
  return Object.hasOwn(HEADING_TO_SECTION, value);
}

function parseSections(file: string, body: string): Result<ParseError, Sections> {
  const headingRe = /^## (.+)$/gm;
  const matches = [...body.matchAll(headingRe)];
  const found: Partial<Record<SectionKey, string[]>> = {};

  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    if (match === undefined || match.index === undefined) continue;
    const heading = match[1]?.trim() ?? "";
    if (!isSectionHeading(heading)) continue;
    const key = HEADING_TO_SECTION[heading];
    const start = match.index + match[0].length;
    const next = matches[index + 1];
    const end = next?.index ?? body.length;
    const text = body.slice(start, end).trim();
    const parts = found[key];
    if (parts === undefined) found[key] = [text];
    else parts.push(text);
  }

  const missing = SECTION_KEYS.filter((key) => found[key] === undefined).map(
    (key) => SECTION_HEADING[key],
  );
  if (missing.length > 0) {
    return err({ _tag: "MissingSections", file, headings: missing });
  }

  const joined: Record<SectionKey, string> = {
    takeaway: "",
    why: "",
    ideas: "",
    caveats: "",
    links: "",
  };
  for (const key of SECTION_KEYS) {
    const parts = found[key];
    if (parts === undefined) continue;
    joined[key] = parts.filter((part) => part.length > 0).join("\n\n");
  }

  const parsed = SectionsSchema.safeParse(joined);
  if (!parsed.success) {
    return err({ _tag: "SchemaError", file, issues: issuesFromZod(parsed.error) });
  }
  return ok(parsed.data);
}

function cardIdFromFile(file: string): Result<ParseError, CardId> {
  const stem = file.replace(/\.md$/u, "");
  const parsed = CardIdSchema.safeParse(stem);
  if (!parsed.success) {
    return err({ _tag: "SchemaError", file, issues: issuesFromZod(parsed.error) });
  }
  return ok(parsed.data);
}

/** Frontmatter, sections, and id were each decoded at their own boundary; the join is total. */
function assemble(file: string, id: CardId, frontmatter: Frontmatter, sections: Sections): SeedCard {
  return { ...frontmatter, id, file, sections };
}

/** `CardSource → ParseResult → SeedCard` */
export function parseCard(source: CardSource): Result<ParseError, SeedCard> {
  return chain(splitFrontmatter(source), (block) =>
    chain(parseYaml(source.file, block.yaml), (raw) =>
      chain(decodeFrontmatter(source.file, raw), (frontmatter) =>
        chain(parseSections(source.file, block.body), (sections) =>
          chain(cardIdFromFile(source.file), (id) => ok(assemble(source.file, id, frontmatter, sections))),
        ),
      ),
    ),
  );
}

export function uniqueIds(cards: ReadonlyArray<SeedCard>): Result<ParseError, ReadonlyArray<SeedCard>> {
  const seen = new Map<CardId, string>();
  for (const card of cards) {
    const previous = seen.get(card.id);
    if (previous !== undefined) {
      return err({ _tag: "DuplicateId", file: card.file, id: card.id });
    }
    seen.set(card.id, card.file);
  }
  return cards.length === 0 ? err({ _tag: "EmptyLibrary" }) : ok(cards);
}

export function formatParseError(error: ParseError): string {
  switch (error._tag) {
    case "MissingFrontmatter":
      return `${error.file}: missing YAML frontmatter`;
    case "YamlError":
      return `${error.file}: YAML error (${error.message})`;
    case "SchemaError":
      return `${error.file}: schema: ${error.issues.map((issue) => `${issue.path} ${issue.message}`).join("; ")}`;
    case "MissingSections":
      return `${error.file}: missing sections: ${error.headings.join(", ")}`;
    case "DuplicateId":
      return `${error.file}: duplicate id ${error.id}`;
    case "EmptyLibrary":
      return "no seed cards found";
  }
  return assertNever(error);
}

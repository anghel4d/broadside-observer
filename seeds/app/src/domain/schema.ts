import { z } from "zod";

export const SORT_KEYS = ["rank", "year", "title", "relevance"] as const;
export type SortKey = (typeof SORT_KEYS)[number];

export const SECTION_KEYS = ["takeaway", "why", "ideas", "caveats", "links"] as const;
export type SectionKey = (typeof SECTION_KEYS)[number];

export const SECTION_HEADING = {
  takeaway: "One-sentence takeaway",
  why: "Why it matters here",
  ideas: "Key ideas",
  caveats: "Caveats",
  links: "Links",
} as const satisfies Record<SectionKey, string>;

export const HEADING_TO_SECTION = {
  "One-sentence takeaway": "takeaway",
  "Why it matters here": "why",
  "Key ideas": "ideas",
  Caveats: "caveats",
  Links: "links",
} as const satisfies Record<(typeof SECTION_HEADING)[SectionKey], SectionKey>;

export const CardIdSchema = z.string().min(1).brand<"CardId">();
export type CardId = z.infer<typeof CardIdSchema>;

export const TopicSchema = z.string().min(1).brand<"Topic">();
export type Topic = z.infer<typeof TopicSchema>;

export const SeedBatchSchema = z.string().min(1).brand<"SeedBatch">();
export type SeedBatch = z.infer<typeof SeedBatchSchema>;

export const PoolSchema = z.string().min(1).brand<"Pool">();
export type Pool = z.infer<typeof PoolSchema>;

export const LineageSchema = z.string().min(1).brand<"Lineage">();
export type Lineage = z.infer<typeof LineageSchema>;

export const YearSchema = z.number().int().min(1000).max(3000).brand<"Year">();
export type Year = z.infer<typeof YearSchema>;

export const SeedRankSchema = z.number().int().brand<"SeedRank">();
export type SeedRank = z.infer<typeof SeedRankSchema>;

export const RelevanceScoreSchema = z.number().int().min(1).max(10).brand<"RelevanceScore">();
export type RelevanceScore = z.infer<typeof RelevanceScoreSchema>;

/** YAML may parse bare ids such as `1710.08840` as numbers. */
function coerceBibliographicId(value: unknown): unknown {
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  return value;
}

export const ArxivIdSchema = z.preprocess(
  coerceBibliographicId,
  z.string().min(1).brand<"ArxivId">(),
);
export type ArxivId = z.infer<typeof ArxivIdSchema>;

export const DoiSchema = z.preprocess(
  coerceBibliographicId,
  z.string().min(1).brand<"Doi">(),
);
export type Doi = z.infer<typeof DoiSchema>;

export const IsoDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "expected YYYY-MM-DD")
  .brand<"IsoDate">();
export type IsoDate = z.infer<typeof IsoDateSchema>;

/**
 * Bibliography-only cite. No nested library pointer (`card`); those live on frontmatter `see`.
 * Unknown YAML keys (including leftover `card:`) are stripped, not rejected.
 */
export const CiteSchema = z.object({
  title: z.string().min(1),
  url: z.string().min(1).nullable().default(null),
  year: YearSchema.nullable().default(null),
  arxiv: ArxivIdSchema.nullable().default(null),
  doi: DoiSchema.nullable().default(null),
});

export type Cite = z.infer<typeof CiteSchema>;

export const SectionsSchema = z.object({
  takeaway: z.string(),
  why: z.string(),
  ideas: z.string(),
  caveats: z.string(),
  links: z.string(),
} satisfies Record<SectionKey, z.ZodString>);

export type Sections = z.infer<typeof SectionsSchema>;

export const SeedCardSchema = z.object({
  title: z.string().min(1),
  authors: z.array(z.string().min(1)).min(1),
  year: YearSchema,
  venue: z.string(),
  arxiv: ArxivIdSchema.nullable(),
  doi: DoiSchema.nullable(),
  source: z.string(),
  topics: z.array(TopicSchema).min(1),
  seed_rank: SeedRankSchema,
  seed_batch: SeedBatchSchema,
  reviewed: IsoDateSchema,
  pool: PoolSchema.nullable(),
  relevance_score: RelevanceScoreSchema.nullable(),
  lineage: LineageSchema.nullable().default(null),
  cites: z.array(CiteSchema).default([]),
  see: z.array(CardIdSchema).default([]),
  id: CardIdSchema,
  file: z.string().min(1),
  sections: SectionsSchema,
});

export type SeedCard = z.infer<typeof SeedCardSchema>;

/**
 * YAML-only projection of a card. `id` and `file` come from the filename and
 * `sections` from the `##` body, so none of the three exist at the YAML boundary.
 */
export const FrontmatterSchema = SeedCardSchema.omit({ id: true, file: true, sections: true });

export type Frontmatter = z.infer<typeof FrontmatterSchema>;

export const CatalogSchema = z
  .object({
    generatedAt: z.string().min(1),
    count: z.number().int().nonnegative(),
    cards: z.array(SeedCardSchema),
    lineageDocs: z.array(LineageSchema).default([]),
  })
  .refine((catalog) => catalog.count === catalog.cards.length, {
    message: "count must equal cards.length",
    path: ["count"],
  });

export type Catalog = z.infer<typeof CatalogSchema>;

export type TopicFilter = { readonly _tag: "All" } | { readonly _tag: "One"; readonly topic: Topic };
export type BatchFilter =
  | { readonly _tag: "All" }
  | { readonly _tag: "One"; readonly batch: SeedBatch };
export type PoolFilter =
  | { readonly _tag: "All" }
  | { readonly _tag: "None" }
  | { readonly _tag: "One"; readonly pool: Pool };

export type LineageFilter =
  | { readonly _tag: "All" }
  | { readonly _tag: "None" }
  | { readonly _tag: "One"; readonly lineage: Lineage };

export type YearRange = {
  readonly min: Year | null;
  readonly max: Year | null;
};

export type Query = {
  readonly search: string;
  readonly topic: TopicFilter;
  readonly batch: BatchFilter;
  readonly pool: PoolFilter;
  readonly lineage: LineageFilter;
  readonly year: YearRange;
  readonly sort: SortKey;
  readonly sortReversed: boolean;
};

export const defaultQuery: Query = {
  search: "",
  topic: { _tag: "All" },
  batch: { _tag: "All" },
  pool: { _tag: "All" },
  lineage: { _tag: "All" },
  year: { min: null, max: null },
  sort: "rank",
  sortReversed: false,
};

export type Route = { readonly _tag: "Catalog" } | { readonly _tag: "Card"; readonly id: CardId };

export type SchemaIssue = {
  readonly path: string;
  readonly message: string;
};

export type ParseError =
  | { readonly _tag: "MissingFrontmatter"; readonly file: string }
  | { readonly _tag: "YamlError"; readonly file: string; readonly message: string }
  | { readonly _tag: "SchemaError"; readonly file: string; readonly issues: ReadonlyArray<SchemaIssue> }
  | {
      readonly _tag: "MissingSections";
      readonly file: string;
      readonly headings: ReadonlyArray<string>;
    }
  | { readonly _tag: "DuplicateId"; readonly file: string; readonly id: CardId }
  | { readonly _tag: "EmptyLibrary" };

export function issuesFromZod(error: z.ZodError): ReadonlyArray<SchemaIssue> {
  return error.issues.map((issue) => ({
    path: issue.path.length > 0 ? issue.path.map(String).join(".") : "(root)",
    message: issue.message,
  }));
}

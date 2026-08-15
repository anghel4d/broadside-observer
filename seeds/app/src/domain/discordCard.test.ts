import assert from "node:assert/strict";
import { escapeDiscordMarkdown, formatDiscordCard } from "./discordCard.ts";
import { SeedCardSchema } from "./schema.ts";

assert.equal(escapeDiscordMarkdown("a *b* _c_ `d` ~e~ | f\\g"), "a \\*b\\* \\_c\\_ \\`d\\` \\~e\\~ \\| f\\\\g");

const card = SeedCardSchema.parse({
  id: "013-attention-is-all-you-need",
  file: "013-attention-is-all-you-need.md",
  title: "Attention *Is* All You Need",
  authors: ["Ashish Vaswani", "Noam Shazeer"],
  year: 2017,
  venue: "NeurIPS",
  arxiv: "1706.03762",
  doi: null,
  source: "https://arxiv.org/abs/1706.03762",
  topics: ["transformer", "foundations"],
  seed_rank: 13,
  seed_batch: "prefill-2026-08-13",
  reviewed: "2026-08-13",
  pool: "agents",
  relevance_score: 10,
  lineage: "transformer",
  cites: [
    {
      title: "FlashAttention",
      url: "https://arxiv.org/abs/2205.14135",
      year: 2022,
      arxiv: "2205.14135",
      doi: null,
    },
  ],
  see: ["089-flashattention-fast-and-memory-efficient-exact-attention-wit"],
  sections: {
    takeaway: "Transformers *dispense* with recurrence.",
    why: "Foundational substrate.",
    ideas: "- Attention only.",
    caveats: "Seed card.",
    links: "https://arxiv.org/abs/1706.03762",
  },
});

const markdown = formatDiscordCard(card);
assert.match(markdown, /^# Attention \\\*Is\\\* All You Need\n/u);
assert.match(markdown, /\*\*Authors:\*\* Ashish Vaswani, Noam Shazeer/u);
assert.match(markdown, /\*\*arXiv:\*\* https:\/\/arxiv\.org\/abs\/1706\.03762/u);
assert.match(markdown, /\*\*Cites\*\*\n- FlashAttention · 2022 · https:\/\/arxiv\.org\/abs\/2205\.14135/u);
assert.match(markdown, /\*\*See\*\*\n- `089-flashattention-fast-and-memory-efficient-exact-attention-wit`/u);
assert.match(markdown, /\*\*One-sentence takeaway\*\*\n\nTransformers \\\*dispense\\\* with recurrence\./u);
assert.doesNotMatch(markdown, /^---$/mu);
assert.doesNotMatch(markdown, /Retrieved full seed card/u);
assert.ok(markdown.endsWith("\n"));

console.log("discordCard.test.ts ok");

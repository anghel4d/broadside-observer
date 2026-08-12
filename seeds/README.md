# Seed digests

Compact historical / foundation cards from the Broadside seeding pass.
These are intentionally denser than bookmarks and lighter than full analytical digests in `summaries/`.

## Card format

```yaml
---
title: "..."
authors: ["..."]
year: 1994
venue: "..."
arxiv: null          # or id
doi: null
source: "https://..."
topics: [region-memory-capabilities]
seed_rank: 1         # 1 = strongest for Anghel/Anoptic/ano
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
---
```

Body sections:

1. `## One-sentence takeaway`
2. `## Why it matters here` — concrete bridge to Anoptic / ano / GRID COMMAND / Broadside
3. `## Key ideas` — 3–6 bullets, specific
4. `## Caveats` — what not to overclaim
5. `## Links` — PDF/HTML/DOI/arXiv

Promote a seed to `summaries/NN-slug.md` when it deserves a deep read.

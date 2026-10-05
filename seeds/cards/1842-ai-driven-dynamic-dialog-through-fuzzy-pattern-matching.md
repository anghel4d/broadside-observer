---
title: "AI-driven Dynamic Dialog through Fuzzy Pattern Matching"
authors:
  - "Elan Ruskin"
year: 2012
venue: "Game Developers Conference (GDC) 2012 — Valve"
arxiv: null
doi: null
source: "https://cdn.akamai.steamstatic.com/apps/valve/2012/GDC2012_Ruskin_Elan_DynamicDialog.pdf"
topics:
  - production-rules
  - game-dialog
  - rule-matching
  - blackboard-facts
  - game-ai
seed_rank: 1842
seed_batch: "archive-2026-10-06"
reviewed: "2026-10-06"
pool: "game-ai"
relevance_score: 10
lineage: production-rules-triggers
cites:
  - title: "AI-driven Dynamic Dialog through Fuzzy Pattern Matching. Empower Your Writers! (GDC Vault)"
    url: "https://www.gdcvault.com/play/1015317/AI-driven-Dynamic-Dialog-through"
    year: 2012
    arxiv: null
    doi: null
---

# AI-driven Dynamic Dialog through Fuzzy Pattern Matching

## One-sentence takeaway

Valve's response-rule system: flatten all relevant world, character and memory state into a key–value query, match it against a database of writer-authored rules whose criteria are simple comparisons, and play the response of the matching rule with the most criteria — specificity as the only conflict-resolution policy.

## Why it matters here

This is a production system shipped at scale — per the talk, the same mechanism drove dialog in The Orange Box, Left 4 Dead, Portal and Dota, growing out of Team Fortress 2's contextual speech — and written so non-programmers own the rules. GRID COMMAND barks, advisor callouts, mission triggers and ano standing rules want exactly this shape: a flat fact bag per query, data-only rules, write-back "memory" facts, and buckets that keep matching under a microsecond — a pragmatic counterpart to Rete 042 / TREAT 1004 and to Orkin's planner 022.

## Key ideas

- **Facts, criteria, rules, responses.** A fact (context) is a key name plus variant value; a query is an associative array of facts gathered from the event, the speaker, the speaker's memory table and the world; a criterion tests one fact; a rule is a tuple of criteria that must all pass; a response is a line, animation or script hook.
- **Specificity wins.** Many rules can match; the scoring function that worked best was the simplest — count the criteria. General lines sit underneath increasingly specific exceptions without explicit priorities.
- **Memory by write-back.** A rule's "then" clause can write facts back to the character or world (e.g. a seen_barrels counter), which are appended to later queries — first, second, nth reactions without code.
- **Not a relational table.** A row-per-rule/column-per-criterion design would be thousands of mostly-NULL columns; criteria are represented as numeric comparisons (intervals), with an epsilon trick for strict vs non-strict bounds on floats.
- **Fast enough by partitioning.** Bucket rules by constant predicates (speaker, concept, map) via a hash of the concatenated keys; ~50 rules per bucket with ~8 criteria each matches in under a microsecond; per-region rule and fact databases stream with level data; search a bucket in decreasing score order and stop at the first match. R-trees/PCA-style indexing was judged not worth the cache cost.
- **Writers in Notepad/Excel.** New lines are a few lines of rule text; Left 4 Dead shipped over ten thousand lines of dialog through this system.

## Caveats

A GDC talk with speaker notes, not a peer-reviewed paper: performance figures are the speaker's own estimates with no benchmark methodology. "Fuzzy" means best-specific-match, not fuzzy logic. No incremental (Rete-style) match state — every query re-evaluates a bucket, which is fine only because buckets are kept small. Videos referenced in the slides are hosted separately. Year is 2012, the late edge of the Archive band; kept because it is the canonical game-production rule-matching reference and absent from the library.

## Links

- Slides with speaker notes (Valve CDN PDF): https://cdn.akamai.steamstatic.com/apps/valve/2012/GDC2012_Ruskin_Elan_DynamicDialog.pdf
- GDC Vault talk page: https://www.gdcvault.com/play/1015317/AI-driven-Dynamic-Dialog-through

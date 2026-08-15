---
title: TypeScript Design Goals
authors:
- Microsoft TypeScript Team
year: 2014
venue: TypeScript Wiki
arxiv: null
doi: null
source: "https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals"
topics:
- typescript
- design
- type-safety
seed_rank: 900
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites: []
---

# TypeScript Design Goals

## One-sentence takeaway

The official TypeScript design goals and non-goals say the language must accept all JavaScript, erase types, and treat soundness as secondary to tooling and productivity.

## Why it matters here

Primary-source foil for the whole gradual shelf: production TypeScript *rejects* the gradual guarantee on purpose. Quote this when someone asks why Anoptic should not treat `tsc` as a sound checker.

## Key ideas

- Goals: be a typed superset of JS, compile to clean JS, support large-scale JS, emit no runtime type machinery by default, and give editor-grade tooling.
- Non-goals explicitly include applying a sound type system and introducing a full dependent/refinement layer.
- Erasure is a compatibility constraint (run on every JS engine, preserve `===` identity) as much as a performance choice.
- Living wiki page, not a paper; pin the URL. The current GitHub org slug is `microsoft/TypeScript` (the old `Microsoft/TypeScript` wiki URL still redirects).
- Together with Understanding TypeScript (card 899) this is the citable reason Safe TypeScript had to be a separate dialect.

## Caveats

## Links

- Wiki: https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals

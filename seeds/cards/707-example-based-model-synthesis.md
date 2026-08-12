---

title: "Example-Based Model Synthesis"
authors:
  - "Paul Merrell"
year: 2007
venue: "i3D"
arxiv: null
doi: "10.1145/1230100.1230119"
source: "https://doi.org/10.1145/1230100.1230119"
topics:
  - pcg
  - model-synthesis
seed_rank: 707
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: procedural-generation
cites:
  - title: "Wave Function Collapse"
    url: "https://github.com/mxgmn/WaveFunctionCollapse"
    year: 2016
    arxiv: null
    doi: null
    card: "119-wave-function-collapse"
  - title: "Procedural Content Generation in Games"
    url: "https://doi.org/10.1007/978-3-319-42716-4"
    year: 2016
    arxiv: null
    doi: null
    card: "118-procedural-content-generation-in-games"
---
# Example-Based Model Synthesis

## One-sentence takeaway

Constraint-based exemplar synthesis that Wave Function Collapse later popularized.

## Why it matters here

Corrects the WFC origin story: Merrell 2007 is the algorithmic parent Anoptic PCG should cite.

## Key ideas

- Local neighborhoods match an example model.
- Global conflict search before committing.
- Divide-and-conquer subproblems.
- WFC (Gumin 2016) is a widely adopted variant.

## Caveats

- Original focus more 3D than pixel-art tooling.
- Large outputs need careful backtracking strategies.
- Seed card from shallow lineage pass; promote before relying on fine-grained claims.

## Links

- DOI: [10.1145/1230100.1230119](https://doi.org/10.1145/1230100.1230119)
- URL: https://doi.org/10.1145/1230100.1230119
- https://paulmerrell.org/model-synthesis/

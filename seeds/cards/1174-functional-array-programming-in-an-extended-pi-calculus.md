---
title: "Functional Array Programming in an Extended Pi-Calculus"
authors:
  - "Hans Hüttel"
  - "Lars Jensen"
  - "Chris Oliver Paulsen"
  - "Julian Teule"
year: 2024
venue: "EXPRESS/SOS 2024 (EPTCS)"
arxiv: "2411.14579"
doi: "10.4204/EPTCS.412.2"
source: "https://arxiv.org/abs/2411.14579"
topics:
  - array-programming-apl-bqn-q
  - embedded-scripting-dsls
seed_rank: 4
seed_batch: "curiosity-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
cites:
  - title: "Comparing Parallel Functional Array Languages: Programming and Performance"
    url: "https://doi.org/10.1145/3652598.3652618"
    year: 2024
    arxiv: null
    doi: null
    card: "205-comparing-parallel-functional-array-languages-programming-an"
  - title: "A Calculus of Communicating Systems"
    url: "https://doi.org/10.1007/3-540-10235-3"
    year: 1980
    arxiv: null
    doi: null
    card: "044-a-calculus-of-communicating-systems"
  - title: "Communicating Sequential Processes"
    url: "https://doi.org/10.1145/359576.359585"
    year: 1978
    arxiv: null
    doi: null
    card: "047-communicating-sequential-processes"
  - title: "Notation as a Tool of Thought"
    url: "https://doi.org/10.1145/358896.358899"
    year: 1980
    arxiv: null
    doi: "10.1145/358896.358899"
    card: "046-notation-as-a-tool-of-thought"
---

# Functional Array Programming in an Extended Pi-Calculus

## One-sentence takeaway

BUTF, a Futhark-inspired data-parallel array language, translates soundly and completely into π-calculus with broadcasting and labelled names, with a cost model on the translation.

## Why it matters here

Why you might love this: array programs as processes. Futhark-shaped bulk maps become broadcast π, which is a weirdly precise picture of what a lock-free Anoptic job bus *is* when it runs an ano kernel — names, labels, and a cost model instead of "and then the GPU does a map." Process calculus meets array language without going through the usual sequential λ.

## Key ideas

- Source language BUTF is deliberately Futhark-like (data-parallel, functional arrays).
- Target is π-calculus extended with broadcasting and labelled names.
- Translation is complete and sound (not a sketch).
- Annotated processes give a cost model used for complexity of the translation itself.
- Makes data-parallelism a mobility/broadcast phenomenon rather than a combinator rewrite.

## Caveats

- EXPRESS/SOS workshop paper; BUTF is a core calculus, not Futhark-the-compiler.
- Cost model is on the *translation*, not a claim about GPU occupancy.
- Broadcast π is an idealisation of Anoptic's buses — do not equate them.

## Links

- arXiv: [2411.14579](https://arxiv.org/abs/2411.14579)
- DOI: [10.4204/EPTCS.412.2](https://doi.org/10.4204/EPTCS.412.2)
- PDF: https://arxiv.org/pdf/2411.14579

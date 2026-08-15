---
title: "A Correspondence Between ALGOL 60 and Church's Lambda-Notation"
authors:
  - "Peter J. Landin"
year: 1965
venue: "Communications of the ACM (two parts)"
arxiv: null
doi: "10.1145/363744.363749"
source: "https://doi.org/10.1145/363744.363749"
topics:
  - algol
  - lambda
  - landin
  - semantics
seed_rank: 618
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Report on the Algorithmic Language ALGOL 60"
    url: "https://doi.org/10.1145/367236.367262"
    year: 1960
    arxiv: null
    doi: "10.1145/367236.367262"
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
  - title: "The Calculi of Lambda-Conversion"
    url: "https://press.princeton.edu/books/paperback/9780691083940/the-calculi-of-lambda-conversion"
    year: 1941
    arxiv: null
    doi: null
see:
  - "623-report-on-the-algorithmic-language-algol-60"
  - "617-the-mechanical-evaluation-of-expressions"
  - "511-the-calculi-of-lambda-conversion"
---

# A Correspondence Between ALGOL 60 and Church's Lambda-Notation

## One-sentence takeaway

Landin translates Algol 60 phrases into λ-terms (with an explicit environment and store), showing the imperative language has an applied-λ heart.

## Why it matters here

Methodology card: give the surface language a correspondence, then evaluate the λ with SECD. Same move one wants for ano — a small core plus a translation, not a one-off interpreter.

## Key ideas

- Part 1 (CACM 8(2), DOI 10.1145/363744.363749) sets up applicative expressions and the translation of expressions / declarations.
- Part 2 (CACM 8(3), DOI 10.1145/363791.363804) treats jumps, assignments, and the store.
- Sharing / L-values appear as explicit locations in the λ encoding rather than as magic in the evaluator.
- The correspondence is the semantic method later cleaned up by Scott–Strachey denotationally.

## Caveats

## Links

- Part 1 DOI: [10.1145/363744.363749](https://doi.org/10.1145/363744.363749)
- Part 2 DOI: [10.1145/363791.363804](https://doi.org/10.1145/363791.363804)

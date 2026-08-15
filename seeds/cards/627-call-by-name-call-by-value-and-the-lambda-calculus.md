---
title: "Call-by-name, call-by-value and the λ-calculus"
authors:
  - "G. D. Plotkin"
year: 1975
venue: "Theoretical Computer Science"
arxiv: null
doi: "10.1016/0304-3975(75)90017-1"
source: "https://doi.org/10.1016/0304-3975(75)90017-1"
topics:
  - lambda-calculus
  - operational-semantics
  - plotkin
  - cbv-cbn
seed_rank: 627
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "The Calculi of Lambda-Conversion"
    url: "https://press.princeton.edu/books/paperback/9780691083940/the-calculi-of-lambda-conversion"
    year: 1941
    arxiv: null
    doi: null
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
  - title: "Toward a Mathematical Semantics for Computer Languages"
    url: "https://www.cs.ox.ac.uk/files/3228/PRG06.pdf"
    year: 1971
    arxiv: null
    doi: null
see:
  - "511-the-calculi-of-lambda-conversion"
  - "617-the-mechanical-evaluation-of-expressions"
  - "612-toward-a-mathematical-semantics-for-computer-languages"
---

# Call-by-name, call-by-value and the λ-calculus

## One-sentence takeaway

Plotkin isolates two λ-calculi — β-reduction (call-by-name) and a value-restricted β_v (call-by-value) — and proves each is in correspondence with its natural evaluation machine.

## Why it matters here

Already cited by the Moggi monad cards: this is the paper that makes CBV vs CBN a *calculus* distinction, not a slogan. Ano evaluation order and any effectful language (Moggi, Levy CBPV) start from these two theories.

## Key ideas

- Call-by-name matches the ordinary λ-calculus; call-by-value needs a calculus that only substitutes *values*.
- Operational machines (SECD-style) are shown equivalent to the corresponding calculi (Plotkin correspondence / “adequacy”).
- Continuation-passing translations relate the two conventions.
- *TCS* 1 (1975), pp. 125–159 — the operational-semantics half of the PCF/LCF era.

## Caveats

## Links

- DOI: [10.1016/0304-3975(75)90017-1](https://doi.org/10.1016/0304-3975(75)90017-1)

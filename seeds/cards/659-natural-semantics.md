---
title: "Natural Semantics"
authors:
  - "Gilles Kahn"
year: 1987
venue: "STACS / LNCS 247"
arxiv: null
doi: "10.1007/BFb0039592"
source: "https://doi.org/10.1007/BFb0039592"
topics:
  - natural-semantics
  - big-step
  - kahn
  - operational-semantics
seed_rank: 659
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "A Structural Approach to Operational Semantics"
    url: "https://doi.org/10.1016/j.jlap.2004.05.001"
    year: 1981
    arxiv: null
    doi: "10.1016/j.jlap.2004.05.001"
  - title: "Call-by-Name, Call-by-Value and the λ-Calculus"
    url: "https://doi.org/10.1016/0304-3975(75)90017-1"
    year: 1975
    arxiv: null
    doi: "10.1016/0304-3975(75)90017-1"
see:
  - "658-a-structural-approach-to-operational-semantics"
  - "627-call-by-name-call-by-value-and-the-lambda-calculus"
---

# Natural Semantics

## One-sentence takeaway

Kahn's natural semantics writes evaluation as natural-deduction-style inference: a judgment `ρ ⊢ e ⇒ v` is derived in one big step from the values of the subexpressions.

## Why it matters here

Interpreter-shaped language defs (ano REPL, GRID COMMAND order evaluators) want this big-step style; Plotkin SOS is the small-step twin, not a synonym. The old card DOI pointed at a different STACS 87 chapter.

## Key ideas

- Evaluation relations look like sequent/natural-deduction rules; environments and stores sit on the left of the turnstile.
- Deterministic expression languages get a compact definition; divergence is the absence of a derivation, which is why later safety proofs often switch back to SOS.
- Typset and related INRIA tools treated these rules as an executable specification.
- STACS 87, LNCS 247, pp. 22–39, DOI 10.1007/BFb0039592 (not `10.1007/3-540-17220-3_2`). Also INRIA RR 601.

## Caveats

## Links

- DOI: [10.1007/BFb0039592](https://doi.org/10.1007/BFb0039592)

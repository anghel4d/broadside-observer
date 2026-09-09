---
title: "Local Type Inference"
authors:
  - "Benjamin C. Pierce"
  - "David N. Turner"
year: 2000
venue: "ACM TOPLAS 22(1)"
arxiv: null
doi: "10.1145/291891.291892"
source: "https://www.cis.upenn.edu/~bcpierce/papers/lti-toplas.pdf"
topics:
  - local-type-inference
  - subtyping
  - impredicative-polymorphism
seed_rank: 1664
seed_batch: "archive-2026-09-10"
reviewed: "2026-09-10"
pool: "languages"
relevance_score: 10
lineage: pierce-turner-local-type-inference
cites:
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
  - title: "Principal Type-Schemes for Functional Programs"
    url: "https://doi.org/10.1145/582153.582176"
    year: 1982
    arxiv: null
    doi: "10.1145/582153.582176"
see:
  - "629-a-theory-of-type-polymorphism-in-programming"
  - "640-principal-type-schemes-for-functional-programs"
  - "901-local-type-inference-for-javascript-flow"
---

# Local Type Inference

## One-sentence takeaway

Pierce and Turner recover missing type annotations using only neighbouring syntax (local constraint generation + bidirectional checking), so languages with subtyping and impredicative polymorphism can drop most annotations without a global Hindley–Milner unification pass.

## Why it matters here

ano and any gradually-typed scripting surface want “infer what is obvious, ask for what is not.” Local type inference is that contract — and it is what Flow (901) and many modern bidirectional checkers still cite. Complements Milner 629 / Damas–Milner 640 without reminting them or Flow 901.

## Key ideas

- **Locality.** Each term’s missing types are solved from adjacent nodes only; no whole-program unification variables leaking across modules.
- **Two algorithms.** The paper studies related partial-inference schemes for a language that mixes subtyping with impredicative polymorphism — the hard corner HM alone does not cover.
- **Annotation economy.** Programmers write top-level and polymorphic binders; the checker fills the obvious applications and synthesizes downward.
- **Bridge to bidirectional typing.** Synthesis vs checking modes in today’s systems are the pedagogical descendants of this local discipline.

## Caveats

- Not full HM principal-type inference — some programs still need annotations, by design. Do not remint Milner 629, Damas 640, or Flow’s “Local Type Inference for JavaScript” 901.
- POPL 1998 short version exists; this mint is the 2000 TOPLAS archival article with full proofs.
- Colored local type inference (Odersky et al.) is a near-keeper left for a later pass.

## Links

- Author PDF (Pierce): https://www.cis.upenn.edu/~bcpierce/papers/lti-toplas.pdf
- DOI: https://doi.org/10.1145/291891.291892
- POPL companion PDF: https://www.cis.upenn.edu/~bcpierce/papers/lti.pdf

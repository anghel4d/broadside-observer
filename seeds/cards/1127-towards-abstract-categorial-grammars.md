---
title: "Towards Abstract Categorial Grammars"
authors: ["Philippe de Groote"]
year: 2001
venue: "ACL"
arxiv: null
doi: "10.3115/1073012.1073045"
source: "https://aclanthology.org/P01-1033/"
topics: [curiosity]
seed_rank: 1127
seed_batch: "curiosity-2026-08-21"
reviewed: "2026-08-21"
pool: "languages"
relevance_score: 9
lineage: abstract-categorial-grammars
cites:
  - title: "The mathematics of sentence structure"
    url: "https://doi.org/10.2307/2268615"
    year: 1958
    arxiv: null
    doi: "10.2307/2268615"
  - title: "Linear Logic"
    url: "https://doi.org/10.1016/0304-3975(87)90045-4"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90045-4"
  - title: "Hybrid Type-Logical Grammars, First-Order Linear Logic and the Descriptive Inadequacy of Lambda Grammars"
    url: "https://arxiv.org/abs/1405.6678"
    year: 2014
    arxiv: "1405.6678"
    doi: null
  - title: "Two-level morphology"
    url: "https://aclanthology.org/J83-3003/"
    year: 1983
    arxiv: null
    doi: null
see:
  - "163-the-mathematics-of-sentence-structure"
  - "040-linear-logic"
  - "1073-two-level-morphology"
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
---

# Towards Abstract Categorial Grammars

## One-sentence takeaway

A grammar is two homomorphisms out of a linear \(\lambda\)-calculus of abstract proofs: one realises object syntax, the other realises semantics — Lambek, CCG, and Montague as instances of the same linear-logic picture.

## Why it matters here

Why you might love this: Japanese/CL as a *linear* type theory, not as a parser hack. Abstract types are formulae of linear logic; a lexical item is a linear \(\lambda\)-term (a proof); surface strings and Montague terms are two interpretations of the same proof. Word order, discontinuities, and semantic composition become the same homomorphism. Bridge: Broadside already has Lambek (163), linear logic (040), and two-level morphology (1073); ACG is the missing "two homomorphisms" — the same move 2LTT makes for types, made for language. Anoptic dialogue / ano rewriting can treat an utterance as a linear proof with two readings.

## Key ideas

- Abstract Categorial Grammar \(=\;(\Sigma_{\mathrm{abs}},\Sigma_{\mathrm{obj}},\mathcal{L})\) where \(\mathcal{L}\) is a lexicon of linear \(\lambda\)-terms of \(\Sigma_{\mathrm{abs}}\to\Sigma_{\mathrm{obj}}\). A second homomorphism gives the semantic algebra.
- Linear implication \(A\multimap B\) is the only constructor needed at the abstract layer; concatenation, wrapping, and inversion are object-level encodings.
- Recovers Lambek calculus (via the syntactic homomorphism), combinatory categorial grammar, and Montague's PTQ architecture as instances, without committing to a residuated-category surface syntax.
- The 2001 ACL paper is the founding note (8 pages); later ACG parsing complexity and the Moot critique of \(\lambda\)-grammars are cited, not minted.

## Caveats

- Founding note, not the full theory: later de Groote–Pogodalla / Kanazawa developments and NP-completeness via the embedding into first-order linear logic (Moot 1405.6678) are the technical backbone.
- Moot argues \(\lambda\)-grammars / ACG overgenerate and mishandle the syntax–semantics interface relative to hybrid type-logical grammars; that critique is the honest caveat, not a remint.
- Not a neural parser, not CCG supertagging, not pregroups (already rejected last cycle).

## Links

- ACL Anthology: [P01-1033](https://aclanthology.org/P01-1033/)
- PDF: [P01-1033.pdf](https://aclanthology.org/P01-1033.pdf)
- DOI: [10.3115/1073012.1073045](https://doi.org/10.3115/1073012.1073045)

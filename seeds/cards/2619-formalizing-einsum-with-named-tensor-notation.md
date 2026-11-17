---
title: "Formalizing einsum with Named Tensor Notation"
authors:
  - "Yafei Yang"
  - "Chung-chieh Shan"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.19505"
doi: null
source: "https://arxiv.org/abs/2611.19505"
version_reviewed: "v1"
topics:
  - "array-languages"
  - "einsum"
  - "named-tensors"
  - "denotational-semantics"
  - "lean-formalization"
seed_rank: 2619
seed_batch: "craft-2026-11-17"
reviewed: "2026-11-17"
pool: "languages"
relevance_score: 8
see:
  - "953-einops-clear-and-reliable-tensor-manipulations"
cites:
  - title: "Formalizing einsum with Named Tensor Notation"
    url: "https://arxiv.org/abs/2611.19505"
    year: 2026
    arxiv: "2611.19505"
    doi: null
---

# Formalizing einsum with Named Tensor Notation

## One-sentence takeaway

A denotational semantics for a small tensor language with einsum and expand, mechanized in Lean (and partly Agda), verifies performance-improving rewrite rules; using named tensors (shape is a finite map from axis names to sizes) instead of positional shapes made the mechanization much easier.

## Why it matters here

ano needs array rewrites it can trust (fusion, reordering, broadcast elimination) and is designing how axes are addressed. This paper reports that named axes are easier to reason about formally than positional ones, which is evidence for the named-axis side of that choice, and it gives verified einsum/expand equations to borrow as optimizer rules.

## Key ideas

- **Language.** Tensors (multi-dimensional arrays) with einsum and expand (repeated tensors).
- **Named shapes.** A shape is a finite map from names to naturals, not a sequence; the authors found this works better for mechanization.
- **Verified rewrites.** Equational rules about einsum and expand that improve tensor computation performance are proved against the semantics.
- **First mechanization.** The authors report it is the first proof-assistant semantics of einsum; it is proof-assistant agnostic (Lean, partly Agda).

## Caveats

Abstract-level read of the 14-page v1 preprint (14 Nov 2026). The rule set is not listed in the abstract, and there is no compiler or performance evaluation; the rewrites are proved sound, not measured.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.19505
- PDF: https://arxiv.org/pdf/2611.19505

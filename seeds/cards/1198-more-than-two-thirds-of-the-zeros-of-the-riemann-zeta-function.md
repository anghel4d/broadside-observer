---
title: "More than two thirds of the zeros of the Riemann zeta function are simple and on the critical line"
authors:
  - "Levent Alpoge"
  - "Ralph Furman"
year: 2026
venue: "arXiv preprint"
arxiv: "2608.13637"
doi: null
source: "https://arxiv.org/abs/2608.13637"
topics:
  - "number-theory"
  - "mathematical-reasoning"
  - "formal-verification"
seed_rank: 1198
seed_batch: "alpoge-math-2026-08-24"
reviewed: "2026-08-24"
pool: "maths-foundations"
relevance_score: 10
lineage: ai-mathematical-reasoning
cites:
  - title: "The pair correlation of zeros of the zeta function"
    url: null
    year: 1973
    arxiv: null
    doi: null
  - title: "An unconditional Montgomery theorem for pair correlation of zeros of the Riemann zeta-function"
    url: "https://arxiv.org/abs/2309.02434"
    year: 2024
    arxiv: "2309.02434"
    doi: null
see:
  - "1197-the-3-4-infinity-modular-family-of-2-tori-completed-at-its-thr"
---

# More than two thirds of the zeros of the Riemann zeta function are simple and on the critical line

## One-sentence takeaway

Claude-discovered, Alpoge-Furman-verified, Lean-checked: unconditionally at least 2/3 of zeta zeros are simple and on the critical line (previous record 5/12), by replacing RH-positivity in Montgomery 1973 with a rank-trace / inertia bound on a compression of Weil's form.

## Why it's lovely

Montgomery's 2/3 was conditional on RH. Aryan and Baluyot-Goldston-Suriajaya-Turnage-Butterbaugh made the prime-side second moment unconditional; Goldston-Suriajaya asked what remains if termwise positivity off the line is dropped. The answer is Sylvester inertia plus a rank-trace inequality. Same constants as the RH-era theorems, now unconditional. Lean 4 repo is sorry-free on the three standard axioms.

## Problem

Selberg to Levinson 1/3 to Conrey 2/5 to PRZZ 5/12 for simple zeros on the line. Distinct-zeros record 0.6603 (Wu). The obstruction after BGSTB24 was reading the zero side as a positive sum over real ordinates.

## Design

Restrict Weil's Hermitian form to about N(T,2T) modulated copies of a window; G = P + Q with P the on-line rank-ones and Q the off-line (1,1) blocks. Prime-side ||G||_HS^2 = (R(psi)+o(1))N. Rank-trace inequality then yields N_0^s >= (2-R(psi)-o(1))N; indicator window gives 2/3, Montgomery-Taylor 0.6725. Distinct zeros 5/6. Extends to primitive Dirichlet L-functions. Formalised at anthropics/zeta-23-lean.

## Evidence

arXiv:2608.13637 (v1 13 Aug 2026, v2 19 Aug). Anthropic blog 2026-08-13. Argument found by an unreleased Claude over two sessions; Alpoge and Furman checked and rewrote; Conrey and Goldston read the MS. Bandwidth-one ceiling about 0.682 — the method cannot reach RH.

## Limitations

Lower bounds only; remaining third not shown off-line. Inputs also hold for Davenport-Heilbronn / Epstein (RH false). Discovery story is an appendix, not a proof ingredient. Dual-listed as Alpoge paper and as an AI-solves-named-math event.

## Implications for Broadside

The 2026 AI-math event that is also an Alpoge paper. See 1197 for his S^6 construction; see DeepSeek-Prover 980/991 as the open formal-prover spine, not reminted.

## Bottom line

Mint 2608.13637. Do not remint the Anthropic blog as a second card.

## Links

- arXiv: [2608.13637](https://arxiv.org/abs/2608.13637)
- Blog: https://www.anthropic.com/research/riemann-zeta
- Lean: https://github.com/anthropics/zeta-23-lean

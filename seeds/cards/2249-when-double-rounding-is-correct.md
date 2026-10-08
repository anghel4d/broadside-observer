---
title: "When Double Rounding is Correct"
authors:
  - "Brett Saiki"
  - "Bill Zorn"
  - "Cynthia Richey"
  - "Zachary Tatlock"
year: 2026
venue: "arXiv"
arxiv: "2610.09005"
doi: null
source: "https://arxiv.org/abs/2610.09005"
topics:
  - "typed-programming-systems"
  - "game-networking-determinism"
seed_rank: 2249
seed_batch: "frontier-2026-10-08"
reviewed: "2026-10-08"
pool: "languages"
relevance_score: 8
lineage: floating-point-semantics
cites:
  - title: "When Double Rounding is Correct"
    url: "https://arxiv.org/abs/2610.09005"
    year: 2026
    arxiv: "2610.09005"
    doi: null
see:
  - "276-floating-point-determinism"
---

# When Double Rounding is Correct

## One-sentence takeaway

Double rounding (compute at higher precision, then re-round) is correct exactly when one number format contains another, under a precise, checkable characterisation across many formats and rounding modes mechanised in Lean 4; the resulting library MPFX is up to 11× faster than MPFR.

## Why it matters here

Anoptic and GRID COMMAND care about bit-exact, deterministic arithmetic (card 276) and the ML side keeps growing exotic low-precision formats (FP4, FP8 variants). This paper gives a principled answer to when you can emulate a narrow format with a wider kernel and still get correctly rounded results, plus a format-inference pass that tells you which roundings in a program can be dropped or moved. That is directly useful for deterministic simulation and for software reference implementations of accelerator numerics.

## Key ideas

- **Abstract number format.** One parameterised format unifies fixed- and floating-point, including formats with a maximum value.
- **Containment criterion.** Correct double rounding reduces to format containment, whether every value of one format is representable in another, with an efficient complete check on format parameters and conditions for which pairs of rounding modes work.
- **Mechanised.** All results are formalised in Lean 4, extending Boldo–Melquiond and related work to more rounding modes.
- **Format inference.** Given a sequence of operations, bound each expression by a format guaranteed to contain its result, which supports rewriting programs onto available primitives.
- **MPFX.** Correctly rounded multi-precision library: up to 11× (mean 6.05×) faster than MPFR and roughly on par with SoftFloat (0.46–1.63×, mean 0.94×); a hardware-spec simulation case study ran up to 13.5× faster than with SoftFloat.

## Caveats

The speedups are for software simulation of number formats, not for native hardware arithmetic. The characterisation covers the operations and rounding modes the paper treats; transcendental functions and fused operations beyond those need separate reasoning.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.09005
- PDF: https://arxiv.org/pdf/2610.09005

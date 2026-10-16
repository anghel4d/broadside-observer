---
title: "Imaginary quadratic fields of class number at most 2000"
authors:
  - "Iwao Kimura"
year: 2026
venue: "arXiv"
arxiv: "2610.21511"
doi: null
source: "https://arxiv.org/abs/2610.21511"
topics:
  - "class-number-problem"
  - "siegel-zeros"
  - "lean-verified"
  - "ai-assisted-proof"
seed_rank: 2323
seed_batch: "curiosity-2026-10-17"
reviewed: "2026-10-17"
pool: "maths"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Imaginary quadratic fields of class number at most 2000"
    url: "https://arxiv.org/abs/2610.21511"
    year: 2026
    arxiv: "2610.21511"
    doi: null
  - title: "A simpler proof that there are no Landau–Siegel zeros"
    url: "https://arxiv.org/abs/2610.21099"
    year: 2026
    arxiv: "2610.21099"
    doi: null
  - title: "On the OpenAI proof that Landau–Siegel zeros do not exist"
    url: "https://arxiv.org/abs/2610.15483"
    year: 2026
    arxiv: "2610.15483"
    doi: null
  - title: "Uniform exclusion of Landau–Siegel zeros"
    url: "https://github.com/openai/math/blob/main/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
see: ["1863-the-quasi-riemann-hypothesis"]
---

# Imaginary quadratic fields of class number at most 2000

## One-sentence takeaway

Making OpenAI's unrefereed "no Landau–Siegel zeros" argument explicit and checking it in Lean, Kimura lists every imaginary quadratic field with class number at most 2000 unconditionally (16,453,493 fields, largest |d| = 1,062,350,083 at h = 1978), where the unconditional list previously stopped at h ≤ 100.

## Why it's lovely

Gauss's class number problem is the classic case of "finitely many, but we can't say where they stop": Siegel's theorem is ineffective precisely because a Siegel zero might exist. Card 1863 recorded OpenAI's claim to rule such zeros out. This week three people engaged with it seriously: Banks wrote a detailed exposition with explicit constants, Kerr gave a shorter proof that replaces the interpolation and determinant step with the pigeonhole principle plus a theorem of Masser, and Kimura turned it into a theorem you can download. It's a clear example of the path from an AI claim, through human checking and formal proof, to a new table of numbers, and the AI disclosures are very specific (Claude Code wrote the explicit argument, Lean files and sieve under the author's direction).

## Key ideas

- **Explicit zero gap (Theorem 1).** For a primitive real character χ of conductor q ≥ 3, any real zero β of L(s, χ) satisfies (1 − β) log q ≥ 5.811 × 10⁻⁴, and ≥ 5.965 × 10⁻³ once log q ≥ 35.0131.
- **From zero gap to discriminant bound.** An elementary lower bound for L(1, χ) in terms of the zero gap shows that any field with h ≤ 2000 has |d_K| < 1.61 × 10¹⁵.
- **Finite check, Watkins-style.** Watkins's sieve excludes 6·2²⁸ ≤ |d| ≤ 1.65 × 10¹⁵, and below that the class numbers come from the Mosunov–Jacobson tables (spot-checked and partly recomputed).
- **Three levels of trust, stated plainly.** The bounds are proved in Lean and checked by the Lean kernel, a full replay, and an independent kernel (nanoda), so they don't depend on the text of the OpenAI paper. The sieve program has a paper proof but isn't formally verified, and the tables below 6·2²⁸ are prior unconditional computation by others.
- **Payoff.** The Cremona–Sutherland lists of orders with h ≤ 1000, and the Holmin et al. counts for odd h ≤ 1999, previously conditional on GRH, now hold unconditionally. Data and code are at github.com/iwaokimura/cln-imq-2k (tag v1.2).

## Caveats

Everything still rests on the Siegel-zero argument being right. The Lean proof reuses parts of OpenAI's own formalization unmodified, and the underlying manuscript has not been refereed. The sieve code is unverified software. Kerr's simplification (2610.21099) is a 6-page note, and Banks's explicit constant (3.0 × 10⁻³ for q ≥ 10¹⁰) is a separate, unformalized proof. Expect the community's verdict to take months.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.21511
- PDF: https://arxiv.org/pdf/2610.21511
- Data and Lean code: https://github.com/iwaokimura/cln-imq-2k
- Kerr, simpler proof: https://arxiv.org/abs/2610.21099
- Banks, exposition with explicit constants: https://arxiv.org/abs/2610.15483
- OpenAI manuscript: https://github.com/openai/math/blob/main/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf

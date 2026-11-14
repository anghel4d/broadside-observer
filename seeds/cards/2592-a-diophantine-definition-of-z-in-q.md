---
title: "A Diophantine definition of ℤ in ℚ"
authors:
  - "Ashay Burungale"
year: 2026
venue: "arXiv preprint (math.NT)"
arxiv: "2611.16130"
doi: null
source: "https://arxiv.org/abs/2611.16130"
topics:
  - "hilberts-tenth-problem"
  - "diophantine-definability"
  - "elliptic-curves"
  - "mazur-conjecture"
  - "ai-assisted-math"
seed_rank: 2592
seed_batch: "curiosity-2026-11-15"
reviewed: "2026-11-15"
pool: "maths-foundations"
relevance_score: 8
lineage: arithmetic-geometry
cites:
  - title: "Z is Diophantine over Q with 28 unknowns (Zhi-Wei Sun)"
    url: "https://arxiv.org/abs/2611.14605"
    year: 2026
    arxiv: "2611.14605"
    doi: null
  - title: "Why should Z be Diophantine in Q? (Kozachinskiy, Pasten, Vidaux)"
    url: "https://arxiv.org/abs/2611.17124"
    year: 2026
    arxiv: "2611.17124"
    doi: null
  - title: "Hilbert's tenth problem over the rational numbers (OpenAI, openai/math result family 004)"
    url: "https://github.com/openai/math/blob/main/preprints/Hilberts-tenth-problem-over-the-rational-numbers-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
see:
  - "1864-hilberts-tenth-problem-over"
  - "1199-rank-stability-in-quadratic-extensions-and-hilbert-s-tenth-pro"
---

# A Diophantine definition of ℤ in ℚ

## One-sentence takeaway

A human-written proof that the integers are a Diophantine subset of the rationals: one integer polynomial of total degree at most four decides "is q an integer?" by asking whether it has a rational solution in the extra variables, so every recursively enumerable subset of ℚ^r is Diophantine and Mazur's conjecture on the topology of rational points fails. The proof avoids the 2-converse and 2-adic Fontaine–Mazur results that OpenAI's Hilbert's-tenth-over-ℚ manuscript relied on.

## Why it's lovely

Six weeks after an AI manuscript claimed Hilbert's tenth problem over ℚ (card 1864), the human literature answered in one listing week with three papers: this independent proof, Zhi-Wei Sun's reduction of the number of unknowns from 393 (Conant et al., as Sun reports it) to 28, and a conditional "why should this be true" entry point by Kozachinskiy, Pasten and Vidaux. That is the provenance story Broadside cares about, played out in real time: a machine claim, then independent human routes that do not depend on its unpublished lemmas. The proof itself is a tour of modern number theory pulled into one definability statement: congruent-number elliptic curves, Shimura curves, Serre's conjecture and Green–Tao–Ziegler all end up encoding integer arithmetic inside rational points.

## Key ideas

- **Target.** A polynomial P ∈ ℤ[T, W₁…Wₙ] of degree ≤ 4 such that q ∈ ℚ is an integer iff P(q, w) = 0 for some rational w. Combined with Matiyasevich (MRDP), this makes every r.e. subset of ℚ^r Diophantine, so Hilbert's tenth problem over ℚ is undecidable.
- **Square denominators first.** Rationals with square denominator are defined through rational points on quadratic twists of the congruent-number curve; the Tian–Yuan–Zhang criterion (in Smith's formulation) gives these twists analytic rank one.
- **Multiplying indices.** A height estimate for rational points on a fixed quotient of a Shimura curve lets the author express multiplication of elliptic-curve point indices. The estimate comes from bounding modular levels of quaternionic abelian surfaces, using a compatible system of Galois representations with controlled ramification and Khare–Wintenberger's proof of Serre's conjecture.
- **Integer arithmetic.** Green–Tao–Ziegler on linear patterns of primes supplies the rational solutions needed for a Diophantine model of ℤ.
- **Consequence beyond H10.** Mazur's conjecture (that the real closure of rational points on a variety has finitely many components) fails.

## Caveats

A fresh, unrefereed single-author preprint on a result of this size; expert checking will take time. I read the abstract and listing metadata only, not the proof. The three companion papers show the community converging fast, but the "393 → 28 unknowns" count comes from Sun's abstract, and I did not locate the Conant et al. paper itself this run. Existing card 1864 should get a Link to this paper (suggested, not applied).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.16130
- PDF: https://arxiv.org/pdf/2611.16130
- Sun, 28 unknowns: https://arxiv.org/abs/2611.14605
- Kozachinskiy–Pasten–Vidaux, conditional entry point: https://arxiv.org/abs/2611.17124
- OpenAI manuscript (card 1864): https://github.com/openai/math/blob/main/preprints/Hilberts-tenth-problem-over-the-rational-numbers-September-24-2026/main.pdf

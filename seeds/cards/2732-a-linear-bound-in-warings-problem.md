---
title: "A linear bound in Waring's problem"
authors:
  - "Sam Chow"
  - "Rainer Dietmann"
year: 2026
venue: "arXiv preprint (math.NT)"
arxiv: "2611.29821"
doi: null
source: "https://arxiv.org/abs/2611.29821"
version_reviewed: "v1"
topics:
  - "warings-problem"
  - "circle-method"
  - "additive-number-theory"
  - "smooth-numbers"
  - "ai-assisted-math"
seed_rank: 2732
seed_batch: "curiosity-2026-11-27"
reviewed: "2026-11-27"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "A linear bound in Waring's problem"
    url: "https://arxiv.org/abs/2611.29821"
    year: 2026
    arxiv: "2611.29821"
    doi: null
  - title: "On Waring's problem for larger powers (Brüdern, Wooley)"
    url: "https://arxiv.org/abs/2211.10380"
    year: 2023
    arxiv: "2211.10380"
    doi: null
see: []
---

# A linear bound in Waring's problem

## One-sentence takeaway

Chow and Dietmann prove G(k) ≍ k: every sufficiently large integer is a sum of O(k) perfect k-th powers. This matches the trivial lower bound k + 1 up to a constant and removes the log k factor that has stood since Vinogradov.

## Why it's lovely

Waring's problem dates to 1770. Hardy and Littlewood's circle method gave G(k) ≪ k·2^k, Vinogradov brought it to k log k, and the best large-k bound before this, by Brüdern and Wooley, was ⌈k(log k + 4.20032)⌉. A 16-page paper whose abstract is the single line "We show that G(k) ≍ k" is a rare thing. The authors also say more careful reasoning gives G(k) ≤ 8.4k, though they do not show it. The method has a lovely name, *factors and fibres*. "Factors" is a p-adic diminishing-ranges trick that pulls out m^k with m a product of primes from disjoint intervals, which shortens the Weyl sums. "Fibres" bounds how many α on a fibre of multiplication-by-m^k can carry a large Weyl sum, using a Gram matrix of phase vectors. Iterated adaptively on the large spectrum, this gives the key mean-value estimate. The provenance is just as striking. The AI statement says "The work was carried out by GPT-6.2 Astra, rewritten by the authors, and refereed by GPT-6.2 Astra", a clean data point for the provenance-first record of who did what in AI-era mathematics.

## Key ideas

- **Theorem 1.1.** G(k) ≪ k for all k. The paper also proves the stronger lower bound R_{s,k}(N) ≫ P^{s−k} on representation counts.
- **Theorem 1.2.** There is a set A_k(P) of density d_k > 0 in [1, P] whose k-th-power Weyl sum has a 2r-th moment ≪ P^{2r−k+4/k} with r ≪ k. Extra smooth variables then save more than P^{4/k} on the minor arcs.
- **Fibres.** For any β there are at most O_k(W²) values α with m^k α = β where the Weyl sum is at least X/W. The proof uses Gram matrices with entries controlled by congruences.
- **Adaptive iteration.** How many primes to strip at each step trades shortening the Weyl sums against the count of bad fibres. The process parallels Vaughan's but is measure-theoretic.

## Caveats

This is a v1 preprint (22 Nov 2026) and not yet refereed. "Refereed by GPT-6.2 Astra" is not peer review. I read the abstract, the introduction and the setup section, not the main proposition's proof. The constant is not optimized, and 8.4k is stated without proof. G(k) is about sufficiently large integers, and nothing here is said about g(k).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.29821
- PDF: https://arxiv.org/pdf/2611.29821
- Brüdern–Wooley (previous record): https://arxiv.org/abs/2211.10380

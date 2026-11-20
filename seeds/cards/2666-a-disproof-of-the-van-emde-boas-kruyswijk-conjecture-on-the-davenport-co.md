---
title: "A disproof of the van Emde Boas–Kruyswijk conjecture on the Davenport constant"
authors:
  - "Weidong Gao"
  - "Alfred Geroldinger"
  - "Guoqing Wang"
  - "Xiangneng Zeng"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2611.24775"
doi: null
source: "https://arxiv.org/abs/2611.24775"
version_reviewed: "v2"
topics:
  - "zero-sum-theory"
  - "davenport-constant"
  - "additive-combinatorics"
  - "finite-abelian-groups"
  - "counterexamples"
seed_rank: 2666
seed_batch: "curiosity-2026-11-21"
reviewed: "2026-11-20"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "A disproof of the van Emde Boas–Kruyswijk conjecture on the Davenport constant"
    url: "https://arxiv.org/abs/2611.24775"
    year: 2026
    arxiv: "2611.24775"
    doi: null
  - title: "Zero-sum problems in finite abelian groups: A survey"
    url: "https://doi.org/10.1016/j.exmath.2006.07.002"
    year: 2006
    arxiv: null
    doi: "10.1016/j.exmath.2006.07.002"
see: []
---

# A disproof of the van Emde Boas–Kruyswijk conjecture on the Davenport constant

## One-sentence takeaway

The 1969 conjecture that D(C_n^r) = r(n−1)+1 is false. For every n = 2k with k ≥ 3 odd (so n = 6, 10, 14, …) and every r ≥ 8n−7, a sequence of length r(n−1)+1 in (Z/n)^r can still avoid every nonempty zero-sum subsequence, and the paper's explicit construction shows it in four pages.

## Why it's lovely

The Davenport constant asks a coin-jar question: how many elements of a finite abelian group can you pick, with repeats, before some nonempty subset is forced to sum to zero? Taking n−1 copies of each basis vector shows you can always reach r(n−1) without a zero sum, and for p-groups and rank ≤ 2 that is exactly right (Kruyswijk and Olson, 1960s). The homocyclic case was widely expected to behave the same way, and several surveys list it as a conjecture. As late as 2018 even D(C_6⁴) was unknown. The counterexample is a small gadget, not a computer search. In C_n⁴ a sequence V with three rows and a twist element z has the property that every subsum projecting to e_i − e_j has f-coefficient k or k+1 and never anything else. Gluing 8n−7 copies through a cyclic 'u' coordinate gives one extra element beyond the conjectured bound. It feels like a lock-free algorithm proof: a few invariants in a table, then pure case analysis.

## Key ideas

- **Lower bound always true.** D*(G) = 1 + Σ(n_i − 1) ≤ D(G). The conjecture said equality holds for C_n^r.
- **Gadget in C_n⁴.** With n = 2k, z = e₁ + e₂ + e₃ + (1 − 3k)f and V = z · Π e_i^{k−1}(e_i + f)^k, a two-row table shows which f-coefficients a subsum can have for each projection onto ⟨e₁, e₂, e₃⟩. Projection 0 gives only 0 or 1, and e_i − e_j gives only k or k+1.
- **Lemma.** There is a zero-sum-free T of length 5(n−1)−1 in C_n⁵ and an element h of order k with −h not a subsum. The proof uses that k+1 is even, which is where k odd is needed.
- **Assembly.** n−1 blocks P_j ⊕ A_j and a cyclic coordinate u carry elements g₀, …, g_{n−1}, and every zero sum is forced to be trivial. The result is D(C_n^r) ≥ r(n−1) + 1 + ⌊r/(8n−7)⌋.
- **Collateral.** It also disproves a conjectured covering result of Gao and Geroldinger.

## Caveats

I read all of v2 (19 Nov 2026; v1 was 18 Nov); it is not refereed. It covers only n ≡ 2 (mod 4) with n ≥ 6 and large rank r ≥ 8n−7. Small ranks such as r = 3 and other exponents are still open, and the true growth of D(C_n^r) − D* is not pinned down. No AI-assistance statement appears in the paper.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.24775
- PDF: https://arxiv.org/pdf/2611.24775
- Gao & Geroldinger survey (2006): https://doi.org/10.1016/j.exmath.2006.07.002

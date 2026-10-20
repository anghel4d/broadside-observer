---
title: "Proof of the Erdős-Szemerédi sunflower conjecture"
authors:
  - "Matija Bucić"
  - "Fankang He"
  - "Hyunwoo Lee"
year: 2026
venue: "arXiv preprint"
arxiv: "2610.26686"
doi: null
source: "https://arxiv.org/abs/2610.26686"
topics:
  - "extremal-combinatorics"
  - "sunflowers"
  - "polynomial-method"
  - "slice-rank"
seed_rank: 2366
seed_batch: "curiosity-2026-10-21"
reviewed: "2026-10-21"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Proof of the Erdős-Szemerédi sunflower conjecture"
    url: "https://arxiv.org/abs/2610.26686"
    year: 2026
    arxiv: "2610.26686"
    doi: null
  - title: "On large subsets of F_q^n with no three-term arithmetic progression (Ellenberg and Gijswijt)"
    url: "https://arxiv.org/abs/1605.09223"
    year: 2016
    arxiv: "1605.09223"
    doi: null
  - title: "Upper bounds for sunflower-free sets (Naslund and Sawin)"
    url: "https://arxiv.org/abs/1606.09575"
    year: 2016
    arxiv: "1606.09575"
    doi: null
see: ["2345-approximating-independent-sets-using-additive-combinatorics", "2025-sharp-logarithmic-exponents-for-off-diagonal-ramsey-numbers"]
---

# Proof of the Erdős-Szemerédi sunflower conjecture

## One-sentence takeaway

A family of subsets of an n-element set with no k sets sharing one common pairwise intersection has at most about (2 − 1/(16k³))ⁿ members, which settles for every k ≥ 3 a conjecture of Erdős and Szemerédi from the 1970s that was previously known only for k = 3, through the 2016 cap-set breakthrough.

## Why it's lovely

Sunflowers are one of the simplest structures in combinatorics: k sets whose pairwise intersections are all the same "core", with disjoint "petals". Erdős and Szemerédi asked whether forbidding a k-sunflower forces a family to be exponentially smaller than all 2ⁿ subsets. For fifty years the best answers only shaved sub-exponential amounts off 2ⁿ, even after the 2019 Alweiss–Lovett–Wu–Zhang breakthrough on the related Erdős–Rado problem. The k = 3 case fell in 2016 as a side effect of the polynomial method that killed the cap-set problem. This paper extends that magic to every k with one clever interpolation trick, and the proof idea fits in a few paragraphs. Sunflowers also sit underneath monotone circuit lower bounds, matrix multiplication and kernelization in parameterized algorithms, so this is a foundation stone, not a curiosity.

## Key ideas

- **Vector sunflowers.** Split the ground set into n blocks of size D; a set picking one element per block is a vector in [D]ⁿ. k vectors form a sunflower when, in each coordinate, their entries are all equal or pairwise distinct. Following Alon–Shpilka–Umans and Naslund–Sawin, a power-saving bound V_k(D, n) ≤ Cⁿ with C < D transfers back to set families.
- **Interpolated local function.** Naslund–Sawin handled k = 3 with a Fourier expansion where every term is constant in one variable. The new ingredient builds, for any k, a local function whose nonzero values on all-distinct tuples are chosen so that, by successive interpolation, every term has a factor of degree at most k − 2 in one of the last k − 1 variables. These factors live in a common (k − 1)-dimensional space.
- **Slice-rank style count.** Multiplying across coordinates and pigeonholing gives V_k(D, n) ≤ (C_k · D^{1 − 1/(k−1)})ⁿ with C_k = (2k)^{2/(k−1)}. Taking D = 16k² makes the base smaller than D.
- **Probabilistic reduction.** A randomized refinement of the block construction, averaged over block choices and summed over set sizes, turns the vector bound into Theorem 1: at most (2 − 1/(16k³))ⁿ.
- **Near-tight for large k.** The known constructions give sunflower-free families of size (2 − O(log log k / log k))ⁿ, so the remaining gap is in the rate at which c_k approaches 2.

## Caveats

A fresh preprint (19 Oct 2026) on a famous problem, not yet refereed; the argument is short and builds on well-understood machinery, which helps, but community checking is still to come. The constant 1/(16k³) is far from the conjectured truth. It says nothing directly about the Erdős–Rado sunflower conjecture (the uniform, fixed-set-size version), which remains open.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.26686
- PDF: https://arxiv.org/pdf/2610.26686
- Ellenberg–Gijswijt cap sets: https://arxiv.org/abs/1605.09223
- Naslund–Sawin sunflower-free sets: https://arxiv.org/abs/1606.09575

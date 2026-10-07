---
title: "Optimal logarithmic mixing of the Thorp shuffle"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 238; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Optimal-order-mixing-of-the-Thorp-shuffle-September-26-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2093
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Optimal-order mixing of the Thorp shuffle"
    url: "https://github.com/openai/math/blob/main/preprints/Optimal-order-mixing-of-the-Thorp-shuffle-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Random coordinate frames and partial permutation laws"
    url: "https://github.com/openai/math/blob/main/preprints/Random-coordinate-frames-and-partial-permutation-laws-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "From partial permutation information to Fourier bounds"
    url: "https://github.com/openai/math/blob/main/preprints/From-partial-permutation-information-to-Fourier-bounds-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Conditional information under deterministic coordinate sweeps"
    url: "https://github.com/openai/math/blob/main/preprints/Conditional-information-under-deterministic-coordinate-sweeps-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Conditional permutations in a revealed switching environment"
    url: "https://github.com/openai/math/blob/main/preprints/Conditional-permutations-in-a-revealed-switching-environment-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Routing densities and representation contraction for Thorp sweeps"
    url: "https://github.com/openai/math/blob/main/preprints/Routing-densities-and-representation-contraction-for-Thorp-sweeps-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Row–column symmetry and contraction of coordinate sweeps"
    url: "https://github.com/openai/math/blob/main/preprints/Row-column-symmetry-and-contraction-of-coordinate-sweeps-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Random-subspace tests and trace smoothing for coordinate sweeps"
    url: "https://github.com/openai/math/blob/main/preprints/Random-subspace-tests-and-trace-smoothing-for-coordinate-sweeps-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Compatibility entropy and the spectrum of a Thorp sweep"
    url: "https://github.com/openai/math/blob/main/preprints/Compatibility-entropy-and-the-spectrum-of-a-Thorp-sweep-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Signed tensor densities and diagram budgets for the Thorp shuffle"
    url: "https://github.com/openai/math/blob/main/preprints/Signed-tensor-densities-and-diagram-budgets-for-coordinate-sweeps-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Conditional coordinate sweeps and analytic transfer"
    url: "https://github.com/openai/math/blob/main/preprints/Conditional-coordinate-sweeps-and-analytic-transfer-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A strict four-row permanent inequality and permutation moments"
    url: "https://github.com/openai/math/blob/main/preprints/A-strict-four-row-permanent-inequality-and-permutation-moments-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Optimal logarithmic mixing of the Thorp shuffle

## One-sentence takeaway

OpenAI's result family 238 (Probability and statistical mechanics) claims: Proves that the Thorp shuffle randomizes $N=2^d$ labeled cards in $\Theta(\log N)$ physical shuffles, settling its optimal mixing order for power-of-two deck sizes.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Convergence is in total variation from the worst initial ordering and concerns the entire permutation, not just individual card positions.
- *Optimal-order mixing of the Thorp shuffle*: We prove that the Thorp shuffle on $2^d$ cards mixes in $\Theta(d)$ complete shuffles. The full permutation law after $1600d$ shuffles converges to uniform in total variation as $d\to\infty$, uniformly over the initial deck, while a support count gives a lower bound of $2d-O(1)$.
- *Random coordinate frames and partial permutation laws*: For the Thorp shuffle on $2^d$ cards, we prove that the worst-start total-variation distance after $32800d$ physical shuffles tends to zero as $d\to\infty$. Combining our fixed-list estimate with the companion Fourier transfer improves this bound to $512d$ shuffles. These results follow from bounds on partially observed permutation laws in random coordinate frames.
- *From partial permutation information to Fourier bounds*: We show how information about partial permutations controls full permutation laws. Let n tend to infinity through multiples of eight. If the images of a uniformly chosen $7n/8$ labels approach the uniform injection law in average total variation, and the sign mean tends to zero, then the product of two independent permutations with the given law converges to uniform on Sn.
- *Conditional information under deterministic coordinate sweeps*: We bound the information remaining after paths of specified cards in the Thorp shuffle on $n=2^d$ cards have been observed. After a fixed number of deterministic coordinate sweeps, the joint endpoint law of further cards is close to uniform on the available positions, on average over the observed paths, provided a fixed positive fraction of labels lies outside both lists. Combined with a Fourier transfer, these bounds give full-deck mixing after $2048d$ physical shuffles.
- *Conditional permutations in a revealed switching environment*: Fix half the labels in a Thorp shuffle on $2^d$ positions and reveal their complete trajectories. We prove that, after an explicit absolute number of coordinate sweeps, the conditional permutation of the remaining labels approaches uniform in expected total variation as $d\to\infty$, uniformly in the initial layout. The resulting constructions give full-deck mixing in a constant multiple of d physical shuffles.
- Plus 7 more companion manuscripts in this family; see Links.
- Lean scope (lean/docs/238.md): The formalization proves optimal-order mixing of the Thorp shuffle on $2^d$ cards. After $1600d$ complete shuffles, the full permutation law converges in total variation to uniform as $d\to\infty$, uniformly over initial decks.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 13 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's asymptotic conclusion about the product of two random permutations is outside this selected finite estimate. The conditional estimate is averaged over the actual outside-path law, rather than asserted for each individual environment. These are the earlier nine statements associated with the paper; its changed later statements and six other result blocks are outside this scope.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Optimal-order mixing of the Thorp shuffle](https://github.com/openai/math/blob/main/preprints/Optimal-order-mixing-of-the-Thorp-shuffle-September-26-2026/paper.pdf)
- Manuscript: [Random coordinate frames and partial permutation laws](https://github.com/openai/math/blob/main/preprints/Random-coordinate-frames-and-partial-permutation-laws-September-26-2026/main.pdf)
- Manuscript: [From partial permutation information to Fourier bounds](https://github.com/openai/math/blob/main/preprints/From-partial-permutation-information-to-Fourier-bounds-September-26-2026/main.pdf)
- Manuscript: [Conditional information under deterministic coordinate sweeps](https://github.com/openai/math/blob/main/preprints/Conditional-information-under-deterministic-coordinate-sweeps-September-26-2026/main.pdf)
- Manuscript: [Conditional permutations in a revealed switching environment](https://github.com/openai/math/blob/main/preprints/Conditional-permutations-in-a-revealed-switching-environment-September-26-2026/paper.pdf)
- Manuscript: [Routing densities and representation contraction for Thorp sweeps](https://github.com/openai/math/blob/main/preprints/Routing-densities-and-representation-contraction-for-Thorp-sweeps-September-26-2026/paper.pdf)
- Manuscript: [Row–column symmetry and contraction of coordinate sweeps](https://github.com/openai/math/blob/main/preprints/Row-column-symmetry-and-contraction-of-coordinate-sweeps-September-26-2026/paper.pdf)
- Manuscript: [Random-subspace tests and trace smoothing for coordinate sweeps](https://github.com/openai/math/blob/main/preprints/Random-subspace-tests-and-trace-smoothing-for-coordinate-sweeps-September-26-2026/paper.pdf)
- Manuscript: [Compatibility entropy and the spectrum of a Thorp sweep](https://github.com/openai/math/blob/main/preprints/Compatibility-entropy-and-the-spectrum-of-a-Thorp-sweep-September-26-2026/paper.pdf)
- Manuscript: [Signed tensor densities and diagram budgets for the Thorp shuffle](https://github.com/openai/math/blob/main/preprints/Signed-tensor-densities-and-diagram-budgets-for-coordinate-sweeps-September-26-2026/paper.pdf)
- Manuscript: [Conditional coordinate sweeps and analytic transfer](https://github.com/openai/math/blob/main/preprints/Conditional-coordinate-sweeps-and-analytic-transfer-September-26-2026/main.pdf)
- Manuscript: [A strict four-row permanent inequality and permutation moments](https://github.com/openai/math/blob/main/preprints/A-strict-four-row-permanent-inequality-and-permutation-moments-September-26-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/238.md
- Comparator statement (Reciprocal Specht degrees and eight-block Fourier bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ThorpFirstReciprocal.lean
- Comparator statement (Frame, spectral, and density estimates for Thorp mixing): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ThorpRemaining.lean
- Comparator statement (Fourier bounds from complementary coset caps): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PartialPermutation.lean
- Comparator statement (Nine routing-density and representation estimates): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ThorpRouting.lean
- Comparator statement (Row–column overlap on occupied boards): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/OccupiedOverlap.lean
- Comparator statement (Weighted Schatten moments and operator contraction for coordinate sweeps): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/WeightedSweepMoments.lean
- Comparator statement (Regular trace smoothing and full-permutation mixing): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CoordinateTrace.lean
- Comparator statement (Weighted row–column compatibility bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ThorpWeightedCompatibility.lean
- Comparator statement (One-sided angle bound for signed spin types): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SpinAngle.lean
- Comparator statement (Uniform signed-occurrence moment bound for coordinate sweeps): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SignedSweepMoment.lean
- Comparator statement (Binary sweep contraction and mixing): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BinarySweep.lean
- Comparator statement (Conditional coordinate-sweep moment estimate): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CoordinateSweeps.lean
- Comparator statement (Strict four-row permanent inequality near the uniform law): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FourRowPermanent.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

---
title: "Exactly three mutually unbiased bases in dimension six"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 266; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2121
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The maximum number of mutually unbiased bases in dimension six"
    url: "https://github.com/openai/math/blob/main/preprints/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Exact Fourier certificates for complex Hadamard matrices of order six"
    url: "https://github.com/openai/math/blob/main/preprints/Exact-Fourier-certificates-for-complex-Hadamard-matrices-of-order-six-September-24-2026/Exact-Fourier-certificates-for-complex-Hadamard-matrices-of-order-six-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Exactly three mutually unbiased bases in dimension six

## One-sentence takeaway

OpenAI's result family 266 (Mathematical physics) claims: Proves $N(6)=3$, resolving Zauner's dimension-six mutually unbiased bases conjecture: three such bases exist in ℂ6, but four cannot.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The exclusion is a complete certified computation under the stated binary64 arithmetic and compiler conditions. An independent companion proves the Matolcsi–Ruzsa–Weiner Fourier-vanishing conjecture for order-six complex Hadamard matrices outside Tao's cubic equivalence class.
- *The maximum number of mutually unbiased bases in dimension six*: We prove that the maximum number of mutually unbiased orthonormal bases in ℂ6 is three, resolving Zauner's dimension-six MUB conjecture. The upper bound is computer-assisted: under the stated binary64 arithmetic and compiler conditions, a complete execution of the documented verification pipeline excludes four arbitrary complex bases.
- *Exact Fourier certificates for complex Hadamard matrices of order six*: We prove the Fourier-vanishing conjecture of Matolcsi, Ruzsa, and Weiner: every complex Hadamard matrix of order six outside Tao's cubic equivalence class has a vanishing character sum at every permutation of $(1,1,1,-1,-1,-1)$. We also give an exact certificate excluding seven mutually unbiased bases in ℂ6; by Weiner's completion theorem, this yields an upper bound of five. Both certificates use only integer and rational arithmetic, and the complete verifier is included.
- Lean scope (lean/docs/266.md): The paper claims that at most three mutually unbiased orthonormal bases exist in $\mathbb C^6$. The linked formalization proves a weaker family bound: every family in its mutually unbiased bases model has at most five members.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The selected statement does not establish the paper's upper bound of three or its computer-assisted exclusion of four arbitrary bases. The paper's full character-sum vanishing theorem and its mutually unbiased bases bound are outside this selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The maximum number of mutually unbiased bases in dimension six](https://github.com/openai/math/blob/main/preprints/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026.pdf)
- Manuscript: [Exact Fourier certificates for complex Hadamard matrices of order six](https://github.com/openai/math/blob/main/preprints/Exact-Fourier-certificates-for-complex-Hadamard-matrices-of-order-six-September-24-2026/Exact-Fourier-certificates-for-complex-Hadamard-matrices-of-order-six-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/266.md
- Comparator statement (Order-six Hadamard Fourier vanishing and a five-basis upper bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MUBSix.lean
- Comparator statement (Cube-fiber cancellation for order-six Hadamard row ratios): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HadamardCubeFiber.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

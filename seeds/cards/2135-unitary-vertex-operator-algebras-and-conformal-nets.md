---
title: "Unitary vertex operator algebras and conformal nets"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 280; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Strongly-rational-unitary-vertex-operator-algebras-and-conformal-nets-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2135
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Strongly rational unitary vertex operator algebras and conformal nets"
    url: "https://github.com/openai/math/blob/main/preprints/Strongly-rational-unitary-vertex-operator-algebras-and-conformal-nets-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Unitary vertex operator algebras and conformal nets

## One-sentence takeaway

OpenAI's result family 280 (Mathematical physics) claims: Proves the strongly rational case of the strong-locality conjecture: every simple unitary strongly rational complex vertex operator algebra generates a completely rational conformal net.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Its simple modules are unitarizable, and its representation category agrees with the net’s finite-index sectors as a braided unitary tensor category.
- *Strongly rational unitary vertex operator algebras and conformal nets*: Every simple unitary strongly rational vertex operator algebra generates a completely rational conformal net. All its simple grading-restricted modules are unitarizable, its canonical fusion forms are positive, and the Carpi–Weiner–Xu functor gives a braided unitary tensor equivalence from its grading-restricted finite-length module category onto the finite-index sectors of the net. Gui's extension theorems then identify normalized irreducible finite-index local extensions of these nets with simple CFT-type conformal extensions of the vertex operator algebras.
- Lean scope (lean/docs/280.md): The linked formalization proves the first construction step relating strongly rational unitary vertex operator algebras to conformal nets. For a simple unitary strongly rational vertex operator algebra, it establishes polynomial energy bounds and strong locality and constructs an irreducible conformal net with the stated covariance, vacuum, and positive-energy properties.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The selected statement does not include complete rationality of the net, unitarizability of all simple modules, the braided tensor equivalence, or the classification of local extensions described in the paper.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Strongly rational unitary vertex operator algebras and conformal nets](https://github.com/openai/math/blob/main/preprints/Strongly-rational-unitary-vertex-operator-algebras-and-conformal-nets-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/280.md
- Comparator statement (Energy bounds, strong locality, and an irreducible conformal net): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/VertexAlgebraNet.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

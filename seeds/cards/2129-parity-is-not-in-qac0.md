---
title: "Parity is not in QAC0"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 274; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Product-projection-localization-and-the-QAC0-parity-lower-bound-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2129
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Product-projection localization and the QAC0 parity lower bound"
    url: "https://github.com/openai/math/blob/main/preprints/Product-projection-localization-and-the-QAC0-parity-lower-bound-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Regular trajectories, pruning and quantum parity"
    url: "https://github.com/openai/math/blob/main/preprints/Regular-trajectories-pruning-and-quantum-parity-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Parity is not in QAC0

## One-sentence takeaway

OpenAI's result family 274 (Mathematical physics) claims: Resolves Moore's parity conjecture in the measured-output model: constant-depth quantum circuits with arbitrary one-qubit gates, unbounded-arity Toffoli gates and polynomially many total qubits cannot compute parity with any fixed positive worst-case advantage.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Ancillas start in zero, one output qubit is measured, and all other registers may be discarded. Xu–Li's reductions give the same bounded-error obstruction for strict majority.
- *Product-projection localization and the QAC0 parity lower bound*: We prove that constant-depth quantum circuits with arbitrary one-qubit and unbounded-arity Toffoli gates cannot compute parity with any fixed positive worst-case advantage using polynomially many qubits. Ancillas start in zero, only one output qubit is measured, and all final garbage is unrestricted. This resolves Moore's parity conjecture in the measured-output model.
- *Regular trajectories, pruning and quantum parity*: We prove that constant-depth quantum circuits with arbitrary one-qubit gates and unbounded-arity Toffoli gates cannot compute parity with any fixed positive worst-case advantage using polynomially many total qubits. Ancillary qubits are initialized to $|0\rangle$, one output qubit is measured, and all other final registers may be discarded without restriction. This resolves Moore's parity conjecture in the measured-output model.
- Lean scope (lean/docs/274.md): The formalization rules out bounded-error parity computation by constant-depth quantum circuits with polynomially many zero-initialized ancillary qubits. For every fixed depth, polynomial bound on the total number of qubits, and $0<\varepsilon\le1/2$, every sufficiently large input length has an input on which the measured-output parity success probability is less than $1/2+\varepsilon$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 4 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Product-projection localization and the QAC0 parity lower bound](https://github.com/openai/math/blob/main/preprints/Product-projection-localization-and-the-QAC0-parity-lower-bound-September-24-2026/paper.pdf)
- Manuscript: [Regular trajectories, pruning and quantum parity](https://github.com/openai/math/blob/main/preprints/Regular-trajectories-pruning-and-quantum-parity-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/274.md
- Comparator statement (Constant-depth quantum parity lower bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/QACParity.lean
- Comparator statement (Polynomial-size parity specialization): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RegularParity.lean
- Comparator statement (Polynomial-size quantum parity lower bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RegularParity.lean
- Comparator statement (General positive-advantage parity lower bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/QACParity.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

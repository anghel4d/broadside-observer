---
title: "The computational complexity of Weisfeiler–Leman refinement"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 133; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Parity-lifts-and-bounded-treewidth-witnesses-for-Weisfeiler-Leman-equivalence-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1989
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Parity lifts and bounded-treewidth witnesses for Weisfeiler–Leman equivalence"
    url: "https://github.com/openai/math/blob/main/preprints/Parity-lifts-and-bounded-treewidth-witnesses-for-Weisfeiler-Leman-equivalence-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The complexity of identifying a graph by Weisfeiler–Leman refinement"
    url: "https://github.com/openai/math/blob/main/preprints/The-complexity-of-identifying-a-graph-by-Weisfeiler-Leman-refinement-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Unconditional time lower bounds for Weisfeiler–Leman equivalence"
    url: "https://github.com/openai/math/blob/main/preprints/Unconditional-time-lower-bounds-for-Weisfeiler-Leman-equivalence-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Variable-dimension Weisfeiler–Leman equivalence on general and subcubic graphs"
    url: "https://github.com/openai/math/blob/main/preprints/Variable-dimension-Weisfeiler-Leman-equivalence-on-general-and-subcubic-graphs-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The computational complexity of Weisfeiler–Leman refinement

## One-sentence takeaway

OpenAI's result family 133 (Theoretical computer science) claims: Proves unconditional $n^{\Omega(k)}$ deterministic time lower bounds for joint and separate k-dimensional Weisfeiler–Leman equivalence, for sufficiently large fixed k in the specified sequential adjacency-matrix models.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): With dimension as input, joint equivalence is EXPTIME-complete even on subcubic graphs; deciding whether refinement identifies a graph is also EXPTIME-complete.
- *Parity lifts and bounded-treewidth witnesses for Weisfeiler–Leman equivalence*: For k ≥ 4, we construct two uncolored graphs that are k-dimensional Weisfeiler–Leman equivalent exactly when a prescribed finite-domain choice system has no compatible choice. The system has $k+1$ domains for joint refinement and k for separate-coordinate refinement. A successful choice is detected after two joint rounds or one separate round.
- *The complexity of identifying a graph by Weisfeiler–Leman refinement*: We prove that deciding whether Weisfeiler–Leman refinement of an input dimension identifies a given graph is EXPTIME-complete. The input is a nonempty finite simple uncolored graph in adjacency-matrix form and a positive binary-encoded dimension. Identification quantifies over every comparison graph.
- *Unconditional time lower bounds for Weisfeiler–Leman equivalence*: For every sufficiently large fixed k, deciding whether two n-vertex graphs are k-Weisfeiler–Leman equivalent requires $n^{\Omega(k)}$ deterministic sequential time in the worst case. The bound holds at every sufficiently large graph order, even for simple connected uncolored graphs of diameter at most two, without a complexity assumption. Inputs are explicit adjacency matrices; the models are multitape Turing machines and sequential logarithmic-word RAMs with fixed polynomial-bit-time instructions.
- *Variable-dimension Weisfeiler–Leman equivalence on general and subcubic graphs*: Deciding joint-update k-dimensional Weisfeiler–Leman equivalence is $\mathsf{EXPTIME}$-complete when the two graphs are given by explicit adjacency matrices and k ≥ 2 is encoded in binary. The result holds even for connected simple uncolored graphs of equal positive order and maximum degree at most three.
- Lean scope (lean/docs/133.md): The formalization gives the paper's parity-lift graph construction for every Weisfeiler–Leman dimension $k\ge4$, under both joint and separate conventions. From a finite choice system it constructs two equal-size uncolored graphs that are Weisfeiler–Leman equivalent exactly when the system has no successful compatible choice.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 4 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's conditional running-time exclusions are outside these selected construction statements.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Parity lifts and bounded-treewidth witnesses for Weisfeiler–Leman equivalence](https://github.com/openai/math/blob/main/preprints/Parity-lifts-and-bounded-treewidth-witnesses-for-Weisfeiler-Leman-equivalence-September-25-2026/paper.pdf)
- Manuscript: [The complexity of identifying a graph by Weisfeiler–Leman refinement](https://github.com/openai/math/blob/main/preprints/The-complexity-of-identifying-a-graph-by-Weisfeiler-Leman-refinement-September-25-2026/paper.pdf)
- Manuscript: [Unconditional time lower bounds for Weisfeiler–Leman equivalence](https://github.com/openai/math/blob/main/preprints/Unconditional-time-lower-bounds-for-Weisfeiler-Leman-equivalence-September-25-2026/paper.pdf)
- Manuscript: [Variable-dimension Weisfeiler–Leman equivalence on general and subcubic graphs](https://github.com/openai/math/blob/main/preprints/Variable-dimension-Weisfeiler-Leman-equivalence-on-general-and-subcubic-graphs-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/133.md
- Comparator statement (Parity-lift characterization of Weisfeiler–Leman equivalence): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ParityLifts.lean
- Comparator statement (EXPTIME-completeness of Weisfeiler–Leman graph identification): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/WLIdentification.lean
- Comparator statement (Unconditional sequential time lower bounds for Weisfeiler–Leman equivalence): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/WeisfeilerLeman.lean
- Comparator statement (EXPTIME-completeness of variable-dimension Weisfeiler–Leman equivalence): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/VariableWL.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

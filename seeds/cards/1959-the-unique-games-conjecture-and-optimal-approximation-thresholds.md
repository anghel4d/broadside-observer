---
title: "The Unique Games Conjecture and optimal approximation thresholds"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 102; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Unique-Games-Theorem-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1959
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "The Unique Games Theorem"
    url: "https://github.com/openai/math/blob/main/preprints/The-Unique-Games-Theorem-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Direct Proof of Optimal Max-Cut Hardness"
    url: "https://github.com/openai/math/blob/main/preprints/A-Direct-Proof-of-Optimal-Max-Cut-Hardness-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The Factor-Two Hardness Threshold for Vertex Cover"
    url: "https://github.com/openai/math/blob/main/preprints/The-Factor-Two-Hardness-Threshold-for-Vertex-Cover-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Constant-factor hardness of Min-UnCut"
    url: "https://github.com/openai/math/blob/main/preprints/Constant-factor-hardness-of-Min-UnCut-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Constant-factor hardness of directed feedback vertex set"
    url: "https://github.com/openai/math/blob/main/preprints/Constant-factor-hardness-of-directed-feedback-vertex-set-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Unique Games Conjecture and optimal approximation thresholds

## One-sentence takeaway

OpenAI's result family 102 (Theoretical computer science) claims: Proves Khot's Unique Games Conjecture.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Independent direct reductions also establish NP-hardness, on unweighted graphs, of approximation beyond the Goemans–Williamson ratio for Max-Cut, below factor two for Vertex Cover, and within any fixed constant factor for Min-UnCut and directed feedback vertex set. These direct proofs use established PCP and Label Cover hardness results.
- *The Unique Games Theorem*: We prove the Unique Games Conjecture. For every fixed $\varepsilon,\delta\in(0,1/2)$, we give a deterministic polynomial-time reduction from 3SAT to Unique Games over a fixed finite alphabet, with completeness at least $1-\varepsilon$ and soundness at most δ.
- *A Direct Proof of Optimal Max-Cut Hardness*: We prove that approximating Max-Cut on simple unweighted graphs within any fixed factor greater than the Goemans–Williamson constant is NP-hard.
- *The Factor-Two Hardness Threshold for Vertex Cover*: We prove that minimum Vertex Cover is NP-hard to approximate within every fixed factor below two, even on simple unweighted graphs.
- *Constant-factor hardness of Min-UnCut*: For every fixed C > 1, approximating Min-UnCut within factor C is NP-hard, even on simple undirected unweighted graphs.
- *Constant-factor hardness of directed feedback vertex set*: Approximating minimum directed feedback vertex set within any fixed constant factor is NP-hard, even on unweighted digraphs.
- Lean scope (lean/docs/102.md): The Unique Games conjecture asks for hardness of distinguishing nearly satisfiable unique games from games of very small value. The formalized result gives, for every fixed $0<\varepsilon,\delta<1/2$, a deterministic polynomial-time reduction from binary 3SAT to nonempty unweighted simple bipartite unique games.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 5 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The formalized result establishes hardness of approximating Max-Cut beyond the Goemans–Williamson constant $\alpha_{\mathrm{GW}}$. No assumption that $P\ne NP$ is built into the statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Unique Games Theorem](https://github.com/openai/math/blob/main/preprints/The-Unique-Games-Theorem-September-23-2026/paper.pdf)
- Manuscript: [A Direct Proof of Optimal Max-Cut Hardness](https://github.com/openai/math/blob/main/preprints/A-Direct-Proof-of-Optimal-Max-Cut-Hardness-September-23-2026/paper.pdf)
- Manuscript: [The Factor-Two Hardness Threshold for Vertex Cover](https://github.com/openai/math/blob/main/preprints/The-Factor-Two-Hardness-Threshold-for-Vertex-Cover-September-23-2026/paper.pdf)
- Manuscript: [Constant-factor hardness of Min-UnCut](https://github.com/openai/math/blob/main/preprints/Constant-factor-hardness-of-Min-UnCut-September-23-2026/paper.pdf)
- Manuscript: [Constant-factor hardness of directed feedback vertex set](https://github.com/openai/math/blob/main/preprints/Constant-factor-hardness-of-directed-feedback-vertex-set-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/102.md
- Comparator statement (Unique Games gap reduction): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/UniqueGamesTheorem.lean
- Comparator statement (Optimal Max-Cut hardness gap): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/OptimalMaxCut.lean
- Comparator statement (Vertex Cover gap and factor-two hardness): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/VertexCover.lean
- Comparator statement (Arbitrary constant-factor hardness of Min-UnCut): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MinUncut.lean
- Comparator statement (Constant-factor hardness of directed feedback vertex set): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DirectedFeedback.lean
- Reasoning summary: https://github.com/openai/math/blob/main/reasoning_traces/basic-semidefinite-threshold-np-hardness.pdf
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

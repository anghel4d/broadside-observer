---
title: "Counterexamples to Sidorenko’s conjecture and the forcing conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 161; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Sidorenkos-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2017
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A counterexample to Sidorenko's conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Sidorenkos-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Counterexamples to Sidorenko’s conjecture and the forcing conjecture

## One-sentence takeaway

OpenAI's result family 161 (Combinatorics) claims: Disproves Sidorenko's conjecture with a connected bipartite pattern on 35 vertices and 66 edges that occurs less frequently than in a random graph of the same edge density.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The same pattern disproves the forcing conjecture of Skokan and Thoma: matching its density and the edge density of a constant graphon need not force quasirandomness.
- *A counterexample to Sidorenko's conjecture*: We disprove Sidorenko's conjecture with a bipartite graph on 35 vertices and 66 edges: its homomorphism density in some finite simple graph is smaller than the conjectured lower bound. The same connected graph also disproves the forcing conjecture: at one fixed density, asymptotically matching the edge and pattern densities does not imply quasirandomness.
- Lean scope (lean/docs/161.md): Sidorenko's conjecture predicts that every bipartite graph $H$ has homomorphism density at least the host graph's edge density raised to $|E(H)|$. The formalization disproves this for the paper's fixed bipartite graph with $35$ vertices and $66$ edges: it constructs a nonempty finite simple host graph with $t(H,G)<t(K_2,G)^{66}$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The separate forcing-conjecture consequence in the paper is outside this statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A counterexample to Sidorenko's conjecture](https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Sidorenkos-conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/161.md
- Comparator statement (Counterexample to Sidorenko's conjecture): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SidorenkoCounterexample.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

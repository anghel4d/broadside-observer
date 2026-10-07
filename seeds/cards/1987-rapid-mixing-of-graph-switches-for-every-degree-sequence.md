---
title: "Rapid mixing of graph switches for every degree sequence"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 131; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Polynomial-Mixing-of-the-Switch-Chain-for-Every-Graphical-Degree-Sequence-September-25-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1987
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Polynomial mixing of the switch chain for every graphical degree sequence"
    url: "https://github.com/openai/math/blob/main/preprints/Polynomial-Mixing-of-the-Switch-Chain-for-Every-Graphical-Degree-Sequence-September-25-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Rapid mixing of graph switches for every degree sequence

## One-sentence takeaway

OpenAI's result family 131 (Theoretical computer science) claims: Resolves the simple-undirected Kannan–Tetali–Vempala conjecture: the lazy edge-switch chain mixes in $O(n^8)$ time for every graphical labeled degree sequence.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The same degree-constrained graphs can also be sampled exactly uniformly by an almost-surely terminating algorithm with expected polynomial bit running time.
- *Polynomial mixing of the switch chain for every graphical degree sequence*: We prove the simple-undirected form of the Kannan–Tetali–Vempala conjecture: the switch chain on simple undirected graphs mixes in polynomial time for every graphical degree sequence. For a lazy chain that proposes switches uniformly on four vertices, the total-variation mixing time at distance 1/4 is at most $2n^8$. We also give an exactly uniform sampler for every graphical labeled degree vector.
- Lean scope (lean/docs/131.md): The Kannan–Tetali–Vempala conjecture asks for polynomial mixing of the switch chain for every graphical degree sequence. The formalization proves the simple undirected case: for $n\ge4$, the lazy chain that proposes switches on four vertices has total-variation mixing time at distance $1/4$ at most $2n^8$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's exactly uniform sampling algorithm is outside these selected chain estimates.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Polynomial mixing of the switch chain for every graphical degree sequence](https://github.com/openai/math/blob/main/preprints/Polynomial-Mixing-of-the-Switch-Chain-for-Every-Graphical-Degree-Sequence-September-25-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/131.md
- Comparator statement (Polynomial mixing and connectivity for every graphical degree sequence): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SwitchChain.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

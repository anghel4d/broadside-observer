---
title: "Exponential state costs for two-way automata"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 129; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-exponential-state-lower-bound-for-two-way-nondeterministic-complementation-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1985
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "An exponential state lower bound for two-way nondeterministic complementation"
    url: "https://github.com/openai/math/blob/main/preprints/An-exponential-state-lower-bound-for-two-way-nondeterministic-complementation-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "An exponential two-way deterministic state lower bound for one-way liveness"
    url: "https://github.com/openai/math/blob/main/preprints/An-exponential-two-way-deterministic-state-lower-bound-for-one-way-liveness-September-25-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Exponential state costs for two-way automata

## One-sentence takeaway

OpenAI's result family 129 (Theoretical computer science) claims: Proves exponential lower bounds both for complementing two-way nondeterministic finite automata and for simulating one-way nondeterministic automata by two-way deterministic ones.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The latter resolves the Sakoda–Sipser state-succinctness conjecture over growing finite alphabets; both results rule out polynomial state bounds independent of alphabet size.
- *An exponential state lower bound for two-way nondeterministic complementation*: We prove that two-way nondeterministic finite automata cannot be complemented with a polynomial number of states independent of the alphabet. For each n ≥ 4 we construct an n-state automaton over a finite alphabet whose complement requires at least $\tfrac12 2^{\lfloor(n-4)/127\rfloor}-1$ states.
- *An exponential two-way deterministic state lower bound for one-way liveness*: One-way liveness on h points accepts a word of binary relations when their ordered product is nonempty. For every h ≥ 2, it has a nondeterministic automaton with $h+3$ states and no left moves, whereas every equivalent s-state two-way deterministic automaton satisfies $4(s+2)^2\ge2^{\lfloor(h-2)/31\rfloor}$. Partial transition rules, stay moves, and nonaccepting infinite computations are allowed.
- Lean scope (lean/docs/129.md): The paper asks how many states are needed to complement or determinize two-way nondeterministic finite automata. The formalization gives, for every $n\ge4$, an explicit $n$-state automaton whose complement requires at least $\tfrac12 2^{\lfloor(n-4)/127\rfloor}-1$ states.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The separate results about one-way liveness and the Sakoda–Sipser problem are outside this scope.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An exponential state lower bound for two-way nondeterministic complementation](https://github.com/openai/math/blob/main/preprints/An-exponential-state-lower-bound-for-two-way-nondeterministic-complementation-September-25-2026/paper.pdf)
- Manuscript: [An exponential two-way deterministic state lower bound for one-way liveness](https://github.com/openai/math/blob/main/preprints/An-exponential-two-way-deterministic-state-lower-bound-for-one-way-liveness-September-25-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/129.md
- Comparator statement (Two-way nondeterministic complementation lower bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TwoWayComplementation.lean
- Comparator statement (Same-family determinization lower bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TwoWayDeterminization.lean
- Comparator statement (Exponential deterministic state lower bound for liveness): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/OneWayLiveness.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

---
title: "Classifying spaces and geometric obstructions for Artin groups"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 254; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Harmonic-heights-and-the-Artin-K-pi-1-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "group-theory"
  - "lean4"
  - "formalized"
seed_rank: 2109
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Harmonic heights and the Artin K(pi,1) conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/Harmonic-heights-and-the-Artin-K-pi-1-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "An Artin group with no geometric CAT(0) action"
    url: "https://github.com/openai/math/blob/main/preprints/An-Artin-group-with-no-geometric-CAT-0-action-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Parabolic intersections in Artin groups"
    url: "https://github.com/openai/math/blob/main/preprints/Parabolic-intersections-in-Artin-groups-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Classifying spaces and geometric obstructions for Artin groups

## One-sentence takeaway

OpenAI's result family 254 (Group theory) claims: The Salvetti complex of every finite-rank Artin group is aspherical, proving the Artin $K(\pi,1)$ conjecture.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Arbitrary intersections of its parabolic subgroups are parabolic, proving the Parabolic Intersection Conjecture. An explicit Artin group admits no proper cocompact isometric action on any nonempty proper CAT$(0)$ space.
- *Harmonic heights and the Artin K(pi,1) conjecture*: We prove that the standard Salvetti complex of every Artin group with finitely many standard generators is aspherical. This resolves the Artin $K(\pi,1)$ conjecture in finite rank.
- *An Artin group with no geometric CAT(0) action*: We construct an Artin group on 116 generators that admits no proper, cocompact isometric action on a nonempty proper CAT(0) space. This refutes the CAT(0) conjecture for Artin groups.
- *Parabolic intersections in Artin groups*: We prove that every intersection of parabolic subgroups of any finite-rank Artin group, with arbitrary finite or infinite Coxeter labels, is parabolic. This resolves the Parabolic Intersection Conjecture affirmatively.
- Lean scope (lean/docs/254.md): The Artin $K(\pi,1)$ conjecture asserts that the standard Salvetti complex of every finite-rank Artin group is aspherical. The formalized result proves the equivalent statement that its universal cover is contractible.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Harmonic heights and the Artin K(pi,1) conjecture](https://github.com/openai/math/blob/main/preprints/Harmonic-heights-and-the-Artin-K-pi-1-conjecture-September-23-2026/paper.pdf)
- Manuscript: [An Artin group with no geometric CAT(0) action](https://github.com/openai/math/blob/main/preprints/An-Artin-group-with-no-geometric-CAT-0-action-September-23-2026/paper.pdf)
- Manuscript: [Parabolic intersections in Artin groups](https://github.com/openai/math/blob/main/preprints/Parabolic-intersections-in-Artin-groups-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/254.md
- Comparator statement (Contractibility of the Salvetti cover): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HarmonicArtin.lean
- Comparator statement (Artin group with no geometric $\mathrm{CAT}(0)$ action): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ArtinCAT0.lean
- Comparator statement (Parabolic intersections, closures, and structural consequences): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ArtinParabolicIntersections.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

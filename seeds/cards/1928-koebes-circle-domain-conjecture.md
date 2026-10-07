---
title: "Koebe’s circle-domain conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 071; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Removable-Boundaries-and-Rigidity-of-Circle-Domains-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "lean4"
  - "formalized"
seed_rank: 1928
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Removable Boundaries and Rigidity of Circle Domains"
    url: "https://github.com/openai/math/blob/main/preprints/Removable-Boundaries-and-Rigidity-of-Circle-Domains-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Koebe's Circle-Domain Conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/Koebes-Circle-Domain-Conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Koebe’s circle-domain conjecture

## One-sentence takeaway

OpenAI's result family 071 (Real and complex analysis) claims: Resolves the existence part of Koebe's circle-domain conjecture: every domain in the Riemann sphere is conformally equivalent to a domain whose complementary components are round disks or points.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): It also proves that circle domains with conformally removable boundary are rigid, meaning every conformal equivalence to another circle domain is Möbius, establishing this direction of the He–Schramm conjecture.
- *Removable Boundaries and Rigidity of Circle Domains*: We prove that a circle domain with conformally removable boundary is conformally rigid, with no restriction on the number of complementary components. This establishes the removability-to-rigidity direction of the He–Schramm Conjecture.
- *Koebe's Circle-Domain Conjecture*: We prove that every domain in the Riemann sphere is conformally equivalent to a circle domain, resolving Koebe's circle-domain conjecture positively.
- Lean scope (lean/docs/071.md): The formalization proves the removability-to-rigidity direction of the He–Schramm conjecture. If a circle domain has conformally removable boundary, then every conformal equivalence from it to another circle domain agrees on the source with a Möbius transformation.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Removable Boundaries and Rigidity of Circle Domains](https://github.com/openai/math/blob/main/preprints/Removable-Boundaries-and-Rigidity-of-Circle-Domains-September-23-2026/paper.pdf)
- Manuscript: [Koebe's Circle-Domain Conjecture](https://github.com/openai/math/blob/main/preprints/Koebes-Circle-Domain-Conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/071.md
- Comparator statement (Removable-boundary rigidity and the circle-domain theorem): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KoebeCircleDomains.lean
- Comparator statement (Koebe's circle-domain theorem and removable-boundary rigidity): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KoebeCircleDomains.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

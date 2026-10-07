---
title: "Four-dimensional disk embedding and Wall's conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 305; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-boundary-only-obstruction-to-four-dimensional-disk-embedding-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "topology"
  - "unformalized"
seed_rank: 2160
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "A boundary-only obstruction to four-dimensional disk embedding"
    url: "https://github.com/openai/math/blob/main/preprints/A-boundary-only-obstruction-to-four-dimensional-disk-embedding-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A marked tensor obstruction to four-dimensional disk embedding"
    url: "https://github.com/openai/math/blob/main/preprints/A-marked-tensor-obstruction-to-four-dimensional-disk-embedding-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A PD4 group without an aspherical manifold model"
    url: "https://github.com/openai/math/blob/main/preprints/A-PD4-group-without-an-aspherical-manifold-model-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Four-dimensional disk embedding and Wall's conjecture

## One-sentence takeaway

OpenAI's result family 305 (Topology) claims: The unrestricted four-dimensional disk-embedding conjecture fails: framed algebraic dual spheres do not suffice to obtain disjoint locally flat spanning disks.

## Why it matters here

Topology results are background for knot, surface and configuration-space reasoning in geometry code. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): In particular, the free group F2 is not good in the sense of Freedman–Quinn. Also constructs a finitely presented integral Poincaré duality group of dimension four with a finite classifying space but no realization as the fundamental group of a closed aspherical topological four-manifold, disproving Wall's conjecture.
- *A boundary-only obstruction to four-dimensional disk embedding*: We disprove the four-dimensional disc embedding conjecture without a fundamental-group hypothesis, even when no homotopy classes or output framings are prescribed. We construct a compact oriented smooth four-manifold containing finitely many disc maps with framed algebraic dual spheres whose boundary circles bound no disjoint locally flat discs. Consequently, the free group on two generators is not good in the sense of Freedman–Quinn, and neither is any group containing it as a subgroup.
- *A marked tensor obstruction to four-dimensional disk embedding*: We disprove the unrestricted four-dimensional disk-embedding conjecture. We construct immersed disks in a compact oriented smooth four-manifold with framed algebraic dual spheres satisfying the usual equivariant intersection and reduced self-intersection conditions, but with no pairwise disjoint locally flat replacements that preserve the boundary maps and induced normal framings. The obstruction holds even when the replacement disks' relative homotopy classes are not prescribed.
- *A PD4 group without an aspherical manifold model*: We construct a finitely presented integral Poincaré duality group of dimension four that has a finite classifying space but is not the fundamental group of any closed aspherical topological four-manifold. This gives a negative answer to Wall's manifold-realization question in dimension four.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [A boundary-only obstruction to four-dimensional disk embedding](https://github.com/openai/math/blob/main/preprints/A-boundary-only-obstruction-to-four-dimensional-disk-embedding-September-24-2026/paper.pdf)
- Manuscript: [A marked tensor obstruction to four-dimensional disk embedding](https://github.com/openai/math/blob/main/preprints/A-marked-tensor-obstruction-to-four-dimensional-disk-embedding-September-24-2026/paper.pdf)
- Manuscript: [A PD4 group without an aspherical manifold model](https://github.com/openai/math/blob/main/preprints/A-PD4-group-without-an-aspherical-manifold-model-September-24-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

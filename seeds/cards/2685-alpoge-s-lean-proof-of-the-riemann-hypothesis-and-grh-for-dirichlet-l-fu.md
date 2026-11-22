---
title: "Alpöge's Lean proof of the Riemann Hypothesis and GRH for Dirichlet L-functions (announcement remark, 20 Nov 2026)"
authors:
  - "Levent Alpöge"
year: 2026
venue: "Author's announcement remark (4-page PDF) with Lean 4 source; certified by the Lean and Mathlib communities"
arxiv: null
doi: null
source: "https://alpo.ge/remark.pdf"
version_reviewed: "web 2026-11-20 (verification status as of 2026-11-22)"
topics:
  - "number-theory"
  - "riemann-hypothesis"
  - "lean4"
  - "formalized"
  - "ai-assisted-math"
  - "millennium-problems"
seed_rank: 2685
seed_batch: "frontier-2026-11-22"
reviewed: "2026-11-22"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Lean verification of the Riemann Hypothesis (joint statement by the Lean and Mathlib communities)"
    url: "https://leanprover-community.github.io/blog/posts/riemann-hypothesis/"
    year: 2026
    arxiv: null
    doi: null
  - title: "Verification files for the Lean proof of the Riemann Hypothesis (Andrew Sutherland)"
    url: "https://math.mit.edu/~drew/grh/"
    year: 2026
    arxiv: null
    doi: null
  - title: "Unforced Euler singularity, unforced Navier-Stokes singularity, and the Generalized Riemann Hypothesis (Terence Tao)"
    url: "https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/"
    year: 2026
    arxiv: null
    doi: null
---

# Alpöge's Lean proof of the Riemann Hypothesis and GRH for Dirichlet L-functions (announcement remark, 20 Nov 2026)

## One-sentence takeaway

Levent Alpöge announced, in a four-page remark, a proof of the Riemann Hypothesis found "working with Claude" that extends to GRH, released only as a Lean library: 175,187 modules (the Lean community statement says about 17 million lines) depending only on Mathlib. Within two days the Lean and Mathlib communities certified that it proves Mathlib's RH statement. Independent checks also confirm five headline theorems, including GRH for all Dirichlet L-functions.

## Why it matters here

The library already tracks this thread: 35 Alpöge papers (alpoge-math-2026-08-24) and the AI-math cards. This is its biggest event, and it is also an extreme case of provenance-first knowledge. The artefact was trusted before anyone understood it, through a chain of mechanical checks (statement isolation, two independent comparators, several kernels including formally verified checkers, byte-identical sandboxed rebuilds). Human understanding is now being rebuilt as a separate layer. For Broadside the lesson is about agents and harnesses as much as mathematics: a 17M-line, long-horizon human–model collaboration whose output is accepted only through independent verification tools, never through the agent's own account.

## Key ideas

- **What was certified.** A challenge file importing only Mathlib states RH (Mathlib's `RiemannHypothesis`) and GRH for Dirichlet L-functions (all moduli and characters, and the primitive-character form). con-leche and con-ron `--compare` both accept all five theorems as justified by the solution.
- **Kernel checks.** All modules compile on Lean/Mathlib v4.33.1, and only `propext`, `Classical.choice` and `Quot.sound` are used. leanchecker replays every module, nanoda (a Rust kernel) and con-leche accept the full ~61.6 GB export, and lean4lean accepts every compiled module. An independent sandboxed build reproduces the export byte for byte.
- **Scope limit.** "GRH" here means Dirichlet L-functions only. Dedekind zeta, Hecke and general automorphic L-functions were not checked. The remark expects the Extended RH "with more time".
- **Strategy (from the remark).** A descendant of Stepanov's function-field argument, with multiplicity imitated over the integers by chains of theta lifts. For a von Mangoldt sum of length X, the suggested chain length was √X. Tao reports that early analysis points to heavy use of the Langlands programme and arithmetic geometry.
- **Process.** No human-readable proof yet. Alpöge chose to present only Lean rather than post a huge unreadable document, and expects heavy simplification.

## Caveats

There is no paper, and the mathematical ideas are undigested; the human story will take time. Verification status is as of Sutherland's page update at 04:35 UTC on 22 Nov: the Lean default/paranoid kernel replays and the end-to-end lake comparator run were still in progress. I read the remark, the Lean community statement, Sutherland's verification page and Tao's post, but not the Lean source. Carded in Frontier, outside its agents/engine/language/game-ai clusters, as a deliberate exception: it is the largest new primary result on a standing library thread (see run log).

## Links

- Announcement remark (PDF): https://alpo.ge/remark.pdf
- Lean community certification: https://leanprover-community.github.io/blog/posts/riemann-hypothesis/
- Verification files and theorem statements (Sutherland, MIT): https://math.mit.edu/~drew/grh/
- Lean source archive, part 1 of 14: https://alpo.ge/lean.tar.gz.part01
- Mathlib RiemannHypothesis definition: https://leanprover-community.github.io/mathlib4_docs/Mathlib/NumberTheory/LSeries/RiemannZeta.html#RiemannHypothesis
- Terence Tao's summary post: https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/

---
title: "The three-quarter exponent for honeycomb self-avoiding walk"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 237; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Radial-transfer-estimates-and-polygon-length-laws-for-honeycomb-walks-September-26-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2092
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Radial transfer estimates and polygon length laws for honeycomb walks"
    url: "https://github.com/openai/math/blob/main/preprints/Radial-transfer-estimates-and-polygon-length-laws-for-honeycomb-walks-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Critical honeycomb chords with prescribed boundary endpoints"
    url: "https://github.com/openai/math/blob/main/preprints/Critical-honeycomb-chords-with-prescribed-boundary-endpoints-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Cylinder loop weights and planar nesting"
    url: "https://github.com/openai/math/blob/main/preprints/Cylinder-loop-weights-and-planar-nesting-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Mass and covering exponents for fixed-length honeycomb walks"
    url: "https://github.com/openai/math/blob/main/preprints/Mass-and-covering-exponents-for-fixed-length-honeycomb-walks-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Signed cylinder propagation and marked polygons on the honeycomb lattice"
    url: "https://github.com/openai/math/blob/main/preprints/Signed-cylinder-propagation-and-marked-polygons-on-the-honeycomb-lattice-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Cylinder amplitudes and logarithmic bridge-length windows on the honeycomb lattice"
    url: "https://github.com/openai/math/blob/main/preprints/Cylinder-amplitudes-and-logarithmic-bridge-length-windows-on-the-honeycomb-lattice-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Marked polygon correlations and one-arc bounds"
    url: "https://github.com/openai/math/blob/main/preprints/Marked-polygon-correlations-and-one-arc-bounds-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Disk transfer representations and confined bridge mass"
    url: "https://github.com/openai/math/blob/main/preprints/Disk-transfer-representations-and-confined-bridge-mass-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Polynomial vacuum representations and bridge mass for honeycomb walks"
    url: "https://github.com/openai/math/blob/main/preprints/Polynomial-vacuum-representations-and-bridge-mass-for-honeycomb-walks-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Renewal and changes of law for critical honeycomb walks"
    url: "https://github.com/openai/math/blob/main/preprints/Renewal-and-changes-of-law-for-critical-honeycomb-walks-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Critical strip-crossing mass on the honeycomb lattice"
    url: "https://github.com/openai/math/blob/main/preprints/Critical-strip-crossing-mass-on-the-honeycomb-lattice-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Uniform marked-polygon estimates and sharp finite bridge moments"
    url: "https://github.com/openai/math/blob/main/preprints/Uniform-marked-polygon-estimates-and-sharp-finite-bridge-moments-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Cap-selected amplitudes and triangle chords for honeycomb walks"
    url: "https://github.com/openai/math/blob/main/preprints/Cap-selected-amplitudes-and-triangle-chords-for-honeycomb-walks-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The three-quarter exponent for honeycomb self-avoiding walk

## One-sentence takeaway

OpenAI's result family 237 (Probability and statistical mechanics) claims: Proves the diameter form of Nienhuis's predicted three-quarter exponent: a uniformly chosen n-step self-avoiding walk on the honeycomb lattice has diameter $n^{3/4+o(1)}$.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Its local mass and covering numbers have exponent 4/3. These estimates hold at every sufficiently large fixed length, simultaneously across scales, with arbitrarily high polynomial probability.
- *Radial transfer estimates and polygon length laws for honeycomb walks*: We prove critical diameter-tail exponents −2 for unrooted honeycomb polygons and −2/3 for length-weighted polygons, together with a truncated second-length-moment bound of exponent 2/3. Consequently, polygons conditioned to have length at least n have diameter $n^{3/4+o(1)}$ in probability under either weight.
- *Critical honeycomb chords with prescribed boundary endpoints*: Critical self-avoiding walks between prescribed, macroscopically separated boundary ports of a regular honeycomb hexagon have length $R^{4/3+o(1)}$ in probability, where R is the scale of the hexagon. We prove the corresponding statements for half-plane arches, parallel cuts and nonparallel pure cuts. The half-plane law also has mean length $R^{4/3+o(1)}$.
- *Cylinder loop weights and planar nesting*: We determine the growth exponent, at every fixed positive loop fugacity, of the critical honeycomb partition function for disjoint polygons separating two prescribed markers on a balanced cylinder. At fugacity two the cylinder exponent is 1/6; the corresponding planar nesting exponent and middle-strip nesting exponent are 1/12.
- *Mass and covering exponents for fixed-length honeycomb walks*: For uniform self-avoiding walks of every sufficiently large integer length on the honeycomb lattice, we prove diameter exponent 3/4 and simultaneous local-mass and covering exponent 4/3, with arbitrary positive exponent slack and arbitrary polynomial failure probability.
- *Signed cylinder propagation and marked polygons on the honeycomb lattice*: At the critical activity and loop fugacity two, we prove a 1/6 partition exponent for disjoint honeycomb polygons separating opposite marks on a balanced infinite cylinder, and a 1/12 planar nesting exponent. For ordered first-exit chords in a regular hexagon of side R, with both boundary ports summed and diameter at least $R/10$, the finite critical partition is $R^{3/4+o(1)}$ and the normalized mean length is $R^{4/3+o(1)}$. A separate two-bond estimate on tilted cylinders with controlled site proportions bounds the length-square mass of planar polygons of diameter at most H, modulo translations, by $H^{2/3+o(1)}$.
- Plus 8 more companion manuscripts in this family; see Links.
- Lean scope (lean/docs/237.md): The linked formalization establishes finiteness of the critical bridge measures used in the paper. For every strip height $h\ge1$, the total weight and first length moment of self-avoiding honeycomb bridges from a fixed initial port to a free terminal port are finite.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's $h^{4/3+o(1)}$ mean-length law and its central-visit and hexagonal-chord exponents are outside them.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Radial transfer estimates and polygon length laws for honeycomb walks](https://github.com/openai/math/blob/main/preprints/Radial-transfer-estimates-and-polygon-length-laws-for-honeycomb-walks-September-26-2026/main.pdf)
- Manuscript: [Critical honeycomb chords with prescribed boundary endpoints](https://github.com/openai/math/blob/main/preprints/Critical-honeycomb-chords-with-prescribed-boundary-endpoints-September-26-2026/main.pdf)
- Manuscript: [Cylinder loop weights and planar nesting](https://github.com/openai/math/blob/main/preprints/Cylinder-loop-weights-and-planar-nesting-September-26-2026/main.pdf)
- Manuscript: [Mass and covering exponents for fixed-length honeycomb walks](https://github.com/openai/math/blob/main/preprints/Mass-and-covering-exponents-for-fixed-length-honeycomb-walks-September-26-2026/main.pdf)
- Manuscript: [Signed cylinder propagation and marked polygons on the honeycomb lattice](https://github.com/openai/math/blob/main/preprints/Signed-cylinder-propagation-and-marked-polygons-on-the-honeycomb-lattice-September-26-2026/main.pdf)
- Manuscript: [Cylinder amplitudes and logarithmic bridge-length windows on the honeycomb lattice](https://github.com/openai/math/blob/main/preprints/Cylinder-amplitudes-and-logarithmic-bridge-length-windows-on-the-honeycomb-lattice-September-26-2026/main.pdf)
- Manuscript: [Marked polygon correlations and one-arc bounds](https://github.com/openai/math/blob/main/preprints/Marked-polygon-correlations-and-one-arc-bounds-September-26-2026/main.pdf)
- Manuscript: [Disk transfer representations and confined bridge mass](https://github.com/openai/math/blob/main/preprints/Disk-transfer-representations-and-confined-bridge-mass-September-26-2026/main.pdf)
- Manuscript: [Polynomial vacuum representations and bridge mass for honeycomb walks](https://github.com/openai/math/blob/main/preprints/Polynomial-vacuum-representations-and-bridge-mass-for-honeycomb-walks-September-26-2026/main.pdf)
- Manuscript: [Renewal and changes of law for critical honeycomb walks](https://github.com/openai/math/blob/main/preprints/Renewal-and-changes-of-law-for-critical-honeycomb-walks-September-26-2026/main.pdf)
- Manuscript: [Critical strip-crossing mass on the honeycomb lattice](https://github.com/openai/math/blob/main/preprints/Critical-strip-crossing-mass-on-the-honeycomb-lattice-September-26-2026/main.pdf)
- Manuscript: [Uniform marked-polygon estimates and sharp finite bridge moments](https://github.com/openai/math/blob/main/preprints/Uniform-marked-polygon-estimates-and-sharp-finite-bridge-moments-September-26-2026/main.pdf)
- Manuscript: [Cap-selected amplitudes and triangle chords for honeycomb walks](https://github.com/openai/math/blob/main/preprints/Cap-selected-amplitudes-and-triangle-chords-for-honeycomb-walks-September-26-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/237.md
- Comparator statement (Finiteness of critical bridge mass and first length moments): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HoneycombBridgeFiniteness.lean
- Comparator statement (Existence of the honeycomb free-energy limit): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HoneycombFreeEnergy.lean
- Comparator statement (Critical honeycomb strip mass and displacement moment): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CriticalStripMass.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math

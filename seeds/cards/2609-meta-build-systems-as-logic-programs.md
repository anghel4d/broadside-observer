---
title: "Meta Build Systems as Logic Programs"
authors:
  - "Alex Reinking"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.17672"
doi: null
source: "https://arxiv.org/abs/2611.17672"
version_reviewed: "v1"
topics:
  - "production-rules-triggers"
  - "typed-programming-systems"
seed_rank: 2609
seed_batch: "frontier-2026-11-16"
reviewed: "2026-11-16"
pool: "languages"
relevance_score: 8
see:
  - 1809-differential-datalog
  - 039-what-you-always-wanted-to-know-about-datalog-and-never-dared
cites:
  - title: "Meta Build Systems as Logic Programs"
    url: "https://arxiv.org/abs/2611.17672"
    year: 2026
    arxiv: "2611.17672"
    doi: null
---

# Meta Build Systems as Logic Programs

## One-sentence takeaway

buildlog recasts meta build configuration (what CMake, Meson and Bazel do) as stratified relational inference with impure environment probes confined to fact discovery, so it rejects ambiguous toolchain or package choices, explains every derived flag through provenance, and derives build- and target-machine configurations in one graph on eleven case studies of ten projects.

## Why it matters here

ano's standing rules and Anoptic's C23 build both touch this: a stratified logic core plus quarantined impure probes is the same split we want between deterministic rule evaluation and the outside world. Provenance on derived facts and statically checked input relations for author constraints versus user preferences are directly reusable ideas, and cross-builds without nested trees would simplify engine toolchains.

## Key ideas

- **Insight.** Objects follow from sources, flags and libraries from dependencies, language standards from transitive requirements: configuration is relational inference.
- **Purity boundary.** A stratified logical core isolates build derivation from impure environmental probes.
- **Ambiguity and provenance.** Ambiguous toolchain or package selection is rejected; derived facts are explained through provenance.
- **Inputs.** Author constraints and user preferences are distinct, statically checked input relations; libraries can ship consumer rules (Qt moc/rcc) usable for installed and built code.
- **Formal account.** Termination, within-round probe-order independence, and agreement between fresh and validated cached runs, under explicit finiteness and probe obligations; Halide generators that run during the build get build- and target-platform configs in one graph.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Eleven case studies, and the authors report remaining flag differences and platform limits; it is a research system, not a drop-in CMake replacement.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.17672
- PDF: https://arxiv.org/pdf/2611.17672

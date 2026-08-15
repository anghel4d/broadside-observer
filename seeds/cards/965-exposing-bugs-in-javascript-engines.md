---
title: "Exposing bugs in JavaScript engines through test transplantation and differential testing"
authors:
  - "Igor Lima"
  - "Jefferson Silva"
  - "Breno Miranda"
  - "Gustavo Pinto"
  - "Marcelo d'Amorim"
year: 2021
venue: "Software Quality Journal"
arxiv: null
doi: "10.1007/s11219-020-09537-8"
source: "https://doi.org/10.1007/s11219-020-09537-8"
topics:
  - "differential-testing"
  - "javascript-engines"
  - "fuzzing"
seed_rank: 965
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: unix-foundations
cites:
  - title: "Differential testing for software"
    url: "https://www.cs.swarthmore.edu/~bylvisa1/cs97/f13/Papers/DifferentialTestingForSoftware.pdf"
    year: 1998
see:
  - "968-differential-testing-for-software"
---

# Exposing bugs in JavaScript engines through test transplantation and differential testing

## One-sentence takeaway

Lima et al. transplant tests across JavaScript engines and treat disagreements among implementations as bugs — multiple oracles for one language, the methodology uutils later copies from browsers onto GNU vs Rust coreutils.

## Why it matters here

Cited inspiration for grammar-guided differential fuzzing of uutils against GNU (and Toybox/BusyBox). Same move Anoptic can use whenever two runtimes claim to implement one spec.

## Key ideas

- Softw. Qual. J. 29(1):129–158, 2021. DOI `10.1007/s11219-020-09537-8`.
- Test transplantation: a case written for one engine is replayed on the others; crashes, divergences, and assertion failures are classified.
- Differential testing: the same generated or transplanted input is an oracle only relative to peer implementations, not to a formal JS spec.
- uutils adapts the pattern: GNU is the primary oracle, Toybox/BusyBox extra ones, grammars keep argv in the language of each utility.

## Caveats

## Links

- DOI: https://doi.org/10.1007/s11219-020-09537-8

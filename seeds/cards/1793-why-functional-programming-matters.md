---
title: "Why Functional Programming Matters"
authors:
  - "John Hughes"
year: 1989
venue: "The Computer Journal / Research Topics in Functional Programming"
arxiv: null
doi: "10.1093/comjnl/32.2.98"
source: "https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf"
topics:
  - functional-programming
  - laziness
  - higher-order-functions
  - modularity
seed_rank: 1793
seed_batch: "archive-2026-09-12"
reviewed: "2026-09-12"
pool: "languages"
relevance_score: 10
lineage: hughes-why-fp-matters
cites:
  - title: "Comprehending Monads"
    url: "https://doi.org/10.1145/99370.99404"
    year: 1990
    arxiv: null
    doi: "10.1145/99370.99404"
  - title: "Can Programming Be Liberated from the Von Neumann Style?"
    url: "https://doi.org/10.1145/359576.359579"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359579"
see:
  - "644-comprehending-monads"
  - "157-can-programming-be-liberated-from-the-von-neumann-style-a-fu"
  - "1662-implementing-lazy-functional-languages-on-stock-hardware-the-spine"
---

# Why Functional Programming Matters

## One-sentence takeaway

Hughes argues that laziness and higher-order functions are modularity tools — gluing producers to consumers without forcing either to know the other’s control structure.

## Why it matters here

ano’s array/columnar style and Broadside’s FP shelf need this manifesto next to Backus 157, monads 644, and STG 1662. The α-β and numerical pipelines foreshadow GRID COMMAND / Anoptic skeletons.

## Key ideas

- **Modularity as the FP payoff.** The claim is not purity-for-its-own-sake: laziness and higher-order functions let you cut programs at new joints.
- **Higher-order functions as control glue.** Map, fold, and their cousins let a producer ignore the consumer’s iteration pattern.
- **Laziness as data glue.** Infinite or incremental structures connect a generator to a consumer without either owning the other’s evaluation order.
- **Worked examples.** Lists, trees, numerical methods, and α-β search show the same gluing pattern at different scales.

## Caveats

Manifesto, not an implementation recipe — STG 1662 is the stock-hardware machine, not this essay. Kent PDF verified open this pass. Do not remint Comprehending Monads 644 or Backus 157.

## Links

- Kent PDF: https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf
- Chalmers PDF: https://www.cse.chalmers.se/~rjmh/Papers/whyfp.pdf
- DOI: https://doi.org/10.1093/comjnl/32.2.98

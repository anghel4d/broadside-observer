---
title: "A Powerdomain Construction"
authors:
  - "Gordon D. Plotkin"
year: 1976
venue: "SIAM Journal on Computing"
arxiv: null
doi: "10.1137/0205035"
source: "https://doi.org/10.1137/0205035"
topics:
  - powerdomains
  - plotkin
  - nondeterminism
  - domain-theory
seed_rank: 719
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Data Types as Lattices"
    url: "https://doi.org/10.1137/0205046"
    year: 1976
    arxiv: null
    doi: "10.1137/0205046"
  - title: "Guarded Commands, Nondeterminacy and Formal Derivation of Programs"
    url: "https://doi.org/10.1145/360933.360975"
    year: 1975
    arxiv: null
    doi: "10.1145/360933.360975"
  - title: "Toward a Mathematical Semantics for Computer Languages"
    url: "https://www.cs.ox.ac.uk/files/3228/PRG06.pdf"
    year: 1971
    arxiv: null
    doi: null
see:
  - "614-data-types-as-lattices"
  - "591-guarded-commands-nondeterminacy-and-formal-derivation-of-pro"
  - "612-toward-a-mathematical-semantics-for-computer-languages"
---

# A Powerdomain Construction

## One-sentence takeaway

Nondeterministic programs get a denotational meaning by lifting a domain to a powerdomain of possible results, so choice and recursion still have least fixpoints.

## Why it matters here

GRID COMMAND, combat resolution, and agent planners are full of demonic/angelic choice. Plotkin’s powerdomain is the domain-theoretic object you use when “this command may take several next states” has to be a value, not a footnote — the denotational twin of Dijkstra’s guarded commands.

## Key ideas

- A powerdomain is a domain whose elements are (equivalence classes of) sets of possible outcomes, ordered so recursion still makes sense.
- The construction is designed for countable nondeterminism in programming-language semantics, not for arbitrary set theory.
- Plotkin’s convex powerdomain sits beside later Smyth (demonic) and Hoare (angelic) variants; this paper is the original construction.
- Scott’s data types as lattices and Dijkstra’s GCL are the cited neighbours: domains for values, guarded commands for the syntax of choice.
- SIAM J. Comput. 5(3), 1976, pp. 452–487.

## Caveats

## Links

- DOI: [10.1137/0205035](https://doi.org/10.1137/0205035)
- SIAM: https://epubs.siam.org/doi/10.1137/0205035

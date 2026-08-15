---
title: "Finite Automata and Their Decision Problems"
authors:
  - "Michael O. Rabin"
  - "Dana Scott"
year: 1959
venue: "IBM Journal of Research and Development"
arxiv: null
doi: "10.1147/rd.32.0114"
source: "https://doi.org/10.1147/rd.32.0114"
topics:
  - finite-automata
  - nfa
  - rabin-scott
  - decidability
seed_rank: 619
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "Representation of Events in Nerve Nets and Finite Automata"
    url: "https://www.cs.cmu.edu/~cdm/resources/Kleene1951.pdf"
    year: 1956
    arxiv: null
    doi: null
  - title: "Gedanken-Experiments on Sequential Machines"
    url: "https://www.cs.cmu.edu/~cdm/resources/Moore1956-gedanken-experiments.pdf"
    year: 1956
    arxiv: null
    doi: null
  - title: "On Computable Numbers, with an Application to the Entscheidungsproblem"
    url: "https://doi.org/10.1112/plms/s2-42.1.230"
    year: 1936
    arxiv: null
    doi: "10.1112/plms/s2-42.1.230"
see:
  - "530-representation-of-events-in-nerve-nets-and-finite-automata"
  - "620-gedanken-experiments-on-sequential-machines"
  - "515-on-computable-numbers-with-an-application-to-the-entscheidun"
---

# Finite Automata and Their Decision Problems

## One-sentence takeaway

Rabin and Scott introduce nondeterministic finite automata and prove they define the same languages as deterministic ones, via the subset construction.

## Why it matters here

Nondeterminism as a *design tool* starts here — the same trick every lexer, regex engine, and later complexity class (NP, etc.) inherits. Ano tokenizers and GRID COMMAND pattern matchers live in this class.

## Key ideas

- An NFA may have several possible next states (or none) on a given symbol; acceptance is existence of a successful run.
- Subset construction: the DFA whose states are sets of NFA states is equivalent and finite.
- Two-way automata, nondeterministic two-way automata, and several decision problems (emptiness, equivalence, infinity) are settled.
- Turing Award paper (1976 citation); *IBM J. Res. Dev.* 3(2), 1959, pp. 114–125.

## Caveats

## Links

- DOI: [10.1147/rd.32.0114](https://doi.org/10.1147/rd.32.0114)

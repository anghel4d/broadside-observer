---
title: "Weak Second-Order Arithmetic and Finite Automata"
authors:
  - "J. Richard Büchi"
year: 1960
venue: "Zeitschrift für mathematische Logik und Grundlagen der Mathematik"
arxiv: null
doi: "10.1002/malq.19600060105"
source: "https://doi.org/10.1002/malq.19600060105"
topics:
  - buchi-automata
  - monadic-second-order
  - automata
seed_rank: 633
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Finite Automata and Their Decision Problems"
    url: "https://doi.org/10.1147/rd.32.0114"
    year: 1959
    arxiv: null
    doi: "10.1147/rd.32.0114"
  - title: "Representation of Events in Nerve Nets and Finite Automata"
    url: "https://www.cs.cmu.edu/~cdm/resources/Kleene1951.pdf"
    year: 1956
    arxiv: null
    doi: null
  - title: "On Certain Formal Properties of Grammars"
    url: "https://doi.org/10.1016/S0019-9958(59)90362-6"
    year: 1959
    arxiv: null
    doi: "10.1016/S0019-9958(59)90362-6"
see:
  - "619-finite-automata-and-their-decision-problems"
  - "530-representation-of-events-in-nerve-nets-and-finite-automata"
  - "601-on-certain-formal-properties-of-grammars"
---

# Weak Second-Order Arithmetic and Finite Automata

## One-sentence takeaway

Büchi proves that weak (finite-set) monadic second-order arithmetic of one successor has exactly the same expressive power as finite automata, so the theory is decidable.

## Why it matters here

Founding logic↔automata bridge and the ancestry of model checking. GRID COMMAND / engine temporal queries that compile to automata are this idea; Büchi’s later ω-automata paper extends it to infinite words.

## Key ideas

- WS1S = weak MSO over (ℕ, +1); quantification is over *finite* sets of positions.
- A formula defines a regular language of finite words, and every regular language is so definable.
- Decidability of WS1S follows from the automata decision procedures of Rabin–Scott / Kleene.
- Path to Büchi automata on infinite words (1962) and to S1S / Rabin’s tree theorem.

## Caveats

## Links

- DOI: [10.1002/malq.19600060105](https://doi.org/10.1002/malq.19600060105)

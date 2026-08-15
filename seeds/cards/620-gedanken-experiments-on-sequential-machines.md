---
title: "Gedanken-Experiments on Sequential Machines"
authors:
  - "Edward F. Moore"
year: 1956
venue: "In Automata Studies (Shannon & McCarthy), Annals of Mathematics Studies 34"
arxiv: null
doi: null
source: "https://www.cs.cmu.edu/~cdm/resources/Moore1956-gedanken-experiments.pdf"
topics:
  - moore-machines
  - automata
  - testing
seed_rank: 620
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "A Method for Synthesizing Sequential Circuits"
    url: "https://doi.org/10.1002/j.1538-7305.1955.tb03788.x"
    year: 1955
    arxiv: null
    doi: "10.1002/j.1538-7305.1955.tb03788.x"
  - title: "Representation of Events in Nerve Nets and Finite Automata"
    url: "https://www.cs.cmu.edu/~cdm/resources/Kleene1951.pdf"
    year: 1956
    arxiv: null
    doi: null
  - title: "On Computable Numbers, with an Application to the Entscheidungsproblem"
    url: "https://doi.org/10.1112/plms/s2-42.1.230"
    year: 1936
    arxiv: null
    doi: "10.1112/plms/s2-42.1.230"
see:
  - "621-a-method-for-synthesizing-sequential-circuits"
  - "530-representation-of-events-in-nerve-nets-and-finite-automata"
  - "515-on-computable-numbers-with-an-application-to-the-entscheidun"
---

# Gedanken-Experiments on Sequential Machines

## One-sentence takeaway

Moore studies what an experimenter can learn about a finite-state black box from input/output experiments, and defines the machine model whose output depends only on the current state.

## Why it matters here

Testing and state-identification roots — the same questions one asks of an Anoptic subsystem that only exposes a command bus. Moore machines (output-on-state) pair with Mealy (output-on-transition) as the FSM taxonomy.

## Key ideas

- A Moore machine outputs a symbol determined by the *state*, not the incoming transition.
- Simple vs multiple experiments: one copy vs several copies of the unknown machine.
- Distinguishability of states, and an analogue of an uncertainty principle: some pairs of states cannot be told apart by a single experiment without disturbing the machine.
- *Automata Studies* (AMS 34), Princeton, 1956, pp. 129–153.

## Caveats

## Links

- Chapter PDF: https://www.cs.cmu.edu/~cdm/resources/Moore1956-gedanken-experiments.pdf
- Volume: https://press.princeton.edu/books/paperback/9780691079165/automata-studies

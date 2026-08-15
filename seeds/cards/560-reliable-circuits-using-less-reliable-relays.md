---
title: "Reliable circuits using less reliable relays"
authors:
  - "Edward F. Moore"
  - "Claude E. Shannon"
year: 1956
venue: "Journal of the Franklin Institute"
arxiv: null
doi: "10.1016/0016-0032(56)90559-2"
source: "https://doi.org/10.1016/0016-0032(56)90559-2"
topics:
  - reliability
  - redundancy
  - shannon
  - moore
seed_rank: 560
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "Probabilistic Logics and the Synthesis of Reliable Organisms from Unreliable Components"
    url: "https://press.princeton.edu/books/paperback/9780691079165/automata-studies"
    year: 1956
    arxiv: null
    doi: null
  - title: "A Symbolic Analysis of Relay and Switching Circuits"
    url: "https://doi.org/10.1109/T-AIEE.1938.5057767"
    year: 1938
    arxiv: null
    doi: "10.1109/T-AIEE.1938.5057767"
see:
  - "547-probabilistic-logics-and-the-synthesis-of-reliable-organisms"
  - "552-a-symbolic-analysis-of-relay-and-switching-circuits"
---

# Reliable circuits using less reliable relays

## One-sentence takeaway

Moore and Shannon show how to wire crummy relays into two-terminal networks whose failure probability can be driven arbitrarily low.

## Why it matters here

Fault-tolerant Broadside subsystems — redundant sensors, voting, retry — are the same redundancy-versus-error curve, just not in relays.

## Key ideas

- Relays fail stuck-open or stuck-closed with known probabilities; a network's make and break probabilities are computed from the topology.
- Iterated "hammock" and bridge compositions multiply reliability: more copies, smaller error.
- The construction is the engineering twin of von Neumann's 1956 probabilistic logics, specialized to two-terminal contact networks.
- Design is combinatorial, not statistical coding: topology is the code.
- Published in two Franklin Institute parts in 1956, the same year as Automata Studies.

## Caveats

## Links

- DOI: [10.1016/0016-0032(56)90559-2](https://doi.org/10.1016/0016-0032(56)90559-2)
- URL: https://doi.org/10.1016/0016-0032(56)90559-2

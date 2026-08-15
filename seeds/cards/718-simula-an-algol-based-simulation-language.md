---
title: "SIMULA: An Algol-Based Simulation Language"
authors:
  - "Ole-Johan Dahl"
  - "Kristen Nygaard"
year: 1966
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/365813.365819"
source: "https://doi.org/10.1145/365813.365819"
topics:
  - simula
  - dahl
  - nygaard
  - object-oriented
  - simulation
seed_rank: 718
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Report on the Algorithmic Language ALGOL 60"
    url: "https://doi.org/10.1145/367236.367262"
    year: 1960
    arxiv: null
    doi: "10.1145/367236.367262"
see:
  - "623-report-on-the-algorithmic-language-algol-60"
---

# SIMULA: An Algol-Based Simulation Language

## One-sentence takeaway

SIMULA extends ALGOL 60 with processes, classes, and prefixing so a discrete-event simulation is written as interacting objects rather than a global event loop.

## Why it matters here

Anoptic’s ECS and GRID COMMAND entities are the same bet SIMULA made in 1966: the world is a collection of processes with local state and a reactivation point. Classes and prefixing (inheritance) enter programming languages here, before Smalltalk.

## Key ideas

- A process is an ALGOL block that can be detached and resumed; the simulation clock and event list are language-level.
- `class` declarations introduce objects with their own local data and operations; prefixing lets one class extend another.
- The motivating domain is discrete-event simulation (queues, customers, resources), not “object-oriented programming” as a slogan.
- The language is explicitly ALGOL-based: block structure, call-by-name, and the 1960 report are the substrate.
- CACM 9(9), September 1966, pp. 671–678; SIMULA 67 later freezes the class/prefix design this paper introduces.

## Caveats

## Links

- DOI: [10.1145/365813.365819](https://doi.org/10.1145/365813.365819)
- ACM: https://dl.acm.org/doi/10.1145/365813.365819

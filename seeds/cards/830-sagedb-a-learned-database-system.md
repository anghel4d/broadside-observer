---
title: "SageDB: A Learned Database System"
authors:
- Tim Kraska
- Mohammad Alizadeh
- Alex Beutel
- Ed H. Chi
- Jialin Ding
- Ani Kristo
- Guillaume Leclerc
- Samuel Madden
- Hongzi Mao
- Vikram Nathan
year: 2019
venue: CIDR
arxiv: null
doi: null
source: "https://research.google/pubs/sagedb-a-learned-database-system/"
topics:
- databases
- contemporary-db
seed_rank: 830
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: The Case for Learned Index Structures
  url: "https://arxiv.org/abs/1712.01208"
  year: 2018
  arxiv: "1712.01208"
  doi: 10.1145/3183713.3196909
see:
- "818-the-case-for-learned-index-structures"
---

# SageDB: A Learned Database System

## One-sentence takeaway

SageDB is the CIDR vision that follows learned indexes: specialize every database component — indexes, cardinality estimates, layouts, schedulers, even operators — to one dataset, one workload, and one machine by learning models and synthesizing code, instead of shipping one general-purpose engine.

## Why it matters here

It is the research program Anoptic already half-runs (compile the layout to the frame, not the other way around). Treat SageDB as the checklist of *what else* can be instance-optimized once the index is a CDF: sort order, compression, join order, and morsel schedules.

## Key ideas

- A learned CDF / density model is a shared substrate: indexes, partitioners, and cardinality estimators all read the same distribution.
- Code generation instantiates operators and layouts for the observed types and skew, rather than interpreting a generic Volcano tree.
- The system is instance-optimized: retrain / resynthesize when the data or workload shifts, instead of hoping one B-tree / one cost model is always fine.
- The paper is a research agenda with prototypes, not a shipping DBMS; ALEX, learned cardinalities, and later instance-optimized stores are the follow-through.

## Caveats

## Links

- Google Research: https://research.google/pubs/sagedb-a-learned-database-system/
- PDF: https://storage.googleapis.com/gweb-research2023-media/pubtools/4853.pdf

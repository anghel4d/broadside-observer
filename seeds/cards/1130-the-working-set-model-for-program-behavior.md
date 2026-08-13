---
title: "The Working Set Model for Program Behavior"
authors:
  - "Peter J. Denning"
year: 1968
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/363095.363141"
source: "https://doi.org/10.1145/363095.363141"
topics:
  - operating-systems
  - virtual-memory
  - working-set
seed_rank: 1130
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: systems-classics
cites:
  - title: "A Study of Replacement Algorithms for a Virtual-Storage Computer"
    url: "https://doi.org/10.1147/sj.52.0078"
    year: 1966
    arxiv: null
    doi: "10.1147/sj.52.0078"
    card: "1131-a-study-of-replacement-algorithms-for-a-virtual-storage-comp"
  - title: "The UNIX Time-Sharing System"
    url: "https://doi.org/10.1145/361011.361061"
    year: 1974
    arxiv: null
    doi: "10.1145/361011.361061"
    card: "1101-the-unix-time-sharing-system"
---

# The Working Set Model for Program Behavior

## One-sentence takeaway

Working sets define a process's locality over a sliding window—guiding thrashing control and memory scheduling.

## Why it matters here

Locality/working-set language for asset streaming and cache budgets in engines.

## Key ideas

- Working set W(t, T) as pages touched in window T.
- Thrashing explained as working-set overcommit.
- Policy guidance for multiprogramming degree.
- Foundational virtual-memory program-behavior model.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/363095.363141](https://doi.org/10.1145/363095.363141)
- URL: https://doi.org/10.1145/363095.363141

---
title: "MonetDB/X100: Hyper-Pipelining Query Execution"
authors:
  - "Peter Boncz"
  - "Marcin Zukowski"
  - "Niels Nes"
year: 2005
venue: "CIDR"
arxiv: null
doi: null
source: "https://www.cidrdb.org/cidr2005/papers/P19.pdf"
topics:
  - relational-ecs-queries
  - batched-interpreters-ffi
seed_rank: 129
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "A decomposition storage model"
    url: "https://doi.org/10.1145/318898.318923"
    year: 1985
    arxiv: null
    doi: "10.1145/318898.318923"
  - title: "Making B+- trees cache conscious in main memory"
    url: "https://doi.org/10.1145/335191.335449"
    year: 2000
    arxiv: null
    doi: "10.1145/335191.335449"
  - title: "Volcano-an extensible and parallel query evaluation system"
    url: "https://doi.org/10.1109/69.273032"
    year: 1994
    arxiv: null
    doi: "10.1109/69.273032"
  - title: "A case for fractured mirrors"
    url: "https://doi.org/10.1007/s00778-003-0093-1"
    year: 2003
    arxiv: null
    doi: "10.1007/s00778-003-0093-1"
  - title: "Buffering databse operations for enhanced instruction cache performance"
    url: "https://doi.org/10.1145/1007568.1007592"
    year: 2004
    arxiv: null
    doi: "10.1145/1007568.1007592"
  - title: "Improving index performance through prefetching"
    url: "https://doi.org/10.1145/375663.375688"
    year: 2001
    arxiv: null
    doi: "10.1145/375663.375688"
  - title: "Block oriented processing of relational database operations in modern computer architectures"
    url: "https://doi.org/10.1109/icde.2001.914871"
    year: 2002
    arxiv: null
    doi: "10.1109/icde.2001.914871"
  - title: "Buffering Accesses to Memory-Resident Index Structures"
    url: "https://doi.org/10.1016/b978-012722442-8/50043-4"
    year: 2003
    arxiv: null
    doi: "10.1016/b978-012722442-8/50043-4"
  - title: "Conjunctive selection conditions in main memory"
    url: "https://doi.org/10.1145/543613.543628"
    year: 2002
    arxiv: null
    doi: "10.1145/543613.543628"
  - title: "A case study on array query optimisation"
    url: "https://doi.org/10.1145/1039470.1039476"
    year: 2004
    arxiv: null
    doi: "10.1145/1039470.1039476"
  - title: "MIL primitives for querying a fragmented world"
    url: "https://doi.org/10.1007/s007780050076"
    year: 1999
    arxiv: null
    doi: "10.1007/s007780050076"
  - title: "Detailed characterization of a quad Pentium Pro server running TPC-D"
    url: "https://doi.org/10.1109/iccd.1999.808414"
    year: 2003
    arxiv: null
    doi: "10.1109/iccd.1999.808414"
see:
  - "153-a-decomposition-storage-model"
---

# MonetDB/X100: Hyper-Pipelining Query Execution

## One-sentence takeaway

Describes MonetDB/X100's vectorized query execution engine that hyper-pipelines columnar data through CPU caches.

## Why it matters here

Vectorized columnar query execution is the performance model for ano's batched interpreters.

## Key ideas

- Describes MonetDB/X100's vectorized query execution engine that hyper-pipelines columnar data through CPU caches.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.

## Links

- URL: https://www.cidrdb.org/cidr2005/papers/P19.pdf

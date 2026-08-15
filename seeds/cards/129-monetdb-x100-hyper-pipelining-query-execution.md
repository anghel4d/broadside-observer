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
  - title: "Volcano — an extensible and parallel query evaluation system"
    url: "https://doi.org/10.1109/69.273032"
    year: 1994
    arxiv: null
    doi: "10.1109/69.273032"
  - title: "A case for fractured mirrors"
    url: "https://doi.org/10.1007/s00778-003-0093-1"
    year: 2003
    arxiv: null
    doi: "10.1007/s00778-003-0093-1"
  - title: "Buffering database operations for enhanced instruction cache performance"
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
    url: "https://doi.org/10.1109/ICDE.2001.914871"
    year: 2001
    arxiv: null
    doi: "10.1109/ICDE.2001.914871"
  - title: "Conjunctive selection conditions in main memory"
    url: "https://doi.org/10.1145/543613.543628"
    year: 2002
    arxiv: null
    doi: "10.1145/543613.543628"
  - title: "MIL primitives for querying a fragmented world"
    url: "https://doi.org/10.1007/s007780050076"
    year: 1999
    arxiv: null
    doi: "10.1007/s007780050076"
see:
  - "153-a-decomposition-storage-model"
---

# MonetDB/X100: Hyper-Pipelining Query Execution

## One-sentence takeaway

X100 keeps MonetDB’s columns but pipelines ~1000-value vectors through Volcano-style operators so the compiler can loop-pipeline, hiding both tuple-at-a-time interpretation and full-column materialization.

## Why it matters here

ano’s batched interpreters are this paper’s vectorized primitives: a column chunk that fits in L1/L2, independent lanes the CPU can fill its pipeline with, and a selection vector instead of compacting after every filter.

## Key ideas

- MySQL-class engines spend ~90% of TPC-H Q1 outside the actual `+`/`*`/`SUM` (IPC ≈ 0.7). Tuple-at-a-time iterators block loop pipelining and amortize a call over one addition (~38 instructions / ~49 cycles vs 3).
- MonetDB/MIL’s column-at-a-time multiplexes compile well but materialize every intermediate BAT. On SF=1 Q1 they peg DRAM at ~500 MB/s and drop to ~75 cycles/multiply; in-cache SF=0.001 is twice as fast. Full materialization also invents positional joins after a 98% select.
- X100’s unit of work is a vertical vector (~1000 values). Scan / Select / Project / Aggr pipeline like Volcano, but primitives are generated from type patterns (`any +(any, any)`) into `restrict` loops the C compiler can software-pipeline. A selection vector lets later maps skip without compacting.
- Storage is still DSM/columnar (MonetDB BATs in these experiments). ColumnBM is meant to compress on the RAM↔cache boundary and sequentialize disk. Fetch-joins on a virtual `#rowId` replace MIL’s positional joins.
- Hand-coded Q1 is 0.22 s on their Athlon; X100 is 0.50 s — within 2× of the UDF and 1–2 orders of magnitude above the iterator engines. TPC-H 100 GB is the scale-out claim.

## Caveats

## Links

- PDF (CIDR 2005): https://www.cidrdb.org/cidr2005/papers/P19.pdf

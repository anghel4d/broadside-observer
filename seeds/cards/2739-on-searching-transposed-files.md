---
title: "On Searching Transposed Files"
authors:
  - "D. S. Batory"
year: 1979
venue: "ACM Transactions on Database Systems 4(4), 531–544, December 1979 (a version was presented at VLDB 1978)"
arxiv: null
doi: "10.1145/320107.320125"
source: "https://dl.acm.org/doi/pdf/10.1145/320107.320125"
version_reviewed: "TODS December 1979 journal PDF (ACM, 14 pages, read via the Internet Archive snapshot of 2024-07-26)"
topics:
  - "transposed-files"
  - "column-stores"
  - "vertical-partitioning"
  - "predicate-ordering"
  - "late-materialization"
  - "query-processing"
  - "np-completeness"
seed_rank: 2739
seed_batch: "archive-2026-11-28"
reviewed: "2026-11-28"
pool: "languages"
relevance_score: 8
lineage: contemporary-databases
cites:
  - title: "On Searching Transposed Files"
    url: "https://doi.org/10.1145/320107.320125"
    year: 1979
    arxiv: null
    doi: "10.1145/320107.320125"
  - title: "Batched Searching of Sequential and Tree Structured Files"
    url: "https://doi.org/10.1145/320473.320487"
    year: 1976
    arxiv: null
    doi: "10.1145/320473.320487"
  - title: "Storage and Access in Relational Data Bases"
    url: "https://doi.org/10.1147/sj.164.0363"
    year: 1977
    arxiv: null
    doi: "10.1147/sj.164.0363"
  - title: "The Determination of Efficient Record Segmentations and Blocking Factors for Shared Data Files"
    url: "https://doi.org/10.1145/320557.320574"
    year: 1977
    arxiv: null
    doi: "10.1145/320557.320574"
see: []
---

# On Searching Transposed Files

## One-sentence takeaway

A transposed file stores each attribute group as its own positionally aligned subfile (record i is the i-th entry of every subfile). Batory shows that the order in which subfiles are filtered decides the cost. His greedy rule picks next the subfile with the lowest rank `min(b_i, R) + R·F_i`: the blocks you must touch plus the rows that survive. In his experiments, whenever a full scan was not already the best plan, that rule found the optimal order 98% of the time.

## Why it matters here

This is a 1979 column store, six years before the decomposition storage model (153) and long before C-Store (127) and MonetDB/X100 (129). It is also the cost model behind ano's selection-as-reference. A conjunctive `where` over columns is a sequence of masked passes. Each pass either scans a whole column or gathers only the rows still selected, whichever touches less. The pass to run next is the one with the smallest "work now + work left over". In memory, blocks become cache lines or pages and the same `min(b, R)` switch decides between a dense scan and a gather over a selection vector. The paper's batched-query result (shared subfile passes favour transposed layouts as the batch grows) also fits standing rules that re-run many small predicates over the same columns each tick. The ano mapping is my extrapolation; the paper is about disk block accesses.

## Key ideas

- **Layout vocabulary.** Partition the attribute set into k subfiles. Each is a "nonsequential" (insertion-ordered) file, so the i-th subrecord of every subfile belongs to record i. Rebuilding a record means reading position i everywhere. One attribute per subfile is *fully transposed*. Overlapping attribute groups give a *clustered* transposed file.
- **Three stages, one that matters.** Choose the subfiles, order the qualification passes, then fetch the output attributes. Only the order of the qualification passes changes the cost. Example: SF1 is 400 blocks and leaves 300 rows; SF2 is 100 blocks and leaves 50. SF1 first costs 500 block reads; SF2 first costs at most 150, a 70% saving.
- **Rank rule.** The expected cost uses Yao's estimate `b(1 − (1 − 1/b)^R)` blocks for R rows. Batory swaps it for the worst case `min(b, R)`, which stayed within an observed 8% of the expected cost. An exchange lemma then gives a necessary condition for optimality: search next the subfile with the lowest `min(b_i, R) + R·F_i`, set `R ← R·F_i`, repeat. Equal sizes reduce to most-selective-first. Equal selectivities reduce to smallest-first.
- **Disjunctions and batches.** With a k×q selectivity matrix (q conjuncts or q batched queries), the rank becomes `min(b_i, Σ_j C_ij R_j) + Σ_j R_j F_ij`. In 900 random experiments (N = 20,000 records, 2–4 subfiles), the heuristic gave a wrong order in 9. It falls back to scanning every subfile (Hoffer's strategy) once queries qualify more than a few percent of the file.
- **Clustered layouts are hard.** Choosing which overlapping subfiles to read is NP-complete (by reduction from set cover). The paper leaves good heuristics as an open problem.
- **When to transpose.** Compared with multilist and inverted files, transposed files break even when about 6% of the records are needed (about 2% against multilist). They suit batched and statistical queries and fit poorly with one-at-a-time interactive lookups. The introduction cites one installation whose statistical queries went from 10 minutes to 10 seconds.

## Caveats

The cost model counts disk block accesses under an independence assumption between predicates, and all evidence comes from synthetic random selectivities, not a real workload. The rank rule is a necessary condition, not a proof of optimality. The paper does not cover compression, vectorized execution or tuple reconstruction cost beyond block counts. Transposed files predate it (the introduction cites earlier studies and working installations, and the strategy extends Kennedy's and Hoffer's), so this is the query-ordering paper, not the invention of column storage. The ACM PDF is a scan with OCR, and a few figure values in it are garbled. I read the full text.

## Links

- PDF (ACM): https://dl.acm.org/doi/pdf/10.1145/320107.320125
- PDF (Internet Archive copy): https://web.archive.org/web/20240726200231/https://dl.acm.org/doi/pdf/10.1145/320107.320125
- DOI: https://doi.org/10.1145/320107.320125

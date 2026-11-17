---
title: "Two Algorithms for Maintaining Order in a List"
authors:
  - "Paul F. Dietz"
  - "Daniel D. Sleator"
year: 1987
venue: "STOC 1987 (19th ACM Symposium on Theory of Computing); full version CMU-CS-88-113, 1988"
arxiv: null
doi: "10.1145/28395.28434"
source: "https://www.cs.cmu.edu/~sleator/papers/maintaining-order.pdf"
version_reviewed: "CMU-CS-88-113 tech report (15 Sep 1988)"
topics:
  - "order-maintenance"
  - "list-labeling"
  - "amortized-analysis"
  - "persistent-data-structures"
seed_rank: 2622
seed_batch: "archive-2026-11-18"
reviewed: "2026-11-18"
pool: "systems"
lineage: algorithms-and-complexity
relevance_score: 8
see:
  - "2479-order-maintenance-in-worst-case-constant-time-verified"
cites:
  - title: "Two Algorithms for Maintaining Order in a List"
    url: "https://doi.org/10.1145/28395.28434"
    year: 1987
    doi: "10.1145/28395.28434"
---

# Two Algorithms for Maintaining Order in a List

## One-sentence takeaway

Give every list record an integer label in a circular arena of size M > n², answer "does x come before y?" by comparing labels, and on insert walk forward until the gap after the j-th successor exceeds j², then spread those j records evenly: O(log n) amortized relabels per insert with no structure besides the list and the labels, plus a second, harder algorithm that makes every operation O(1) worst case.

## Why it matters here

This is the source paper behind card 2479 (the 2026 Lean-verified worst-case version). Order maintenance is the primitive for stable ordering of things inserted between each other: draw and event order, timestamp order for incremental ano rules, ancestor queries on a mutating tree, and list labelling for undo/replay. The first algorithm is small enough to drop into an ECS as a plain `u64` label column next to an intrusive list, with wrap-around handled by unsigned overflow when log M is the word size.

## Key ideas

- **Operations.** Insert(x, y) puts y after x; Delete(x); Order(x, y) is true when x is before y. Applications named in the paper: ancestor queries on a dynamic tree (Dietz), context trees, and fully persistent data structures.
- **Labels in an arena.** Labels come from {0..M−1}, measured relative to a fixed base record modulo M. Order and Delete are trivial (compare labels; unlink).
- **Insert rule.** With w_i the label distance from x to its i-th successor, walk j upward while w_j ≤ j², then relabel the j−1 records after x so the j gaps differ by at most 1, and place y in the middle of the gap after x. Requiring M > n² guarantees the walk stops.
- **Bound.** A potential-function proof gives O(log n) amortized relabels per insert; Delete and Order are O(1) worst case.
- **List of sublists.** Split the list into sublists of about log n records, label inside each sublist by averaging neighbours, and run the main algorithm over the sublists: O(1) amortized for everything (Tarjan's observation, detailed in Section 2).
- **Real-time version.** Section 3 uses a three-level structure with Willard's algorithm and spreads relabelling work over later inserts to get O(1) worst-case time, which the paper says also gives fully persistent search trees O(log n) worst-case update time and O(1) worst-case space.

## Caveats

Assumes a fixed upper limit N on list size and O(log N)-bit words handled in constant time; with M > n², 64-bit labels cap the list near 2³² records. The worst-case algorithm is far more involved (card 2479 needed a Lean proof to trust a version of it). Reviewed from the 1988 CMU tech report, which is the full version of the STOC paper.

## Links

- Full version (CMU-CS-88-113 PDF): https://www.cs.cmu.edu/~sleator/papers/maintaining-order.pdf
- STOC 1987 DOI: https://doi.org/10.1145/28395.28434

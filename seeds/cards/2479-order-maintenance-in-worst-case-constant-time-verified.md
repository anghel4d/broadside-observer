---
title: "Order Maintenance in Worst-Case Constant Time, Verified"
authors:
  - "Denis Firsov"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2610.38616"
doi: null
source: "https://arxiv.org/abs/2610.38616"
topics:
  - "order-maintenance"
  - "verified-data-structures"
  - "lean"
seed_rank: 2479
seed_batch: "craft-2026-10-31"
reviewed: "2026-10-31"
pool: "systems"
lineage: algorithms-and-complexity
relevance_score: 7
cites:
  - title: "Order Maintenance in Worst-Case Constant Time, Verified"
    url: "https://arxiv.org/abs/2610.38616"
    year: 2026
    arxiv: "2610.38616"
    doi: null
see: ["1132-mechanized-algebra-verified-data-structures-sparse-tensors"]
---

# Order Maintenance in Worst-Case Constant Time, Verified

## One-sentence takeaway

An order-maintenance structure (insert, delete, "which comes first?") assembled from published parts runs every operation in worst-case O(1) steps with O(log t)-bit values, and the whole thing is proved in Lean 4 down to a step-counting RAM interpreter, with an unverified native port to show real cost.

## Why it matters here

Order maintenance is the primitive under stable ordering of things that get inserted between each other: draw and event order in a frame, timestamp order for incremental ano rules, Euler-tour and dynamic-tree tricks, and list labelling for undo/replay. Worst-case (not amortized) O(1) means no hiccup frames from relabelling. The verification method matters too: a deeply embedded RAM program whose interpreter counts every instruction is a template for proving real step bounds, not just correctness.

## Key ideas

- **Worst-case constant time** per insert, delete and query, independent of size and history.
- **Bounded word size.** After t operations no computed value exceeds O(log t) bits, so it runs on a word-RAM of that width.
- **Cost model you can trust.** A verified, step-count-preserving translation connects the high-level proofs to the machine program; the interpreter is the only trusted cost model.
- **Native implementation** reports practical constants.

## Caveats

Constants for worst-case O(1) designs are usually large, so a simple amortized scheme may win in practice; the abstract does not give the native numbers. Single-threaded. Abstract-level read.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.38616
- PDF: https://arxiv.org/pdf/2610.38616

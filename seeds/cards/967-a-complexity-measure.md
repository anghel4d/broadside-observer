---
title: "A Complexity Measure"
authors:
  - "T. J. McCabe"
year: 1976
venue: "IEEE Transactions on Software Engineering"
arxiv: null
doi: "10.1109/TSE.1976.233837"
source: "https://doi.org/10.1109/TSE.1976.233837"
topics:
  - "cyclomatic-complexity"
  - "testing"
  - "metrics"
seed_rank: 967
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: unix-foundations
cites:
  []
---

# A Complexity Measure

## One-sentence takeaway

Cyclomatic complexity v(G) = e − n + 2p: the classic structured-testing / independent-path metric Lizard still reports (GNU 9.40 vs uutils 3.30).

## Why it matters here

The number behind 'Rust looks simpler'. Also a reminder that hidden control flow (destructors, `?`) does not count.

## Key ideas

- IEEE TSE SE-2(4):308–320, 1976. DOI `10.1109/TSE.1976.233837`.
- Complexity as the number of independent paths; testing implications.
- uutils paper: this is what Lizard averages per function.

## Caveats

- 1976 control-flow metric. Does not see Rust destructors or C macros honestly; the paper notes this.

## Links

- DOI: https://doi.org/10.1109/TSE.1976.233837

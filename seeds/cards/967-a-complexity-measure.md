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

McCabe defines cyclomatic complexity \(v(G)=e-n+2p\) as the number of linearly independent paths through a control-flow graph, and argues that this number is the right size for a structured testing basis.

## Why it matters here

This is the number behind 'Rust looks simpler' in the uutils paper: Lizard averages \(v(G)\) per function at 9.40 for GNU C vs 3.30 for Rust. Also a reminder that hidden control flow — destructors, `?`, macros — does not sit on that graph.

## Key ideas

- IEEE TSE SE-2(4):308–320, 1976. DOI `10.1109/TSE.1976.233837`.
- \(e\) edges, \(n\) nodes, \(p\) connected components; for a single connected CFG with one entry/exit this is \(e-n+2\).
- Testing implication: you need at least \(v(G)\) tests to cover a basis of paths; McCabe suggests keeping functions near \(v(G)\le 10\).
- uutils paper: this is what Lizard (and rust-code-analysis) average; the comparison is real and also incomplete for RAII/`?`.

## Caveats

## Links

- DOI: https://doi.org/10.1109/TSE.1976.233837

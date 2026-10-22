---
title: "Solving Go under Positional Superko: Sound Proof Transfer and New Board Values"
authors:
  - "Sami Kharma"
  - "Florian Schintke"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.29414"
doi: null
source: "https://arxiv.org/abs/2610.29414"
topics:
  - "strategy-rts-agents"
seed_rank: 2387
seed_batch: "frontier-2026-10-22"
reviewed: "2026-10-22"
pool: "game-ai"
relevance_score: 7
lineage: game-tree-search
cites:
  - title: "Solving Go under Positional Superko: Sound Proof Transfer and New Board Values"
    url: "https://arxiv.org/abs/2610.29414"
    year: 2026
    arxiv: "2610.29414"
    doi: null
---

# Solving Go under Positional Superko: Sound Proof Transfer and New Board Values

## One-sentence takeaway

Sanko, a parallel depth-first proof-number solver from Zuse Institute Berlin, makes history-dependent Go rules tractable with a cheap proof-transfer theorem (a stored proof stays valid on a new path unless a board the proof's winner must create has already occurred), solving 5×5 Go under positional superko in 16 minutes on six threads versus 5.25 hours for the previous best, and establishing first superko values for 23 more boards.

## Why it matters here

Any search that reuses results through a transposition table while legality depends on history (repetition rules, one-shot abilities, cooldowns in GRID COMMAND skirmish AI) hits the graph-history interaction problem. This paper gives a sound, inexpensive condition for when a cached proof can be reused, and shows how static shortcuts (Benson-style life analysis, move pruning) must be strengthened once captures can become illegal. It extends the classic game-tree thread next to cards 2376 (history heuristic) and 379 (alpha-beta analysis).

## Key ideas

- **Three tools break under superko.** Transposition tables (GHI problem), static life-and-death recognition (Benson's analysis assumes the owner can always capture intruders) and safe move pruning.
- **Proof-transfer theorem.** Asymmetric: only the boards the winner must create matter; if none has occurred on the new path, the stored proof transfers. Implemented with a flag for proofs that carry an exclusion target.
- **Pure-eye analysis.** A Benson variant with two extra conditions that stays sound under positional superko.
- **Performance.** 5×5 in 16 minutes on six threads (EWS needed 5.25 h on six processes); about 1.3–1.6 minutes on one 192-thread EPYC machine; 4×4 58× faster single-threaded (0.23 s versus 13.6 s).
- **Rules change values.** 4×7, a full-board win under basic ko, is worth only 12 points under PSK, and the authors pinpoint the move where the previously published optimal line fails. Eleven of the 23 newly valued boards were unsolved under any rules. Solver source, command lines and run outcomes are released for reproduction.

## Caveats

Part of the 5×5 speedup is hardware (server cores versus a four-core laptop for the EWS baseline), though the single-thread 4×4 comparison shows a large algorithmic gap. Small boards only, and results depend on the exact rule set (positional superko, a particular komi and pass handling); situational superko is not addressed. The big runs used a 192-thread machine with 1.5 TB of RAM and tables up to 0.97 TB. Proof-number search on fully observable games transfers to RTS AI as an idea about sound caching, not as a drop-in algorithm.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.29414
- PDF: https://arxiv.org/pdf/2610.29414

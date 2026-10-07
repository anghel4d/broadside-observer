---
title: "A New Hashing Method with Application for Game Playing"
authors:
  - "Albert L. Zobrist"
year: 1970
venue: "University of Wisconsin Computer Sciences Technical Report #88 (reprinted in ICCA Journal 13(2), 1990)"
arxiv: null
doi: "10.3233/ICG-1990-13203"
source: "https://research.cs.wisc.edu/techreports/1970/TR88.pdf"
topics:
  - zobrist-hashing
  - incremental-hashing
  - transposition-tables
  - game-tree-search
  - game-networking-determinism
seed_rank: 2233
seed_batch: "archive-2026-10-08"
reviewed: "2026-10-08"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "The Greenblatt Chess Program"
    url: "https://doi.org/10.1145/1465611.1465715"
    year: 1967
    arxiv: null
    doi: "10.1145/1465611.1465715"
  - title: "The Art of Computer Programming, Volume 3: Sorting and Searching"
    url: "https://www-cs-faculty.stanford.edu/~knuth/taocp.html"
    year: 1973
    arxiv: null
    doi: null
  - title: "The Power of Simple Tabulation Hashing"
    url: "https://arxiv.org/abs/1011.5200"
    year: 2012
    arxiv: "1011.5200"
    doi: "10.1145/2220357.2220361"
see:
  - "597-the-art-of-computer-programming-volume-3-sorting-and-searchi"
---

# A New Hashing Method with Application for Game Playing

## One-sentence takeaway

Give every (piece type, board square) pair a random n-bit integer and hash a position as the XOR of the integers for the pieces on the board: placing, removing or moving a piece then updates the hash with one or two XORs, and a second independent XOR hash stored as a key controls the rate of undetected collisions.

## Why it matters here

This is the cheapest correct way to keep a running fingerprint of a large, slowly changing state. In GRID COMMAND it gives a per-tick lockstep desync check: each component write XORs out the old (entity, field, value) code and XORs in the new one, so peers compare one word per tick instead of hashing the whole world (pairs with deterministic lockstep 016 and floating-point determinism 276). The same incremental key indexes transposition caches for AI search and planning (alpha-beta 379, Shannon 381) and memoises ano queries over snapshot state.

## Key ideas

- **Hash of a subset as XOR.** Assign random integers to the elements of a finite set S; the hash of a subset is the XOR of its elements' integers. Adding or deleting one element changes the code by exactly that element's integer, and XOR is its own inverse, so removal undoes placement.
- **Boards as subsets.** A position is the subset of (man type × location) placements that are occupied: checkers needs 4×32 integers, chess 12×64, Go 2×361. A move is a removal plus a placement (two XORs); captures, promotions and castling take three or more.
- **History-dependent state.** Conditions that depend on past moves (castling rights, en passant, Go's one-turn ko ban) are folded in as extra reserved integers toggled when the condition changes.
- **Two error types.** Type 1: two positions share a hash and the wrong stored value is used. Type 2: a useful entry is overwritten and must be re-searched. A second XOR hash from an independent random sequence, stored in the spare bits of the table word, makes type 1 errors controllably rare; the report tabulates the no-error probability against extra key bits (for a 32K table, 20-bit keys give about a 3% error rate and 25-bit keys about 0.1%).
- **Known weakness, stated up front.** Because the code is linear, a clash between two subsets propagates to every common extension (hash(CAT) = hash(DOG) implies hash(CATNIP) = hash(DOGNIP)), so errors cluster. Zobrist calls the method "of dubious value for general applications" but well suited to game search, where some errors are tolerable.

## Caveats

The analysis assumes independent retrievals, which the clustering argument itself undermines; treat the error table as a guide, not a bound. XOR hashing is not adversarially robust and is useless as a cryptographic or anti-cheat checksum. Desync checks need quantised or bit-exact state, otherwise float noise changes the hash. Zobrist hashing is an instance of what Pătraşcu and Thorup call simple tabulation, which they show is only 3-independent yet still has strong guarantees for chaining, linear probing and cuckoo hashing. Not a remint of alpha-beta 379, Shannon 381 or deterministic lockstep 016. Card written from an OCR of the scanned 1970 report.

## Links

- Technical report PDF (scanned, UW–Madison): https://research.cs.wisc.edu/techreports/1970/TR88.pdf
- ICCA Journal reprint DOI (1990): https://doi.org/10.3233/ICG-1990-13203
- Pătraşcu–Thorup, simple tabulation analysis: https://arxiv.org/abs/1011.5200

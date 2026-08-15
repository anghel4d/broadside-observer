---
title: Secure Communications Over Insecure Channels
authors:
- Ralph C. Merkle
year: 1978
venue: Communications of the ACM
arxiv: null
doi: 10.1145/359460.359473
source: "https://doi.org/10.1145/359460.359473"
topics:
- cryptography
- merkle
- puzzles
seed_rank: 783
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: New Directions in Cryptography
  url: "https://doi.org/10.1109/TIT.1976.1055638"
  year: 1976
  arxiv: null
  doi: 10.1109/TIT.1976.1055638
see:
- "781-new-directions-in-cryptography"
---

# Secure Communications Over Insecure Channels

## One-sentence takeaway

Merkle puzzles let Alice publish $N$ encrypted puzzles that Bob can crack in $O(N)$ work while an eavesdropper needs $O(N^2)$ to find the shared puzzle, giving an early public-key agreement without number theory.

## Why it matters here

This completes the 1970s public-key origin story next to Diffie–Hellman and RSA: the quadratic-gap construction that still explains why “asymmetric work” is a design lever for Anoptic matchmaking or Broadside key distribution thought experiments.

## Key ideas

- Alice generates $N$ puzzles, each encrypting a puzzle ID and a session key under a deliberately weak cipher that costs $O(N)$ to break.
- Bob picks one puzzle at random, spends $O(N)$ to open it, and returns the ID in the clear; Alice looks up the matching session key.
- Eve, seeing only the puzzle pile and the ID, must open $O(N)$ puzzles in expectation — $O(N^2)$ work — to hit the same key.
- The paper is Merkle’s independent public-key discovery, submitted years before the 1978 CACM appearance; it is not the Merkle-tree paper.

## Caveats

## Links

- DOI: [10.1145/359460.359473](https://doi.org/10.1145/359460.359473)
- URL: https://doi.org/10.1145/359460.359473

---
title: "Structured Programming with go to Statements"
authors:
  - "Donald E. Knuth"
year: 1974
venue: "Computing Surveys"
arxiv: null
doi: "10.1145/356635.356640"
source: "https://doi.org/10.1145/356635.356640"
topics:
  - structured-programming
  - knuth
  - goto
  - control-flow
seed_rank: 598
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "Go To Statement Considered Harmful"
    url: "https://doi.org/10.1145/362929.362947"
    year: 1968
    arxiv: null
    doi: "10.1145/362929.362947"
  - title: "Notes on Structured Programming"
    url: "https://www.cs.utexas.edu/users/EWD/ewd02xx/EWD249.PDF"
    year: 1970
    arxiv: null
    doi: null
  - title: "The Art of Computer Programming, Volume 1: Fundamental Algorithms"
    url: "https://www-cs-faculty.stanford.edu/~knuth/taocp.html"
    year: 1968
    arxiv: null
    doi: null
see:
  - "585-go-to-statement-considered-harmful"
  - "589-notes-on-structured-programming"
  - "595-the-art-of-computer-programming-volume-1-fundamental-algorit"
---

# Structured Programming with go to Statements

## One-sentence takeaway

Knuth surveys the goto debate with worked examples where a jump is the clearest, fastest, or only honest expression of the control flow.

## Why it matters here

Engine hot paths and state machines sometimes need an early exit or a common epilogue. This 1974 *Computing Surveys* paper is the anti-dogma brief.

## Key ideas

- Structured programming is a way of thinking, not a ban on a lexical token.
- Case studies (error exits, multi-level breaks, coroutines, decision tables) show when `goto` reduces complexity.
- Efficiency is measured, not asserted: some "structured" rewrites add flags and tests that hide the original intent.
- The paper is a long, careful reply to Dijkstra 1968 and a complement to EWD249.
- Published *ACM Computing Surveys* 6(4):261–301, December 1974.

## Caveats

## Links

- DOI: [10.1145/356635.356640](https://doi.org/10.1145/356635.356640)
- URL: https://doi.org/10.1145/356635.356640

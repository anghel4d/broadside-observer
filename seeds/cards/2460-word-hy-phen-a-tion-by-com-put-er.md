---
title: "Word Hy-phen-a-tion by Com-put-er"
authors:
  - "Franklin Mark Liang"
year: 1983
venue: "PhD thesis, Stanford University (STAN-CS-83-977)"
arxiv: null
doi: null
source: "https://tug.org/docs/liang/liang-thesis.pdf"
topics:
  - hyphenation
  - typesetting
  - packed-trie
  - pattern-matching
  - compression
  - tex
seed_rank: 2460
seed_batch: "archive-2026-10-30"
reviewed: "2026-10-30"
pool: "languages"
relevance_score: 8
lineage: text-layout
see:
  - 2303-breaking-paragraphs-into-lines
  - 1599-unicode-bidirectional-algorithm-uax-9
cites:
  - title: "Word Hy-phen-a-tion by Com-put-er"
    url: "https://tug.org/docs/liang/liang-thesis.pdf"
    year: 1983
---

# Word Hy-phen-a-tion by Com-put-er

## One-sentence takeaway

Liang's thesis, the source of TeX's hyphenation, treats hyphenation as a compression problem: about 4500 automatically generated letter patterns, packed into a 25K-byte trie, find 89% of dictionary hyphens with essentially no wrong breaks, where storing the word list itself would take over 500K bytes.

## Why it matters here

Anoptic's scanline text needs line breaking that degrades gracefully, and the Knuth–Plass card (2303) assumes hyphenation points arrive from somewhere; this is where they come from in every serious typesetter. The packed trie is also a reusable trick for any static sparse table in ano or an engine, and PATGEN is an early, clean example of learning a compact rule set from data with a tunable error budget.

## Key ideas

- **Exceptions to the exceptions.** Patterns are short letter strings with digits between letters; odd digits allow a hyphen and even digits forbid one, and the highest digit at each position wins. Alternating hyphenating and inhibiting levels let each level fix the previous one's mistakes; TeX82 uses five levels.
- **Compression framing.** The goal is a small table that reproduces a dictionary's hyphens, not a linguistic model. The thesis compares this against storing the dictionary and against suffix/prefix rule systems.
- **Packed trie.** Trie states are packed into one array by first-fit placement so that the transitions of different states interleave without colliding, inspired by Tarjan and Yao's method for storing a sparse table; a harmonic decay condition on state sizes is what keeps the holes filled.
- **PATGEN.** Patterns are generated automatically from a hyphenated word list, level by level, greedily keeping patterns whose efficiency, roughly good / (1 + bad) hyphens, clears a threshold; it uses a dynamic packed trie during generation. The thesis also discusses Bloom's superimposed coding, which Bloom himself proposed for hyphenation, as a hashing alternative to storing the word list.
- **Literate source.** The thesis includes the WEB listing of the programs.

## Caveats

Numbers are for English and a word list from Webster's Pocket Dictionary, finding 89% of hyphens rather than all; other languages need their own pattern sets, and compound-heavy languages stretch the approach. It predicts allowed breaks, not good ones: aesthetic choice is left to the paragraph builder. The trie is static, so updating patterns means rebuilding.

## Links

- Thesis (PDF, TUG archive): https://tug.org/docs/liang/liang-thesis.pdf

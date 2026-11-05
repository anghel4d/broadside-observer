---
title: "Word Hyphenation by Computer"
authors:
  - "Franklin Mark Liang"
year: 1983
venue: "Stanford CS Report STAN-CS-83-977 (Ph.D. thesis), June 1983"
arxiv: null
doi: null
source: "https://tug.org/docs/liang/liang-thesis.pdf"
topics:
  - "hyphenation"
  - "text-layout"
  - "packed-trie"
  - "tex"
  - "pattern-matching"
seed_rank: 2529
seed_batch: "archive-2026-11-06"
reviewed: "2026-11-06"
pool: "languages"
lineage: null
relevance_score: 9
cites:
  - title: "Word Hyphenation by Computer"
    url: "https://tug.org/docs/liang/liang-thesis.pdf"
    year: 1983
    arxiv: null
    doi: null
see: ["2303-breaking-paragraphs-into-lines", "2506-the-display-of-characters-using-gray-level-sample-arrays"]
---

# Word Hyphenation by Computer

## One-sentence takeaway

Liang turns English hyphenation into a tiny automatically extracted pattern set (~4500 hyphenating/inhibiting patterns in a packed trie of ~25K bytes) that recovers 89% of dictionary hyphens with essentially no false breaks — the algorithm still inside TeX and every serious line breaker.

## Why it matters here

Anoptic scanline text needs correct break opportunities before Warnock-style gray glyphs are blitted. Knuth–Plass (already carded) decides *where* to break a paragraph; Liang decides *which* hyphenation points are legal. The packed trie is also a data-structure gem: indexed-trie speed without the usual null-link waste, built by the same program that mines patterns from a dictionary.

## Key ideas

- Hyphenation as data compression over a dictionary of words with allowed division points, exploiting massive orthographic redundancy.
- Patterns are letter strings that, on a match, vote for or against a break at a marked offset (e.g. `-tion`, `c-c`). Both hyphenating and inhibiting patterns are learned.
- Patterns are extracted automatically from the dictionary rather than hand-written; the extractor itself uses a packed-trie variant.
- Packed trie: stores the pattern set compactly while retaining fast indexed-trie lookup; ~4500 patterns → ~25K bytes vs >500K for the uncompressed pocket dictionary.
- Integrated into TeX82; residual misses are acceptable because a paragraph breaker can prefer other break points when a hyphen is unavailable.

## Caveats

- English-centric thesis; other languages need their own pattern sets (TeX ships many), and the extraction pipeline is the portable part.
- 89% recall by design — not a substitute for an exception dictionary on proper names and technical coinages.
- Pair with Knuth–Plass for full paragraph layout; hyphenation alone does not choose line breaks.

## Links

- [PDF (TUG)](https://tug.org/docs/liang/liang-thesis.pdf)
- [TUG Liang / patgen page](https://www.tug.org/docs/liang/)
- [Stanford report STAN-CS-83-977 (Bitsavers OCR mirror)](https://ftpmirror.your.org/pub/misc/bitsavers/pdf/stanford/Stanford_CS_TR_Collection_2025-12-12/OCR/CS-TR-83-977-ocr.pdf)

---
title: "Longest Unbordered Factors in Linear Time"
authors:
  - "Takuya Mieno"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2611.12146"
doi: null
source: "https://arxiv.org/abs/2611.12146"
version_reviewed: "v1"
topics:
  - "string-algorithms"
  - "borders-and-periods"
  - "stringology"
  - "linear-time-algorithms"
  - "ai-assisted-research"
seed_rank: 2690
seed_batch: "curiosity-2026-11-23"
reviewed: "2026-11-23"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "Longest Unbordered Factors in Linear Time"
    url: "https://arxiv.org/abs/2611.12146"
    year: 2026
    arxiv: "2611.12146"
    doi: null
see: []
---

# Longest Unbordered Factors in Linear Time

## One-sentence takeaway

The longest substring with no border (no proper prefix that is also a suffix) can be found, with all its occurrences, in worst-case O(n) time over polynomial integer alphabets, closing a problem whose best earlier bound was O(n log n).

## Why it's lovely

Borders and periods are the oldest idea in string matching: the border array is what makes Knuth–Morris–Pratt work, and the smallest period of a string is linear-time easy. Its neighbour, the longest unbordered factor, is bounded by the period but resisted a linear algorithm for decades. The solution is a small combinatorial property of longest unbordered factors that lets the algorithm scan the string in both directions and catch every maximal occurrence without computing a local maximum at each start position. It is a satisfying case of finding the global answer by skipping most of the local work. For ano and the text work in Anoptic this is the same family of tools as scanline text and column scans over symbol streams: simple string structure, exact linear bounds. The paper also notes it is AI-assisted: the idea came from a six-hour ChatGPT run, and the author checked, simplified and restructured it.

## Key ideas

- **Problem.** A border of a string is a non-empty proper prefix that is also a suffix; an unbordered factor has none. The longest such factor length μ(T) satisfies μ(T) ≤ π(T), the smallest period.
- **Prior art.** Smallest period is linear via the border array; the best known longest-unbordered-factor algorithm took O(n log n) worst case, with average-case and run-length-encoded variants known.
- **Result.** O(n) worst-case time for a string of length n over an integer alphabet of size n^O(1), reporting all occurrences.
- **Technique.** A combinatorial property of longest unbordered factors (the paper's Lemma 9), together with longest-successor-factor arrays and a constant-time query structure, and a scan in both directions.

## Caveats

I read the abstract, introduction and the AI-use statement of v1 (9 Nov 2026, 12 pp.); I did not verify the proofs or implement the algorithm. It is not refereed. The paper states it is AI-assisted: the core idea came from a six-hour ChatGPT run on 9 October 2026, ChatGPT 6 Astra was used to draft, and the author reviewed, simplified and takes responsibility. The result is for integer alphabets of polynomial size, and constants in practice are unknown.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.12146
- PDF: https://arxiv.org/pdf/2611.12146

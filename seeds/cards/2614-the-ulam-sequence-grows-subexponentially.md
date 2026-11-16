---
title: "The Ulam sequence grows subexponentially"
authors:
  - "Noah Kravitz"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2611.17584"
doi: null
source: "https://arxiv.org/abs/2611.17584"
version_reviewed: "v1"
topics:
  - "ulam-sequence"
  - "additive-combinatorics"
  - "ai-proved-mathematics"
seed_rank: 2614
seed_batch: "curiosity-2026-11-17"
reviewed: "2026-11-16"
pool: "maths-foundations"
relevance_score: 8
see:
  - "1864-hilberts-tenth-problem-over"
cites:
  - title: "The Ulam sequence grows subexponentially"
    url: "https://arxiv.org/abs/2611.17584"
    year: 2026
    arxiv: "2611.17584"
    doi: null
---

# The Ulam sequence grows subexponentially

## One-sentence takeaway

The n-th term of Ulam's sequence (1, 2, then each next integer that is the sum of two earlier distinct terms in exactly one way) is at most e^{O(√n)}, the first subexponential upper bound, and the abstract says the proofs are due to ChatGPT.

## Why it's lovely

The Ulam sequence is a toy anyone can compute in an afternoon that has embarrassed mathematicians since 1964: it looks to have positive density and hides a strange quasi-periodic Fourier signal, yet the best upper bound was still exponential. A covering lemma for difference sets with multiplicatively short intervals brings it down to e^{O(√n)}. The second reason it belongs here is provenance: a named human author states that the proofs came from ChatGPT, which adds to the 2026 AI math-solve record this library tracks (see card 1864).

## Key ideas

- **Sequence.** u1=1, u2=2; each next term is the least integer above the last that is a sum of two distinct earlier terms in exactly one way.
- **Result.** u_n = e^{O(√n)}; earlier upper bounds were exponential in n.
- **Tool.** An additive-combinatorial lemma about covering finite difference sets by multiplicatively short intervals, which may be of independent interest.
- **Provenance.** The abstract states that the proofs are due to ChatGPT; the author is the named human.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); not refereed. Numerically the sequence looks to grow roughly linearly, so this bound is far from the expected truth. I have not checked the proof or how the AI contribution was verified.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.17584
- PDF: https://arxiv.org/pdf/2611.17584

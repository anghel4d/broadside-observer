---
title: "Real-Time String Indexing in Optimal Time"
authors:
  - "Gregory Kucherov"
  - "Yakov Nekrich"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2611.13950"
doi: null
source: "https://arxiv.org/abs/2611.13950"
topics:
  - "string-algorithms"
  - "suffix-trees"
  - "streaming"
  - "worst-case-bounds"
  - "text-indexing"
seed_rank: 2556
seed_batch: "craft-2026-11-11"
reviewed: "2026-11-11"
pool: "maths-foundations"
relevance_score: 7
lineage: algorithms-and-complexity
cites:
  - title: "On-line construction of suffix trees (Ukkonen)"
    url: "https://doi.org/10.1007/BF01206331"
    year: 1995
    arxiv: null
    doi: "10.1007/BF01206331"
see:
  - "756-on-line-construction-of-suffix-trees"
  - "755-suffix-arrays-a-new-method-for-on-line-string-searches"
---

# Real-Time String Indexing in Optimal Time

## One-sentence takeaway

Kucherov and Nekrich give the first index over an arbitrary integer alphabet that absorbs each appended letter in O(1) worst-case time (w.h.p.) and answers pattern queries in O(|P| + occ), by storing a "path-decomposed suffix tree": paths kept in dictionaries that encode parent and child links indirectly rather than an explicit tree topology.

## Why it matters here

Appending to a log or text buffer every frame and searching it at any moment, with no amortized spikes, is exactly the latency contract a game console, chat log, replay stream or ano REPL history wants. Ukkonen-style online builders are amortized, and every previous real-time attempt needed either a constant alphabet or dynamic predecessor and level-ancestor queries, which carry a super-constant lower bound. Sidestepping that bound by changing the representation, not the algorithm, is the kind of move worth keeping in the toolbox even before anyone ships a practical version.

## Key ideas

- **Problem.** Streaming text, worst-case constant work per new symbol, and at every moment report all occurrences of a query pattern in the prefix seen so far.
- **Prior state.** Amir et al. had online O(log n) per letter; Fischer and Gawrychowski had deterministic near-real-time bounds via weighted exponential search trees; the authors' own earlier real-time index needed a constant-size alphabet.
- **Path decomposition.** Do not store the suffix tree's full topology; break it into paths, each held in a dictionary, so the expensive tree-navigation queries that hit the lower bound are never needed.
- **Result.** Optimal O(1) per letter (w.h.p., via hashing) and optimal O(|P| + occ) reporting over integer alphabets.

## Caveats

A 30-page theory paper with no implementation or constants; "w.h.p." comes from randomized dictionaries, so worst-case is probabilistic. Practical text tools will still use suffix arrays or FM-indexes. I read the abstract and introduction, not the full construction.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.13950
- PDF: https://arxiv.org/pdf/2611.13950

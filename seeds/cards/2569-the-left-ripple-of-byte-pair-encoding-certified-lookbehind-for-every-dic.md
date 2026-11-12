---
title: "The Left Ripple of Byte-Pair Encoding: Certified Lookbehind for Every Dictionary"
authors:
  - "Nicklas Nidhögg"
year: 2026
venue: "arXiv preprint (cs.FL)"
arxiv: "2611.13061"
doi: null
source: "https://arxiv.org/abs/2611.13061"
version_reviewed: "v1"
topics:
  - "agent-tokenization-and-caching"
  - "computational-linguistics-interfaces"
seed_rank: 2569
seed_batch: "frontier-2026-11-12"
reviewed: "2026-11-12"
pool: "languages"
relevance_score: 8
cites:
  - title: "The Left Ripple of Byte-Pair Encoding: Certified Lookbehind for Every Dictionary"
    url: "https://arxiv.org/abs/2611.13061"
    year: 2026
    arxiv: "2611.13061"
    doi: null
---

# The Left Ripple of Byte-Pair Encoding: Certified Lookbehind for Every Dictionary

## One-sentence takeaway

For every BPE dictionary, how far a left prepend can change a tokenization is decidable in polynomial time, is infinite exactly when a periodic word has two boundary-disjoint tilings, and is already infinite for GPT-2, cl100k, o200k and Llama 3.

## Why it matters here

Prefix caching and streaming tokenization both assume token boundaries settle locally. This proves exactly when they do, gives a polynomial streaming tokenizer that emits only tokens no continuation can change, and shows production merge tables have unbounded left ripple, which matters for anyone caching or splicing token sequences rather than text.

## Key ideas

- **Origin radius.** How far a prepend can change covering spans, decided with radius certificates via a product of two runs of the final-token-guessing automaton.
- **Infinite exactly when** one periodic word has two canonical tilings with no common boundary; under the ordering condition, when some rule (t, t) finds its copies adjacent at its own stage.
- **Streaming.** A streaming tokenizer emits after each symbol exactly the tokens no continuation changes, in polynomial time, and tokenization is subsequential for every dictionary.
- **Edit distance.** Boundedness is decidable; one edit's worst-case change over m-rule dictionaries lies between m^2/10 and m^2/2.
- **Real tables.** GPT-2 has 244 effective self-pairs (infinite radius from merge 42); cl100k, o200k and Llama 3 are infinite from their first.

## Caveats

Single author and dense automata theory; practical impact on cache hit rates is implied, not measured.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.13061
- PDF: https://arxiv.org/pdf/2611.13061

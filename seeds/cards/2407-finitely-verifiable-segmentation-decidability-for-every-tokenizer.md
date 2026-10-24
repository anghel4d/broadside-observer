---
title: "Finitely Verifiable Segmentation: Decidability for Every Tokenizer with a Finite-State Verifier"
authors:
  - "Nicklas Nidhögg"
year: 2026
venue: "arXiv preprint (cs.FL)"
arxiv: "2610.30168"
doi: null
source: "https://arxiv.org/abs/2610.30168"
topics:
  - "agent-tokenization-and-caching"
  - "embedded-scripting-dsls"
seed_rank: 2407
seed_batch: "frontier-2026-10-24"
reviewed: "2026-10-24"
pool: "languages"
relevance_score: 8
lineage: lexing
cites:
  - title: "Finitely Verifiable Segmentation: Decidability for Every Tokenizer with a Finite-State Verifier"
    url: "https://arxiv.org/abs/2610.30168"
    year: 2026
    arxiv: "2610.30168"
    doi: null
  - title: "Certified Splitting: Decidability and Anchor Supply for Maximal-Munch Tokenization"
    url: "https://arxiv.org/abs/2610.08854"
    year: 2026
    arxiv: "2610.08854"
    doi: null
see:
  - 2252-certified-splitting-decidability-and-anchor-supply-for-maximal-munch
---

# Finitely Verifiable Segmentation: Decidability for Every Tokenizer with a Finite-State Verifier

## One-sentence takeaway

Any tokenizer policy whose input-output relation can be checked by a finite-state verifier (maximal munch, canonical BPE, WordPiece among them) gets decidable answers to the questions agents and constrained decoders actually ask, such as whether a boundary is certified, whether the lookahead gap is bounded, whether a token mask can always be completed, and whether two tokenizers are equivalent, while policies with non-regular domains are provably outside the class.

## Why it matters here

Prefix caching and constrained decoding both assume you know where a token boundary is safe to cut. This generalizes the maximal-munch result in card 2252 from one policy to every finite-state-verifiable one, which turns "is it safe to splice cached KV at this byte" and "can this grammar mask dead-end" into decision procedures instead of heuristics. It is also the theory behind the ano lexer: if the lexer is finite-state verifiable, its boundary questions are answerable mechanically.

## Key ideas

- **One hypothesis, many decisions.** Boundary certification, bounded gap, mask completability and equivalence are decidable for every policy with a finite-state verifier; Lemma 1 shows a context-free segmentation falls outside.
- **Instances.** Maximal munch directly, canonical BPE via cited constructions, and WordPiece; pipelines of stages are handled by a lift theorem for regular inner stages and literal outer stages.
- **Measured verifier sizes.** The BPE merge tower grows from 4,063 states at 64 merges to 69,773 at 128 and 841,141 at 256; a WordPiece verifier at 8,192 entries has 56,636 states and 2,965,165 transitions (built in 175 s), and a lasso search over the full lexical WordPiece vocabulary takes 708.1 s.
- **Weighted and certified solving.** Exact weighted solving runs at toy sizes; certified enclosures reach further.

## Caveats

The verifier, not the decision procedure, is the bottleneck: the tested dictionaries are about two orders of magnitude below a production BPE table, and tabulating WordPiece at 16,384 entries did not finish. The distance of canonical BPE from maximal munch is not measured. Single author; the hardware and software environment of the runs is not recorded.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.30168
- PDF: https://arxiv.org/pdf/2610.30168

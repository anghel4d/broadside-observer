---
title: "Online Tokenization with Optimal Delay in Linear Time"
authors:
  - "Mina Dalirrooyfard"
  - "Christopher Ye"
year: 2026
venue: "arXiv"
arxiv: "2610.19139"
doi: null
source: "https://arxiv.org/abs/2610.19139"
topics:
  - "agent-tokenization-and-caching"
  - "computational-linguistics-interfaces"
seed_rank: 2317
seed_batch: "frontier-2026-10-16"
reviewed: "2026-10-16"
pool: "systems"
relevance_score: 8
lineage: unicode-text-shaping
cites:
  - title: "Online Tokenization with Optimal Delay in Linear Time"
    url: "https://arxiv.org/abs/2610.19139"
    year: 2026
    arxiv: "2610.19139"
    doi: null
see: []
---

# Online Tokenization with Optimal Delay in Linear Time

## One-sentence takeaway

Online BPE tokenization (special-token split, regex pretokenization and merges, streamed as input arrives) gets a formal definition via delay, a near-linear-time algorithm with optimal delay up to constants, and a conditional lower bound that no polynomial algorithm beats it by more than a constant unless P = NP; the practical variant beats tiktoken on time-to-first-token by 7.9–34.8× in constant memory.

## Why it matters here

Tokenization is a text-pipeline problem dressed as ML: regex automata, incremental merge queues and bounded buffering. The result is directly reusable for streaming agent I/O, and pairs with Delta Tokenizer (2316) as the theory-side answer to the same front-end latency.

## Key ideas

- **Delay as the measure.** How far the online output lags the (possibly intractable) optimum of what can already be emitted safely.
- **Composition and its limits.** Online pretokenization composed with online BPE, with space lower bounds showing where plain composition fails.
- **Beyond composition.** A BPE queue with incremental merges reaches optimal delay in near-linear time; a matching hardness result for exact online tokenization.
- **Implementation.** DFA-based pretokenizers for the R50K, CL100K and O200K encodings, with equivalence proofs and dataset validation against the reference.
- **Numbers.** 7.9–34.8× TTFT advantage over tiktoken and the recent gigatoken tokenizer, roughly constant memory independent of input size, 2.4–7.0× throughput over tiktoken and 15.8–38.1× over HF tokenizers.

## Caveats

Evaluated on OpenAI-style BPE encodings; benefits concentrate on long, streamed inputs; the lower bound is conditional. Builds on concurrent 2026 work on online pretokenization and BPE. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.19139
- PDF: https://arxiv.org/pdf/2610.19139
- HTML: https://arxiv.org/html/2610.19139v1

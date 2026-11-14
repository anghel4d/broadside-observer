---
title: "Read Once, Answer Many: Parallel Prompting for Shared-Context LLM Inference"
authors:
  - "Zekun Zhao"
  - "Jeffrey Flanigan"
year: 2026
venue: "arXiv preprint (cs.CL)"
arxiv: "2611.15130"
doi: null
source: "https://arxiv.org/abs/2611.15130"
version_reviewed: "v1"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2586
seed_batch: "frontier-2026-11-14"
reviewed: "2026-11-14"
pool: "systems"
relevance_score: 8
see:
  - 176-kvflow-efficient-prefix-caching-for-accelerating-llm-based-m
cites:
  - title: "Read Once, Answer Many: Parallel Prompting for Shared-Context LLM Inference"
    url: "https://arxiv.org/abs/2611.15130"
    year: 2026
    arxiv: "2611.15130"
    doi: null
---

# Read Once, Answer Many: Parallel Prompting for Shared-Context LLM Inference

## One-sentence takeaway

Parallel Prompting decodes many independent questions over one shared document as streams of a single request, so each decode step reads the document KV once for all streams, with a stream-id mask inside the attention kernel; it is 3.7-6.0x faster than stock SGLang.

## Why it matters here

Prefix caching removes shared prefill but not the repeated decode-time reads, which is the remaining cost when a harness fans out many checks, labels or judge calls over the same context. The change is about 80 lines in SGLang with fixed-shape CUDA-graph steps, so it is a practical pattern for our evaluation and research fan-outs, not just a paper result.

## Key ideas

- **Bottleneck.** With prefix caching, each decode step still reads the document's KV once per question, so decode is bandwidth-bound and scales with question count.
- **Streams in one request.** P questions decode together; each step reads the shared document once for all P.
- **Mask in the kernel.** A stream-id attention mask, evaluated inside the kernel without a dense tensor, keeps each answer conditioned only on the document and its own question.
- **Results.** CodeLlama-7B, 8k-16k-token documents, 64-256 questions: 3.7x over SGLang+FlashInfer on A100 and 5.9-6.0x on RTX A6000; faster in all 144 timed runs. Code released.

## Caveats

Tested on one small model; questions must be independent of each other's answers. Gains at larger models and with mixed-length answers are not shown in the abstract.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.15130
- PDF: https://arxiv.org/pdf/2611.15130

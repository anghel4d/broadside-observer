---
title: "Exact on Paper: Which LLM Serving Shortcuts Flip Graded Answers, Measured Against the Noise of Reordering the Same Requests"
authors:
  - "Sharven Rane"
year: 2026
venue: "arXiv preprint (cs.LG); also archived on Zenodo"
arxiv: "2611.29663"
doi: "10.5281/zenodo.24433980"
source: "https://arxiv.org/abs/2611.29663"
version_reviewed: "v1"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
  - "kv-serving"
  - "determinism"
seed_rank: 2704
seed_batch: "frontier-2026-11-24"
reviewed: "2026-11-24"
pool: "agents"
relevance_score: 7
see:
  - 002-efficient-memory-management-for-large-language-model-serving
  - 1641-same-request-different-answer-quantization-amplifies-cache-induced-div
cites:
  - title: "Exact on Paper: Which LLM Serving Shortcuts Flip Graded Answers, Measured Against the Noise of Reordering the Same Requests"
    url: "https://arxiv.org/abs/2611.29663"
    year: 2026
    arxiv: "2611.29663"
    doi: "10.5281/zenodo.24433980"
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "Fast Inference from Transformers via Speculative Decoding"
    url: "https://arxiv.org/abs/2211.17192"
    year: 2022
    arxiv: "2211.17192"
    doi: null
  - title: "Same Request, Different Answer: Quantization Amplifies Cache-Induced Divergence in LLM Serving"
    url: "https://arxiv.org/abs/2609.04748"
    year: 2026
    arxiv: "2609.04748"
    doi: null
---

# Exact on Paper: Which LLM Serving Shortcuts Flip Graded Answers, Measured Against the Noise of Reordering the Same Requests

## One-sentence takeaway

Serving 3,380 graded requests through vLLM with one feature changed at a time, the seven "exact" features (prefix caching, chunked prefill, speculative decoding and others) flip 1.47–1.78% of graded outcomes, no more than merely reordering the same requests (1.72%); with batch-invariant kernels they reproduce the reference text on every request, while an FP8 KV cache flips 3.36–3.91% either way.

## Why it matters here

Prefix caching is central to Broadside's agent-serving thread, and "is it really exact?" keeps coming up. The answer here is precise: on default kernels, prefix caching's flips are indistinguishable from scheduling noise, and under batch-invariant kernels they vanish; FP8 KV is the real behavioural change, as large as FP8 weights. The method matters as much as the result: a serving change should be certified against a measured noise floor (restart and reorder replicas, at least three) or under batch-invariant kernels where the floor is zero. That is the provenance discipline agent evals need when the serving stack changes underneath them.

## Key ideas

- **Design.** Qwen3 4B Instruct on vLLM 0.33.0, one GPU; GSM8K, MATH500, MMLU, HumanEval and MBPP (3,380 items). Nine single-feature configurations, plus five reference replicas (three fresh-process restarts, two request reorderings).
- **Floors.** With default kernels a fresh restart already changes 24.56% of generated texts and 1.38% of graded outcomes; reordering raises both. Flips mean something only above these floors, estimated with intervals from more than one replica pair.
- **Accuracy hides flips.** Every configuration stays within one point of accuracy. Example: with prefix caching a GSM8K answer matches the reference for 46% of its characters, inserts one word, and ends at 13 instead of 26.
- **Exact features.** 1.47% (95% CI 1.13–1.85) to 1.78% (1.39–2.20) of graded outcomes flip, none above the 1.72% scheduling floor. Under batch-invariant kernels all seven, speculative decoding included, reproduce the reference text exactly.
- **FP8 KV is different.** 3.36% (2.80–3.96) flips on default kernels and 3.91% (3.28–4.53) under batch-invariant kernels.
- **Gate design.** A gate comparing against a single replica pair rejected an unchanged configuration. Recommendation: certify under batch-invariant kernels, or against a scheduling floor from three or more replicas.

## Caveats

Single-author 8-page preprint; read from the abstract and introduction of the v1 HTML. One small model (4B), one engine version, one GPU and short single-turn benchmarks, so long multi-turn agent sessions (where cache hits dominate and divergence compounds) are not tested. Graded-outcome flips are the metric; text-level divergence is much larger even between restarts.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.29663
- PDF: https://arxiv.org/pdf/2611.29663
- HTML: https://arxiv.org/html/2611.29663v1
- Zenodo archive: https://doi.org/10.5281/zenodo.24433980

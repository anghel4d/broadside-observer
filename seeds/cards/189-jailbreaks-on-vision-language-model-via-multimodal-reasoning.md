---
title: "Jailbreaks on Vision Language Model via Multimodal Reasoning"
authors:
  - "Aarush Noheria"
  - "Yuguang Yao"
year: 2026
venue: "arXiv:cs.CV"
arxiv: "2601.22398"
doi: null
source: "https://arxiv.org/abs/2601.22398"
topics:
  - tool-use
  - react
  - rag
  - retrieval
  - reasoning
  - planning
seed_rank: 189
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "Track, Rank, Crack: Epistemic Working Memory Scales Multi-Hop Reasoning in Language Agents"
    url: "https://arxiv.org/abs/2607.12267"
    year: 2026
    arxiv: "2607.12267"
    doi: null
    card: "080-track-rank-crack-epistemic-working-memory-scales-multi-hop-r"
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
    card: "054-auto-dreamer-learning-offline-memory-consolidation-for-langu"
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
    card: "007-react-synergizing-reasoning-and-acting-in-language-models"
---

# Jailbreaks on Vision Language Model via Multimodal Reasoning

## One-sentence takeaway

Vision-language models (VLMs) have become central to tasks such as visual question answering, image captioning, and text-to-image generation.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests; shapes harness/ACI design and model-vs-harness failure localization (Jailbreaks on Vision Language Model via Multimodal Reasoning)

## Key ideas

- Vision-language models (VLMs) have become central to tasks such as visual question answering, image captioning, and text-to-image generation.
- However, their outputs are highly sensitive to prompt variations, which can reveal vulnerabilities in safety alignment.
- In this work, we present a jailbreak framework that exploits post-training Chain-of-Thought (CoT) prompting to construct stealthy prompts capable of bypassing safety filters.
- To further increase attack success rates (ASR), we propose a ReAct-driven adaptive noising mechanism that iteratively perturbs input images based on model feedback.
- This approach leverages the ReAct paradigm to refine adversarial noise in regions most likely to activate safety defenses, thereby enhancing stealth and evasion.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2601.22398](https://arxiv.org/abs/2601.22398)
- URL: https://arxiv.org/abs/2601.22398

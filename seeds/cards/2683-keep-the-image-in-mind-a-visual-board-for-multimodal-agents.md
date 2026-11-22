---
title: "Keep the Image in Mind: A Visual Board for Multimodal Agents"
authors:
  - "Haiming Zhu"
  - "Zhiwei Chen"
  - "Ding Cao"
  - "Tianxiang Zhao"
year: 2026
venue: "arXiv preprint (cs.CV)"
arxiv: "2611.23872"
doi: null
source: "https://arxiv.org/abs/2611.23872"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
  - "harness-engineering"
  - "agent-failure-localization"
seed_rank: 2683
seed_batch: "frontier-2026-11-22"
reviewed: "2026-11-22"
pool: "agents"
relevance_score: 7
see:
  - 003-generative-agents-interactive-simulacra-of-human-behavior
  - 004-memgpt-towards-llms-as-operating-systems
  - 977-deepseekmath-pushing-limits-of-mathematical-reasoning
cites:
  - title: "Keep the Image in Mind: A Visual Board for Multimodal Agents"
    url: "https://arxiv.org/abs/2611.23872"
    year: 2026
    arxiv: "2611.23872"
    doi: null
---

# Keep the Image in Mind: A Visual Board for Multimodal Agents

## One-sentence takeaway

The paper replaces an agent's append-only history with a capacity-bounded, revisable "Visual Board". Observations, uncertain interpretations and derived reasoning are stored as separate fields, so a text-only critic can spot conflicts and trigger targeted re-inspection. Without training, this beats standalone models by up to 24.8 points and beats free-form shared notes by 6.7–13.0 points while using fewer tokens.

## Why it matters here

This is a clean ablation for provenance-first memory. Typing each entry by its epistemic status (seen vs inferred vs unsure), rather than appending narrative, makes errors auditable and fixable. The comparison holds tools, critic and turn limits fixed and changes only the representation, and structure wins on accuracy and tokens. The same split (observation / hypothesis / derivation, with links back to the source) is what Broadside's memory design proposes, and the "re-inspect the original evidence when a premise conflicts" loop applies to text agents with retrieval too.

## Key ideas

- **Problem.** In an append-only history, an early misreading becomes a premise of every later step. Self-reflective text does not reliably trigger visual re-examination.
- **Board.** The VLM solver keeps the original image and writes image facts, unresolved uncertainties and reasoning steps into separate, revisable fields. A text-only LLM critic checks consistency and directs re-inspection.
- **Training-free gains.** Up to +11.68 (Euclid30K), +18.42 (SolidGeo) and +24.82 (ChartQA bar) points over standalone models across 4B, 8B, Qwen3-VL-Flash and 32B backbones.
- **Structure vs notes.** With identical tools, critic and limits, the Board beats shared free-form notes by 6.67–13.00 points and no-Board retries by 7.35–18.80, using 7.9–38.2% fewer tokens.
- **Distillation.** SFT on harness trajectories improves direct answering and critic-free tool use, with positive transfer to chart reasoning.

## Caveats

Abstract- and introduction-level read of v1; numbers are the authors' and unreplicated. Benchmarks are geometry and chart VQA, not long-horizon agents, and the Board is capacity-bounded per question rather than persistent across sessions. Submitted 18 Nov (Thursday 19 Nov listing, cs.CV), which the 11-20 frontier did not poll, so this is gap-fill.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.23872
- PDF: https://arxiv.org/pdf/2611.23872
- HTML: https://arxiv.org/html/2611.23872v1

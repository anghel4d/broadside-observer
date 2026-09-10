---
title: "Co-Evolving Harnesses and Models: On-Policy Correction Helps Weaker Models Catch Up Where Imitation Fails"
authors:
  - "Zhou Yu"
  - "Bin Bi"
  - "Shiva Kumar Pentyala"
  - "Shubham Mehrotra"
  - "Sougata Chaudhuri"
  - "Shilpa Bhagavath"
  - "Zeyuan Chen"
  - "Ran Xu"
  - "Phil Mui"
  - "James Zhu"
  - "Sitaram Asur"
year: 2026
venue: "arXiv"
arxiv: "2609.09134"
doi: null
source: "https://arxiv.org/abs/2609.09134"
topics:
  - "harness-engineering"
  - "continual-agent-skills"
  - "agent-failure-localization"
seed_rank: 1768
seed_batch: "frontier-2026-09-10"
reviewed: "2026-09-10"
pool: "agents"
relevance_score: 10
lineage: harness-model-coevolution
cites:
  - title: "Co-Evolving Harnesses and Models: On-Policy Correction Helps Weaker Models Catch Up Where Imitation Fails"
    url: "https://arxiv.org/abs/2609.09134"
    year: 2026
    arxiv: "2609.09134"
    doi: null
see:
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "1538-whale-a-simple-recipe-for-joint-harness-weight-optimization"
  - "1574-safeevolve-harness-policy-co-evolution-from-agent-experience-for"
  - "1573-where-does-harness-optimization-value-live-localized-gains-and-the"
  - "1636-what-does-multi-harness-rl-learn-credit-assignment-and-portability-in"
---

# Co-Evolving Harnesses and Models: On-Policy Correction Helps Weaker Models Catch Up Where Imitation Fails

## One-sentence takeaway

Evolving a harness around a weak model then imitating a strong expert’s trajectories under that harness backfires 4–30 pts — imitation breaks model–harness fit; on-policy correction restores it.

## Why it matters here

HELIX (1079), WHALE (1538), and SafeEvolve (1574) all bet on joint harness–weight co-evolution. This paper measures the failure mode: expert trajectories under a weak-model-evolved harness transfer planning style the weak model cannot execute. Direct evidence for Broadside’s “don’t just SFT the expert trace into the cheap agent” rule.

## Key ideas

- Seven enterprise agent tasks; harness first evolved with the weaker model; stronger expert then uses that harness more effectively.
- Imitation of expert complete trajectories under the evolved harness regresses all seven tasks by 4–30 points on Qwen3-Coder and Gemma 4.
- Same imitation helps under the unevolved harness — the damage is specific to mismatched model–harness fit.
- Weaker model adopts expert planning without competence to execute it; no longer matches the harness evolved around its native planning style.
- On-policy correction (not pure imitation) is the recovery path that re-aligns weights to the evolved scaffold.

## Caveats

Enterprise-agent task suite, not SWE-bench or GRID COMMAND. Exact on-policy recipe details matter for reproduction. Do not remint 1079 / 1538 / 1574 / 1636.

## Links

- arXiv: [2609.09134](https://arxiv.org/abs/2609.09134)
- PDF: https://arxiv.org/pdf/2609.09134

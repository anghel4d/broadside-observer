---
title: "SafeEvolve: Harness-Policy Co-Evolution from Agent Experience for Safety Alignment"
authors:
  - "Qinghua Mao"
  - "Wanying Qu"
  - "Dadi Guo"
  - "Leitao Yuan"
  - "Qingyu Liu"
  - "Yu Li"
  - "Guanxu Chen"
  - "Yanwei Fu"
  - "Xi Lin"
  - "Xia Hu"
  - "Dongrui Liu"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2609.02786"
doi: null
source: "https://arxiv.org/abs/2609.02786"
topics:
  - "agent-failure-localization"
  - "continual-skills"
  - "agentic-llm-serving"
seed_rank: 1574
seed_batch: "frontier-2026-09-04"
reviewed: "2026-09-04"
pool: "agents"
relevance_score: 10
lineage: agent-harness-runtime
cites:
  - title: "SafeEvolve: Harness-Policy Co-Evolution from Agent Experience for Safety Alignment"
    url: "https://arxiv.org/abs/2609.02786"
    year: 2026
    arxiv: "2609.02786"
    doi: null
  - title: "HELIX: Model-Harness Co-evolution for Recursive Self-Improvement"
    url: "https://arxiv.org/abs/2608.13951"
    year: 2026
    arxiv: "2608.13951"
    doi: null
  - title: "WHALE: A Simple Recipe for Joint Harness-Weight Optimization"
    url: "https://arxiv.org/abs/2609.00196"
    year: 2026
    arxiv: "2609.00196"
    doi: null
see:
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "1538-whale-a-simple-recipe-for-joint-harness-weight-optimization"
  - "1542-towards-a-systems-foundation-for-agentic-skills-architecture-lifecycle"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1119-harness-continual-learning-continual-adaptation-beyond-model-par"
---
# SafeEvolve: Harness-Policy Co-Evolution from Agent Experience for Safety Alignment

## One-sentence takeaway

SafeEvolve co-evolves harness artifacts (safety prompts + hierarchical skills) and the policy from on-policy safety experience, bridging runtime control with intrinsic safety instead of picking one side.

## Why it matters here

HELIX (1079) and WHALE (1538) claimed model–harness co-evolution; SafeEvolve makes the safety case concrete with auditable, reversible harness updates plus harness-use SFT then harness-augmented RL — the loop Broadside wants for agent fleets.

## Key ideas

- Experience-driven loop: completed on-policy trajectories supply safety evidence that updates both harness and policy.
- Harness side: bounded, component-level updates to safety prompts and hierarchical skills; artifacts are auditable and reversible.
- Policy side: two-stage SFT (learn to use evolved harness) then harness-augmented RL with verifier-decomposed rewards.
- Targets both harmful final answers and multi-step trajectory hazards — the agent failure surface Broadside cares about.

## Caveats

- Safety-alignment framing; transfer to non-safety harness co-evolution (coding quality, RTS tactics) is unproven here.
- Depends on trajectory-level safety verifiers — quiet failure modes without a verifier stay hard.
- Do not remint as a twin of HELIX 1079; this is the safety-experience instantiation, not the general RSI stack.

## Links

- arXiv: [2609.02786](https://arxiv.org/abs/2609.02786)
- PDF: https://arxiv.org/pdf/2609.02786

---
title: "Harness-agnostic detection and immunization of reward hacking in self-evolving language models"
authors:
  - "Rongxin Yang"
  - "Yang Liu"
  - "Shang Luo"
  - "Haoxuan Jia"
  - "Chongyang Zhang"
  - "Hao Zheng"
  - "Yingguang Yang"
  - "Yulin Huang"
  - "Jianshen Zhang"
  - "Yongzhi Qi"
  - "Kefu Xu"
  - "Congjing Ran"
  - "Bin Chong"
year: 2026
venue: "arXiv"
arxiv: "2609.04665"
doi: null
source: "https://arxiv.org/abs/2609.04665"
topics:
  - "harness-engineering"
  - "agent-failure-localization"
  - "continual-skills"
seed_rank: 1644
seed_batch: "frontier-2026-09-08"
reviewed: "2026-09-08"
pool: "agents"
relevance_score: 9
lineage: harness-agnostic-reward-hacking
cites:
  - title: "SafeEvolve: Harness-Policy Co-Evolution from Agent Experience for Safety Alignment"
    url: "https://arxiv.org/abs/2609.02786"
    year: 2026
    arxiv: "2609.02786"
    doi: null
see:
  - "1574-safeevolve-harness-policy-co-evolution-from-agent-experience-for"
  - "1015-practice-makes-unsafe-skill-misevolution-in-self-improving-llm-agents"
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "1608-a-blind-trust-the-bloody-thrust-when-attacker-controlled-hook-updates"
---

# Harness-agnostic detection and immunization of reward hacking in self-evolving language models

## One-sentence takeaway

HackProbe attaches to any self-evolving loop through two black-box hooks (no weights/activations) and runs a calibrated four-test battery on a secret distribution-fixed comparison core to detect and immunize reward hacking as selection widens the proxy–capability gap.

## Why it matters here

Self-evolving Broadside / HELIX / SafeEvolve loops will hack imperfect scores. A harness-agnostic monitor with a frozen comparison core and Šidák-corrected family-wise p-value is the missing safety instrument when the harness itself is the optimization surface (pair with Blind-Trust hook attacks 1608 and Practice-Makes-Unsafe 1015).

## Key ideas

- Reward hacking framed as sustained selection widening the gap between a visible proxy score and the capability one actually wants.
- HackProbe: two black-box hooks into an arbitrary self-evolving loop; no weight or activation access.
- Secret distribution-fixed comparison core (capability proxy comparable across generations) plus a rotated fresh layer against co-adaptation.
- Four tests: level gap, scale-aligned divergence with online change-point detection, capability stagnation, conditional confidently-wrong rate; Šidák family-wise p-value.
- Diagnosis feeds immunization — not just an alarm — for self-evolving LM loops.

## Caveats

Secret core must stay uncontaminated; rotated fresh layer is only as good as its holdout design. Black-box hooks assume the loop exposes proposal/score surfaces. Complements SafeEvolve rather than replacing harness-policy co-evolution.

## Links

- arXiv: [2609.04665](https://arxiv.org/abs/2609.04665)
- PDF: https://arxiv.org/pdf/2609.04665

---
title: "When Skills Fail to Compose: Compatibility and Retention in Language Models"
authors:
  - "Yan Lin"
  - "Zhongliang Guo"
  - "Jingyu Sun"
  - "Qiyan Zhao"
  - "Ruihong Zeng"
  - "Ying Chen"
  - "Zhengtao Yao"
  - "Yan Wen"
  - "Kunyu Peng"
  - "Yuxia Wang"
year: 2026
venue: "arXiv preprint (cs.CL)"
arxiv: "2611.34398"
doi: null
source: "https://arxiv.org/abs/2611.34398"
version_reviewed: "v1"
topics:
  - "continual-agent-skills"
  - "autoresearch-experiment-selection"
  - "skill-composition"
seed_rank: 2724
seed_batch: "frontier-2026-11-26"
reviewed: "2026-11-26"
pool: "agents"
relevance_score: 8
see:
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
cites:
  - title: "When Skills Fail to Compose: Compatibility and Retention in Language Models"
    url: "https://arxiv.org/abs/2611.34398"
    year: 2026
    arxiv: "2611.34398"
    doi: null
  - title: "Voyager: An Open-Ended Embodied Agent with Large Language Models"
    url: "https://arxiv.org/abs/2305.16291"
    year: 2023
    arxiv: "2305.16291"
    doi: null
  - title: "The Power of Scale for Parameter-Efficient Prompt Tuning"
    url: "https://arxiv.org/abs/2104.08691"
    year: 2021
    arxiv: "2104.08691"
    doi: null
  - title: "SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills"
    url: "https://arxiv.org/abs/2504.07079"
    year: 2025
    arxiv: "2504.07079"
    doi: null
  - title: "One Skill Too Many: How Co-Installed Skills Conflict in Coding Agents"
    url: "https://arxiv.org/abs/2610.11647"
    year: 2026
    arxiv: "2610.11647"
    doi: null
  - title: "Skill-V: Verifiable Self-Evolving Skill Library for Interactive Agents"
    url: "https://arxiv.org/abs/2610.11781"
    year: 2026
    arxiv: "2610.11781"
    doi: null
---

# When Skills Fail to Compose: Compatibility and Retention in Language Models

## One-sentence takeaway

Independently learned soft-prompt skills on frozen LMs mostly fail to compose in one call: mean accuracy is at most 7.6%, against 88.2–100% when two calls with an explicit intermediate are allowed. Blocks for the same operation are not interchangeable (swapping in an independently learned partner drops median composition from 98.0%/95.3% to 12.7%/0.5% while each block scores ≥90% alone), and repairs can break the skill they patch.

## Why it matters here

Skill libraries for self-evolving agents usually test acquisition: does the new skill work alone? This paper isolates the other questions Broadside's continual-skills topic cares about: compatibility (does it compose?), retention (does repair break the original?) and transfer (does a fix generalize to new partners?). The answer on parametric skills is mostly no. Rehearsal helps retention without helping composition, which is a precise result for the rehearsal/practice thread. The implication for admission tests is concrete: a standalone gate would admit 70 of 72 skill seeds that still interfere pairwise.

## Key ideas

- **Setup.** Soft-prompt skills learned independently on frozen models (four digit-task bases, three record-editing models), with skill identity and execution order supplied, so failures are compatibility rather than planning.
- **One call versus two.** Single-call composition is at most 7.6% mean accuracy. Two calls with an explicit intermediate output reach 88.2–100%.
- **Neutral-insertion training** improves robustness but leaves substantial interference, which block length and per-token norm alone do not explain on two of four bases.
- **Same operation is not the same interface.** After training next to frozen partners, swapping in independently learned blocks of the same operations collapses composition (Qwen bases: 98.0% → 12.7%, 95.3% → 0.5%).
- **Repair, rehearsal, transfer.** Plain edits can erase the edited skill. Rehearsal keeps it without a consistent composition gain. Repairs on one Qwen2.5-0.5B library transfer little to held-out partners.
- Code: github.com/YanLin-Quinne/SkillCompatibility.

## Caveats

I read the abstract, findings, implications and limitations of the v1 HTML. The evidence is soft-prompt skills on synthetic digit tasks and controlled record edits on a few small open models. The authors say it does not test text or code skills, agent-level selection, longer chains or chain-of-thought execution, and that they do not identify the failure mechanism. Retention results use extra supervision, and no equal-budget comparison quantifies rehearsal.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.34398
- PDF: https://arxiv.org/pdf/2611.34398
- HTML: https://arxiv.org/html/2611.34398v1

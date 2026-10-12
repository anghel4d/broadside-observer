---
title: "Harness Learning Enables Generalizable Test-Time Adaptation"
authors:
  - "Alvin Zhang"
  - "Xuecheng Liu"
  - "Zixuan Wang"
  - "Fahim Tajwar"
  - "Daman Arora"
  - "Ruslan Salakhutdinov"
  - "Daniel Khashabi"
  - "Yuda Song"
  - "Andrea Zanette"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2609.35738"
doi: null
source: "https://arxiv.org/abs/2609.35738"
topics:
  - "harness-engineering"
  - "continual-agent-skills"
seed_rank: 2266
seed_batch: "user-add-2026-10-12"
reviewed: "2026-10-12"
pool: "agents"
relevance_score: 10
lineage: runtime-harness-evolution
cites:
  - title: "Harness Learning Enables Generalizable Test-Time Adaptation"
    url: "https://arxiv.org/abs/2609.35738"
    year: 2026
    arxiv: "2609.35738"
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "Reflexion: Language Agents with Verbal Reinforcement Learning"
    url: "https://arxiv.org/abs/2303.11366"
    year: 2023
    arxiv: "2303.11366"
    doi: null
  - title: "JIT-Agent: Scaling Harness Intelligence via Just-in-Time Harness Evolution"
    url: "https://arxiv.org/abs/2608.25593"
    year: 2026
    arxiv: "2608.25593"
    doi: null
  - title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models"
    url: "https://arxiv.org/abs/2402.03300"
    year: 2024
    arxiv: "2402.03300"
    doi: null
see:
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "081-reflexion-language-agents-with-verbal-reinforcement-learning"
  - "1447-jit-agent-scaling-harness-intelligence-via-just-in-time"
  - "977-deepseekmath-pushing-limits-of-mathematical-reasoning"
---

# Harness Learning Enables Generalizable Test-Time Adaptation

## One-sentence takeaway

A proposer trained with execution-feedback reinforcement learning revises a frozen solver's harness, and that revision skill transfers to tasks held out of training.

## Why it matters here

Broadside's standing cut is model versus harness. This paper trains the revision rule itself: at test time both proposer and solver stay frozen, and the adapted object is executable harness code. GRID COMMAND and Anoptic tool loops can keep the weights fixed and still improve a task by applying the same proposer to successive execution reports.

## Key ideas

- A harness is the program that builds each model context, chooses tools, and folds observations back in. The proposer reads the task, the current harness, and an execution report, then emits a span-replacement edit.
- Outer loop is GRPO on the proposer. Reward is the revised harness's mean grader score on scoring questions, plus a validity term. Inner loop applies the frozen proposer for several rounds. Evaluation questions are disjoint from feedback and scoring questions.
- Reasoning Gym uses Qwen3.5-4B as both proposer and solver, initialized from a 35B teacher's successful revisions. Mean single-revision score on 21 unseen families rises from 0.32 (base) to 0.62 after RL, above the teacher's 0.56 average. The teacher still wins oracle best-of-eight.
- A proposer trained only on HotpotQA transfers to MuSiQue and 2WikiMultihopQA. Policies trained on individual revisions can keep improving harnesses over later test-time rounds. Training on revision sequences helps in some settings and not others.
- Reasoning Gym keeps a candidate only when its development score beats the parent (one proposal per round). The QA protocol samples eight edits and may advance a lower-scoring harness. Failed parses score as invalid.

## Caveats

Immediate revision reward is a surrogate for the final adapted-harness objective, not that objective. On format-varied Reasoning Gym questions, most of the five-round gain arrives on the first edit. Do not treat oracle best-of-N as the deployed selector, and do not remint JIT-Agent (1447), SWE-agent (001), Reflexion (081), Ecdysis (1798), or the harness-effect measurement (1822).

## Links

- arXiv: [2609.35738](https://arxiv.org/abs/2609.35738)
- PDF: https://arxiv.org/pdf/2609.35738

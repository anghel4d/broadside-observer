---
title: "ContinualSkillBench: Can LLM Agents Truly Evolve Their Capabilities?"
authors:
  - Tianyi Guan
  - Yiding Wang
  - Haotong Yang
  - Siyuan Cao
  - Shirui Liu
  - Yi Hu
  - Jiaqi Li
  - Muhan Zhang
arxiv: "2608.03874"
source: "https://arxiv.org/abs/2608.03874"
repository: "https://github.com/gtynnn060110-hash/continual-skill-bench-final"
published: "2026-08-04"
version_reviewed: "v1 (2026-08-04)"
reviewed: "2026-08-10"
topics:
  - agents
  - continual-learning
  - skills
  - memory
  - evaluation
---

# ContinualSkillBench

**Paper:** [Abstract](https://arxiv.org/abs/2608.03874) · [Official PDF](https://arxiv.org/pdf/2608.03874) · [Code](https://github.com/gtynnn060110-hash/continual-skill-bench-final)

## One-sentence takeaway

Agents usually improve when experience and evaluator feedback persist across related tasks, but explicit skill files do not outperform equivalent in-context learning on average; durable skills appear most useful as compact procedural controls for strict outputs and executable workflows, and should therefore be promoted only after demonstrating transfer beyond what retained context already provides.

## Research question

Agent frameworks increasingly let models create and revise external skill documents during deployment. Better performance later in a task sequence does not by itself establish that these documents expanded the agent's capabilities. The improvement might instead come from ordinary in-context adaptation, retained evaluator feedback, familiarity with recurring output formats, or direct reuse of earlier trajectories.

ContinualSkillBench asks two related questions:

1. Does retaining experience across a sequence of related tasks improve later task performance?
2. If it does, is an explicit, evolving skill repository responsible for the gain?

The distinction is the paper's most important contribution. It prevents all sequential improvement from being mislabeled as autonomous skill evolution.

## Benchmark construction

The benchmark contains five domain streams: Healthcare, Law, Mathematics, Finance, and Office. Each stream contains 100 subtasks drawn from multiple existing datasets and arranged from simpler prerequisites toward more difficult work. The authors begin with roughly 30,000 candidate tasks, use LLM-assisted filtering and dependency analysis, and then manually review the resulting sequences.

GPT-5.4 judges sampled task pairs for potential directional skill transfer. Those judgments form dependency graphs that are ordered under a difficulty constraint. A separate post-hoc analysis uses a locally served Qwen3-32B annotator, with sequence position hidden, to identify reusable core skills for each task. At the primary cosine-similarity threshold:

- 69.5% of eligible tasks reuse at least one core skill encountered earlier in their domain stream;
- an average of 35.5% of each target task's core-skill requirements has a counterpart in its preceding history; and
- the curated order produces greater local skill coverage than random permutations in all 15 domain-by-window comparisons, with 10 remaining significant after Holm correction.

This establishes that the benchmark deliberately provides opportunities for transfer. It does not establish that agents exploit those opportunities through explicit skills.

## Agent protocol and experimental conditions

The evaluation runs on Harbor with sequential variants of Codex CLI and Claude Code. It tests GPT-4o, GPT-5.3-Codex, and Claude 4.7 Opus. Each sequential subtask has three turns:

1. the agent receives the task and its current skill repository;
2. it performs the task using the available tools and environment; and
3. it receives evaluator feedback, reflects on the result, and may create or modify a skill for later tasks.

The paper compares three principal conditions:

- **Independent:** history and the skill repository are reset before every subtask.
- **Sequential with skills:** history, feedback, and an editable skill repository persist across the 100-task stream.
- **Pure in-context learning:** history and feedback persist, but the agent cannot create or modify explicit skills.

The pure in-context condition is the crucial ablation because Sequential versus Independent changes several variables simultaneously. It is evaluated only with GPT-5.3-Codex and only in Law, Finance, and Healthcare. A smaller retrieval-augmented trajectory-memory ablation is also reported for Opus 4.7 in Healthcare.

Tasks use exact match, token-level F1, numeric tolerances, executable programmatic checks, or rubric-based LLM judging. The paper reports both raw reward over all 100 tasks and normalized reward over the intersection of tasks for which both compared conditions produced valid output files.

## Headline results

Sequential execution improves raw reward in 13 of 15 model-domain combinations and normalized reward in 14 of 15. Macro-averaged across the full matrix:

- raw reward increases by 0.071, a 16.2% relative improvement over Independent;
- normalized reward increases by 0.078, a 16.9% relative improvement; and
- the only normalized degradation is Opus 4.7 on Mathematics, at -0.008.

GPT-5.3-Codex receives the largest average normalized gain, +0.098, followed by GPT-4o at +0.077 and Opus 4.7 at +0.058. Healthcare has the largest average domain gain, +0.149. The ordering shows that stronger independent task performance does not imply a greater benefit from retained experience.

The benefits also depend strongly on evaluator type. For GPT-5.3-Codex in Finance, sequential execution improves Numeric reward by 0.416 and Exact Match by 0.091, but Rubric reward by only 0.038. In other settings rubric-based performance improves substantially or even falls, so there is no universal evaluator-level pattern.

## The decisive ablation: context nearly explains the gain

Across the three GPT-5.3-Codex domains tested under all conditions, average normalized reward is:

- 0.466 for Independent execution;
- 0.605 for pure in-context learning; and
- 0.602 for Sequential execution with explicit skills.

Explicit skill maintenance therefore provides no consistent aggregate advantage over retaining the task history and feedback. Sequential-with-skills slightly wins in Law and Finance but loses to pure context in Healthcare.

The two mechanisms do have different profiles. Explicit skills help with exact answers and rigid execution requirements; for example, they raise Healthcare Programmatic reward from 0.250 under pure context to 0.500. Pure context produces higher Rubric scores in all three ablation domains. A plausible interpretation is that explicit skills are valuable as stable procedures, formatting contracts, normalization rules, and validation checklists, while open-ended judgment benefits from a less rigid adaptation to the immediate history.

The Healthcare RAG ablation points in the same direction. Retrieved trajectory context reaches 0.617 normalized reward with Opus 4.7, compared with 0.635 for explicit Sequential skills. The difference favors skills, but one model-domain comparison is not sufficient to establish a general advantage.

## Skill-library dynamics

GPT-4o creates 384 skills across the five domains, whereas GPT-5.3-Codex creates 205. The smaller GPT-5.3-Codex library is invoked more frequently downstream and receives a higher average quality score: 7.94 versus 5.68 for GPT-4o. The authors interpret this as stronger models consolidating multiple experiences into fewer reusable abstractions while weaker models accumulate narrow, task-specific fragments.

That interpretation is plausible but not fully causal. Repository size and invocation frequency do not directly measure utility, and skill quality is judged by GPT-4.1-mini using a format-times-content score. The result is best treated as evidence for a fragmentation pattern, not proof that each compact skill caused improved task performance.

## Strengths

- The paper distinguishes sequential adaptation from explicit skill acquisition instead of treating them as synonyms.
- Its Independent, pure-context, explicit-skill, and limited retrieval conditions expose a central confound that many self-improvement claims ignore.
- The task streams combine heterogeneous domains, tools, artifacts, and evaluator types rather than repeating one narrow template.
- The authors validate that related skills recur within the curated sequences and compare the ordering with random permutations.
- The public artifact includes benchmark tasks, construction machinery, Harbor-based harness code, and example experiment configurations.
- Both raw and valid-output-normalized rewards are reported, making it possible to see whether the conclusion depends entirely on output parsing.

## Limitations and cautions

- The curricula are intentionally engineered to place related, progressively harder tasks together. This is useful for measuring available transfer, but substantially cleaner than open-world deployment, where relevance is sparse and distribution shifts are common.
- The pure-context ablation covers only GPT-5.3-Codex and three of five domains. The paper's most important causal result therefore has much narrower coverage than its main Sequential-versus-Independent table.
- The RAG comparison covers only Opus 4.7 in Healthcare.
- No repeated runs, stochastic variance, or confidence intervals are reported for the agent performance matrix. The stability of small deltas, especially the 0.008 Mathematics decline, is unknown.
- Sequential agents receive evaluator feedback that Independent agents cannot carry forward. Some improvement can therefore be evaluator adaptation or learned answer formatting rather than transfer of domain capability. The pure-context result demonstrates that this channel is powerful.
- Normalized reward is computed only on tasks that produce valid files in both compared conditions. This reduces formatting noise but can introduce selection effects. The positive raw-reward result is important corroboration.
- Cross-model comparisons also compare corresponding harnesses: GPT models run through Codex-derived agents and Claude through Claude Code. Within-model Sequential-versus-Independent differences remain useful, but model rankings are not harness-free measurements.
- Task dependencies, task-skill annotations, and generated-skill quality all rely partly on LLM judgments. Human review, hidden sequence positions, deterministic annotation settings, threshold sensitivity checks, and executable evaluators reduce but do not eliminate this dependence.
- The evaluation tests adaptation within fixed, source-derived task streams. It does not show durable transfer after context removal, transfer to a genuinely new distribution, or retention over long wall-clock intervals.

## Implications for Broadside

The paper argues against treating every reflection as a durable asset. Observer should preserve evidence, feedback, trajectories, and candidate procedures with provenance, but mere creation or later invocation should not qualify a candidate as a validated skill.

Garden can supply the promotion machinery. For every candidate skill, compare at least:

1. a fresh independent run;
2. retained or retrieved context without the explicit skill; and
3. the same condition with the materialized skill.

Promotion should depend on held-out forward transfer rather than performance on the task that generated the skill. Evaluation should also measure negative transfer, regressions, retrieval cost, repository growth, reuse frequency, and incremental utility over context-only memory. Skills that overlap should be merged or superseded; stale or harmful ones should be demoted without losing their provenance.

The result also suggests storing evaluator-type metadata. A procedure that improves exact-match or programmatic work may be a valuable output contract even if it harms open-ended rubric performance. Broadside should not collapse those effects into one average score.

The architectural division between Observer and Garden fits the evidence well: Observer maintains the research and experiential record, while Garden performs the expensive experiments needed to decide whether an abstraction deserves durable operational status.

## Bottom line

ContinualSkillBench is valuable precisely because its strongest result weakens the most ambitious interpretation of skill evolution. Retained experience generally helps, but explicit skill files do not beat equivalent context on average in the available ablation. Skills currently look most defensible as tested, compact procedural controls—not automatically accumulated capsules of intelligence. A system should materialize them only when measured transfer justifies the additional state.

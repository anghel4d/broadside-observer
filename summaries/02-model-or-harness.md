---
title: "Model or Harness? An Interaction-Centric Taxonomy for Localizing Agent Failures"
authors:
  - Harsh Raj
  - Vipul Gupta
  - Anas Mahmoud
  - Razvan-Gabriel Dumitru
  - Darvin Yi
  - Aakash Sabharwal
  - Yunzhong He
arxiv: "2607.28802"
source: "https://arxiv.org/abs/2607.28802"
source_file: "../sources/02-model-or-harness.txt"
published: "2026-07-30"
version_reviewed: "arXiv PDF accessed 2026-08-10"
reviewed: "2026-08-10"
topics:
  - agents
  - failure-analysis
  - evaluation
  - harnesses
  - root-cause-analysis
---

# Model or Harness?

**Paper:** [Abstract](https://arxiv.org/abs/2607.28802) · [Official PDF](https://arxiv.org/pdf/2607.28802) · [Local plain-text source](../sources/02-model-or-harness.txt)

## One-sentence takeaway

“The agent failed” is not a useful diagnosis: start from the visible outcome, trace backward to the earliest failure from which execution never recovered, then label both the interaction where it arose and the side responsible so that the repair is assigned to the model, harness, environment, owner, or evaluator that can actually fix it.

## Problem

Agent behavior emerges from interactions among a model, its owner, context construction, memory, tools, peer agents, local execution state, external services, and graders. Outcome-only evaluation collapses this system into pass or fail. The same symptom can therefore trigger the wrong intervention: more model training will not repair a tool wrapper that hid an error, and harness changes will not repair a model that saw an error and ignored it.

Existing taxonomies often describe visible behaviors or remain tied to one benchmark. This paper instead treats an interaction edge as the unit of analysis. Each label identifies:

1. the two components participating in the interaction;
2. the fault side, meaning the endpoint where the repair belongs; and
3. a named failure mode.

The taxonomy contains 41 failure modes. Thirty-six are assigned to a model and five to another component, partly because the authors call a failure model-side whenever a more capable model could have prevented it or recovered under the same conditions.

## Core diagnostic rule

A trajectory usually contains cascading errors. The paper’s central operational rule is to begin with the observed system-level failure, reconstruct the causal chain backward, and label the earliest failure from which execution does not recover. Later mistakes are treated as consequences unless they form an independent causal break.

The distinction is illustrated cleanly by tool errors. If a tool wrapper suppresses an error, the tool or harness side is at fault because the model never received the evidence. If the wrapper reports the error and the model ignores it or fails to recover, the model side is at fault. The interaction edge is the same; the repair assignment changes.

## Taxonomy coverage

The 41 modes span interactions involving:

- owners and graders, including over-initiative, under-initiative, satisficing, instruction-following failure, reasoning failure, unauthorized irreversible action, sycophancy, and instruction–grader mismatch;
- context and memory, including state-tracking failure, goal drift, pollution, redundancy, missed reads, and failures to follow retrieved memory;
- tools, including incorrect selection, tool hallucination, neglected feedback, failed recovery, malformed arguments, and suboptimal arguments;
- peers and subagents, including delegation and communication failures; and
- local or external environments, including observation, service, stale-state, and recovery failures.

The vocabulary is meant to apply across coding agents, personal assistants, multimodal agents, and multi-agent systems. The paper grounds nearly all categories in worked examples drawn from public benchmarks, system cards, published reports, GitHub issues, and logged trajectories.

## Validation

The authors freeze the taxonomy and ask four frontier reasoning agents to independently classify 40 worked examples. Each judge uses a three-stage process:

1. reconstruct a neutral chronological account from the original source;
2. identify the earliest unrecovered failure and assign edge, fault side, and mode; and
3. reflect against explicit disambiguation rules before finalizing the label.

The judges are evaluated against human labels using exact-match accuracy, macro-F1, and Cohen’s kappa.

- GPT-5.5 achieved 0.80 category accuracy and 0.72 complete failure-mode accuracy.
- Its agreement with the human category labels reached kappa = 0.76; the three Claude Opus judges reached 0.70–0.71.
- The strongest agreement between two judges reached kappa = 0.84 for category labels.
- Agreement on the complete named mode was lower than agreement on the broader interaction-and-fault category, showing that fine-grained root-cause labeling remains difficult.
- Selective voting makes the system more conservative: agreement among at least three of four judges yielded 0.83 category precision at 90% coverage, while unanimity yielded 0.96 precision at 68% coverage.

The useful result is not that automated diagnosis is solved. It is that independent analysts can recover the broader structure well above chance, and that abstention provides an explicit precision–coverage tradeoff.

## Strengths

- It converts a vague failure label into a repair-routing decision. Model-side findings feed post-training or capability work; harness-side findings feed scaffolding and integration work; environment or grader findings demand changes outside the model.
- Separating interaction edge from fault side captures cases that look identical at the outcome level.
- The earliest-unrecovered-failure rule discourages blaming downstream symptoms.
- The taxonomy is architecture- and modality-agnostic enough to serve as a shared incident vocabulary across projects.
- The judge experiment tests operational reproducibility rather than relying solely on the authors’ intuition.

## Limitations and cautions

- The taxonomy is descriptive, not epidemiological. Its examples do not estimate how frequently any failure occurs.
- It is derived from the cases reviewed and will need revision as agent architectures and harnesses evolve.
- Attribution is bounded by evidence quality. Short incident reports and system cards may omit the very event needed to distinguish model failure from harness or environment failure.
- Automated judges still struggle to reconstruct verified causal paths. Fine-grained mode accuracy is limited, and ensembling improves precision only by abstaining more often.
- The counterfactual rule—assigning fault to the model when a stronger model could have recovered—explains the 36-to-5 imbalance, but it can blur the distinction between ultimate system responsibility and model capability. This convention should be recorded whenever the taxonomy is used.
- Distributed failures may have interacting causes rather than one clean initiating event. The earliest-unrecovered rule is valuable discipline, but it should not erase contributing conditions.

## Implications for Broadside

This paper can supply a practical schema for recording agent incidents and evaluation failures. A Broadside record should preserve at least:

- observed outcome;
- chronological evidence;
- earliest unrecovered event;
- interaction edge;
- fault side;
- named mode;
- proposed repair owner;
- confidence and plausible alternative labels; and
- source provenance.

That structure would prevent research notes from collapsing every failure into “the model was bad.” It also creates a clean bridge from Observer to Garden: Observer can collect and classify evidence, while Garden can test the intervention assigned by that classification. Automated judges should be used as evidence-producing analysts with abstention and human review, not as unquestioned ground truth.

## Bottom line

The paper’s central idea is simple and genuinely useful: diagnose the interaction, not merely the outcome. Its taxonomy is best treated as a living root-cause vocabulary and repair-routing tool. The strongest near-term application is disciplined incident analysis; the automated classifier is promising but not yet reliable enough to replace expert review.

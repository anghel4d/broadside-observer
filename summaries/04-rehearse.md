---
title: "Rehearse: Stepping Back from the Confidence Cliff in Self-Improving Autoresearch"
authors:
  - Jiazhen Ji
  - Shouhong Ding
arxiv: "2607.27687"
source: "https://arxiv.org/abs/2607.27687"
published: "2026-07-30"
version_reviewed: "v1 (2026-07-30)"
reviewed: "2026-08-10"
topics:
  - agents
  - autoresearch
  - experiment-selection
  - memory
  - self-improvement
---

# Rehearse

**Paper:** [Abstract](https://arxiv.org/abs/2607.27687) · [Official PDF](https://arxiv.org/pdf/2607.27687)

## One-sentence takeaway

Compute-bound autoresearch should generate several candidate changes, discriminate among them before running an experiment, and judge each candidate from a narrow retrieval of similar measured attempts: as optimization deepens, a memoryless judge becomes more willing to decide while becoming less accurate, whereas focused change-and-outcome memory preserves late-stage selection quality and improves final results under the same training-run budget.

## Problem

Many autoresearch systems use a greedy loop: propose one modification, run a full training job, keep the patch if the metric improves, and otherwise revert it. This makes execution the price of learning whether an idea was worthwhile. As the easy improvements are consumed, useful modifications become rarer and smaller, so increasingly scarce compute is spent on changes that are later discarded.

Public AutoSOTA logs exhibit this diminishing-return regime. The fraction of helpful modifications falls from 70% during iterations one and two to 43% from iteration six onward. Even among successful modifications, the mean improvement declines from 3.6% to 0.3%.

Rehearse studies a second late-stage failure beyond idea scarcity: the agent's pre-execution judgment degrades as successful changes accumulate. A judge that can initially distinguish promising from unpromising modifications eventually continues issuing confident verdicts while those verdicts approach chance. The authors call this mismatch the confidence cliff.

## Propose-Predict-Execute

Rehearse changes the controller rather than the model or training code. Its loop is:

1. propose several candidate modifications;
2. predict which candidate is most likely to improve the metric;
3. execute only the top-ranked candidate;
4. record the attempted change and its measured outcome; and
5. commit an improving patch or revert an unsuccessful one.

Live experiments propose five candidates and execute one. Selection uses a pairwise tournament. Every unordered candidate pair is judged twice, once in each presentation order. A comparison contributes a vote only if both orders select the same winner; otherwise the judge abstains. This strict-consensus rule reduces position bias and exposes a measurable tradeoff between coverage, the fraction of comparisons receiving a verdict, and selective accuracy, accuracy conditional on a verdict.

The five-candidate tournament requires 20 judge calls per iteration in addition to the proposal call. Candidate records include a description, mechanistic hypothesis, implementation plan, and coarse change type. The rationale is important: removing the hypothesis and implementation produces the largest prompt-component degradation.

## Focused outcome memory

Rehearse retains every executed attempt but presents only a small candidate-conditioned view at decision time. Candidate descriptions are embedded with all-MiniLM-L6-v2. Retrieval is restricted to earlier attempts from the same task whose cosine similarity to the pending candidate is at least 0.40.

Each retrieved precedent is serialized as one line containing only:

- the previous change; and
- whether it worked or did not work.

The judge does not receive the full history, failure explanations, an applied-change list, or a generated narrative. This separation between a rich underlying record and a minimal decision surface is central to the result. More memory is not monotonically better, and explanatory material can distract from the local empirical precedent.

## Single-turn benchmark

The authors construct an outcome-labeled benchmark from public AutoSOTA optimization logs covering 39 paper-derived machine-learning tasks. It contains 366 candidate pairs:

- 296 primary pairs compare one successful and one unsuccessful modification evaluated from exactly the same accepted baseline; and
- 70 auxiliary pairs compare two successful modifications and ask which produced the larger gain.

Crashes, timeouts, invalid patches, and non-improvements count as did not work. Candidate rationales are generated after log collection by a separate LLM that is blind to the measured outcome, metric delta, failure reason, and keep-or-revert status. Retrieval is cut off before either candidate is evaluated, and the two candidates themselves cannot appear in memory.

All single-turn results are averaged over three judge endpoints: hy3-preview, GLM-5.1, and DeepSeek-V4. Strict consensus reduces reported run-to-run spread from 5.1 to 1.7 percentage points, at the cost of abstaining on presentation-sensitive comparisons.

## The confidence cliff

Without prior-attempt memory, the judge's selective accuracy is approximately 82.8% near the beginning of a trajectory. Once three or more successful modifications have accumulated, it falls to 56.9%. Coverage moves in the opposite direction, from 76% on shallow decisions to 85% on deep decisions. The judge therefore becomes more committal as it becomes less reliable.

History representation determines whether the late-stage judgment recovers:

- no history: 56.9% deep selective accuracy at 85% coverage;
- full-history dump: 70.8% at 80% coverage;
- Reflexion-inspired buffer: 74.1% at 90% coverage;
- LLM-generated history summary: 80.9% at 78% coverage; and
- Rehearse focused retrieval: 83.5% at 77% coverage.

The improvement is not explained only by greater abstention. On deep comparisons for which both the memoryless judge and Rehearse return a verdict, accuracy increases from 63.4% to 82.5%. Rehearse also raises selective accuracy on the primary worked-versus-did-not-work pairs from 79.5% to 84.2%, and on the auxiliary worked-versus-worked ranking pairs from 67.4% to 74.1%.

Ablations reinforce the minimal-memory result. Replacing focused retrieval with a full dump drops deep accuracy to 70.8%. Removing outcome labels reduces it to 77.5%. Adding recorded failure explanations reduces it from 83.5% to 80.6%, and the subset carrying such explanations performs worse still. The useful signal is the relevant change-outcome precedent, not the volume or eloquence of the history.

## Live-loop evidence

The end-to-end evaluation contains 4,000 budgeted training runs. Each loop executes 100 experiments with a 30-minute wall-clock limit per training run and reports five seeds per configuration.

Nanochat receives the full four-way ablation under the hy3-preview endpoint:

- vanilla, one proposal and immediate execution: 7.1% mean final improvement;
- propose five but execute the first: 6.9%;
- propose five and select without memory: 8.4%; and
- Rehearse selection with focused memory: 10.7%.

Candidate breadth alone therefore does not explain the result. Selection makes the broader pool useful, and focused memory adds another 2.3 percentage points over selection alone. Rehearse is ahead of selection on every nanochat seed. At experiment 30, it has reduced validation bits-per-byte by 8.9%, compared with 3.3% for vanilla, although much of this early advantage comes from surfacing one unusually valuable batch-size change sooner.

Two additional tasks compare vanilla directly with full Rehearse:

- on CIFAR-10 with GLM-5.1, accuracy improves by 2.85% versus 2.10%; and
- on ETTh1 forecasting with DeepSeek-V4, MSE falls by 54.0% versus 40.1%.

Rehearse reaches vanilla's experiment-100 endpoint after 54 experiments on CIFAR-10 and 63 on ETTh1, corresponding to 46% and 37% fewer training runs. It finishes ahead on nine of the ten seeds across those two loops. The ETTh1 Rehearse seeds are also much tighter in this small sample, although five seeds are insufficient for a strong variance claim.

## Conditional reuse rather than blacklisting

The store should inform candidate-level judgment rather than ban entire modification families. In one representative trajectory, lowering weight decay failed while raising it succeeded repeatedly. Across the Rehearse runs, 87% of accepted changes belonged to broader families that also contained unsuccessful attempts.

A no-LLM heuristic that simply chooses whichever candidate is farther from previous failed attempts performs below chance in the deep bucket. Semantic distance from failure is not a substitute for interpreting the direction, baseline, and measured outcome of a related change.

## Strengths

- The paper studies the decision before expensive execution rather than only final search performance.
- Same-baseline primary pairs control for the accepted code state and remaining headroom within each comparison.
- Outcome blinding, history cutoffs, pair exclusion, length balancing, and order-swapped consensus address several obvious leakage and judge-bias channels.
- Averaging the controlled benchmark over three judge models reduces dependence on one model's idiosyncrasies.
- The nanochat experiment separately tests candidate breadth, selection, and focused memory.
- Live experiments use five seeds and report per-seed results rather than only a single favorable trajectory.
- The negative results are operationally valuable: indiscriminate history, generic reflection, extra explanation, and naive failure blacklists all underperform focused outcome retrieval.

## Limitations and cautions

- The serving endpoints are aliases rather than frozen checkpoints. The exact behavior may change or be difficult to reproduce later.
- Each live model is paired with one task instead of crossing all models with all tasks. Model and task effects therefore cannot be separated.
- Equal budget means equal training-run count, not equal total compute, wall-clock time, API cost, or energy. Rehearse adds one multi-candidate proposal call and 20 judge calls at every iteration. Its economics are favorable when training dominates inference, but that assumption should be measured rather than implied.
- CIFAR-10 and ETTh1 compare only vanilla with full Rehearse. The clean breadth-versus-selection-versus-memory ablation is available only on nanochat.
- Five seeds per configuration provide useful replication but limited statistical power, especially for variance claims and path-dependent optimization.
- The confidence cliff is observational. Later decisions may have less headroom, different modification families, or intrinsically greater difficulty. The benchmark controls each pair's baseline and demonstrates a useful intervention on the same decisions, but it does not prove that accumulated success itself causes the degradation.
- Candidate rationales are reconstructed after the original attempts. They are outcome-blind, but the benchmark still measures judgment over LLM-proposed changes and LLM-generated rationales rather than raw patches alone.
- The memory outcome is binary. It discards effect magnitude, uncertainty, cost, interaction with the accepted baseline, and distinctions among crashes, invalid edits, neutral results, and genuine regressions.
- Retrieval is restricted to the same task and uses one fixed embedding model and similarity threshold. Transfer across related codebases or research programs remains untested.
- The evidence applies to machine-learning loops with measurable validation objectives and finite candidate pools. It does not directly establish benefits for novelty-scored research, paper generation, scientific claims without fast feedback, or open-ended engineering.

## Implications for Broadside

Rehearse supplies a clean contract between Observer and Garden. Observer should preserve the complete archival record: task, baseline identity, candidate description, hypothesis, implementation or diff, execution environment, metric before and after, error state, cost, and provenance. Garden should construct a much smaller decision view containing only the candidate-relevant evidence needed for the next choice.

Expensive experimentation should begin with multiple diverse candidates and an explicit discrimination stage. A useful Garden evaluation should compare:

1. one-candidate immediate execution;
2. multiple candidates with a fixed or random pick;
3. model-based selection without memory; and
4. selection with focused outcome retrieval.

This decomposition prevents gains from candidate breadth from being misattributed to memory. Budgets should report inference calls and cost alongside experiment count so the controller is evaluated against the actual scarce resource.

Observer should retain negative outcomes, but Garden should not turn them into coarse prohibition rules. Retrieval and judgment need the sign and context of the proposed change. A failed decrease can be evidence for an increase; a failed implementation can coexist with a sound direction.

Selection quality should be tracked by trajectory depth. Coverage, selective accuracy, calibration, and value per executed experiment may all shift as headroom disappears. A deep optimizer should become more selective when evidence weakens, not more confident by inertia.

Finally, the paper supports a two-layer memory design: store richly, retrieve narrowly. Archival completeness is valuable for audit and later reanalysis, while prompt-time minimalism protects the current decision from irrelevant narrative and history-volume effects.

## Bottom line

Rehearse is a strong and unusually actionable autoresearch paper. Its most durable contribution is not the specific 0.40 retrieval threshold or tournament implementation, but the separation of proposal breadth, pre-execution discrimination, and candidate-focused empirical memory. The live gains are credible within three measurable ML loops, while the endpoint aliases, small seed count, model-task pairing, and uncounted inference overhead constrain generalization. For Broadside, it provides a concrete pattern: archive the whole experiment in Observer, expose only relevant measured precedents to Garden, and force expensive candidates to compete before execution.

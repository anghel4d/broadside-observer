---
title: "The Resolution Hypothesis: Agent Evolution's Key Is Identifying Improvements"
authors:
  - "Yuanhao Zeng"
  - "Shaocheng Lan"
  - "Ao Lu"
  - "Kuang Yan"
  - "Heng Lin"
  - "Xinang Xu"
  - "Yuan Luo"
  - "Yueting Wang"
  - "Yexin Li"
  - "Ruo Shan"
  - "Kan Ren"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.23068"
doi: null
source: "https://arxiv.org/abs/2611.23068"
version_reviewed: "v1"
topics:
  - "continual-agent-skills"
  - "autoresearch-experiment-selection"
seed_rank: 2628
seed_batch: "frontier-2026-11-18"
reviewed: "2026-11-18"
pool: "agents"
relevance_score: 9
see:
  - 2242-the-winner-s-curse-in-llm-self-improvement-loops-selection-noise-lock
  - 2363-harness-delta-attribution-dissecting-gains-from-harness-evolution
  - 2285-cortex-measurement-gated-evolution-and-pruning-of-coding-agent-skills
cites:
  - title: "The Resolution Hypothesis: Agent Evolution's Key Is Identifying Improvements"
    url: "https://arxiv.org/abs/2611.23068"
    year: 2026
    arxiv: "2611.23068"
    doi: null
---

# The Resolution Hypothesis: Agent Evolution's Key Is Identifying Improvements

## One-sentence takeaway

Across seven agent-evolution methods and six models (over 10M LLM calls), evolution stalls not because proposers fail to write better prompts, skills or memories but because noisy evaluation cannot tell helpful candidates from harmful ones, and published method margins are smaller than run-to-run variance of the same method.

## Why it matters here

Our continual-skills and rehearsal loops are exactly propose-then-select loops, so this is a direct diagnosis of where they break: candidate selection is no better than random, so errors accumulate across rounds. It strengthens the winner's-curse result in 2242 with a much larger study and says the investment should go into making improvements detectable (measurement gates as in 2285), not into more proposers.

## Key ideas

- **Loop.** A proposer writes candidate artifacts (prompts, skills, memories); selection accepts those that score higher.
- **Resolution Hypothesis.** Evolution stalls because noisy evaluations cannot reliably identify improvements, not because better artifacts are never proposed.
- **Candidate level.** Helpful candidates exist, but selection is no better than random at separating them from harmful ones, so errors accumulate across rounds.
- **Method level.** Typical margins of a few points are smaller than the gap between two independent runs of the same method, so published rankings often rest on luck.
- **Prescription.** Shift effort from designing more improvement proposers to making true improvements detectable and accumulable.

## Caveats

Abstract-level read of the v1 preprint (Wednesday 18 Nov 2026 listing; 38 pages). The abstract does not name the seven methods, six models or tasks; generality beyond the studied settings is the authors' claim.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.23068
- PDF: https://arxiv.org/pdf/2611.23068
- HTML: https://arxiv.org/html/2611.23068v1
- Project page: https://lineshogan.github.io/resolution-hypothesis/

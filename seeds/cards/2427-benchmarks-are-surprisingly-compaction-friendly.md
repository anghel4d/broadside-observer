---
title: "Benchmarks Are Surprisingly Compaction-Friendly"
authors:
  - "Jeanne Salle"
  - "Hardik Bhatnagar"
  - "Matthias Bethge"
  - "Sahar Abdelnabi"
  - "Maksym Andriushchenko"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2610.31778"
doi: null
source: "https://arxiv.org/abs/2610.31778"
topics:
  - "provenance-first-agent-memory"
  - "agent-failure-localization"
seed_rank: 2427
seed_batch: "frontier-2026-10-26"
reviewed: "2026-10-26"
pool: "agents"
relevance_score: 9
cites:
  - title: "Benchmarks Are Surprisingly Compaction-Friendly"
    url: "https://arxiv.org/abs/2610.31778"
    year: 2026
    arxiv: "2610.31778"
    doi: null
---

# Benchmarks Are Surprisingly Compaction-Friendly

## One-sentence takeaway

With five compaction strategies built into one scaffold (OpenCode) and three frontier models on PaperBench, ProgramBench and PostTrainBench, the compaction threshold barely moves scores for 1M-context models and nothing beats default self-summarization, but the first summary already drops about a third of ProgramBench's anticheating rules, and in real SWE-chat sessions instructions about how to work and what not to do are dropped about 6 times more often than specifications of what to build.

## Why it matters here

Long-running bots here compact constantly, and the constraints most likely to vanish are exactly the standing rules (no sends, no LinkedIn posts, append-only ranks) that exist nowhere but the conversation. The paper's explanation is the useful part: benchmarks forgive compaction because the goal is fixed and progress lives on disk, so the only unrecoverable loss is a constraint stored only in context. That argues for keeping every hard rule in a file or a check that is re-read after compaction, the same lesson as cards 2383 and 2312.

## Key ideas

- **Setup.** One fixed scaffold, five compaction strategies (including default self-summarization, dropping reasoning blocks, and summarizing with a smaller model), thresholds from 160K to 380K tokens, three models (Claude Opus 4.6, GPT-5.4, GPT-5.3-Codex) and three long-horizon benchmarks.
- **Threshold.** Flat for the two 1M-context models; GPT-5.3-Codex, with the smallest window, goes from 0.38 at 160K to about 0.60 at 260K and above on PaperBench.
- **Strategy.** No method beats self-summarization, and methods that discard more content cost some models up to 20 points while leaving others unchanged.
- **Constraint loss.** The first ProgramBench compaction drops about one third of the anticheating rules on average, and the loss grows monotonically with the number of compactions.
- **Real sessions.** On SWE-chat user-agent sessions, process and prohibition instructions are dropped about 6 times more often than build specifications.
- **Why benchmarks hide it.** The objective is fixed and the work is on disk, so most discarded context is recoverable; constraints that exist only in the prompt are not.

## Caveats

Thresholds only cover 16–38% of the window for the 1M models, so compaction near the usual 90–95% trigger is untested for them. PostTrainBench error bars are too wide to conclude anything, and Gemini rarely compacted. Constraint-loss numbers measure what the summary omits, not how often the omission changed behavior.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.31778
- PDF: https://arxiv.org/pdf/2610.31778

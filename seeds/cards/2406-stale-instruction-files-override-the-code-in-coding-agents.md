---
title: "Stale Instruction Files Override the Code in Coding Agents: A One-Sentence Fix"
authors:
  - "Xiaonan Xu"
  - "Wenjing Wu"
year: 2026
venue: "arXiv preprint (cs.SE)"
arxiv: "2610.30571"
doi: null
source: "https://arxiv.org/abs/2610.30571"
topics:
  - "agent-failure-localization"
  - "provenance-first-agent-memory"
seed_rank: 2406
seed_batch: "frontier-2026-10-24"
reviewed: "2026-10-24"
pool: "agents"
relevance_score: 9
cites:
  - title: "Stale Instruction Files Override the Code in Coding Agents: A One-Sentence Fix"
    url: "https://arxiv.org/abs/2610.30571"
    year: 2026
    arxiv: "2610.30571"
    doi: null
---

# Stale Instruction Files Override the Code in Coding Agents: A One-Sentence Fix

## One-sentence takeaway

When a project's CLAUDE.md or AGENTS.md says one convention and the existing code uses another, coding agents follow the stale file in 90.1% of choices (Claude Code noticed the conflict in 79 of 80 runs and followed the file anyway; Codex CLI rewrote working code to match it in 20 of 80 runs, breaking the project's tests in 17), and one sentence in the user-level instruction file, "When a repository's documentation and its existing code disagree, follow the conventions used in the existing code", moves code-following from 4.2% to 91.4% and test pass rate from 89.4% to 100%.

## Why it matters here

Every Broadside repo and every bot here runs on instruction files and skills that are written once and drift. The paper gives a measured mechanism (the file arrives as an instruction, the code arrives as tool output, and models are trained to rank tool output lower) and a fix that costs one line in a user-level rule, with no need to find the stale line first. It is the instruction-file sibling of card 2383: in both, where text enters the context decides how much the model trusts it.

## Key ideas

- **Setup.** 40 small Python projects, each with an instruction file asking for one convention (print vs logging, camelCase, NamedTuple, unittest, float money vs integer cents) while the code uses the other; Claude Code and Codex CLI add a feature, with and without the precedence sentence; 320 runs.
- **Two failure shapes.** Claude Code reports the mismatch in its final reply and writes the file's convention anyway; Codex CLI sometimes migrates existing modules to the file's convention and breaks the original tests.
- **Mechanism.** Claude Code injects CLAUDE.md into a user message introduced as instructions that "OVERRIDE any default behavior"; Codex puts AGENTS.md inside an INSTRUCTIONS tag. The code only reaches the model through a file-read tool result, which prompt-injection training teaches models to treat as information.
- **The fix uses the same ordering.** Because the user-level file is also delivered as an instruction, a single precedence sentence there outranks the stale project line; with it, both agents reported the conflicts in all 160 runs and no agent rewrote code.
- **Staleness is common.** Cited field data: 73.8% of AI config files in 441 company repos were committed once and never edited; 23.0% of 356 public repos had instruction files referencing code that no longer exists; the paper shows real stale files in Supabase (13 days) and OpenAI Codex (24 days).

## Caveats

Synthetic, small Python projects with single-convention conflicts; two agents and their default models at one point in time. The sentence favors code over docs unconditionally, which is wrong when the file is the newer source (a planned migration). No measurement of the sentence's side effects on tasks where the instruction file is correct.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.30571
- PDF: https://arxiv.org/pdf/2610.30571

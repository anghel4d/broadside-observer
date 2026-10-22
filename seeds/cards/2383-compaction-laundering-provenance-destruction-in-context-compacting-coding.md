---
title: "Compaction Laundering: Provenance Destruction in Context-Compacting Coding Agents"
authors:
  - "Arshan Dabirsiaghi"
year: 2026
venue: "arXiv preprint (cs.CR)"
arxiv: "2610.29869"
doi: null
source: "https://arxiv.org/abs/2610.29869"
topics:
  - "provenance-first-agent-memory"
  - "agent-failure-localization"
seed_rank: 2383
seed_batch: "frontier-2026-10-22"
reviewed: "2026-10-22"
pool: "agents"
relevance_score: 9
cites:
  - title: "Compaction Laundering: Provenance Destruction in Context-Compacting Coding Agents"
    url: "https://arxiv.org/abs/2610.29869"
    year: 2026
    arxiv: "2610.29869"
    doi: null
  - title: "From Untrusted Input to Trusted Memory: A Systematic Study of Memory Poisoning Attacks in LLM Agents"
    url: "https://arxiv.org/abs/2606.04329"
    year: 2026
    arxiv: "2606.04329"
    doi: null
---

# Compaction Laundering: Provenance Destruction in Context-Compacting Coding Agents

## One-sentence takeaway

When a coding-agent harness flattens its role-typed conversation into one string with in-band labels like `[User]:` before summarizing it, anything the agent reads can forge a user turn that survives compaction as a genuine instruction: the forged approval launders into memory 87–100% of the time in five flattening harnesses (pi, opencode, Cline, Aider, OpenHands) and 0% in four role-typed ones (Codex, Gemini CLI, Qwen Code, Continue).

## Why it matters here

Every long Broadside agent run compacts. The paper locates the failure in harness serialization code rather than in the model, which means it is checkable and fixable in our own tooling: keep messages role-typed through the summarizer, or escape role labels before flattening, and verify user-attributed claims in the summary against the real user turns the harness still holds. It complements card 2365 (allow-rule escalation) and card 2312 (source-judged compaction) with a measured trust-boundary bug in the compaction step itself.

## Key ideas

- **Susceptibility is a property of serialization, not of the model.** The same attack, same models: in-band labels → laundering; typed roles → none.
- **Context size does not save you.** In pi the laundering rate stays at 100% from a few thousand tokens out to about 908,000 tokens (near the model's 922K input ceiling), and placement at 10%, 50% or 90% into the transcript made no difference; the executed rate settles to about 20–40% in a full window.
- **It reaches execution.** A laundered "you already approved this" drove tool-running agents to run an attacker-controlled `curl | sh` in a sandbox, and about 50% of the time end to end in the live pi TUI versus 0% in a paired clean arm. The same channel can steer a plan away from a file, blinding a review to a planted backdoor.
- **Prompt-level rules only dent it.** Summarizer rules reduced laundering by about 21–26 points on some providers but left most payloads laundered, and no rule transferred across models.
- **Code-level defense.** A "provenance contrast" check against the genuine user turns catches 77% of laundering while demoting 2% of legitimate summary content; escaping labels at the serializer is the direct fix. Findings were disclosed to maintainers before publication.

## Caveats

Single-author industry study (Pixee). Harness behavior is pinned to specific upstream commits and may already be patched. Several results score summaries or plans with an LLM judge rather than observing execution; the live end-to-end number comes from one harness. The canary payloads cannot express multi-fragment "relinking" attacks that the related work describes.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.29869
- PDF: https://arxiv.org/pdf/2610.29869

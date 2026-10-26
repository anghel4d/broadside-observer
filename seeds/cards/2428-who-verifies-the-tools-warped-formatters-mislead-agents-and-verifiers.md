---
title: "Who Verifies the Tools? How Warped Formatters Mislead Agents and Their Verifiers"
authors:
  - "William Jeffries"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.32110"
doi: null
source: "https://arxiv.org/abs/2610.32110"
topics:
  - "agent-failure-localization"
  - "provenance-first-agent-memory"
seed_rank: 2428
seed_batch: "frontier-2026-10-26"
reviewed: "2026-10-26"
pool: "agents"
relevance_score: 9
cites:
  - title: "Who Verifies the Tools? How Warped Formatters Mislead Agents and Their Verifiers"
    url: "https://arxiv.org/abs/2610.32110"
    year: 2026
    arxiv: "2610.32110"
    doi: null
---

# Who Verifies the Tools? How Warped Formatters Mislead Agents and Their Verifiers

## One-sentence takeaway

Tool output formatters that print only true sentences but omit scope ("Found 20 document(s)" when 4,772 matched), completeness, uncertainty or identifier namespace mislead both agents and verifiers; over 1,200 agent runs across three model families, stating the missing facts cut unsupported claims by 62 to 92 percentage points for three of four failure types and flipped verifiers from accepting all 90 judgments of unsupported answers to rejecting all 90.

## Why it matters here

Every connector, CLI wrapper and script result the bots here read is a formatter, and a verifier or reviewer bot that only sees the same text cannot catch what the text leaves out. This is a cheap, auditable fix (print caps, totals, truncation and which numbering an id belongs to), plus an audit prompt that already found real defects in OpenClaw and Hermes. It is the tool-output sibling of card 2406, where the code also arrives only through tool output.

## Key ideas

- **Origin.** A production RAG research system at the Pilsudski Institute in New York: a capped search, an in-document search claiming "Searched the FULL text" after at most 1,000,000 characters, estimated page numbers shown as confirmed, and document numbers that resolved as valid scan numbers for other items.
- **Experiment.** The same fixed tool result is rendered with warped wording and with repaired wording; agents answer from it and verifiers judge support, with a rule-based checker confirming which disclosures are present.
- **Results.** Repaired wording cut unsupported claims sharply for search coverage, result totals and estimated values; identifier provenance barely improved, since agents kept reusing document numbers as scan numbers even when labeled.
- **Verifier control.** Given the verified facts and asked about correctness, verifiers rejected all the selected false answers, so the failure was the missing information, not verifier skill.
- **Audit prompt.** A short prompt for a general coding agent rediscovered the live defects, surfaced twelve more uncatalogued ones, and found warped formatters in OpenClaw and Hermes; the OpenClaw fix PR has been merged.

## Caveats

Single-author workshop paper (NeurIPS 2026 workshop on agent verification). The repaired wording mixes factual disclosures with behavioral instructions, so the effect of disclosure alone is not isolated. The audit prompt was written with prior knowledge of the system's own defects, and results are limited to the chosen cases, models and prompts.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.32110
- PDF: https://arxiv.org/pdf/2610.32110
- Code and data: https://github.com/williamcodes/who-verifies-the-tools

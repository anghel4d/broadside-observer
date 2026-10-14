---
title: "Names Are Not Objects: Object-Bound Confinement for Compromised AI Coding Agents"
authors:
  - "Daniel Commey"
year: 2026
venue: "arXiv"
arxiv: "2610.14488"
doi: null
source: "https://arxiv.org/abs/2610.14488"
topics:
  - "agent-security"
  - "capability-scoped-harness"
seed_rank: 2284
seed_batch: "frontier-2026-10-14"
reviewed: "2026-10-14"
pool: "agents"
relevance_score: 9
lineage: capability-scoped-harness
cites:
  - title: "Names Are Not Objects: Object-Bound Confinement for Compromised AI Coding Agents"
    url: "https://arxiv.org/abs/2610.14488"
    year: 2026
    arxiv: "2610.14488"
    doi: null
see: []
---

# Names Are Not Objects: Object-Bound Confinement for Compromised AI Coding Agents

## One-sentence takeaway

Confine an already-compromised coding agent by making a broker resolve every request to the concrete object (file, program, repo) it will touch, decide on that object, and re-check at use — because most deployed-agent exploits approve a *name* that later maps to a different object.

## Why it matters here

This is the cleanest statement yet of why string allowlists and command sandboxes keep failing for Claude Code–style agents, and it is a capability-system argument (object-bound, single-use approvals) that lines up with the reference-capability and region thinking already in the library; the 3.2k-line trusted Rust broker is a sized, buildable design for any Broadside agent box.

## Key ideas

- **Root cause.** A check approves a path, argv, or directory; a later step resolves it to the file behind a symlink, the behaviour an option selects, or a repository git discovers by itself.
- **Zero-Trust Agent Cells.** The agent runs in a kernel sandbox whose only route to files, programs and network is a socket to a broker; the broker resolves, decides, and verifies at use.
- **Policy-compiled child sandboxes.** Programs the broker spawns run in a sandbox compiled from the same policy; approvals bind to the resolved object and can be used once.
- **Evaluation.** 74 attacks with ground-truth oracles incl. 10 replayed public incidents: a tool allowlist loses 66, allowlist + command sandbox loses 56, ZTAC loses 2 (both encode a secret into traffic to an allowed endpoint) and holds 14 for review.
- **Cost.** 43 of 46 benign operations and 4 of 7 workflows complete with 8 approval prompts; a no-op brokered request has 4.0 ms median latency, spawned programs take 8.5–18.4 ms longer.

## Caveats

Single-author macOS prototype; the attack suite is the author's own and exfiltration through allowed endpoints is explicitly not stopped. Workflow completion (4/7) shows real usability friction. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.14488
- PDF: https://arxiv.org/pdf/2610.14488
- HTML: https://arxiv.org/html/2610.14488v1
- Code and data: https://github.com/dcommey/ztac

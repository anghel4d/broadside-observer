---
title: "Viewing Control Structures as Patterns of Passing Messages"
authors:
  - "Carl Hewitt"
year: 1977
venue: "Artificial Intelligence"
arxiv: null
doi: "10.1016/0004-3702(77)90033-9"
source: "https://doi.org/10.1016/0004-3702(77)90033-9"
topics:
  - actors
  - hewitt
  - concurrency
  - messaging
seed_rank: 683
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Scheme: An Interpreter for Extended Lambda Calculus"
    url: "https://dspace.mit.edu/handle/1721.1/5794"
    year: 1975
    arxiv: null
    doi: null
  - title: "Communicating Sequential Processes"
    url: "https://doi.org/10.1145/359576.359585"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359585"
see:
  - "673-scheme-an-interpreter-for-extended-lambda-calculus"
  - "046-communicating-sequential-processes"
---

# Viewing Control Structures as Patterns of Passing Messages

## One-sentence takeaway

Hewitt's 1977 Actors paper treats control structures — recursion, iteration, backtracking, futures — as patterns of asynchronous message passing among computational agents with mailboxes.

## Why it matters here

Root Actors paper: the conceptual parent of concurrent object/message designs, of Scheme's early actor experiments, and of any GRID COMMAND unit that should be a process, not a shared-memory object.

## Key ideas

- An actor has a mail address, a behaviour, and (conceptually) a mailbox; the only interaction is sending a message, which may create more actors.
- Familiar control structures are recovered as messaging diagrams rather than as primitive language forms; shared-memory sequential control is rejected as the only model.
- PLANNER's procedural embedding of knowledge is in the background; this paper is the concurrency/control restatement.
- *Artificial Intelligence* 8(3), 1977, DOI 10.1016/0004-3702(77)90033-9. Agha 1986 is the later monograph; Erlang is the industrial descendant.

## Caveats

## Links

- DOI: [10.1016/0004-3702(77)90033-9](https://doi.org/10.1016/0004-3702(77)90033-9)

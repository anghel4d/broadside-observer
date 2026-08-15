---
title: "Language Primitives and Type Discipline for Structured Communication-Based Programming"
authors:
  - "Kohei Honda"
  - "Vasco T. Vasconcelos"
  - "Makoto Kubo"
year: 1998
venue: "ESOP 1998, LNCS 1381"
arxiv: null
doi: "10.1007/BFb0053567"
source: "https://www.di.fc.ul.pt/~vv/papers/honda.vasconcelos.kubo_language-primitives.pdf"
topics:
  - session-types
  - concurrency
  - type-systems
seed_rank: 136
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Communicating Sequential Processes"
    url: "https://doi.org/10.1145/357980.358021"
    year: 1978
    arxiv: null
    doi: "10.1145/357980.358021"
  - title: "A calculus of mobile processes, I"
    url: "https://doi.org/10.1016/0890-5401(92)90008-4"
    year: 1992
    arxiv: null
    doi: "10.1016/0890-5401(92)90008-4"
  - title: "The Polyadic π-Calculus: a Tutorial"
    url: "https://doi.org/10.1007/978-3-642-58041-3_6"
    year: 1993
    arxiv: null
    doi: "10.1007/978-3-642-58041-3_6"
  - title: "The chemical abstract machine"
    url: "https://doi.org/10.1016/0304-3975(92)90185-i"
    year: 1992
    arxiv: null
    doi: "10.1016/0304-3975(92)90185-i"
  - title: "The reflexive CHAM and the join-calculus"
    url: "https://doi.org/10.1145/237721.237805"
    year: 1996
    arxiv: null
    doi: "10.1145/237721.237805"
  - title: "Actors"
    url: "https://doi.org/10.7551/mitpress/1086.001.0001"
    year: 1986
    arxiv: null
    doi: "10.7551/mitpress/1086.001.0001"
see:
  - "046-communicating-sequential-processes"
---

# Language Primitives and Type Discipline for Structured Communication-Based Programming

## One-sentence takeaway

A session is a private channel spawned by `accept`/`request`, and the three session primitives — value pass, label branch, and `throw`/`catch` delegation — are what an ML-style type system checks for dual compatibility.

## Why it matters here

GRID COMMAND agent protocols and Broadside’s structured RPC want exactly this: a type that says “I send a tick, you branch on `fire`/`hold`, then I hand the rest of the session to another worker.” Delegation is the piece that lets one session hop across ECS systems without becoming untyped message soup.

## Key ideas

- `request a(k) in P` / `accept a(k) in P` agree on a fresh channel `k`; names initiate sessions, channels carry them — two syntactic sorts on purpose.
- Three interactions on `k`: `k![ẽ]` / `k?(x̃)`, `k ▹ ℓ` / `k ▹ {ℓᵢ : Pᵢ}`, and `throw k[k′]` / `catch k(k′) in P`. Delegation is not ordinary name-passing; it moves an in-flight session.
- Recursion plus sessions gives unbounded dialogues as one abstraction (a file-server loop is one recursive session, not a bag of RPCs).
- Typability means complementary I/O patterns: a caller’s output-then-input forces the callee’s input-then-output. Ill-matched protocols are rejected before reduction.
- Operationally the primitives are a thin, lock-step veneer over summation-less asynchronous polyadic π with branching; RPC and method invocation are recovered as fixed session shapes.

## Caveats

## Links

- Author PDF: [honda.vasconcelos.kubo_language-primitives.pdf](https://www.di.fc.ul.pt/~vv/papers/honda.vasconcelos.kubo_language-primitives.pdf)
- DOI: [10.1007/BFb0053567](https://doi.org/10.1007/BFb0053567)

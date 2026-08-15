---
title: "Session Types as Intuitionistic Linear Propositions"
authors:
  - "Luís Caires"
  - "Frank Pfenning"
year: 2010
venue: "CONCUR 2010, LNCS 6269"
arxiv: null
doi: "10.1007/978-3-642-15375-4_16"
source: "https://www.cs.cmu.edu/~fp/papers/concur10.pdf"
topics:
  - session-types
  - linear-logic
  - concurrency
  - type-systems
seed_rank: 121
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Language primitives and type discipline for structured communication-based programming"
    url: "https://doi.org/10.1007/BFb0053567"
    year: 1998
    arxiv: null
    doi: "10.1007/BFb0053567"
  - title: "Computational interpretations of linear logic"
    url: "https://doi.org/10.1016/0304-3975(93)90181-R"
    year: 1993
    arxiv: null
    doi: "10.1016/0304-3975(93)90181-R"
  - title: "Types for dyadic interaction"
    url: "https://doi.org/10.1007/3-540-57208-2_35"
    year: 1993
    arxiv: null
    doi: "10.1007/3-540-57208-2_35"
  - title: "The Pi-Calculus: A Theory of Mobile Processes"
    url: "https://doi.org/10.1017/CBO9780511624193"
    year: 2001
    arxiv: null
    doi: "10.1017/CBO9780511624193"
  - title: "Subtyping for session types in the pi calculus"
    url: "https://doi.org/10.1007/s00236-005-0177-z"
    year: 2005
    arxiv: null
    doi: "10.1007/s00236-005-0177-z"
  - title: "Logic Programming with Focusing Proofs in Linear Logic"
    url: "https://doi.org/10.1093/logcom/2.3.297"
    year: 1992
    arxiv: null
    doi: "10.1093/logcom/2.3.297"
  - title: "Functions as processes"
    url: "https://doi.org/10.1017/S0960129500001407"
    year: 1992
    arxiv: null
    doi: "10.1017/S0960129500001407"
see:
  - "136-language-primitives-and-type-discipline-for-structured-commu"
  - "143-computational-interpretations-of-linear-logic"
  - "145-types-for-dyadic-interaction"
---

# Session Types as Intuitionistic Linear Propositions

## One-sentence takeaway

Caires and Pfenning type the π-calculus so that sequents of dual intuitionistic linear logic are session typings: a proof of Γ; Δ ⊢ C extracts to a process that offers protocol C, and π-reductions are cut-elimination steps.

## Why it matters here

GRID COMMAND and ano need typed channels, not ad-hoc message enums: ILL connectives are the protocol algebra (send, recv, choice, shared server), and the cut rule is composition-plus-hiding — the same shape as wiring two agents across a linear mailbox.

## Key ideas

- Types sit on names, not terms. `A ⊸ B` is “input a channel of type A, then continue as B”; `A ⊗ B` is “output a fresh A-channel, then continue as B”; `1` is a finished session; `A ⊕ B` / `A & B` are select vs offer; `!A` is a shared server that can spawn arbitrarily many A-sessions.
- Dual contexts: unrestricted Γ (weaken/contract; shared servers) vs linear Δ (session endpoints). Intuitionistic `!` forces locality of shared names while session names may be delegated.
- πDILL judgments `Γ; Δ ⊢ P :: z:C` match DILL sequents after erasing the process; cut / cut! are “compose and hide” on a linear session or a replicated server.
- Subject reduction is operational correspondence: every π-reduction is a proof reduction, every proof conversion is a reduction or a structural congruence, and typed systems enjoy global progress (no deadlock across any number of open sessions).
- A buy/quote server is literally `(N ⊸ I ⊸ (N ⊗ 1)) & (N ⊸ (I ⊗ 1))`; the client selects right, sends a product id, and receives a price — the same term is a DILL derivation.

## Caveats

## Links

- PDF (CMU): https://www.cs.cmu.edu/~fp/papers/concur10.pdf
- DOI: [10.1007/978-3-642-15375-4_16](https://doi.org/10.1007/978-3-642-15375-4_16)
- Springer: https://link.springer.com/chapter/10.1007/978-3-642-15375-4_16

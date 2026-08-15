---
title: Global Progress for Dynamically Interleaved Multiparty Sessions
authors:
- Mario Coppo
- Mariangiola Dezani-Ciancaglini
- Nobuko Yoshida
- Luca Padovani
year: 2016
venue: Mathematical Structures in Computer Science
arxiv: null
doi: 10.1017/S0960129514000188
source: "https://doi.org/10.1017/S0960129514000188"
topics:
- session-types
- concurrency
- type-safety
seed_rank: 916
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Multiparty Asynchronous Session Types"
    url: "https://doi.org/10.1145/1328438.1328472"
    year: 2008
    doi: "10.1145/1328438.1328472"
see:
  - "917-multiparty-asynchronous-session-types"
  - "121-session-types-as-intuitionistic-linear-propositions"
---

# Global Progress for Dynamically Interleaved Multiparty Sessions

## One-sentence takeaway

Communication safety inside one session is not deadlock-freedom across many: an interaction type system infers causalities among interleaved, delegated multiparty sessions and rejects cyclic waits.

## Why it matters here

GRID COMMAND fireteams and ano command buses are exactly “one process, several protocols at once.” Honda–Yoshida–Carbone (card 917) give the global protocol; this journal paper is the progress theorem you need once a squad is in two conversations and a channel gets delegated.

## Key ideas

- Standard MPST guarantees safety and progress *inside* one session; interleaving plus delegation can still deadlock.
- Two layers: a compositional communication type system (fidelity to each session) and a static interaction type system (dependencies among channels).
- Causalities are inferred, not annotated; well-typed systems enjoy global progress even with dynamic interleaving and delegation.
- Journal version (MSCS 26(2):238–302, 2016; published online 2014) of CONCUR 2008 / COORDINATION 2013 results.
- The previously listed source (Yoshida’s homepage) is an author index, not this paper.

## Caveats

## Links

- DOI: [10.1017/S0960129514000188](https://doi.org/10.1017/S0960129514000188)
- PDF: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/E412D2FA6BBDD53F0DBCD527E6B3813F/S0960129514000188a.pdf/global_progress_for_dynamically_interleaved_multiparty_sessions.pdf

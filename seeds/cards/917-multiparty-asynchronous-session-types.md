---
title: Multiparty Asynchronous Session Types
authors:
- Kohei Honda
- Nobuko Yoshida
- Marco Carbone
year: 2008
venue: POPL
arxiv: null
doi: 10.1145/1328438.1328472
source: "https://doi.org/10.1145/1328438.1328472"
topics:
- session-types
- multiparty
- mpst
- type-safety
seed_rank: 917
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  []
---

# Multiparty Asynchronous Session Types

## One-sentence takeaway

A global type describes a multiparty protocol as a whole; projecting it to a local session type per participant gives communication safety, fidelity, and progress for asynchronous message passing.

## Why it matters here

Binary session types are a two-party bus. GRID COMMAND encounters, squad comms, and ano command protocols are n-party. This is the paper that introduces the global-type / projection split every later MPST tool (including card 916’s deadlock result) sits on.

## Key ideas

- Global types are the shared choreography: who sends what to whom, in what order, including branching and recursion.
- Projection is a syntactic operation from a global type to the local type each participant must implement; well-formedness of the global type is what makes projection defined.
- Asynchrony: sends are non-blocking; the type system still guarantees that messages are used according to the protocol (no unexpected labels, no leftover payloads).
- Binary session types (Honda 1993 / Takeuchi–Honda–Kubo) are the two-party special case; the new difficulty is consistency of many local views of one conversation.
- POPL 2008, pp. 273–284; author PDF hosted by Yoshida. A later JACM journal version exists, but this card is the original conference paper.

## Caveats

## Links

- DOI: [10.1145/1328438.1328472](https://doi.org/10.1145/1328438.1328472)
- PDF: https://www.doc.ic.ac.uk/~yoshida/multiparty/multiparty.pdf
- Authors' page: https://www.doc.ic.ac.uk/~yoshida/multiparty/

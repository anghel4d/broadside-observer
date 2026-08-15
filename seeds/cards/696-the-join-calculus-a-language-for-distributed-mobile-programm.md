---
title: "The Join Calculus: A Language for Distributed Mobile Programming"
authors:
  - "Cédric Fournet"
  - "Georges Gonthier"
year: 2002
venue: "APPSEM 2000 / LNCS 2395"
arxiv: null
doi: "10.1007/3-540-45699-6_6"
source: "https://doi.org/10.1007/3-540-45699-6_6"
topics:
  - join-calculus
  - distributed
  - concurrency
  - fournet
  - gonthier
seed_rank: 696
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "A Calculus of Mobile Processes, I"
    url: "https://doi.org/10.1016/0890-5401(92)90008-4"
    year: 1992
    arxiv: null
    doi: "10.1016/0890-5401(92)90008-4"
  - title: "The Chemical Abstract Machine"
    url: "https://doi.org/10.1016/0304-3975(92)90185-I"
    year: 1992
    arxiv: null
    doi: "10.1016/0304-3975(92)90185-I"
see:
  - "695-a-calculus-of-mobile-processes-i"
  - "697-the-chemical-abstract-machine"
---

# The Join Calculus: A Language for Distributed Mobile Programming

## One-sentence takeaway

Fournet and Gonthier replace π-calculus input with *join patterns*: a reaction fires only when several messages are present at once, and reception is localized so distribution has a meaning.

## Why it matters here

Join-calculus is the process calculus that actually influenced JoCaml and concurrent-language experiments — multiway sync you can implement, not just name-passing. The old card DOI was Edalat–Heckmann in the same LNCS volume.

## Key ideas

- A join definition binds a pattern `x⟨v⟩ | y⟨w⟩ ▹ P`; the body runs when both messages have arrived, which is how you express rendezvous without a separate choose combinator.
- Localized reception: only the definition site consumes on a name, so you can place definitions on machines and migrate them; this is the distribution story π-calculus leaves informal.
- Chemical/CHAM ancestry is explicit: the runtime is a soup of messages and definitions, heating/cooling for structural congruence, reactions for joins.
- APPSEM 2000 advanced lectures, LNCS 2395, pp. 268–332, published 2002, DOI 10.1007/3-540-45699-6_6. Year on the card is the printed LNCS year.

## Caveats

## Links

- DOI: [10.1007/3-540-45699-6_6](https://doi.org/10.1007/3-540-45699-6_6)

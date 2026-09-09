---
title: "Featherweight Java: A Minimal Core Calculus for Java and GJ"
authors:
  - "Atsushi Igarashi"
  - "Benjamin C. Pierce"
  - "Philip Wadler"
year: 2001
venue: "ACM TOPLAS 23(3)"
arxiv: null
doi: "10.1145/503272.503275"
source: "https://www.cis.upenn.edu/~bcpierce/papers/fj-toplas.pdf"
topics:
  - featherweight-java
  - type-soundness
  - object-calculi
seed_rank: 1663
seed_batch: "archive-2026-09-10"
reviewed: "2026-09-10"
pool: "languages"
relevance_score: 10
lineage: featherweight-java
cites:
  - title: "A Syntactic Approach to Type Soundness"
    url: "https://doi.org/10.1006/inco.1994.1093"
    year: 1994
    arxiv: null
    doi: "10.1006/inco.1994.1093"
  - title: "Types and Programming Languages"
    url: "https://www.cis.upenn.edu/~bcpierce/tapl/"
    year: 2002
    arxiv: null
    doi: null
see:
  - "660-a-syntactic-approach-to-type-soundness"
  - "026-types-and-programming-languages"
  - "1001-from-system-f-to-typed-assembly-language"
---

# Featherweight Java: A Minimal Core Calculus for Java and GJ

## One-sentence takeaway

Igarashi, Pierce, and Wadler strip Java/GJ down to classes, fields, methods, casts, and generics so that nominal OO + type soundness proofs fit on a few pages — the λ-calculus of modern object-oriented languages.

## Why it matters here

When Broadside reasons about ano’s type surface, ECS component “classes,” or any Java-shaped scripting binding, FJ is the smallest honest model: inheritance, override, and parametric polymorphism without the JVM’s noise. Pairs with Wright–Felleisen soundness 660 and TAPL 026; not a remint of TAL 1001 / Ownership 1048.

## Key ideas

- **Minimal grammar.** Class declarations, field projection, method invoke, cast, and new — enough to state progress/preservation.
- **Nominal types.** Names and subclassing, not structural records; matches Java’s actual identity model.
- **GJ / generics.** Featherweight GJ adds parametric polymorphism so type-erasure and cast-insert stories can be proved, not hand-waved.
- **Proof-sized core.** Designed so papers can extend FJ (ownership, multi-methods, concurrency) without rebuilding Java’s semantics each time.

## Caveats

- No assignment, concurrency, null-as-anywhere, or reflection — extensions exist and are easy to over-claim as “FJ.” Do not remint Ownership Types 1048, Alias Types 1603, or TAL 1001.
- FJ is a proof tool, not a teaching Java subset for game scripting; ano should steal the *core calculus discipline*, not the Java nominal packaging.
- POPL 1999 workshop version precedes this TOPLAS article; mint the archival TOPLAS text.

## Links

- Author PDF (Pierce): https://www.cis.upenn.edu/~bcpierce/papers/fj-toplas.pdf
- DOI: https://doi.org/10.1145/503272.503275

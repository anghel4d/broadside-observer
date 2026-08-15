---
title: "Eine Interpretation des intuitionistischen Aussagenkalküls"
authors:
  - "Kurt Gödel"
year: 1933
venue: "Ergebnisse eines mathematischen Kolloquiums"
arxiv: null
doi: null
source: "https://academic.oup.com/book/55022"
topics:
  - intuitionistic-logic
  - godel
  - modal-logic
seed_rank: 504
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "Zur intuitionistischen Arithmetik und Zahlentheorie"
    url: "https://academic.oup.com/book/55022/chapter/422805871"
    year: 1933
    arxiv: null
    doi: "10.1093/oso/9780195147209.003.0064"
  - title: "Über eine bisher noch nicht benützte Erweiterung des finiten Standpunktes"
    url: "https://doi.org/10.1111/j.1746-8361.1958.tb01464.x"
    year: 1958
    arxiv: null
    doi: "10.1111/j.1746-8361.1958.tb01464.x"
  - title: "Investigations into Logical Deduction"
    url: "https://doi.org/10.1007/BF01201353"
    year: 1935
    arxiv: null
    doi: "10.1007/BF01201353"
see:
  - "505-zur-intuitionistischen-arithmetik-und-zahlentheorie"
  - "503-uber-eine-bisher-noch-nicht-benutzte-erweiterung-des-finiten"
  - "632-investigations-into-logical-deduction"
---

# Eine Interpretation des intuitionistischen Aussagenkalküls

## One-sentence takeaway

Gödel embeds intuitionistic propositional logic into the modal system S4 by reading "provable" as a necessity operator.

## Why it matters here

Ano's type theory and GRID COMMAND's standing rules are constructive: absence of a proof is not a proof of absence. This two-page 1933 note is the first precise dictionary between that constructive reading and a classical modal calculus, which is the same dictionary later used for typed effects and proof-relevant commands.

## Key ideas

- Translate intuitionistic connectives by prefixing \(\Box\) (necessity / "it is provable that") in Lewis's S4.
- Intuitionistic implication \(A \to B\) becomes \(\Box(A^* \supset B^*)\); intuitionistic negation becomes \(\Box\neg\).
- The translation is sound and complete: a propositional formula is intuitionistically valid iff its S4 image is classically valid.
- Companion to the 1933 arithmetic paper; together they show constructive logic is a refinement, not a fragment of sloppy classical reasoning.

## Caveats

## Links

- Collected Works I (OUP): https://academic.oup.com/book/55022
- Original: Ergebnisse eines mathematischen Kolloquiums 4 (1933), 39–40

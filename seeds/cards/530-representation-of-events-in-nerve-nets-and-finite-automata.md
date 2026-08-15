---
title: "Representation of Events in Nerve Nets and Finite Automata"
authors:
  - "Stephen C. Kleene"
year: 1956
venue: "In Shannon & McCarthy (eds.), Automata Studies, Princeton"
arxiv: null
doi: null
source: "https://www.rand.org/pubs/research_memoranda/RM704.html"
topics:
  - regular-events
  - finite-automata
  - kleene-star
  - neural-nets
seed_rank: 530
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "A Logical Calculus of the Ideas Immanent in Nervous Activity"
    url: "https://doi.org/10.1007/BF02478259"
    year: 1943
    arxiv: null
    doi: "10.1007/BF02478259"
  - title: "Finite Automata and Their Decision Problems"
    url: "https://doi.org/10.1147/rd.32.0114"
    year: 1959
    arxiv: null
    doi: "10.1147/rd.32.0114"
  - title: "On Certain Formal Properties of Grammars"
    url: "https://doi.org/10.1016/S0019-9958(59)90362-6"
    year: 1959
    arxiv: null
    doi: "10.1016/S0019-9958(59)90362-6"
  - title: "A Symbolic Analysis of Relay and Switching Circuits"
    url: "https://doi.org/10.1109/T-AIEE.1938.5057767"
    year: 1938
    arxiv: null
    doi: "10.1109/T-AIEE.1938.5057767"
see:
  - "565-a-logical-calculus-of-the-ideas-immanent-in-nervous-activity"
  - "619-finite-automata-and-their-decision-problems"
  - "601-on-certain-formal-properties-of-grammars"
  - "552-a-symbolic-analysis-of-relay-and-switching-circuits"
---

# Representation of Events in Nerve Nets and Finite Automata

## One-sentence takeaway

Kleene proves that McCulloch–Pitts nerve nets and finite automata recognize exactly the regular events—the algebra of union, concatenation, and iteration that later becomes regular expressions.

## Why it matters here

Founding theorem of formal languages, and the reason Anoptic lexers, protocol state-machines, and GRID COMMAND trigger patterns can be compiled to finite tables. The Kleene star is the iteration combinator every later parser and regex engine still uses.

## Key ideas

- Starts from McCulloch–Pitts neurons (discrete time, excitatory/inhibitory synapses) and abstracts to finite automata.
- *Definite events* depend on a fixed finite window of input; *regular events* close definite events under \(\lor\), concatenation, and \(E^*F\).
- Representation theorem: every regular event is realized by a nerve net (with a two-step lag) and conversely.
- Written as RAND RM-704 (15 December 1951); the canonical publication is Shannon & McCarthy, *Automata Studies* (Princeton, 1956), pp. 3–42.

## Caveats

## Links

- RAND RM-704: https://www.rand.org/pubs/research_memoranda/RM704.html
- Princeton *Automata Studies*: https://press.princeton.edu/books/paperback/9780691079165/automata-studies

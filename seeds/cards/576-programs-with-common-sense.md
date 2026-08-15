---
title: "Programs with Common Sense"
authors:
  - "John McCarthy"
year: 1959
venue: "In Mechanisation of Thought Processes (Teddington Symposium)"
arxiv: null
doi: null
source: "https://www-formal.stanford.edu/jmc/mcc59.pdf"
topics:
  - ai
  - advice-taker
  - knowledge-representation
  - mccarthy
seed_rank: 576
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Empirical Explorations of the Logic Theory Machine"
    url: "https://doi.org/10.1145/1455567.1455605"
    year: 1957
    arxiv: null
    doi: "10.1145/1455567.1455605"
  - title: "The Inversion of Functions Defined by Turing Machines"
    url: "https://press.princeton.edu/books/paperback/9780691079165/automata-studies"
    year: 1956
    arxiv: null
    doi: null
see:
  - "581-empirical-explorations-of-the-logic-theory-machine"
---

# Programs with Common Sense

## One-sentence takeaway

McCarthy's Advice Taker is to improve by being told declarative sentences, automatically drawing the immediate logical consequences that count as common sense.

## Why it matters here

Broadside agents still split "what is true" from "what to do." This 1959 Teddington paper is the charter for that declarative control surface.

## Key ideas

- A program has common sense if it deduces a sufficiently wide class of immediate consequences of anything it is told and already knows.
- Heuristics live in the language, not only in the interpreter — unlike Logic Theorist, whose search tactics were wired into code.
- The airport example: `at`, `walkable`/`drivable`, `canachult`, and `want(at(I,airport))` yield `do(go(desk,car,walking))`.
- Immediate deduction is cheap and syntax-directed; intelligence is in choosing which premise lists to feed it.
- Designed as a joint project with Minsky (McCarthy later notes that wish was one-sided). Yehoshua Bar-Hillel's discussion attacks the transitivity of `at`.

## Caveats

## Links

- URL: https://www-formal.stanford.edu/jmc/mcc59.pdf

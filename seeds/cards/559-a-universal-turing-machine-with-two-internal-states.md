---
title: "A Universal Turing Machine with Two Internal States"
authors:
  - "Claude E. Shannon"
year: 1956
venue: "Automata Studies (Annals of Mathematics Studies 34)"
arxiv: null
doi: null
source: "https://press.princeton.edu/books/paperback/9780691079165/automata-studies"
topics:
  - turing-machine
  - shannon
  - universality
seed_rank: 559
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "On Computable Numbers, with an Application to the Entscheidungsproblem"
    url: "https://doi.org/10.1112/plms/s2-42.1.230"
    year: 1936
    arxiv: null
    doi: "10.1112/plms/s2-42.1.230"
see:
  - "515-on-computable-numbers-with-an-application-to-the-entscheidun"
---

# A Universal Turing Machine with Two Internal States

## One-sentence takeaway

Shannon constructs a universal Turing machine with only two internal states by shifting complexity into a larger tape alphabet.

## Why it matters here

Universality is a budget, not a mystery: ano runtimes can be tiny if the encoding of "the machine being simulated" is allowed to get fat.

## Key ideas

- Any Turing machine can be recoded so that its finite control has two states and a sufficiently large symbol set, or one symbol and many states.
- The two-state universal machine stores the simulated machine's transition table on the tape and uses the state bit as a carry of control.
- State/symbol tradeoffs are quantitative: shrinking one resource inflates the other.
- The paper sits in Shannon–McCarthy's 1956 *Automata Studies* volume (AMS 34), pages 157–165.
- Minimality here is about description size of the interpreter, the same instinct as later small universal machines.

## Caveats

## Links

- URL: https://press.princeton.edu/books/paperback/9780691079165/automata-studies

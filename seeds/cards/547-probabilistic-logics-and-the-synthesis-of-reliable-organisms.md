---
title: "Probabilistic Logics and the Synthesis of Reliable Organisms from Unreliable Components"
authors:
  - "John von Neumann"
year: 1956
venue: "In Shannon & McCarthy (eds.), Automata Studies"
arxiv: null
doi: null
source: "https://www.dna.caltech.edu/courses/cs191/paperscs191/VonNeumann56.pdf"
topics:
  - fault-tolerance
  - reliability
  - von-neumann
  - automata
seed_rank: 547
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "The General and Logical Theory of Automata"
    url: "https://www.vordenker.de/ggphilosophy/jvn_the-general-and-logical-theory-of-automata.pdf"
    year: 1951
    arxiv: null
    doi: null
  - title: "Reliable circuits using less reliable relays"
    url: "https://doi.org/10.1016/0016-0032(56)90559-2"
    year: 1956
    arxiv: null
    doi: "10.1016/0016-0032(56)90559-2"
  - title: "Error Detecting and Error Correcting Codes"
    url: "https://doi.org/10.1002/j.1538-7305.1950.tb00463.x"
    year: 1950
    arxiv: null
    doi: "10.1002/j.1538-7305.1950.tb00463.x"
  - title: "A Logical Calculus of the Ideas Immanent in Nervous Activity"
    url: "https://doi.org/10.1007/BF02478259"
    year: 1943
    arxiv: null
    doi: "10.1007/BF02478259"
see:
  - "545-the-general-and-logical-theory-of-automata"
  - "560-reliable-circuits-using-less-reliable-relays"
  - "568-error-detecting-and-error-correcting-codes"
  - "565-a-logical-calculus-of-the-ideas-immanent-in-nervous-activity"
---

# Probabilistic Logics and the Synthesis of Reliable Organisms from Unreliable Components

## One-sentence takeaway

Von Neumann shows that majority multiplexing can drive the error probability of a circuit built from noisy gates down exponentially in the redundancy, so reliable computation is a logical construction rather than a materials miracle.

## Why it matters here

Ancestor of fault-tolerant execution in engines and of any Anoptic story that treats lock-free buses, ECC, and redundant job lanes as *logic*. Moore–Shannon (card 560) is the relay-theoretic twin; Hamming is the coding-theoretic one.

## Key ideas

- Each wire is replaced by a bundle; a majority organ restores the intended bit, so independent gate failures become a binomial tail.
- Error probability under composition is analysed so that a fixed per-gate failure rate still yields an arbitrarily reliable automaton at a multiplicative cost in size.
- Lives in Shannon & McCarthy, *Automata Studies* (Princeton, 1956), next to Kleene's regular events.
- Motivated by the unreliability of 1940s–50s components and by the nervous system as an existence proof.

## Caveats

## Links

- Caltech PDF: https://www.dna.caltech.edu/courses/cs191/paperscs191/VonNeumann56.pdf
- Princeton *Automata Studies*: https://press.princeton.edu/books/paperback/9780691079165/automata-studies

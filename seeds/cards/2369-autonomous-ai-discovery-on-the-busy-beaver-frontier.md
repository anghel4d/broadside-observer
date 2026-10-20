---
title: "At the Limits of Computability: Steps Towards Autonomous AI Discovery on the Busy Beaver Frontier"
authors:
  - "Marco Dos Santos"
  - "Vivek Veeriah"
  - "Alex Havrilla"
  - "Andrew Bolt"
  - "Goran Zuzic"
  - "Satinder Singh"
  - "Tom Zahavy"
year: 2026
venue: "arXiv preprint (Google DeepMind)"
arxiv: "2610.22603"
doi: null
source: "https://arxiv.org/abs/2610.22603"
topics:
  - "busy-beaver"
  - "turing-machines"
  - "ai-for-math"
  - "lean"
  - "agents"
seed_rank: 2369
seed_batch: "curiosity-2026-10-21"
reviewed: "2026-10-21"
pool: "agents"
relevance_score: 8
cites:
  - title: "At the Limits of Computability: Steps Towards Autonomous AI Discovery on the Busy Beaver Frontier"
    url: "https://arxiv.org/abs/2610.22603"
    year: 2026
    arxiv: "2610.22603"
    doi: null
  - title: "The Busy Beaver Frontier (Aaronson)"
    url: "https://www.scottaaronson.com/papers/bb.pdf"
    year: 2020
    arxiv: null
    doi: null
  - title: "Busy Beaver Challenge wiki"
    url: "https://wiki.bbchallenge.org/"
    year: 2026
    arxiv: null
    doi: null
see: ["1224-mathematical-discoveries-from-program-search-with-large-langua", "559-a-universal-turing-machine-with-two-internal-states", "1198-more-than-two-thirds-of-the-zeros-of-the-riemann-zeta-function"]
---

# At the Limits of Computability: Steps Towards Autonomous AI Discovery on the Busy Beaver Frontier

## One-sentence takeaway

A Gemini-based agent watches six-state Turing machines run, conjectures compact Collatz-like rules that compress millions of steps, and proves those rules in Lean, finding new exact descriptions for eleven unresolved BB(6) machines that the authors propose calling "Cryptids".

## Why it's lovely

Busy Beaver is the purest open-ended problem in computer science: BB(n) is uncomputable, BB(5) was only settled in 2024 by a community effort, and the BB(6) holdouts include machines whose halting is equivalent to Collatz-style questions nobody can answer. That makes it a good test of whether an AI can do more than solve a posed problem: here the agent has to invent the statement (the acceleration rule) before proving it. The pipeline is a neat closed loop of observe, compress, conjecture and formally verify, the same shape as FunSearch (card 1224) but ending in Lean proofs rather than scored programs. For anyone building agents, it shows a clean way to keep a loose language-model conjecturer honest with a hard checker.

## Key ideas

- **Accelerations.** A machine's blank-tape run is summarized as a small set of rules on tape configurations parameterized by integers, each rule standing for many raw steps.
- **Pipeline.** Pattern recognition over execution traces, automated conjecturing of rules, informal reasoning, then formal proof in Lean that the rules exactly simulate the machine.
- **Results.** Eleven BB(6) machines get new accelerations with proofs ("Full" discoveries); further entries give new accelerations for known machines or formal proofs of rules the bbchallenge community had already conjectured on its wiki and Discord.
- **Cryptids.** Machines whose behaviour has an exact compact description but whose halting remains open, typically because the description is a Collatz-like iteration. The classification is provisional, pending community acceptance.

## Caveats

No halting question is settled; the contribution is compressing and formalizing behaviour, which is a step, not a resolution. Part of the table is rediscovery of rules known to the bbchallenge community, which the paper credits. Compute cost, failure rate and how much human steering went into the pipeline need the full paper to judge.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.22603
- PDF: https://arxiv.org/pdf/2610.22603
- Busy Beaver Challenge wiki: https://wiki.bbchallenge.org/
- Aaronson, The Busy Beaver Frontier: https://www.scottaaronson.com/papers/bb.pdf

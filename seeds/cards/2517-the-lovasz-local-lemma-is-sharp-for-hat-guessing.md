---
title: "The Lovász Local Lemma Is Sharp for the Hat Guessing Number"
authors:
  - "Thomas Delépine"
  - "Matthieu Rosenfeld"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2611.04577"
doi: null
source: "https://arxiv.org/abs/2611.04577"
topics:
  - "hat-guessing"
  - "lovasz-local-lemma"
  - "probabilistic-method"
  - "distributed-coordination"
seed_rank: 2517
seed_batch: "curiosity-2026-11-05"
reviewed: "2026-11-05"
pool: "maths"
relevance_score: 7
cites:
  - title: "The Lovász Local Lemma Is Sharp for the Hat Guessing Number"
    url: "https://arxiv.org/abs/2611.04577"
    year: 2026
    arxiv: "2611.04577"
    doi: null
see: []
---

# The Lovász Local Lemma Is Sharp for the Hat Guessing Number

## One-sentence takeaway

The easy Local Lemma argument says players on a graph of maximum degree \(\Delta\) who each see only their neighbours' hats can never guarantee a correct guess once there are \(e\Delta\) colours, and this paper builds graphs where they still win with \((e-\varepsilon)\Delta\) colours, so the constant \(e\) is exactly right.

## Why it's lovely

The Lovász Local Lemma is usually a blunt black box whose constant nobody expects to be tight, and here a party puzzle about hats shows that \(e\) is the true answer, beating the earlier best of \(\tfrac43\Delta\) and refuting the conjectured ceiling of \(2\Delta\). It is also a crisp statement about coordination without communication: agents who agree a strategy in advance and act on local views alone can be almost as strong as the probabilistic limit allows. For Broadside, it is a clean bound on what a fleet of agents with fixed, pre-agreed policies and only neighbour visibility can guarantee together, and a reminder that the right composition of small winning parts can push right up against a limit that looked loose.

## Key ideas

- **The upper bound in three lines.** Fix any strategy, colour hats uniformly; each player's correct-guess event has probability \(1/q\) and depends only on its neighbourhood, so the symmetric LLL (Shearer's form) avoids all of them once \(q \ge e\Delta\).
- **Uneven hat games.** The construction lets each vertex have its own number of colours (its "hatness"); lowering any hatness keeps a winning game winning.
- **Clique-join.** A new composition generalising the joins of Blažej et al. glues winning games along cliques, preserves winnability, and multiplies the hatness on the interface.
- **Bad clique that vanishes.** Intermediate games carry a small clique of low-hatness vertices; the analysis tracks how its hatness evolves under composition until a final step removes it, leaving uniform hatness close to \(e\Delta\).
- **Where the LLL is tight.** Joins the short list (with Gebauer, Szabó and Tardos on bounded-occurrence k-SAT) of natural problems where a Local Lemma constant is asymptotically optimal.

## Caveats

The result is asymptotic in \(\Delta\) and the graphs are huge, explicit compositions rather than natural families; small-degree values of the hat guessing number remain open. Strategies are deterministic and fixed in advance, so this says nothing direct about learning agents. I read the abstract, the introduction and the definitions of the clique-join (20 pages).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.04577
- PDF: https://arxiv.org/pdf/2611.04577

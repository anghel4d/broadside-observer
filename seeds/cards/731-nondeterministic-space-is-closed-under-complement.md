---
title: Nondeterministic Space is Closed Under Complement
authors:
  - Neil Immerman
year: 1988
venue: SIAM J. Comput.
arxiv: null
doi: 10.1137/0217058
source: "https://doi.org/10.1137/0217058"
topics:
  - complexity
  - immerman
  - nl
seed_rank: 731
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites:
  - title: Relationships Between Nondeterministic and Deterministic Tape Complexities
    url: "https://doi.org/10.1016/S0022-0000(70)80006-X"
    year: 1970
    arxiv: null
    doi: 10.1016/S0022-0000(70)80006-X
see:
  - "730-relationships-between-nondeterministic-and-deterministic-tap"
---

# Nondeterministic Space is Closed Under Complement

## One-sentence takeaway

Inductive counting of reachable configurations shows \(\mathrm{NL} = \mathrm{coNL}\), and more generally that nondeterministic space is closed under complement.

## Why it matters here

The Immerman–Szelepcsényi theorem is the surprise collapse every space-bounded argument has to live with. It also ties complexity to descriptive/finite-model methods Immerman was developing — useful if Broadside ever formalizes “what an NL property of a graph is.”

## Key ideas

- Guess-and-verify is not obviously closed under complement; inductive counting makes the missing certificate constructible.
- Maintain the count of vertices reachable in \(k\) steps and use it to certify that a target is *not* reachable.
- The result is \(\mathrm{NSPACE}(s) = \mathrm{coNSPACE}(s)\) for \(s(n) \ge \log n\); in particular NL = coNL.
- Savitch’s configuration-graph view is the substrate; Szelepcsényi 1988 is the independent proof.
- SIAM J. Comput. 17(5), 1988, pp. 935–938.

## Caveats

## Links

- DOI: [10.1137/0217058](https://doi.org/10.1137/0217058)
- SIAM: https://epubs.siam.org/doi/10.1137/0217058

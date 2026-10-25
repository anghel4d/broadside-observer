---
title: "Eliminating Expensive Chunks by Restricting Expressiveness"
authors:
  - "Milind Tambe"
  - "Paul S. Rosenbloom"
year: 1989
venue: "Proceedings of the Eleventh International Joint Conference on Artificial Intelligence (IJCAI-89), pp. 731-737"
arxiv: null
doi: null
source: "https://www.ijcai.org/Proceedings/89-1/Papers/117.pdf"
topics:
  - production-systems
  - rete
  - match-cost-bounds
  - unique-attributes
seed_rank: 2421
seed_batch: "archive-2026-10-26"
reviewed: "2026-10-26"
pool: "languages"
relevance_score: 8
lineage: production-systems
see:
  - 042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte
  - 1004-treat-a-better-match-algorithm-for-ai-production-systems
  - 1049-production-matching-for-large-learning-systems
cites:
  - title: "Eliminating Expensive Chunks by Restricting Expressiveness"
    url: "https://www.ijcai.org/Proceedings/89-1/Papers/117.pdf"
    year: 1989
    arxiv: null
    doi: null
  - title: "The Problem of Expensive Chunks and its Solution by Restricting Expressiveness"
    url: "https://doi.org/10.1007/BF00117107"
    year: 1990
    arxiv: null
    doi: "10.1007/BF00117107"
---

# Eliminating Expensive Chunks by Restricting Expressiveness

## One-sentence takeaway

Tambe and Rosenbloom show that the rules Soar learns can make Rete-style matching exponentially slow because of attributes that hold open, unstructured sets ("multi-attributes"), and that banning them in favour of "unique-attributes" (at most one value per attribute) bounds every learned rule's match cost to linear in its number of conditions, at the price of moving set iteration out of the matcher and into explicit, controllable search.

## Why it matters here

ano's standing rules (する/なる) are a production system over columnar entity tables, and its relational hops are exactly the cross-condition joins that blow up here. The paper gives a concrete language-design lever rather than a runtime heuristic: if a rule may only follow single-valued links (a foreign key, not a one-to-many set) in its condition, its per-tick match cost is bounded by the length of the rule. ano could treat one-to-many hops in standing-rule conditions as an explicit, visible cost (or require them to go through a set operator with a known size), so that a rule written today cannot silently turn into a combinatorial join when the world grows.

## Key ideas

- **The anomaly.** On Soar/PSM-E (an optimised Rete), chunking cut the number of production actions by a factor of 5 to 14 across eight tasks, yet in four of them (8-Puzzle, N-Queens, Grid, Magic Square) total match time rose; time per action grew by up to 25× (Magic Square) from just a handful of individually expensive chunks.
- **k-search model.** Match is modelled as a search over tokens (partial instantiations) covering complete matchers such as Rete and TREAT; with depth H (conditions) and branching factor F, cost is on the order of F^H tokens, and matching expensive chunks is NP-hard.
- **Where branching comes from.** With Soar's linked-access restriction, the remaining sources of branching are bad condition orderings and multi-attributes (one attribute holding a set, e.g. a point's many `connected-to` neighbours).
- **The restriction.** Bounding footprint size only makes cost polynomial; eliminating multi-attributes makes the branching factor one, so tokens are bounded by the number of conditions and cost is linear. Sets must instead be structured (lists, trees) and iterated by problem-space search, where control knowledge can prune.
- **Evidence.** With unique-attributes all four expensive tasks sped up after learning, by factors between 3 and 9, even when more chunks were needed; time per action stayed close to Soar's ideal constant.
- **Counterpoint.** In the Tree task one multi-attribute chunk transfers to every branch, while unique-attribute chunks stay branch-specific; for a depth-3, branching-2 tree the eight specific chunks cost the same to match as the one general chunk. This is the worst case: a one-to-one trade of generality for cost.

## Caveats

The results are for Soar's chunking and its Rete implementation in 1989; the speedups are on small puzzle tasks, and the claim is a bound on match cost, not on total problem-solving time (the set iteration still has to happen somewhere). The restriction removes expressiveness at the rule level; the paper's answer, a library of set operators run as problem-space operators, is only sketched. Read from the IJCAI-89 scan; the 1990 Machine Learning journal article (cited above) is the extended version and was not read.

## Links

- Paper (IJCAI-89 proceedings PDF): https://www.ijcai.org/Proceedings/89-1/Papers/117.pdf
- Extended journal version (DOI, Machine Learning 1990): https://doi.org/10.1007/BF00117107

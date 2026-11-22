---
title: "Additive cubes are avoidable over {0,1,2,3}, {0,1,4} and {0,2,5}"
authors:
  - "Damien Jamet"
  - "Matthieu Rosenfeld"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2611.17999"
doi: null
source: "https://arxiv.org/abs/2611.17999"
version_reviewed: "v1"
topics:
  - "combinatorics-on-words"
  - "additive-powers"
  - "morphic-words"
  - "avoidability"
  - "finite-automata"
seed_rank: 2687
seed_batch: "curiosity-2026-11-23"
reviewed: "2026-11-23"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Additive cubes are avoidable over {0,1,2,3}, {0,1,4} and {0,2,5}"
    url: "https://arxiv.org/abs/2611.17999"
    year: 2026
    arxiv: "2611.17999"
    doi: null
see: []
---

# Additive cubes are avoidable over {0,1,2,3}, {0,1,4} and {0,2,5}

## One-sentence takeaway

An infinite word over four integers that contains no three consecutive blocks of equal length and equal sum exists, answering a question open since Pirillo and Varricchio in 1994; the witness is a length-3 morphism applied to a known infinite word, and the proof reduces to a finite graph traversal.

## Why it's lovely

Additive powers ask for blocks that agree in sum rather than in letters, so 1+2 and 0+3 count as repeats, and the word must dodge a far bigger family of patterns than an ordinary cube-free word. Previous work (Cassaigne, Currie, Schaeffer, Shallit, 2014) got there only with very long uniform morphisms, which discouraged anyone from searching small ones. This paper does the obvious thing nobody had done: search short and non-uniform morphisms exhaustively. The result is eight tiny length-3 morphisms, and the authors say it is surprising the search had not been done earlier. The bridge to ano is the proof method: a question about an infinite object is turned into a finite automaton-style traversal, the same shape of argument as checking a standing rule over an unbounded stream by exploring a finite state graph. It also pairs naturally with the additive-square-free six-letter word minted on 2026-11-21 (card 2664), which attacks the neighbouring exponent-2 problem.

## Key ideas

- **Setting.** An additive cube is three adjacent factors of equal length and equal sum; a word is additive-cube-free if it has none. Before this, avoidability was known only over larger alphabets (the earlier construction used long uniform morphisms).
- **Method.** Extend the reduction and spectral machinery of Cassaigne–Currie–Schaeffer–Shallit (2014) so that searching for additive cubes in a morphic image reduces to a finite graph traversal.
- **Result.** Eight explicit morphisms of length 3 from {0,1,3,4}* to {0,1,2,3}* whose images on the Cassaigne et al. infinite word contain no additive cube; the traversal tables in the paper list the candidates and their explored graph sizes. Corollaries for {0,1,4} and {0,2,5} are in the title.
- **Search.** An exhaustive computer search found seven further morphisms and longer candidates, all provable by the same method.

## Caveats

I read the abstract, introduction and the disclaimer of v1 (13 Nov 2026, 15 pp.); I did not rerun the search code or the graph traversal. It is not refereed. By the authors' disclaimer, ChatGPT (GPT-6) suggested the first candidate morphism without proof; the authors proved correctness, ran the exhaustive search and take responsibility for all results. The case of three letters (and of additive squares over small alphabets) is not settled here.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.17999
- PDF: https://arxiv.org/pdf/2611.17999

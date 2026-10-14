---
title: "A proof of the rational exponents conjecture"
authors:
  - "David Conlon"
  - "Oliver Janzer"
  - "Tao Jiang"
  - "Jaehoon Kim"
  - "Joonkyung Lee"
  - "Hong Liu"
  - "Sean Longbrake"
  - "Liana Yepremyan"
year: 2026
venue: "arXiv"
arxiv: "2610.18713"
doi: null
source: "https://arxiv.org/abs/2610.18713"
topics:
  - "extremal-graph-theory"
  - "turan-numbers"
  - "erdos-problems"
  - "ai-for-math"
seed_rank: 2295
seed_batch: "curiosity-2026-10-15"
reviewed: "2026-10-15"
pool: "maths"
relevance_score: 9
cites:
  - title: "A proof of the rational exponents conjecture"
    url: "https://arxiv.org/abs/2610.18713"
    year: 2026
    arxiv: "2610.18713"
    doi: null
see: ["1231-alphaevolve-a-coding-agent-for-scientific-and-algorithmic-disc"]
---

# A proof of the rational exponents conjecture

## One-sentence takeaway

Eight extremal combinatorialists write up and situate a proof, claimed by Epoch AI and obtained while benchmarking GPT-6 Astra, of the Erdős–Simonovits conjecture that every rational r in [1, 2] is the Turán exponent of a single graph H, with ex(n, H) = Θ(n^r).

## Why it's lovely

The rational exponents conjecture is one of the signature open questions of bipartite Turán theory, and a decade of the random algebraic method had already proved it for families of graphs and for many ranges of r, but never for one graph and every r. Here the missing piece arrives from a frontier model, and the human experts' response is a model of good practice: a short, readable paper that names the four sources the argument leans on, isolates the key technical theorem, and lists what is still open. For anyone tracking what AI labs' models can now do in research mathematics, this is a clean data point, and it comes with an honest lineage.

## Key ideas

- **The question.** ex(n, H) is the most edges an n-vertex graph can have with no copy of H. For bipartite H it is o(n²), and Erdős and Simonovits asked whether every rational r in [1, 2] is realised as an exponent.
- **Lower bound already known.** Bukh and Conlon's random algebraic method gives ex(n, H^ℓ) = Ω(n^{2−1/ρ(H)}) for large powers of balanced rooted bipartite graphs, and earlier proved the conjecture for finite families of graphs.
- **The obstacle.** Averaging gives many copies of a rooted tree on some fixed root set, but no control over how the copies overlap, so one finds a member of the family rather than the power graph itself.
- **Key theorem.** For connected bipartite H with ex(n, H) = O(n^β), the graph H_k (each edge replaced by a path of length k, plus one vertex joined to each side of the bipartition) has ex(n, H_k) = O(n^{1+1/(k+2−β)}). The k = 1 case is the Erdős–Simonovits result.
- **Percolation.** This theorem stands in for the Kang–Kim–Liu subdivision conjecture. Starting from the single easy exponent 1, it reaches all rationals in [1, 2]. The proof uses a technique of Conlon, Janzer and Lee.
- **Still open.** The Bukh–Conlon conjecture on rooted powers of trees and the Kang–Kim–Liu subdivision conjecture, both stronger than the result proved here.

## Caveats

This is a 14-page presentation preprint (13 Oct 2026), not peer reviewed, of a proof "claimed by Epoch AI". The paper does not describe how the model was prompted or how much human steering there was; its reference for the claim is the Erdős Problems page for problem 571. The authors stress that the advance builds heavily on prior human work. Only the "every rational is realised" direction is settled. The converse, that every ex(n, H) has a rational exponent, is a separate question.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.18713
- PDF: https://arxiv.org/pdf/2610.18713
- Erdős Problems #571 (cited for the Epoch AI claim): https://www.erdosproblems.com/571

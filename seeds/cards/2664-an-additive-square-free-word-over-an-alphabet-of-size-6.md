---
title: "An additive-square-free word over an alphabet of size 6"
authors:
  - "Jeffrey Shallit"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2611.24441"
doi: null
source: "https://arxiv.org/abs/2611.24441"
version_reviewed: "v1"
topics:
  - "combinatorics-on-words"
  - "additive-squares"
  - "abelian-powers"
  - "morphic-words"
  - "lean4"
  - "ai-assisted-mathematics"
seed_rank: 2664
seed_batch: "curiosity-2026-11-21"
reviewed: "2026-11-20"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "An additive-square-free word over an alphabet of size 6"
    url: "https://arxiv.org/abs/2611.24441"
    year: 2026
    arxiv: "2611.24441"
    doi: null
  - title: "Arithmetic progressions in lacunary sets"
    url: "https://doi.org/10.1216/RMJ-1987-17-3-587"
    year: 1987
    arxiv: null
    doi: "10.1216/RMJ-1987-17-3-587"
  - title: "Lean verification of the six-letter construction (author's archive)"
    url: "https://cs.uwaterloo.ca/~shallit/Papers/additive_square_lean-2.zip"
    year: 2026
    arxiv: null
    doi: null
see: []
---

# An additive-square-free word over an alphabet of size 6

## One-sentence takeaway

There is an infinite word over six positive integers in which no two adjacent blocks of the same length have the same sum. This settles a problem posed in various forms by Justin (1972), Brown and Freedman (1987), Pirillo and Varricchio (1994) and Halbeisen and Hungerbühler (2000), and refutes Brown and Freedman's conjecture that every bounded integer sequence contains such an 'additive square'.

## Why it's lovely

Thue showed in 1906 that you can avoid repeating a block (xx) with three letters. Keränen showed in 1992 that you can avoid adjacent blocks that are rearrangements of each other (abelian squares) with four. Additive squares lie between those notions: 1423 is one because 14 and 23 both sum to 5. For fifty years nobody could say whether a finite set of integers is enough to avoid them. The answer here is yes, and the word is enormous. Its letters include U = L³ + 1 with L = 2·85¹¹. The letter 1 first appears at position 1 152 921 504 466 744 130. The proof is a clean two-step argument: a substitution with q = 8²⁰ forces any square's half-length to be divisible by q, and infinite descent finishes it. Then Keränen's 85-uniform morphism (via Peltomäki and Whiteland) carries that word into the final six-letter one. Shallit says the paper was 'almost entirely written by GPT 6.2 Astra', and Astra also produced the Lean check. It comes a few days after the AI-assisted Collatz up-down graph (card 2641), and it is a good example of ano-style thinking: a word is an array, a square is an equality of two prefix-sum differences, and the whole problem is a scan.

## Key ideas

- **Reduction to prefix sums.** With S(n) the sum of the first n letters, an additive square at n with half-length h means S(n+h) − S(n) = S(n+2h) − S(n+h). In other words, three equally spaced points on the prefix-sum walk are collinear.
- **Forcing divisibility.** An auxiliary word w comes from a q-uniform substitution, q = 8²⁰. Its letters' residues modulo M = 2⁴³ encode a digit function F. If x + z ≡ 2y and F(x) + F(z) ≡ 2F(y), then x = y = z, so any square must have half-length divisible by q and would shrink to a smaller square. Descent rules them all out.
- **Encoding into six integers.** Each letter w_i is written into a copy of v = φ¹¹(01), where φ is Keränen's 85-symbol abelian-square-free substitution. The zeros are labelled with three integers, which encodes w_i through how many zeros receive the large and the small labels. The other three symbols get three more integers. Peltomäki–Whiteland's cyclic abelian-power avoidance then turns any square in Y into a square in w.
- **Optimal alphabet still open.** Abelian squares are unavoidable over three letters, so the minimum alphabet for avoiding additive squares is 4, 5 or 6.

## Caveats

I read the whole of v1 (8 pages, 18 Nov 2026); it is not refereed. By the author's statement the text and the Lean proof were mostly produced by GPT 6.2 Astra, and Shallit takes responsibility for correctness. I did not run the Lean archive. The letters are astronomically large, so this is an existence result with an explicit witness, not something you can usefully print. The question for 4 or 5 letters, and for small integers, is open.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.24441
- PDF: https://arxiv.org/pdf/2611.24441
- Lean archive: https://cs.uwaterloo.ca/~shallit/Papers/additive_square_lean-2.zip
- Brown & Freedman (1987): https://doi.org/10.1216/RMJ-1987-17-3-587

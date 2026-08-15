---
title: "Sturmian lattices and Aperiodic tile sets"
authors: ["Shigeki Akiyama", "Tadahisa Hamada", "Katsuki Ito"]
year: 2025
venue: "arXiv"
arxiv: "2506.19362"
doi: null
source: "https://arxiv.org/abs/2506.19362"
topics: [curiosity]
seed_rank: 1024
seed_batch: "curiosity-2026-08-15"
reviewed: "2026-08-15"
pool: "maths-foundations"
relevance_score: 9
lineage: aperiodic-tiling
cites:
  - title: "An aperiodic monotile"
    url: "https://arxiv.org/abs/2303.10798"
    year: 2023
    arxiv: "2303.10798"
    doi: "10.5070/C64163843"
  - title: "Uniformly spread discrete sets"
    url: "https://doi.org/10.1112/jlms/s2-46.1.39"
    year: 1992
    arxiv: null
    doi: "10.1112/jlms/s2-46.1.39"
see:
  - "103-wave-function-collapse"
  - "481-markovjunior"
  - "415-the-algorithmic-beauty-of-plants-l-systems"
  - "045-notation-as-a-tool-of-thought"
---

# Sturmian lattices and Aperiodic tile sets

## One-sentence takeaway

Ammann bars on the hat are a Sturmian lattice — a three-direction grid whose corridor widths are a balanced word — and any quadratic Sturmian slope yields an algorithm that manufactures a finite aperiodic tile set, with aperiodicity reducing to "a quadratic and a line meet in at most two points."

## Why it matters here

Why you might love this: combinatorics-on-words (Morse–Hedlund, Christoffel, continued fractions) becomes a geometric grid, then a tile factory. The Turtle's 4:1 Ammann bars are the golden-ratio special case; the general machine produces infinitely many tile sets whose expansion constants are units of arbitrary real quadratic fields, including a 3-tile example. Bridge: this is the word-level engine under WFC/MarkovJunior/L-systems — substitution as a standing rule, not a texture.

## Key ideas

- Geometric axiom: three families of lines, tiny equilateral triangles of fixed size at every i+j+k=0 crossing; corridor widths take at most three values.
- Classification: 2-colour lattices are mutually balanced words of a common slope; irrational slope ⇒ three Sturmian words (Thm 1); rational slope ⇒ central/Christoffel or skew Markoff forms (Thm 2).
- Super Sturmian lattices / coding map Ψ is the natural extension of continued fractions, giving hierarchical self-similarity when the slope is quadratic.
- Aperiodic tile sets (Thm 4): compare local-pattern frequencies on the lattice, enforce algebraic constraints via bounded-displacement (Laczkovich) correspondences of Delone sets; no unique-composition hierarchy required — some constructed tiling spaces even have positive entropy.
- Tile-count bound: number of prototiles is O(expansion constant); Smith Turtle is recoverable as a special case.

## Caveats


## Links

- arXiv: [2506.19362](https://arxiv.org/abs/2506.19362)

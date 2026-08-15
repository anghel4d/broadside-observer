---
title: "rust-code-analysis: A Rust library to analyze and extract maintainability information from source codes"
authors:
  - "Luca Ardito"
  - "Luca Barbato"
  - "Marco Castelluccio"
  - "Riccardo Coppola"
  - "Calixte Denizet"
  - "Sylvestre Ledru"
  - "Michele Valsesia"
year: 2020
venue: "SoftwareX"
arxiv: null
doi: "10.1016/j.softx.2020.100635"
source: "https://doi.org/10.1016/j.softx.2020.100635"
topics:
  - "static-analysis"
  - "rust"
  - "complexity"
seed_rank: 963
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: unix-foundations
cites:
  - title: "A Complexity Measure"
    url: "https://doi.org/10.1109/TSE.1976.233837"
    year: 1976
    doi: "10.1109/TSE.1976.233837"
see:
  - "967-a-complexity-measure"
---

# rust-code-analysis: A Rust library to analyze and extract maintainability information from source codes

## One-sentence takeaway

Mozilla's rust-code-analysis walks syntax trees to emit eleven maintainability metrics — cyclomatic complexity, SLOC/LLOC/CLOC, Halstead, maintainability index, argument and exit counts — across several languages from one Rust library and CLI.

## Why it matters here

This is the second analyzer in the 2026 uutils comparison (alongside Lizard), and Ledru is a co-author: metrics tooling first, then the coreutils rewrite. Anoptic/GRID can quote complexity and leverage in the same units rather than inventing a dashboard.

## Key ideas

- SoftwareX 12:100635, 2020. Open-access DOI `10.1016/j.softx.2020.100635`. No arXiv record; Politecnico di Torino hosts a copy.
- Tree-sitter-style syntax trees feed language-agnostic metric extractors, so C and Rust (and more) share one implementation.
- Used in Ledru et al. 2026 to cross-check Lizard: both report Rust coreutils far less cyclomatic than GNU C (directionally 3.30 vs 9.40).
- Continuity of people: Ledru moves from this library to shipping uutils as Ubuntu's default coreutils.

## Caveats

## Links

- DOI: https://doi.org/10.1016/j.softx.2020.100635
- ScienceDirect: https://www.sciencedirect.com/science/article/pii/S2352711020303484
- GitHub: https://github.com/mozilla/rust-code-analysis

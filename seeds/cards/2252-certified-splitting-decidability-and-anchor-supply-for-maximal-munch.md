---
title: "Certified Splitting: Decidability and Anchor Supply for Maximal-Munch Tokenization"
authors:
  - "Nicklas Nidhögg"
year: 2026
venue: "arXiv"
arxiv: "2610.08854"
doi: null
source: "https://arxiv.org/abs/2610.08854"
topics:
  - "unicode-text-shaping"
  - "embedded-scripting-dsls"
seed_rank: 2252
seed_batch: "craft-2026-10-09"
reviewed: "2026-10-09"
pool: "languages"
relevance_score: 7
lineage: lexing
cites:
  - title: "Certified Splitting: Decidability and Anchor Supply for Maximal-Munch Tokenization"
    url: "https://arxiv.org/abs/2610.08854"
    year: 2026
    arxiv: "2610.08854"
    doi: null
see:
  - "1479-validating-utf-8-in-less-than-one-instruction-per-byte"
  - "1154-single-pass-parallel-prefix-scan-with-decoupled-look-back"
---

# Certified Splitting: Decidability and Anchor Supply for Maximal-Munch Tokenization

## One-sentence takeaway

From the token set alone you can decide which byte windows certify a token start, and cutting input at those anchors lets maximal-munch lexing run in parallel chunks that reproduce the sequential segmentation exactly, with no speculation or fixup pass.

## Why it matters here

ano's lexer and any incremental editor or text pipeline need to know where re-lexing can safely start after an edit and how to split large inputs across threads. This gives precise theorems for both: an edit at p moves no boundary at or below p - L + 1 for tokens of length at most L, and certified anchors give sound parallel cuts.

## Key ideas

- **Certificate.** A byte window plus an origin such that, wherever the window occurs in a tokenizable input, the token covering its last byte starts at that origin.
- **Decision procedures.** Online with a completeness cutoff for literal vocabularies; offline via an armed-run verifier for arbitrary regular token sets; refusals come with witnesses.
- **Edit locality.** A tokenizable-preserving substitution moves boundaries only between neighbouring certified anchors.
- **Delimiters.** A cut before a delimiter is sound exactly when it is only token-initial; after, exactly when only token-final.
- **Tools.** Anchor-free span bound (3 for the UTF-8 shape) and a differential auditor comparing two token sets, with executable checks for every theorem.

## Caveats

Single-author preprint (2026-10-04), not peer reviewed, and the prose is dense. Applies to maximal-munch over regular token sets; context-sensitive lexing (string interpolation, nested comments) needs extra state not covered here.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.08854
- PDF: https://arxiv.org/pdf/2610.08854

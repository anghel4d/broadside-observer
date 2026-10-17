---
title: "The Right Byte First: How UTF-16 Helps Multilingual Boundary Prediction"
authors:
  - "Hyunsik Kim"
year: 2026
venue: "arXiv"
arxiv: "2610.22071"
doi: null
source: "https://arxiv.org/abs/2610.22071"
topics:
  - "unicode"
  - "text-encoding"
  - "grapheme-clusters"
  - "byte-level-language-models"
  - "tokenization"
seed_rank: 2331
seed_batch: "craft-2026-10-17"
reviewed: "2026-10-17"
pool: "languages"
relevance_score: 7
lineage: unicode-text-shaping
cites:
  - title: "The Right Byte First: How UTF-16 Helps Multilingual Boundary Prediction"
    url: "https://arxiv.org/abs/2610.22071"
    year: 2026
    arxiv: "2610.22071"
    doi: null
  - title: "Universal Byte-Level Encoding: UTF-8/UTF-16 Routing to Reduce Cross-Script Token-Budget Disparities"
    url: "https://arxiv.org/abs/2610.01984"
    year: 2026
    arxiv: "2610.01984"
    doi: null
see:
  - "1479-validating-utf-8-in-less-than-one-instruction-per-byte"
  - "2317-online-tokenization-with-optimal-delay-in-linear-time"
---

# The Right Byte First: How UTF-16 Helps Multilingual Boundary Prediction

## One-sentence takeaway

A three-byte UTF-8 character's first byte carries only its 4 *high* codepoint bits, so a combining mark and the letter starting the next grapheme often look identical one byte ahead; writing those characters as UTF-16 low byte first (the UBE encoding) exposes the 8 *low* bits immediately and drops a small boundary predictor's grapheme-boundary error across 13 Brahmic scripts from 8.76% to 0.06%.

## Why it matters here

It's a sharp, concrete lesson about byte order as an information-ordering choice: which bits arrive first decides what a streaming decision (a learned patcher, a lexer, a text-shaping fast path) can know with one symbol of lookahead. For anything in Anoptic or ano that segments text incrementally (grapheme-aware cursors, line breaking, byte-level model patching), it shows that "UTF-8 everywhere" leaves information late in the byte stream for most non-Latin scripts, and that little-endian placement, not mere shortness, is what fixes it.

## Key ideas

- **The UTF-8 tax.** A three-byte scalar `1110xxxx 10xxxxxx 10xxxxxx` spends 8 of 24 bits on length/continuation markers, and the leading byte holds only the top 4 codepoint bits, which are shared by everything on the same 4096-codepoint stretch.
- **UBE.** The existing Universal Byte-Level Encoding keeps 1- and 2-byte UTF-8 but writes longer scalars as UTF-16LE, so a three-byte character becomes two symbols and the first one carries the low 8 bits. Inside a known 256-codepoint page, that byte alone identifies the character, separating a dependent vowel sign from a new consonant.
- **Controlled comparison.** Small causal predictors trained on matched FineWeb-2 text and tested on FLORES-200 under UTF-8, UBE and a same-length big-endian variant (UBE-BE). At one-symbol lookahead the balanced grapheme-boundary error is 8.76% (UTF-8), 8.62% (UBE-BE) and 0.06% (UBE), so the gain follows byte order, not length.
- **Subword targets.** When the target is a parent tokenizer's cuts, UBE cuts the mean error versus UTF-8 by 72.91% in Korean, 35.29% in Chinese and 67.32–99.55% in eight more scripts, with experiments built on the Bolmo byte-level model recipe.

## Caveats

Small predictors with two or three seeds; compute isn't matched across encodings, and UBE-BE changes the whole encoded history, not just the first lookahead symbol. The one-symbol argument only covers continuations within one Unicode page, so cross-page collisions rule out a universal guarantee. It's a mixed-width, non-self-synchronising encoding (single author, Samsung Research), useful as an internal model or segmenter representation rather than an interchange format.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.22071
- PDF: https://arxiv.org/pdf/2610.22071
- UBE (prior encoding paper): https://arxiv.org/abs/2610.01984

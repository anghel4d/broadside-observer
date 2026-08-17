---
title: "Two-Level Morphology: A General Computational Model for Word-Form Recognition and Production"
authors:
  - "Kimmo Koskenniemi"
year: 1983
venue: "University of Helsinki (Diss.)"
arxiv: null
doi: null
source: "http://www.ling.helsinki.fi/~koskenni/doc/Two-LevelMorphology.pdf"
topics:
  - "two-level-morphology"
  - "finite-state"
  - "computational-morphology"
  - "japanese-nlp"
seed_rank: 1073
seed_batch: "archive-2026-08-18"
reviewed: "2026-08-18"
pool: "languages"
relevance_score: 10
lineage: two-level-morphology
cites:
  - title: "Two-level model for morphological analysis"
    url: "http://ijcai.org/Proceedings/83-2/Papers/020.pdf"
    year: 1983
    arxiv: null
    doi: null
  - title: "Applying Conditional Random Fields to Japanese Morphological Analysis"
    url: "https://aclanthology.org/W04-3230/"
    year: 2004
    arxiv: null
    doi: null
  - title: "Regular Models of Phonological Rule Systems"
    url: "https://doi.org/10.5555/972719.972722"
    year: 1994
    arxiv: null
    doi: null
see:
  - "1074-applying-conditional-random-fields-to-japanese-morphological-analysis"
---

# Two-Level Morphology: A General Computational Model for Word-Form Recognition and Production

## One-sentence takeaway

Morphology is two strings (lexical and surface) related by *parallel* finite-state constraints, not a cascade of rewrite rules — the same description runs both generate and analyze.

## Why it matters here

ano's Japanese surface is computational morphology, not an LLM tokenizer. Koskenniemi 1983 is the paper the whole FST morphology stack (PC-KIMMO, Xerox/Kaplan–Kay, ChaSen's rule side) sits on, and it was missing from the library. Two-level rules compile to FSTs that invert: you can generate inflected Japanese *and* analyze running text with one grammar. That is the right architecture for ano's morphology tables and for GRID COMMAND's constrained NL orders (recognize a verb form, don't sample one).

## Key ideas

- Only two levels exist: lexical (stems + morphs) and surface. No intermediate strata.
- Constraints are parallel, not ordered rewrites — Kaplan–Kay-style cascade compilation is the later cousin, not the model.
- Language-independent engine; Finnish was the first full description (highly inflected, so the claim is load-bearing).
- Same automata run in production and recognition.
- IJCAI 1983 is the short conference cut; the Helsinki dissertation is the complete model.

## Caveats

- Two-level is a *morphophonology* engine; Japanese word-boundary ambiguity is the statistical overlay (Nagata 1994 / Kudo 2004).
- Helsinki PDF / handle; no DOI. Cite the IJCAI paper alongside.
- Finite-state morphology (Beesley & Karttunen) is the later textbook; not reminted.

## Links

- Thesis PDF: http://www.ling.helsinki.fi/~koskenni/doc/Two-LevelMorphology.pdf
- Handle: https://hdl.handle.net/10138/305218
- IJCAI 1983: http://ijcai.org/Proceedings/83-2/Papers/020.pdf

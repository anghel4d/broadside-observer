---
title: "The Mathematics of Sentence Structure"
authors:
  - "Joachim Lambek"
year: 1958
venue: "American Mathematical Monthly"
arxiv: null
doi: "10.1080/00029890.1958.11991991"
source: "https://doi.org/10.1080/00029890.1958.11991991"
topics:
  - linguistics
  - logic
  - categorial-grammar
  - curiosity
seed_rank: 163
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "A Quasiarithmetical Notation for Syntactic Description"
    url: "https://doi.org/10.2307/410136"
    year: 1953
    arxiv: null
    doi: "10.2307/410136"
  - title: "Three Models for the Description of Language"
    url: "https://doi.org/10.1109/TIT.1956.1056813"
    year: 1956
    arxiv: null
    doi: "10.1109/TIT.1956.1056813"
  - title: "Syntactic Structures"
    url: "https://doi.org/10.1515/9783112316009"
    year: 1957
    arxiv: null
    doi: "10.1515/9783112316009"
see:
  - "599-three-models-for-the-description-of-language"
  - "600-syntactic-structures"
---

# The Mathematics of Sentence Structure

## One-sentence takeaway

Lambek introduces a syntactic type calculus in which grammaticality is cancellation of fractional types: a word of type \(n\backslash s\) consumes a noun on the left and yields a sentence.

## Why it matters here

Natural-language orders in GRID COMMAND and Broadside can be typed this way: command verbs are residuals, noun phrases are atomic types, and an ill-typed order is a failed cancellation rather than a regex miss.

## Key ideas

- Basic types such as \(n\) (noun phrase) and \(s\) (sentence) generate compound types with left and right division.
- A string is grammatical when its types multiply and cancel to \(s\), as in \(n \cdot (n\backslash s) \to s\).
- The calculus is associative and has residuation laws corresponding to the two slashes; it is not a phrase-structure rewrite system.
- The same arithmetic assigns types to adverbs, transitive verbs, and modifiers without a separate transformational component.
- The paper is the source of categorial grammar and of the later residuated-category semantics.

## Caveats

## Links

- DOI: [10.1080/00029890.1958.11991991](https://doi.org/10.1080/00029890.1958.11991991)

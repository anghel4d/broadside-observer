---
title: "APL/?"
authors: ["Roger K. W. Hui", "Kenneth E. Iverson", "E. E. McDonnell", "Arthur T. Whitney"]
year: 1990
venue: "APL90 / APL Quote Quad"
arxiv: null
doi: "10.1145/97811.97845"
source: "https://doi.org/10.1145/97811.97845"
topics: [j-language, k-lineage, ascii-apl, array-languages]
seed_rank: 1046
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "languages"
relevance_score: 10
lineage: j-k-apl
cites:
  - title: "A Dictionary of APL"
    url: "https://doi.org/10.1145/36983.36984"
    year: 1987
    arxiv: null
    doi: "10.1145/36983.36984"
  - title: "An Implementation of J"
    url: "https://www.jsoftware.com/ioj/ioj.htm"
    year: 1992
    arxiv: null
    doi: null
  - title: "A Conversation with Arthur Whitney"
    url: "https://queue.acm.org/detail.cfm?id=1531242"
    year: 2009
    arxiv: null
    doi: null
  - title: "Notation as a Tool of Thought"
    url: "https://doi.org/10.1145/358896.358899"
    year: 1980
    arxiv: null
    doi: "10.1145/358896.358899"
see:
  - "122-a-conversation-with-arthur-whitney"
  - "045-notation-as-a-tool-of-thought"
  - "049-a-programming-language"
  - "091-apl-since-1978"
  - "156-operators"
---

# APL/?

## One-sentence takeaway

Dictionary APL, ASCII spelling, no commercial-compatibility tax, and a C interpreter written in Whitney's one-page style — the paper that became J, and the C dialect that became K.

## Why it matters here

ano's lineage is Iverson → J/k → BQN. The shelf had Iverson 1962/1973/1980, *APL since 1978*, Operators, and a 2009 Whitney interview (122), but not the 1990 APL90 paper where Hui, Iverson, McDonnell, and Whitney actually ship the dialect. Whitney's Kiln Farm 1989 one-pager (the Incunabulum in Hui 1992) is why J's C looks like APL; that style is the ancestor of k/q as well.

## Key ideas

- Follow *A Dictionary of APL* (Iverson 1987), drop backward compatibility with APL\\360, run on any ASCII machine, give it away.
- Spelling scheme: ASCII digraphs that keep the one-letter-word economy of the APL alphabet.
- C implementation that leans on the preprocessor so further C is written in an APL style — the same unusual C that Hui recoiled from, then copied.
- Four motivations: teaching mathematics with a free modern APL; ASCII; freedom from commercial conformance; exploring that C style.
- Direct ancestor of J (named by Hui shortly after) and, through Whitney's A / K, of q/kdb.

## Caveats

- Conference paper describing a freeware interpreter, not a formal semantics (that is 926, 25 years later).
- The Incunabulum itself is an appendix of Hui's 1992 book, not this paper; cite, don't remint the book.
- k/q remain unpublished as papers; 122 is still the Whitney primary source on K.

## Links

- DOI: [10.1145/97811.97845](https://doi.org/10.1145/97811.97845)
- ACM: https://dl.acm.org/doi/10.1145/97808.97845
- Incunabulum: https://www.jsoftware.com/ioj/iojATW.htm

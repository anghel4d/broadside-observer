---
title: "Report on a General Problem-Solving Program"
authors:
  - "Allen Newell"
  - "J. C. Shaw"
  - "Herbert A. Simon"
year: 1959
venue: "IFIP Congress / RAND P-1584"
arxiv: null
doi: null
source: "https://iiif.library.cmu.edu/file/Simon_box00008_fld00538_bdl0001_doc0001/Simon_box00008_fld00538_bdl0001_doc0001.pdf"
topics:
  - gps
  - means-ends
  - newell-simon
  - planning
seed_rank: 582
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "The Logic Theory Machine: A Complex Information Processing System"
    url: "https://doi.org/10.1109/TIT.1956.1056797"
    year: 1956
    arxiv: null
    doi: "10.1109/TIT.1956.1056797"
  - title: "Elements of a Theory of Human Problem Solving"
    url: "https://doi.org/10.1037/h0048495"
    year: 1958
    arxiv: null
    doi: "10.1037/h0048495"
see:
  - "580-the-logic-theory-machine-a-complex-information-processing-sy"
  - "583-elements-of-a-theory-of-human-problem-solving"
---

# Report on a General Problem-Solving Program

## One-sentence takeaway

GPS factors means–ends analysis and planning out of the subject matter, applying the same object/operator/difference machinery to logic, trig, and algebra.

## Why it matters here

GOAP and other Broadside planners still reduce "transform object a into b" via differences and operators. This 1959 report is that factorization.

## Key ideas

- A problem is given as objects and operators; differences name what is wrong; operators are indexed by the differences they reduce.
- Goal types: transform a into b; apply operator q to a; reduce difference d. Each type has a method that posts easier subgoals.
- Means–ends analysis matches, reduces the most important difference, then retries the original transform.
- Planning abstracts operators and solves a coarser problem first, then refines.
- February 1959 working-paper draft (RAND / Carnegie) is the CMU-archived source; RAND P-1584 is the catalogued paper.

## Caveats

## Links

- URL: https://iiif.library.cmu.edu/file/Simon_box00008_fld00538_bdl0001_doc0001/Simon_box00008_fld00538_bdl0001_doc0001.pdf

---
title: "A Connectome Test of the Fly Hashing Algorithm"
authors:
  - "Sebastian Senge"
year: 2026
venue: "arXiv"
arxiv: "2610.09114"
doi: null
source: "https://arxiv.org/abs/2610.09114"
topics:
  - "locality-sensitive-hashing"
  - "connectomics"
  - "drosophila"
  - "similarity-search"
seed_rank: 2268
seed_batch: "curiosity-2026-10-13"
reviewed: "2026-10-13"
pool: "maths"
relevance_score: 7
cites:
  - title: "A Connectome Test of the Fly Hashing Algorithm"
    url: "https://arxiv.org/abs/2610.09114"
    year: 2026
    arxiv: "2610.09114"
    doi: null
see: []
---

# A Connectome Test of the Fly Hashing Algorithm

## One-sentence takeaway

Checking the famous fly-olfaction locality-sensitive hash against four real electron-microscopy connectomes shows that the measured wiring gives no consistent retrieval advantage over degree-preserving random wiring, so a fly hash needs no connectome data and its edge over Gaussian projections is per active unit, not per operation.

## Why it's lovely

The 2017 fly hash (random sparse expansion plus winner-take-all) is one of the nicest stories of biology handing computer science an algorithm, and its one untested assumption was that the wiring is random because nobody knew the real wiring. Now four connectomes exist, and the honest answer is that real wiring does not help retrieval and uneven fan-out actually costs some. For anything Broadside builds around sparse similarity codes, it is a crisp reminder that the cheap random version is the one to ship, and that the right cost model (active units versus arithmetic) decides which hash wins.

## Key ideas

- **Replication first.** Reimplementing the 2017 protocol on SIFT, MNIST and odour mixtures reproduces the original pattern: the fly hash beats k Gaussian projections at short hash lengths (3.1x in AP@200 on MNIST at k = 4).
- **Per active cell, not per op.** When Gaussian projections get the same projection arithmetic budget, they retrieve better on every dataset and input dimension tested.
- **Real wiring versus rewiring.** Across MaleCNS, hemibrain, FlyWire and BANC (four animals, seven hemispheres), measured glomerulus pairing gives no consistent advantage over degree-preserving rewiring (median −1.6% retrieval).
- **Fan-out matters in the model.** Equalising glomerular fan-out at a fixed connection count improves retrieval in every hemisphere, yet the uneven fan-out profile is conserved across animals (median Spearman rho 0.86) and only weakly tied to odour tuning.

## Caveats

Short single-author preprint (7 pages, Oct 2026). Tests the fly hash as a retrieval algorithm, not what the fly actually optimises; the hardware hypothesis about active-unit cost is stated but not tested. GloVe is near chance at short codes for every method.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.09114
- PDF: https://arxiv.org/pdf/2610.09114
- Code, data pipeline and results: https://github.com/ssenge/FlyHash-Connectome

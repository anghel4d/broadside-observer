---
title: "Recent Advances in the Spatially Oriented Format for Acoustics  (SOFA, AES69)"
authors: ["M. Mihocic", "P. Majdak", "F. Zotter", "F. Brinkmann", "J. De Muynke", "M. Noisternig"]
year: 2024
venue: "Proceedings of the 10th Convention of the European Acoustics Association Forum Acusticum 2023"
arxiv: null
doi: "10.61782/fa.2023.0729"
source: "https://doi.org/10.61782/fa.2023.0729"
topics: [measurement]
seed_rank: 1757
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 8
lineage: hrtf-spatial-audio
cites:
  - title: "Fundamentals of binaural technology"
    url: "https://doi.org/10.1016/0003-682x(92)90046-u"
    year: 1992
    arxiv: null
    doi: "10.1016/0003-682x(92)90046-u"
see:
  - "1676-the-cipic-hrtf-database"
  - "1750-a-cross-evaluated-database-of-measured-and-simulated-hrtfs-including-3d"
  - "1756-the-sonicom-hrtf-dataset"
  - "1674-fundamentals-of-binaural-technology"
---

# Recent Advances in the Spatially Oriented Format for Acoustics  (SOFA, AES69)

## One-sentence takeaway

SOFA / AES69 updates (Mihocic/Majdak/Zotter/Brinkmann/Noisternig, Forum Acusticum 2023): the file format for HRTF/HRIR/BRIR so tools stop inventing headers.

## Why it matters here

Anoptic asset pipeline should speak SOFA, not a private IR dump. This 2023/24 advances note is the format card (AES69). Pair every HRTF database mint with this.

## Key ideas

- **Spatially Oriented Format for Acoustics.** AES69.
- **Forum Acusticum 2023.** DOI 10.61782/fa.2023.0729; harvest year 2024 on the record.
- **Interchange.** CIPIC/SADIE/HUTUBS/SONICOM loaders.
- **Not an HRTF itself** — metadata + arrays.

## Caveats

Format ≠ quality of the data inside. Implementation drift across libs. Not MagLS. Harvest coverage `hrtf` / measurement.

## Links

- DOI: https://doi.org/10.61782/fa.2023.0729

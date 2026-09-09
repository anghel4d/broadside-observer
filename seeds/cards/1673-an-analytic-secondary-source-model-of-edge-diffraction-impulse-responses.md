---
title: "An analytic secondary source model of edge diffraction impulse responses"
authors: ["U. Peter Svensson", "Roger I. Fred", "John Vanderkooy"]
year: 1999
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.428071"
source: "https://doi.org/10.1121/1.428071"
topics: [diffraction-btm, diffraction, btm, geometric]
seed_rank: 1673
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "graphics"
relevance_score: 10
lineage: geometric-acoustics
cites:
  - title: "Geometrical theory of diffraction"
    url: "https://doi.org/10.1364/JOSA.52.000116"
    year: 1962
    arxiv: null
    doi: "10.1364/JOSA.52.000116"
---

# An analytic secondary source model of edge diffraction impulse responses

## One-sentence takeaway

Closed-form time-domain impulse response for a rigid infinite wedge (Biot–Tolstoy–Medwin / Svensson) — the analytic edge-diffraction kernel geometric auralizers actually convolve.

## Why it matters here

UTD is frequency-domain and high-frequency. BTMS gives an *impulse* you can mix into an RIR, including low-frequency energy around a doorway. Anoptic should treat this as the diffraction primitive, not a full-room solver.

## Key ideas

- **Secondary-source integral.** Edge as a line of secondary sources; analytic IR for a point source and microphone.
- **Valid at all frequencies** for the ideal rigid infinite wedge (unlike UTD's asymptotic).
- **Composable with image sources.** Combine specular images + edge IRs for auralization (Torres 2001, 1701).
- **JASA 1999.** Svensson, Fred, Vanderkooy — canonical BTMS reference.

## Caveats

Infinite rigid wedge: finite thickness, impedance, and higher-order edge–edge coupling need extensions. Offline-friendly; naively summing every edge every frame is not a game budget. Not UTD 1668 and not FDTD 1698.

## Links

- DOI: https://doi.org/10.1121/1.428071

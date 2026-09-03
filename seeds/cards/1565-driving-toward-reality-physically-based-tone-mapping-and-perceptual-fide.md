---
title: "Driving Toward Reality: Physically Based Tone Mapping and Perceptual Fidelity in Gran Turismo 7"
authors:
  - "Kenichiro Yasutomi"
  - "Kentaro Suzuki"
  - "Hajime Uchimura"
year: 2025
venue: "SIGGRAPH 2025 course Physically Based Shading in Theory and Practice"
arxiv: null
doi: null
source: "https://blog.selfshadow.com/publications/s2025-shading-course/"
topics:
  - "tone-mapping"
  - "hdr"
  - "gt7"
  - "ictcp"
seed_rank: 1565
seed_batch: "user-ao-post-2026-09-03"
reviewed: "2026-09-03"
pool: "graphics"
relevance_score: 10
lineage: tone-mapping
cites:
  - title: "Photographic Tone Reproduction for Digital Images"
    url: "https://doi.org/10.1145/566654.566575"
    year: 2002
    arxiv: null
    doi: "10.1145/566654.566575"
  - title: "Practical HDR and Wide Color Techniques in Gran Turismo SPORT"
    url: "http://www.polyphony.co.jp/publications/sa2018/"
    year: 2018
    arxiv: null
    doi: null
  - title: "Perceptually uniform color space for image signals including high dynamic range and wide gamut"
    url: "https://doi.org/10.1364/OE.25.015131"
    year: 2017
    arxiv: null
    doi: "10.1364/OE.25.015131"
  - title: "ITU-T T.302: Colour conversion for digital cinema"
    url: "https://www.itu.int/rec/T-REC-T.302/en"
    year: 2018
    arxiv: null
    doi: null
see:
  - "409-photographic-tone-reproduction-for-digital-images"
---

# Driving Toward Reality: Physically Based Tone Mapping and Perceptual Fidelity in Gran Turismo 7

## One-sentence takeaway

GT7's operator is a color-volume map: per-channel GT Tone Mapping curve V2 (toe / linear / convergent shoulder) blended in RGB with a UCS (ICtCp or Jzazbz) chroma-preserving path, plus SDR paper-white 250 nits and HDR peak adaptation from 250 to 10 000 nits.

## Why it matters here

Anoptic's HDR lighting still has to land on an SDR or scRGB/PQ display. Reinhard 409 is the 2002 global photographic curve. GT7 is a shipping, MIT-licensed C++ operator — Rec.2020 linear in, display-referred out — that ports as a Vulkan fullscreen compute tonemap without standing up ACES. GT Sport 2018 is the per-channel predecessor, cited only.

## Key ideas

- **Curve V2 (from the MIT sample, 2025-08-10).** `initializeCurve(peak, α=0.25, gray=0.538, linearSection=0.444, toeStrength=1.280)` — 'slightly different parameters from GT Sport'. Below `linearSection * peak`: blend a toe `midPoint * (x/midPoint)^toe` with linear x via smoothstep around the grey point. Above: convergent exponential shoulder `kA + kB * exp(x * kC)` that meets the display peak. Frame-buffer 1.0 = 100 cd/m².
- **UCS path.** Convert linear Rec.2020 to ICtCp (ITU-T T.302; default) or Jzazbz (Safdar 2017, PQ exponent scaled 1.7). Run the same curve per RGB channel ('skewed' / hue-twisting). Scale original chroma by `chromaCurve(I / I_peak, fadeStart=0.98, fadeEnd=1.16)` so highlights desaturate smoothly. Convert back.
- **Blend.** `out = sdrCorrection * min((1−0.6)*skewedRGB + 0.6*ucsRGB, peak)`. They tried blending in UCS; RGB looked better. SDR: tone-map as if paper white were 250 nits, then multiply by 1/2.5 so sRGB 1.0 stays 100 nits. HDR: `initializeAsHDR(peakNits)` in [250, 10000].
- **Why not GT Sport.** 2018 GT Tonemap is per-channel only: highlight loci collapse toward C/M/Y. GT7 keeps mid-tone hue and uses the UCS to spread highlight colour through the gamut. Compared in-course to ACES 1.3/2.0, AgX, Khronos PBR Neutral, and GT; GT7 is the one that keeps brake-lamp red and vivid car paint. Game bakes a 3D LUT.
- **Physically based TM as a system.** Slides treat glare, auto-exposure, and auto white balance as spatial/temporal extensions of the same perceptual map (CSF-integrated contrast, exponential AE, Yxy AWB toward D65). Those are *not* in the C++ sample — the sample is the core pixel operator.

## Caveats

- SIGGRAPH course slides + MIT C++ sample, not a TOG paper. No arXiv. Display TVs still apply their own map; authors accept a sharp shoulder clip for that reason.
- **Do not mint** Uchimura & Suzuki, *Practical HDR and Wide Color Techniques in Gran Turismo SPORT*, SIGGRAPH Asia 2018 — per-channel predecessor, bibliography only (http://www.polyphony.co.jp/publications/sa2018/). Not a remint of Reinhard 409 or Hable Uncharted 2.
- Default UCS is ICtCp; Jzazbz is a compile-time switch. Input is linear Rec.2020, not Rec.709 — a 709 pipeline must convert first.

## Links

- Course: https://blog.selfshadow.com/publications/s2025-shading-course/
- Slides PDF: https://blog.selfshadow.com/publications/s2025-shading-course/pdi/s2025_pbs_pdi_slides.pdf
- MIT sample: https://blog.selfshadow.com/publications/s2025-shading-course/pdi/supplemental/gt7_tone_mapping.cpp

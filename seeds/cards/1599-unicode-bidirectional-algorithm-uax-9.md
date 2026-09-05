---
title: "Unicode Bidirectional Algorithm (UAX #9)"
authors:
  - "Unicode Consortium"
year: 2000
venue: "Unicode Standard Annex #9 (living; reviewed Unicode 17.0.0 / Revision 51)"
arxiv: null
doi: null
source: "https://www.unicode.org/reports/tr9/"
topics:
  - unicode
  - text-layout
  - bidirectional-text
  - i18n
seed_rank: 1599
seed_batch: "archive-2026-09-06"
reviewed: "2026-09-06"
pool: "languages"
relevance_score: 9
lineage: text-encoding
cites:
  - title: "Unicode Technical Report #36: Unicode Security Considerations"
    url: "https://www.unicode.org/reports/tr36/"
    year: 2014
    arxiv: null
    doi: null
  - title: "Unicode Technical Standard #55: Unicode Source Code Handling"
    url: "https://www.unicode.org/reports/tr55/"
    year: 2023
    arxiv: null
    doi: null
see:
  - "1479-validating-utf-8-in-less-than-one-instruction-per-byte"
---

# Unicode Bidirectional Algorithm (UAX #9)

## One-sentence takeaway

UAX #9 is the normative algorithm that turns logical-order Unicode into display order for mixed LTR/RTL text via paragraph levels, explicit embeddings/overrides/isolates, weak/neutral resolution, and per-line reordering — without which Arabic/Hebrew UI and ano source labels lie.

## Why it matters here

GRID COMMAND and ano surface strings (soldier orders, Japanese/CL labels, filenames). UTF-8 validation (1479) gets bytes into code points; UBA is the next durable boundary: display order, isolates vs embeddings, and the security traps (RLO spoofing) that UTR #36 / UTS #55 call out for source and URLs. Ship text without UBA and RTL mixed with digits/English is wrong by default.

## Key ideas

- **Logical vs display.** Memory is logical order; UBA assigns embedding levels then reorders for display (rules P/X/W/N/I/L). Paragraphs are independent.
- **Types.** Strong (L/R/AL), weak (EN/ES/ET/AN/…), neutral (B/S/WS/ON), and explicit formatting (LRE/RLE/LRO/RLO/PDF plus isolates LRI/RLI/FSI/PDI). Isolates (Unicode 6.3+) are preferred over embeddings for new text.
- **Depth limit.** max_depth = 125 guaranteed stable — implementable as a fixed stack.
- **Bracket pairs (N0).** Paired brackets resolve together inside an isolating run sequence so parentheses stay coherent under RTL.
- **Higher-level protocols.** HL1–HL6 allow paragraph-level overrides, segment-wise UBA (XML/source/URLs), and extra mirroring — the only conformance escapes.

## Caveats

- Living annex: card year 2000 marks UAX framing / early UBA; body reviewed against Unicode 17.0.0 Revision 51 (2025-08-13). Re-check before citing a frozen revision number in code.
- UBA does not replace shaping (Arabic joining) or line breaking (UAX #14); those compose after levels.
- Markup (HTML/CSS `dir`, `unicode-bidi`) should prefer isolates; cutting plain text must re-insert equivalent formatting characters or ordering is lost.

## Links

- Latest UAX #9: https://www.unicode.org/reports/tr9/
- This reviewed revision (tr9-51): https://www.unicode.org/reports/tr9/tr9-51.html
- UTR #36 (security): https://www.unicode.org/reports/tr36/
- UTS #55 (source code / HL4): https://www.unicode.org/reports/tr55/

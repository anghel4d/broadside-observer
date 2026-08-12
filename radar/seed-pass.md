# Prefill seeding pass (2026-08-13)

Goal: consider ~1000 papers across history; publish compact seed digests + refs for the top ~250 most relevant to Broadside / Anoptic / ano / RTS work.

Method:
1. Wide recall from topic queries, classic citation lists, and venue archives (not only recent arXiv).
2. Cheap score for relevance to project anchors and `radar/topics.yaml`.
3. Keep ~25% as seeds under `seeds/`.
4. Update `radar/seen.json` with stable ids where available.
5. Maintain `seeds/INDEX.md` as the human browsing surface.

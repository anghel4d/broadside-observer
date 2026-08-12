# Radar state

The radar keeps small, reviewable state in Git. It is deliberately separate from fetched source material and derived digests.

## Source cursors

Each poll starts from the `cursor_after` value in the most recent successful log for that source under `radar/runs/`. A cursor is source-specific and may be a timestamp, pagination token, or another high-water mark supplied by the adapter.

- Record `cursor_before`, `polled_at`, and `cursor_after` in every run log.
- Advance the cursor only after every page in the poll has been processed.
- Mark partial or failed polls as unsuccessful; their `cursor_after` values must not become the next starting point.
- On the first run, use a null cursor and rely on the seen index to remove previously ingested papers.

## Seen identifiers

[`seen.json`](seen.json) contains canonical, version-independent arXiv identifiers already ingested by the radar. Normalize identifiers by removing an `arXiv:` prefix, URL, and version suffix such as `v2`.

An identifier in the seen index prevents a paper from being treated as a new candidate. It does not hide revisions: compare the polled version with the digest's `version_reviewed` field and inspect a newer version as a changed item. Add an identifier only when its digest has been committed; do not add cheap-filter rejects.

## Run logs

Write one Markdown file per poll to `radar/runs/`, named with a sortable UTC timestamp such as `2026-08-12T202400Z.md`. Keep logs concise but include:

- source, queries, poll time, status, and cursor before/after;
- candidate counts after polling, deduplication, and filtering;
- accepted identifiers with matched topic and score;
- rejected identifiers with a brief reason;
- fetched source and digest paths; and
- errors or follow-up work.

The checked-in [`.gitkeep`](runs/.gitkeep) preserves the directory until the first run log is published.

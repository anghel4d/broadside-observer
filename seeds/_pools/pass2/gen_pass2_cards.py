#!/usr/bin/env python3
import json, re
from pathlib import Path

TOP = Path("/workspace/broadside/seeds/_pools/pass2/top250.jsonl")
OUT = Path("/workspace/broadside/seeds/cards")
OUT.mkdir(parents=True, exist_ok=True)
INDEX = Path("/workspace/broadside/seeds/INDEX.md")
PASS1 = Path("/workspace/broadside/seeds/_pools/top250.jsonl")
STATS = Path("/workspace/broadside/seeds/_pools/pass2/collect_stats.json")

def slug(i, title):
    s = re.sub(r"[^a-z0-9]+", "-", (title or "").lower()).strip("-")[:60]
    return "%03d-%s" % (i, s or "untitled")

def links(r):
    items = []
    if r.get("arxiv"):
        aid = str(r["arxiv"]).replace("https://arxiv.org/abs/", "").split("v")[0]
        items.append("- arXiv: [%s](https://arxiv.org/abs/%s)" % (aid, aid))
    if r.get("doi"):
        d = str(r["doi"]).replace("https://doi.org/", "")
        items.append("- DOI: [%s](https://doi.org/%s)" % (d, d))
    if r.get("url"):
        items.append("- URL: %s" % r["url"])
    return "\n".join(items) if items else "- (see venue/year; link TBD)"

rows = [json.loads(l) for l in TOP.read_text().splitlines() if l.strip()]
for p in OUT.glob("*.md"):
    m = re.match(r"^(\d+)-", p.name)
    if m and 251 <= int(m.group(1)) <= 500:
        p.unlink()

written = 0
for i, r in enumerate(rows, 251):
    authors = r.get("authors") or []
    if isinstance(authors, str):
        authors = [authors]
    authors_yaml = "\n".join('  - "%s"' % a.replace('"', '\\"') for a in authors if a)
    topics = r.get("topics") or []
    if isinstance(topics, str):
        topics = [topics]
    topics_yaml = "\n".join("  - %s" % t for t in topics) if topics else "  - general"
    why = (r.get("why_anghel") or "").strip() or "Relevant to Broadside / Anoptic / systems craft."
    blurb = (r.get("abstract_or_blurb") or "").strip()
    takeaway = blurb.split(". ")[0].strip()
    if takeaway and not takeaway.endswith("."):
        takeaway += "."
    if not takeaway or len(takeaway) < 40:
        takeaway = why if why.endswith(".") else why + "."
    ideas = [s.strip() for s in re.split(r"(?<=[.!?])\s+", blurb) if len(s.strip()) > 30][:5]
    if not ideas:
        ideas = [why]
    ideas_md = "\n".join("- %s" % x for x in ideas)
    caveats = "- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims."
    if not r.get("arxiv") and not r.get("doi"):
        caveats += "\n- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation."
    title = (r.get("title") or "").replace('"', '\\"')
    venue = (r.get("venue") or "").replace('"', '\\"')
    pool = (r.get("pool") or "").split("+")[0]
    year = r.get("year") if r.get("year") is not None else "null"
    body = "---\n"
    body += 'title: "%s"\n' % title
    body += "authors:\n%s\n" % (authors_yaml or "  - Unknown")
    body += "year: %s\n" % year
    body += 'venue: "%s"\n' % venue
    body += "arxiv: %s\n" % json.dumps(r.get("arxiv"))
    body += "doi: %s\n" % json.dumps(r.get("doi"))
    body += "source: %s\n" % json.dumps(r.get("url"))
    body += "topics:\n%s\n" % topics_yaml
    body += "seed_rank: %d\n" % i
    body += 'seed_batch: "systems-prefill-2026-08-13"\n'
    body += 'reviewed: "2026-08-13"\n'
    body += 'pool: "%s"\n' % pool
    body += "relevance_score: %s\n" % r.get("relevance_score")
    body += "---\n\n"
    body += "# %s\n\n" % r.get("title")
    body += "## One-sentence takeaway\n\n%s\n\n" % takeaway
    body += "## Why it matters here\n\n%s\n\n" % why
    body += "## Key ideas\n\n%s\n\n" % ideas_md
    body += "## Caveats\n\n%s\n\n" % caveats
    body += "## Links\n\n%s\n" % links(r)
    (OUT / (slug(i, r.get("title")) + ".md")).write_text(body)
    written += 1
print("wrote", written, "pass2 cards")

pass1 = [json.loads(l) for l in PASS1.read_text().splitlines() if l.strip()] if PASS1.exists() else []
stats = json.loads(STATS.read_text())

def table(rs, offset=1):
    lines = ["| # | Score | Year | Title | Pool |", "|---|------:|-----:|-------|------|"]
    for i, r in enumerate(rs, offset):
        title = (r.get("title") or "").replace("|", "\\|")
        year = r.get("year") if r.get("year") is not None else ""
        lines.append("| %d | %s | %s | %s | %s |" % (i, r.get("relevance_score"), year, title, r.get("pool")))
    return "\n".join(lines)

idx = []
idx.append("# Seed index\n")
idx.append("## Prefill (pass1)\n")
idx.append("Total merged candidates considered: **965**.\n")
idx.append(table(pass1, 1) + "\n")
idx.append("## Systems prefill (pass2)\n")
idx.append("Non-LLM / classical systems haul for Anoptic, GRID COMMAND, and simulation/HPC craft.\n")
idx.append("- Merged unique candidates: **%s**" % stats.get("merged"))
idx.append("- Kept top seeds: **%s** (cards 251–500)" % stats.get("top250"))
idx.append("- seed_batch: `systems-prefill-2026-08-13`")
idx.append("- Pool breakdown: `%s`" % stats.get("pools"))
idx.append("- Memory-allocation seeds in top250: **%s**" % stats.get("allocators"))
idx.append("- ECS seeds in top250: **%s**\n" % stats.get("ecs"))
idx.append(table(rows, 251) + "\n")
INDEX.write_text("\n".join(idx))
print("updated INDEX.md")

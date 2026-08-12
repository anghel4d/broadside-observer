#!/usr/bin/env python3
import json, re
from pathlib import Path

TOP = Path('/workspace/broadside/seeds/_pools/top250.jsonl')
OUT = Path('/workspace/broadside/seeds/cards')
OUT.mkdir(parents=True, exist_ok=True)

def slug(i, title):
    s = re.sub(r'[^a-z0-9]+', '-', (title or '').lower()).strip('-')[:60]
    return f"{i:03d}-{s or 'untitled'}"

def links(r):
    items = []
    if r.get('arxiv'):
        aid = str(r['arxiv']).replace('https://arxiv.org/abs/','').split('v')[0]
        items.append(f"- arXiv: [{aid}](https://arxiv.org/abs/{aid})")
    if r.get('doi'):
        d = str(r['doi']).replace('https://doi.org/','')
        items.append(f"- DOI: [{d}](https://doi.org/{d})")
    if r.get('url'):
        items.append(f"- URL: {r['url']}")
    return '\n'.join(items) if items else '- (see venue/year; link TBD)'

rows = [json.loads(l) for l in TOP.read_text().splitlines() if l.strip()]
for i, r in enumerate(rows, 1):
    authors = r.get('authors') or []
    if isinstance(authors, str):
        authors = [authors]
    authors_yaml = '\n'.join(f'  - "{a.replace("\"", "\\\"")}"' for a in authors if a)
    topics = r.get('topics') or []
    if isinstance(topics, str):
        topics = [topics]
    topics_yaml = '\n'.join(f'  - {t}' for t in topics) if topics else '  - general'
    why = (r.get('why_anghel') or '').strip() or 'Relevant to Broadside / Anoptic / ano standing interests.'
    blurb = (r.get('abstract_or_blurb') or '').strip()
    takeaway = blurb.split('. ')[0].strip()
    if takeaway and not takeaway.endswith('.'):
        takeaway += '.'
    if not takeaway or len(takeaway) < 40:
        takeaway = why if why.endswith('.') else why + '.'
    # key ideas from blurb sentences
    ideas = [s.strip() for s in re.split(r'(?<=[.!?])\s+', blurb) if len(s.strip()) > 30][:5]
    if not ideas:
        ideas = [why]
    ideas_md = '\n'.join(f'- {x}' for x in ideas)
    caveats = '- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.'
    if not r.get('arxiv') and not r.get('doi'):
        caveats += '\n- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.'
    body = f'''---
title: "{(r.get('title') or '').replace('"', '\\"')}"
authors:
{authors_yaml or '  - Unknown'}
year: {r.get('year') if r.get('year') is not None else 'null'}
venue: "{(r.get('venue') or '').replace('"', '\\"')}"
arxiv: {json.dumps(r.get('arxiv'))}
doi: {json.dumps(r.get('doi'))}
source: {json.dumps(r.get('url'))}
topics:
{topics_yaml}
seed_rank: {i}
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "{(r.get('pool') or '').split('+')[0]}"
relevance_score: {r.get('relevance_score')}
---

# {r.get('title')}

## One-sentence takeaway

{takeaway}

## Why it matters here

{why}

## Key ideas

{ideas_md}

## Caveats

{caveats}

## Links

{links(r)}
'''
    (OUT / f"{slug(i, r.get('title'))}.md").write_text(body)

print('wrote', len(list(OUT.glob('*.md'))), 'cards to', OUT)

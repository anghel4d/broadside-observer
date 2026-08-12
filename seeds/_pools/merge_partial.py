#!/usr/bin/env python3
import json, re, hashlib
from pathlib import Path

ROOT = Path('/workspace/broadside/seeds')
POOLS = ROOT / '_pools'
SCRATCH = ROOT / '_scratch'
OUT = POOLS / 'merged_partial.jsonl'

def norm_title(t):
    t = (t or '').lower()
    t = re.sub(r'[^a-z0-9]+', ' ', t)
    return re.sub(r'\s+', ' ', t).strip()

def key(row):
    arx = row.get('arxiv') or ''
    if isinstance(arx, str) and arx:
        arx = arx.replace('arXiv:', '').split('v')[0].strip()
        if re.match(r'^\d{4}\.\d{4,5}$', arx):
            return 'arxiv:' + arx
    doi = (row.get('doi') or '').lower().strip()
    if doi:
        return 'doi:' + doi
    return 'title:' + norm_title(row.get('title'))

def as_row(obj, source_pool):
    if not isinstance(obj, dict):
        return None
    title = obj.get('title') or obj.get('display_name')
    if not title:
        return None
    authors = obj.get('authors') or []
    if authors and isinstance(authors[0], dict):
        authors = [a.get('name') or a.get('display_name') or '' for a in authors]
    year = obj.get('year') or obj.get('publication_year')
    try:
        year = int(year) if year is not None else None
    except Exception:
        year = None
    arxiv = obj.get('arxiv')
    if not arxiv:
        # openalex-style ids
        for loc in obj.get('locations') or []:
            pass
        ids = obj.get('ids') or {}
        if isinstance(ids, dict) and ids.get('arxiv'):
            arxiv = str(ids['arxiv']).split('/')[-1]
    url = obj.get('url') or obj.get('id')
    score = obj.get('relevance_score')
    if score is None:
        score = 5
    return {
        'title': title,
        'authors': authors if isinstance(authors, list) else [str(authors)],
        'year': year,
        'venue': obj.get('venue') or obj.get('primary_location', {}).get('source', {}).get('display_name') if isinstance(obj.get('primary_location'), dict) else obj.get('venue'),
        'arxiv': arxiv,
        'doi': obj.get('doi'),
        'url': url,
        'topics': obj.get('topics') or [],
        'relevance_score': int(score) if str(score).isdigit() or isinstance(score, int) else 5,
        'why_anghel': obj.get('why_anghel') or '',
        'abstract_or_blurb': (obj.get('abstract_or_blurb') or obj.get('abstract') or '')[:800],
        'pool': source_pool,
    }

seen = {}
order = []

def add(row, pool):
    r = as_row(row, pool)
    if not r:
        return
    k = key(r)
    if not k or k == 'title:':
        return
    prev = seen.get(k)
    if prev is None:
        seen[k] = r
        order.append(k)
    else:
        # keep higher score / richer why
        if r['relevance_score'] > prev['relevance_score'] or (r['why_anghel'] and not prev['why_anghel']):
            r['pool'] = prev.get('pool') + '+' + pool if prev.get('pool') else pool
            seen[k] = r

for name in ['agents.jsonl', 'language.jsonl']:
    path = POOLS / name
    if path.exists():
        for line in path.read_text().splitlines():
            if line.strip():
                add(json.loads(line), name.replace('.jsonl',''))

# staging archive
st = POOLS / '_staging.json'
if st.exists():
    data = json.loads(st.read_text())
    if isinstance(data, list):
        for obj in data:
            add(obj, 'archive_staging')

# curated scratch
cur = SCRATCH / 'curated.json'
if cur.exists():
    data = json.loads(cur.read_text())
    if isinstance(data, list):
        for obj in data:
            add(obj, 'curated_scratch')

rows = [seen[k] for k in order]
rows.sort(key=lambda r: (-r['relevance_score'], -(r['year'] or 0), r['title']))
with OUT.open('w') as f:
    for r in rows:
        f.write(json.dumps(r, ensure_ascii=False) + '\n')

print('merged', len(rows), '->', OUT)
print('score>=8', sum(1 for r in rows if r['relevance_score'] >= 8))
print('score>=9', sum(1 for r in rows if r['relevance_score'] >= 9))
for i,r in enumerate(rows[:15], 1):
    print(f"{i}. [{r['relevance_score']}] {r['year']} {r['title'][:70]}")

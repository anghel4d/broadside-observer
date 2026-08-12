#!/usr/bin/env python3
import json, re
from pathlib import Path
POOLS = Path('/workspace/broadside/seeds/_pools')
SCRATCH = Path('/workspace/broadside/seeds/_scratch')
OUT = POOLS / 'merged.jsonl'

def norm_title(t):
    t = (t or '').lower()
    t = re.sub(r'[^a-z0-9]+', ' ', t)
    return re.sub(r'\s+', ' ', t).strip()

def key(row):
    arx = row.get('arxiv') or ''
    if isinstance(arx, str) and arx:
        arx = arx.replace('https://arxiv.org/abs/','').replace('arXiv:','').split('v')[0].strip()
        if re.match(r'^\d{4}\.\d{4,5}$', arx):
            return 'arxiv:' + arx
    doi = (row.get('doi') or '')
    if isinstance(doi, str) and doi:
        doi = doi.replace('https://doi.org/','').lower().strip()
        if doi:
            return 'doi:' + doi
    return 'title:' + norm_title(row.get('title'))

def as_row(obj, pool):
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
    score = obj.get('relevance_score', 5)
    try:
        score = int(score)
    except Exception:
        score = 5
    return {
        'title': title,
        'authors': authors if isinstance(authors, list) else [str(authors)],
        'year': year,
        'venue': obj.get('venue'),
        'arxiv': obj.get('arxiv'),
        'doi': obj.get('doi'),
        'url': obj.get('url'),
        'topics': obj.get('topics') or [],
        'relevance_score': score,
        'why_anghel': obj.get('why_anghel') or '',
        'abstract_or_blurb': (obj.get('abstract_or_blurb') or obj.get('abstract') or '')[:800],
        'pool': pool,
    }

seen, order = {}, []

def add(obj, pool):
    r = as_row(obj, pool)
    if not r: return
    k = key(r)
    if not k or k == 'title:': return
    prev = seen.get(k)
    if prev is None:
        seen[k] = r; order.append(k)
    else:
        if r['relevance_score'] > prev['relevance_score'] or (len(r['why_anghel']) > len(prev['why_anghel'])):
            r['pool'] = (prev.get('pool') or '') + '+' + pool
            seen[k] = r

for name in ['agents.jsonl','language.jsonl','engine.jsonl','gameai.jsonl','archive_ct.jsonl']:
    p = POOLS / name
    if p.exists():
        for line in p.read_text().splitlines():
            if line.strip():
                add(json.loads(line), name.replace('.jsonl',''))

for name in ['curated.json']:
    p = SCRATCH / name
    if p.exists():
        data = json.loads(p.read_text())
        if isinstance(data, list):
            for obj in data:
                add(obj, 'scratch_'+name)

# hand-topup classics often missing
TOPUP = [
  {"title":"Communicating Sequential Processes","authors":["C. A. R. Hoare"],"year":1978,"venue":"CACM","doi":"10.1145/359576.359585","url":"https://doi.org/10.1145/359576.359585","topics":["concurrency","archive"],"relevance_score":10,"why_anghel":"Foundational concurrent process algebra; informs deterministic multi-system engine design.","abstract_or_blurb":"CSP introduces synchronized communication as the structuring principle for concurrent programs."},
  {"title":"A Calculus of Communicating Systems","authors":["Robin Milner"],"year":1980,"venue":"LNCS","url":"https://link.springer.com/book/10.1007/3-540-10235-3","topics":["concurrency","archive"],"relevance_score":10,"why_anghel":"CCS/process calculus lineage for concurrent agents and compositional systems.","abstract_or_blurb":"Milner's CCS develops an algebra of concurrent processes with observational equivalence."},
  {"title":"The Definition of Standard ML (Revised)","authors":["Robin Milner","Mads Tofte","Robert Harper","David MacQueen"],"year":1997,"venue":"MIT Press","url":"https://mitpress.mit.edu/9780262631815/the-definition-of-standard-ml/","topics":["typed-programming","plt"],"relevance_score":9,"why_anghel":"Definitional style for typed languages; relevant to ano's precise semantics.","abstract_or_blurb":"The formal definition of Standard ML."},
  {"title":"Types and Programming Languages","authors":["Benjamin C. Pierce"],"year":2002,"venue":"MIT Press","url":"https://www.cis.upenn.edu/~bcpierce/tapl/","topics":["typed-programming","plt"],"relevance_score":10,"why_anghel":"Canonical typed PL reference already cited in Anoptic design notes.","abstract_or_blurb":"Comprehensive introduction to type systems for programming languages."},
  {"title":"Syntactic Control of Interference","authors":["John C. Reynolds"],"year":1978,"venue":"POPL","doi":"10.1145/512760.512766","url":"https://doi.org/10.1145/512760.512766","topics":["plt","capabilities"],"relevance_score":9,"why_anghel":"Interference control foreshadows capability and separation ideas for safe parallel ECS mutation.","abstract_or_blurb":"Reynolds studies syntactic restrictions that limit interference between program phrases."},
  {"title":"Separation Logic: A Logic for Shared Mutable Data Structures","authors":["John C. Reynolds"],"year":2002,"venue":"LICS","doi":"10.1109/LICS.2002.1029817","url":"https://doi.org/10.1109/LICS.2002.1029817","topics":["plt","memory"],"relevance_score":9,"why_anghel":"Reasoning about heap mutation; conceptual cousin to arena/ownership discipline.","abstract_or_blurb":"Separation logic extends Hoare logic with a separating conjunction for heap reasoning."},
  {"title":"Simple Generational Garbage Collection and Fast Allocation","authors":["Andrew W. Appel"],"year":1989,"venue":"SPE","doi":"10.1002/spe.4380190206","url":"https://doi.org/10.1002/spe.4380190206","topics":["memory","engine"],"relevance_score":8,"why_anghel":"Allocation/collection classics contrast with Anoptic's region/arena choice.","abstract_or_blurb":"Shows that generational GC and bump allocation can be both simple and fast."},
]
for obj in TOPUP:
    add(obj, 'hand_topup')

rows = [seen[k] for k in order]
rows.sort(key=lambda r: (-r['relevance_score'], -(r['year'] or 0), r['title']))
with OUT.open('w') as f:
    for r in rows:
        f.write(json.dumps(r, ensure_ascii=False)+'\n')
print('merged', len(rows))
print('>=9', sum(1 for r in rows if r['relevance_score']>=9))
print('>=8', sum(1 for r in rows if r['relevance_score']>=8))
print('>=7', sum(1 for r in rows if r['relevance_score']>=7))
# tentative top 250 cutoff score
top250 = rows[:250]
print('top250 min score', top250[-1]['relevance_score'], 'year', top250[-1]['year'])
from collections import Counter
c=Counter(r['pool'].split('+')[0] for r in top250)
print('top250 pool mix', dict(c))

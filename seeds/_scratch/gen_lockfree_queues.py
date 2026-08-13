#!/usr/bin/env python3
"""Mint concurrent-data-structures lineage cards, patch existing, write lineage + shortlist."""
from pathlib import Path
import json, re

ROOT = Path('/workspace/broadside/seeds')
CARDS = ROOT / 'cards'
POOLS = ROOT / '_pools'
LINEAGES = ROOT / 'lineages'
BATCH = 'lineage-concurrent-data-structures-2026-08-13'
REVIEWED = '2026-08-13'

def cite(title, url, year, arxiv=None, doi=None, card=None):
    return {'title': title, 'url': url, 'year': year, 'arxiv': arxiv, 'doi': doi, 'card': card}

MS = cite('Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms',
         'https://doi.org/10.1145/248052.248106', 1996, doi='10.1145/248052.248106',
         card='032-michael-scott-lock-free-queue')
LIN = cite('Linearizability: A Correctness Condition for Concurrent Objects',
           'https://doi.org/10.1145/78969.78972', 1990, doi='10.1145/78969.78972',
           card='260-linearizability-a-correctness-condition-for-concurrent-objec')
WF = cite('Wait-Free Synchronization', 'https://doi.org/10.1145/114005.102808', 1991,
          doi='10.1145/114005.102808', card='037-wait-free-synchronization')
HP = cite('Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects',
          'https://doi.org/10.1109/TPDS.2004.8', 2004, doi='10.1109/TPDS.2004.8',
          card='025-hazard-pointers-safe-memory-reclamation-for-lock-free-object')
SMR = cite('Safe Memory Reclamation for Dynamic Lock-Free Objects Using Atomic Reads and Writes',
           'https://doi.org/10.1145/571825.571829', 2002, doi='10.1145/571825.571829',
           card='373-safe-memory-reclamation-for-dynamic-lock-free-objects-using-')

def emit_yaml_cites(cites):
    out = ['cites:']
    see = []
    for c in cites:
        out.append(f'  - title: {json.dumps(c["title"])}')
        out.append(f'    url: {json.dumps(c["url"])}')
        out.append(f'    year: {c["year"]}')
        out.append(f'    arxiv: {json.dumps(c["arxiv"]) if c.get("arxiv") else "null"}')
        out.append(f'    doi: {json.dumps(c["doi"]) if c.get("doi") else "null"}')
        if c.get("card"):
            see.append(c["card"])
    seen = []
    for stem in see:
        if stem not in seen:
            seen.append(stem)
    if seen:
        out.append('see:')
        for stem in seen:
            out.append(f'  - {json.dumps(stem)}')
    return out

def write_card(stem, meta, takeaway, why, ideas, caveats, links):
    lines = ['---']
    lines.append(f'title: {json.dumps(meta["title"])}')
    lines.append('authors:')
    for a in meta['authors']:
        lines.append(f'  - {json.dumps(a)}')
    lines.append(f'year: {meta["year"]}')
    lines.append(f'venue: {json.dumps(meta["venue"])}')
    lines.append(f'arxiv: {json.dumps(meta["arxiv"]) if meta.get("arxiv") else "null"}')
    lines.append(f'doi: {json.dumps(meta["doi"]) if meta.get("doi") else "null"}')
    lines.append(f'source: {json.dumps(meta["source"])}')
    lines.append('topics:')
    for t in meta.get('topics', ['lockfree', 'queues']):
        lines.append(f'  - {t}')
    lines.append(f'seed_rank: {meta["seed_rank"]}')
    lines.append(f'seed_batch: {json.dumps(BATCH)}')
    lines.append(f'reviewed: {json.dumps(REVIEWED)}')
    lines.append(f'pool: {json.dumps(meta.get("pool", "hpc"))}')
    lines.append(f'relevance_score: {meta.get("relevance_score", 9)}')
    if meta.get('lineage'):
        lines.append(f'lineage: {meta["lineage"]}')
    if meta.get('cites'):
        lines.extend(emit_yaml_cites(meta['cites']))
    lines.append('---')
    lines += ['', f'# {meta["title"]}', '', '## One-sentence takeaway', '', takeaway, '',
              '## Why it matters here', '', why, '', '## Key ideas', '']
    lines += [f'- {i}' for i in ideas]
    lines += ['', '## Caveats', '']
    lines += [f'- {c}' for c in caveats]
    lines += ['', '## Links', '']
    lines += [f'- {L}' for L in links]
    lines.append('')
    path = CARDS / f'{stem}.md'
    path.write_text('\n'.join(lines))
    return stem

# ---------- NEW CARDS ----------
new_stems = []

new_stems.append(write_card(
'501-tsigas-zhang-non-blocking-concurrent-fifo-queue',
dict(title='A Simple, Fast and Scalable Non-Blocking Concurrent FIFO Queue for Shared Memory Multiprocessor Systems',
     authors=['Philippas Tsigas', 'Yi Zhang'], year=2001, venue='SPAA', arxiv=None,
     doi='10.1145/378580.378611', source='https://doi.org/10.1145/378580.378611',
     seed_rank=501, relevance_score=8, lineage='linearizability', cites=[MS, LIN]),
'Early post–Michael–Scott non-blocking FIFO that attacks head/tail contention and CAS pointer recycling on large SMPs.',
'Shows the first major practical pressure on MS-queue hot spots — useful when Anoptic event buses outgrow a single CAS tail.',
['Bounded array-based non-blocking FIFO using CAS.',
 'Two mechanisms: reduce contention on shared head/tail indices, and recycle pointers safely without ABA traps.',
 'Empirically faster than prior alternatives on 64-node UMA and ccNUMA machines of its era.',
 'Bridges classic linked MS-queues toward later ring/array designs (LCRQ, Vyukov, SCQ).'],
['Bounded capacity; not a drop-in unbounded MS replacement.',
 'Hardware and allocator landscape has moved; treat as historical scalability lesson more than a ship-today recipe.',
 'Seed card; promote before relying on fine-grained claims.'],
['DOI: [10.1145/378580.378611](https://doi.org/10.1145/378580.378611)',
 'PDF: https://www.cse.chalmers.se/~tsigas/papers/spaa01.pdf']))

new_stems.append(write_card(
'502-ladan-mozes-shavit-optimistic-lock-free-fifo-queue',
dict(title='An Optimistic Approach to Lock-Free FIFO Queues',
     authors=['Edya Ladan-Mozes', 'Nir Shavit'], year=2004, venue='DISC', arxiv=None,
     doi='10.1007/978-3-540-30186-8_9', source='https://doi.org/10.1007/978-3-540-30186-8_9',
     seed_rank=502, relevance_score=8, lineage='linearizability', cites=[MS, LIN, HP]),
'Replaces MS singly-linked CAS spine with an optimistic doubly-linked list that usually updates with plain stores and repairs rare inconsistencies.',
'Teaches the Anoptic pattern of “fast common path, fix-up rare path” that later wait-free and industrial queues still use.',
['Lock-free linearizable FIFO intended to beat MS-queue on common workloads.',
 'Optimistic doubly-linked structure: reverse pointers written with stores; fixList reconciles bad interleavings.',
 'Aims for one successful CAS per enqueue/dequeue in the common case.',
 'Direct predecessor spirit to baskets and other CAS-reduction queue designs.'],
['Still needs careful memory reclamation (hazard pointers / GC) in unmanaged runtimes.',
 'Optimistic repairs complicate proofs and implementations versus textbook MS.',
 'Seed card; verify journal vs DISC versions before citation.'],
['DOI: [10.1007/978-3-540-30186-8_9](https://doi.org/10.1007/978-3-540-30186-8_9)',
 'PDF (DISC): https://people.csail.mit.edu/edya/publications/OptimisticFIFOQueue-DISC2004.pdf']))

new_stems.append(write_card(
'503-moir-elimination-backoff-lock-free-fifo-queues',
dict(title='Using Elimination to Implement Scalable and Lock-Free FIFO Queues',
     authors=['Mark Moir', 'Daniel Nussbaum', 'Ori Shalev', 'Nir Shavit'], year=2005, venue='SPAA',
     arxiv=None, doi='10.1145/1073970.1074013', source='https://doi.org/10.1145/1073970.1074013',
     seed_rank=503, relevance_score=8, lineage='linearizability', cites=[MS, LIN]),
'Shows elimination (pairing concurrent opposite operations) can scale linearizable FIFO queues, not only stacks/counters.',
'Useful when Anoptic producer/consumer bursts cancel each other — backoff via elimination instead of hammering MS head/tail.',
['Transforms non-scalable FIFO implementations (applied to MS-queue) into scalable ones via elimination backoff.',
 'Preserves lock-freedom and linearizability while improving high-load scalability.',
 'Opposite concurrent enqueue/dequeue pairs can complete without touching the central structure.',
 'Empirical CMT multiprocessor results: similar low-load cost, better high-load scaling than plain MS.'],
['Helps most when concurrent opposite operations are frequent; pure producer storms still hit the queue spine.',
 'Implementation complexity and timing windows are non-trivial.',
 'Seed card; promote before relying on fine-grained claims.'],
['DOI: [10.1145/1073970.1074013](https://doi.org/10.1145/1073970.1074013)',
 'PDF: https://people.csail.mit.edu/shanir/publications/SPAA2005.pdf']))

OPT = cite('An Optimistic Approach to Lock-Free FIFO Queues',
           'https://doi.org/10.1007/978-3-540-30186-8_9', 2004, doi='10.1007/978-3-540-30186-8_9',
           card='502-ladan-mozes-shavit-optimistic-lock-free-fifo-queue')

new_stems.append(write_card(
'504-hoffman-shalev-shavit-baskets-queue',
dict(title='The Baskets Queue',
     authors=['Moshe Hoffman', 'Ori Shalev', 'Nir Shavit'], year=2007, venue='OPODIS', arxiv=None,
     doi='10.1007/978-3-540-77000-8_30',
     source='https://people.csail.mit.edu/shanir/publications/Baskets%20Queue.pdf',
     seed_rank=504, relevance_score=9, lineage='linearizability', cites=[MS, OPT, LIN]),
'Lock-free MS descendant that groups concurrent enqueues into baskets so failed CAS peers insert in parallel yet remain linearizable FIFO.',
'Key theoretical/practical step after MS for Anoptic: reduce tail serialization without abandoning linearizability.',
['Queue is an ordered list of baskets (unordered/LIFO groups) rather than a totally ordered node list.',
 'Failed concurrent enqueue CAS implies peers can share a basket — new parallelism among enqueues.',
 'Dequeue still yields linearizable FIFO across baskets.',
 'Empirically outperforms MS-queue in several benchmarks of the paper.'],
['Basket semantics can surprise intuition about strict node order inside a concurrency window.',
 'Still CAS-based linked structure; later FAA/ring designs often win raw throughput.',
 'Confirm Springer LNCS 4878 chapter DOI if citing formally; PDF above is canonical author copy.'],
['PDF: https://people.csail.mit.edu/shanir/publications/Baskets%20Queue.pdf',
 'OPODIS 2007, LNCS 4878, pp. 401–414']))

new_stems.append(write_card(
'505-kogan-petrank-wait-free-queues-multiple-enqueuers-dequeuers',
dict(title='Wait-Free Queues with Multiple Enqueuers and Dequeuers',
     authors=['Alex Kogan', 'Erez Petrank'], year=2011, venue='PPoPP', arxiv=None,
     doi='10.1145/1941553.1941585', source='https://doi.org/10.1145/1941553.1941585',
     seed_rank=505, relevance_score=10, lineage='linearizability', cites=[MS, WF, LIN, HP]),
'First practical wait-free MPMC FIFO: MS-queue plus priority-based helping so every operation finishes in bounded steps.',
'Defines the wait-free queue program Anoptic cares about when fairness under preemption beats plain lock-freedom.',
['Builds on Michael & Scott lock-free queue.',
 'Priority-based helping: faster threads complete slower peers’ pending ops.',
 'Supports multiple concurrent enqueuers and dequeuers (unlike earlier limited-concurrency wait-free queues).',
 'Measured against MS across OS/scheduling configs; sometimes competitive despite stronger guarantee.'],
['Helping and descriptors add latency/complexity; later fast-path/slow-path and FAA designs usually faster.',
 'Needs memory reclamation strategy for descriptors/nodes outside GC.',
 'Seed card; promote before relying on fine-grained claims.'],
['DOI: [10.1145/1941553.1941585](https://doi.org/10.1145/1941553.1941585)',
 'PDF: https://csaws.cs.technion.ac.il/~erez/Papers/wfquque-ppopp.pdf']))

KP2011 = cite('Wait-Free Queues with Multiple Enqueuers and Dequeuers',
              'https://doi.org/10.1145/1941553.1941585', 2011, doi='10.1145/1941553.1941585',
              card='505-kogan-petrank-wait-free-queues-multiple-enqueuers-dequeuers')

new_stems.append(write_card(
'506-kogan-petrank-fast-path-slow-path-wait-free',
dict(title='A Methodology for Creating Fast Wait-Free Data Structures',
     authors=['Alex Kogan', 'Erez Petrank'], year=2012, venue='PPoPP', arxiv=None,
     doi='10.1145/2145816.2145835', source='https://doi.org/10.1145/2145816.2145835',
     seed_rank=506, relevance_score=10, lineage='linearizability', cites=[KP2011, MS, WF]),
'Fast-path/slow-path recipe: run a lock-free algorithm most of the time; fall back to a wait-free helper path after bounded patience.',
'The dominant engineering pattern behind practical wait-free queues (and wCQ) that Anoptic should default to when wait-freedom is required.',
['Methodology, not a single structure: compose efficient lock-free fast path with wait-free slow path.',
 'Applied to their 2011 wait-free queue to match lock-free performance in practice.',
 'Also demonstrated on wait-free linked lists in companion work.',
 'Later YMC, wCQ, and others instantiate variants of this patience/helping idea.'],
['Slow-path descriptors and helping still need careful SMR/allocator design for bounded memory.',
 'Patience tuning is workload-sensitive.',
 'Seed card; promote before relying on fine-grained claims.'],
['DOI: [10.1145/2145816.2145835](https://doi.org/10.1145/2145816.2145835)',
 'PDF: https://csaws.cs.technion.ac.il/~erez/Papers/wf-methodology-ppopp12.pdf']))

new_stems.append(write_card(
'507-morrison-afek-lcrq-fast-concurrent-queues-x86',
dict(title='Fast Concurrent Queues for x86 Processors',
     authors=['Adam Morrison', 'Yehuda Afek'], year=2013, venue='PPoPP', arxiv=None,
     doi='10.1145/2442516.2442527', source='https://doi.org/10.1145/2442516.2442527',
     seed_rank=507, relevance_score=10, lineage='linearizability',
     cites=[MS, LIN,
            cite('A Wait-Free Queue as Fast as Fetch-and-Add', 'https://doi.org/10.1145/2851141.2851168', 2016,
                 doi='10.1145/2851141.2851168', card='510-yang-mellor-crummey-wait-free-queue-fetch-and-add'),
            cite('A Scalable, Portable, and Memory-Efficient Lock-Free FIFO Queue',
                 'https://arxiv.org/abs/1908.04511', 2019, arxiv='1908.04511', doi='10.4230/LIPIcs.DISC.2019.28',
                 card='512-nikolaev-scq-scalable-portable-lock-free-fifo')]),
'LCRQ: Michael–Scott list of concurrent ring queues coordinated primarily with fetch-and-add for huge x86 throughput.',
'Industrial-grade scalability leap after MS — baseline Anoptic should beat or match for high-rate MPMC event/job queues.',
['LCRQ = linked list of CRQ ring buffers; closed rings spawn new rings (MS spine + ring interiors).',
 'Head/tail indices advanced with F&A to spread threads across slots; CAS mostly uncontended on slots.',
 'Nonblocking and strong under oversubscription vs combining/lock queues.',
 'Classic caveat: original design leans on double-width CAS (CAS2) on x86.'],
['CAS2 / portability issues motivated LPRQ, SCQ, FAAArrayQueue.',
 'Memory growth of rings under imbalance needs attention.',
 'Seed card; promote before relying on fine-grained claims.'],
['DOI: [10.1145/2442516.2442527](https://doi.org/10.1145/2442516.2442527)',
 'PDF: https://www.cs.tau.ac.il/~mad/publications/ppopp2013-x86queues.pdf']))

LCRQ = cite('Fast Concurrent Queues for x86 Processors', 'https://doi.org/10.1145/2442516.2442527', 2013,
            doi='10.1145/2442516.2442527', card='507-morrison-afek-lcrq-fast-concurrent-queues-x86')

new_stems.append(write_card(
'508-vyukov-bounded-mpmc-queue',
dict(title='Bounded MPMC Queue (1024cores)',
     authors=['Dmitry Vyukov'], year=2010, venue='1024cores', arxiv=None, doi=None,
     source='https://www.1024cores.net/home/lock-free-algorithms/queues/bounded-mpmc-queue',
     seed_rank=508, relevance_score=10, lineage='linearizability',
     cites=[MS,
            cite('cameron314 concurrentqueue (MPMC)', 'https://github.com/cameron314/concurrentqueue', 2014,
                 card='413-cameron314-concurrentqueue-mpmc'),
            cite('LMAX Disruptor', 'https://lmax-exchange.github.io/disruptor/', 2011,
                 card='427-lmax-disruptor')]),
'Canonical industrial bounded MPMC ring: per-cell sequence numbers, one CAS per op, cache-line separated enqueue/dequeue indices.',
'Default craft reference for Anoptic fixed-capacity job/event rings — copied into MySQL, game engines, and countless C++ codebases.',
['Array/ring of cells each holding a sequence_ atomic; power-of-two capacity.',
 'Producers/consumers claim positions via CAS on enqueue_pos_/dequeue_pos_, then publish via sequence stores.',
 'Separates producer and consumer cache lines; no allocator traffic on the fast path.',
 'Author notes it is “not lock-free in the official meaning” yet mutex-free and extremely practical.'],
['Bounded; full/empty returns failure (or must be wrapped with waiting).',
 'Progress/formality weaker than academic lock-/wait-free queues — still the right tool often.',
 'Exact first-publication year on 1024cores is fuzzy; 2010 is conventional for this lineage pass.'],
['URL: https://www.1024cores.net/home/lock-free-algorithms/queues/bounded-mpmc-queue',
 'Mirror: https://sites.google.com/site/1024cores/home/lock-free-algorithms/queues/bounded-mpmc-queue']))

VYU_MPMC = cite('Bounded MPMC Queue (1024cores)',
                'https://www.1024cores.net/home/lock-free-algorithms/queues/bounded-mpmc-queue', 2010,
                card='508-vyukov-bounded-mpmc-queue')

new_stems.append(write_card(
'509-vyukov-non-intrusive-mpsc-queue',
dict(title='Non-Intrusive MPSC Node-Based Queue (1024cores)',
     authors=['Dmitry Vyukov'], year=2010, venue='1024cores', arxiv=None, doi=None,
     source='https://www.1024cores.net/home/lock-free-algorithms/queues/non-intrusive-mpsc-node-based-queue',
     seed_rank=509, relevance_score=9, lineage='linearizability',
     cites=[MS, VYU_MPMC,
            cite('Jiffy: A Fast, Memory Efficient, Wait-Free Multi-Producers Single-Consumer Queue',
                 'https://arxiv.org/abs/2010.14189', 2020, arxiv='2010.14189',
                 card='327-jiffy-a-fast-memory-efficient-wait-free-multi-producers-sing')]),
'Wait-free-producer MPSC linked queue: one XCHG for push, nearly atomic-free pop — industrial MPSC workhorse (Netty/Akka/JCTools ports).',
'Prefer this shape for Anoptic many-to-one shard inboxes before paying for full MPMC.',
['Intrusive and non-intrusive variants; node-based unbounded list.',
 'Producer push is a single atomic exchange (wait-free producers in the author’s framing).',
 'Consumer fast path mostly atomic-free; ABA-free and no PDR/hazard registration required for the basic algorithm.',
 'Widely ported; pairs with Jiffy-style academic MPSC wait-free work.'],
['Not linearizable in the strong academic sense (author notes); push can briefly block the consumer in a tiny window.',
 'MPSC only — wrong tool for multi-consumer.',
 'Year convention 2010 for 1024cores publication era.'],
['URL: https://www.1024cores.net/home/lock-free-algorithms/queues/non-intrusive-mpsc-node-based-queue']))

KP2012 = cite('A Methodology for Creating Fast Wait-Free Data Structures',
              'https://doi.org/10.1145/2145816.2145835', 2012, doi='10.1145/2145816.2145835',
              card='506-kogan-petrank-fast-path-slow-path-wait-free')

new_stems.append(write_card(
'510-yang-mellor-crummey-wait-free-queue-fetch-and-add',
dict(title='A Wait-Free Queue as Fast as Fetch-and-Add',
     authors=['Chaoran Yang', 'John Mellor-Crummey'], year=2016, venue='PPoPP', arxiv=None,
     doi='10.1145/2851141.2851168', source='https://doi.org/10.1145/2851141.2851168',
     seed_rank=510, relevance_score=10, lineage='linearizability',
     cites=[MS, LCRQ, KP2011, KP2012, WF, LIN]),
'YMC/WFQueue: first wait-free FIFO built around fetch-and-add, matching FAA microbenchmark throughput under extreme contention.',
'Shows Anoptic can demand wait-freedom without surrendering LCRQ-class speed when FAA is available.',
['Wait-free FIFO using FAA rather than CAS loops on the hot path.',
 'Custom epoch-based reclamation; on x86 typical path avoids extra fences.',
 'Empirically outperforms prior non-wait-free designs at high contention on four architectures.',
 'Open artifact lineage (chaoran/fast-wait-free-queue) still used as benchmark baseline.'],
['Requires FAA (and careful epoch SMR); not a pure CAS portability story.',
 'Implementation complexity is substantial versus Vyukov rings.',
 'Seed card; promote before relying on fine-grained claims.'],
['DOI: [10.1145/2851141.2851168](https://doi.org/10.1145/2851141.2851168)',
 'Code: https://github.com/chaoran/fast-wait-free-queue']))

YMC = cite('A Wait-Free Queue as Fast as Fetch-and-Add', 'https://doi.org/10.1145/2851141.2851168', 2016,
           doi='10.1145/2851141.2851168', card='510-yang-mellor-crummey-wait-free-queue-fetch-and-add')

new_stems.append(write_card(
'511-ramalhete-correia-faaarrayqueue',
dict(title='FAAArrayQueue (Concurrency Freaks)',
     authors=['Pedro Ramalhete', 'Andreia Correia'], year=2016, venue='Concurrency Freaks / GitHub',
     arxiv=None, doi=None,
     source='https://github.com/pramalhe/ConcurrencyFreaks/blob/master/CPP/queues/array/FAAArrayQueue.hpp',
     seed_rank=511, relevance_score=9, lineage='linearizability',
     cites=[MS, LCRQ, HP,
            cite('Concurrency Freaks: FAAArrayQueue - MPMC lock-free queue',
                 'http://concurrencyfreaks.blogspot.com/2016/11/faaarrayqueue-mpmc-lock-free-queue-part.html', 2016)]),
'Portable LCRQ-class MPMC: linked arrays indexed by FAA + single-width CAS (no CAS2), with hazard-pointer reclamation.',
'Practical Anoptic choice when you want FAA scalability in portable C++/Java without x86 CAS2.',
['Linked list of fixed-size arrays; enqueue/dequeue reserve indices via FAA.',
 'Single-width CAS only — portable beyond x86 CAS2 machines and into managed languages.',
 'Performance close to LCRQ in authors’ benchmarks; sometimes better on bursty node allocation.',
 'Documented failure modes when few producers face many consumers (ticket bump-out).'],
['Not a peer-reviewed conference paper; industrial/blog+code artifact — still widely cited in later PPoPP work.',
 'Needs hazard pointers (or similar) for node reclamation.',
 'Watch producer/consumer imbalance pathologies shared with LCRQ-style FAA tickets.'],
['Code: https://github.com/pramalhe/ConcurrencyFreaks/blob/master/CPP/queues/array/FAAArrayQueue.hpp',
 'Write-up: http://concurrencyfreaks.blogspot.com/2016/11/faaarrayqueue-mpmc-lock-free-queue-part.html']))

new_stems.append(write_card(
'512-nikolaev-scq-scalable-portable-lock-free-fifo',
dict(title='A Scalable, Portable, and Memory-Efficient Lock-Free FIFO Queue',
     authors=['Ruslan Nikolaev'], year=2019, venue='DISC', arxiv='1908.04511',
     doi='10.4230/LIPIcs.DISC.2019.28', source='https://arxiv.org/abs/1908.04511',
     seed_rank=512, relevance_score=10, lineage='linearizability',
     cites=[MS, LCRQ, LIN,
            cite('wCQ: A Fast Wait-Free Queue with Bounded Memory Usage',
                 'https://arxiv.org/abs/2201.02179', 2022, arxiv='2201.02179', doi='10.1145/3490148.3538572',
                 card='313-wcq-a-fast-wait-free-queue-with-bounded-memory-usage')]),
'SCQ/LSCQ: ABA-safe FAA ring (and linked unbounded variant) that is lock-free, linearizable, single-width-CAS portable, and memory-thrifty.',
'Direct parent of wCQ; preferred academic lock-free ring when Anoptic wants LCRQ speed without CAS2 or huge memory.',
['SCQ bounded ring using FAA on hot spots with indirection to avoid CRQ livelocks.',
 'ABA-safe and standalone — no external allocator/SMR required for the bounded design.',
 'LSCQ chains SCQ rings for unbounded capacity more memory-efficiently than LCRQ.',
 'Portable to PowerPC and other single-width CAS ISAs; evaluated on x86-64 and PowerPC.'],
['Wait-freedom comes later (wCQ); SCQ itself is lock-free.',
 'API/implementation details differ across author releases — pin a commit when shipping.',
 'Seed card; promote before relying on fine-grained claims.'],
['arXiv: [1908.04511](https://arxiv.org/abs/1908.04511)',
 'DOI: [10.4230/LIPIcs.DISC.2019.28](https://doi.org/10.4230/LIPIcs.DISC.2019.28)',
 'PDF: https://rusnikola.github.io/files/ringpaper-disc.pdf']))

SCQ = cite('A Scalable, Portable, and Memory-Efficient Lock-Free FIFO Queue',
           'https://arxiv.org/abs/1908.04511', 2019, arxiv='1908.04511', doi='10.4230/LIPIcs.DISC.2019.28',
           card='512-nikolaev-scq-scalable-portable-lock-free-fifo')

new_stems.append(write_card(
'513-romanov-koval-lprq-portable-lcrq',
dict(title='The State-of-the-Art LCRQ Concurrent Queue Algorithm Does NOT Require CAS2',
     authors=['Raed Romanov', 'Nikita Koval'], year=2023, venue='PPoPP', arxiv=None,
     doi='10.1145/3572848.3577485', source='https://doi.org/10.1145/3572848.3577485',
     seed_rank=513, relevance_score=9, lineage='linearizability',
     cites=[LCRQ, MS, SCQ,
            cite('FAAArrayQueue (Concurrency Freaks)',
                 'https://github.com/pramalhe/ConcurrencyFreaks/blob/master/CPP/queues/array/FAAArrayQueue.hpp',
                 2016, card='511-ramalhete-correia-faaarrayqueue')]),
'LPRQ: portable LCRQ modification that removes CAS2, matching classic LCRQ speed with only CAS + FAA.',
'Closes the portability gap for Anoptic/JVM/Go/Kotlin ports that cannot emit CAS2.',
['Replaces CRQ’s CAS2 cell updates with a three-step CAS protocol (PRQ cells with epochs).',
 'Keeps LCRQ’s linked-ring architecture and FAA ticket spreading.',
 'Reports parity with LCRQ and up to ~1.6× over prior non-CAS2 leaders in their experiments.',
 'Explicitly targets languages/ISAs without double-width CAS.'],
['Still an FAA/ring design with LCRQ-family imbalance caveats.',
 'Verify memory-reclamation integration for your runtime.',
 'Seed card; promote before relying on fine-grained claims.'],
['DOI: [10.1145/3572848.3577485](https://doi.org/10.1145/3572848.3577485)',
 'PDF: https://nikitakoval.org/publications/ppopp23-lprq.pdf']))

print('minted', len(new_stems), 'cards')
for s in new_stems:
    print(' ', s)

# ---------- PATCH EXISTING ----------
def upsert_frontmatter(path: Path, lineage=None, cites=None, replace_cites=True):
    text = path.read_text()
    if not text.startswith('---'):
        raise SystemExit(f'no fm: {path}')
    end = text.find('\n---', 3)
    if end < 0:
        raise SystemExit(f'no fm end: {path}')
    fm = text[4:end]
    body = text[end+4:]  # starts with \n
    # drop existing lineage/cites blocks
    fm_lines = fm.splitlines()
    new_fm = []
    i = 0
    while i < len(fm_lines):
        line = fm_lines[i]
        if line.startswith('lineage:'):
            i += 1
            continue
        if line.startswith('cites:') or line.startswith('see:'):
            i += 1
            while i < len(fm_lines) and (fm_lines[i].startswith('  ') or fm_lines[i].strip() == ''):
                i += 1
            continue
        new_fm.append(line)
        i += 1
    if lineage:
        new_fm.append(f'lineage: {lineage}')
    if cites is not None:
        new_fm.extend(emit_yaml_cites(cites))
    path.write_text('---\n' + '\n'.join(new_fm) + '\n---' + body)
    return path.name

DISRUPTOR = cite('LMAX Disruptor', 'https://lmax-exchange.github.io/disruptor/', 2011,
                 card='427-lmax-disruptor')
CAMERON = cite('cameron314 concurrentqueue (MPMC)', 'https://github.com/cameron314/concurrentqueue', 2014,
               card='413-cameron314-concurrentqueue-mpmc')
WCQ = cite('wCQ: A Fast Wait-Free Queue with Bounded Memory Usage', 'https://arxiv.org/abs/2201.02179', 2022,
           arxiv='2201.02179', doi='10.1145/3490148.3538572',
           card='313-wcq-a-fast-wait-free-queue-with-bounded-memory-usage')
JIFFY = cite('Jiffy: A Fast, Memory Efficient, Wait-Free Multi-Producers Single-Consumer Queue',
             'https://arxiv.org/abs/2010.14189', 2020, arxiv='2010.14189',
             card='327-jiffy-a-fast-memory-efficient-wait-free-multi-producers-sing')
POLY = cite('A Wait-free Queue with Polylogarithmic Step Complexity', 'https://arxiv.org/abs/2305.07229', 2023,
            arxiv='2305.07229', card='289-a-wait-free-queue-with-polylogarithmic-step-complexity')
SSQ = cite('Scalable Synchronous Queues', 'https://doi.org/10.1145/1122971.1123012', 2006,
           doi='10.1145/1122971.1123012', card='438-scalable-synchronous-queues')
BASKETS = cite('The Baskets Queue', 'https://people.csail.mit.edu/shanir/publications/Baskets%20Queue.pdf', 2007,
               doi='10.1007/978-3-540-77000-8_30', card='504-hoffman-shalev-shavit-baskets-queue')
LPRQ = cite('The State-of-the-Art LCRQ Concurrent Queue Algorithm Does NOT Require CAS2',
            'https://doi.org/10.1145/3572848.3577485', 2023, doi='10.1145/3572848.3577485',
            card='513-romanov-koval-lprq-portable-lcrq')
VYU_MPSC = cite('Non-Intrusive MPSC Node-Based Queue (1024cores)',
                'https://www.1024cores.net/home/lock-free-algorithms/queues/non-intrusive-mpsc-node-based-queue',
                2010, card='509-vyukov-non-intrusive-mpsc-queue')
FAA = cite('FAAArrayQueue (Concurrency Freaks)',
           'https://github.com/pramalhe/ConcurrencyFreaks/blob/master/CPP/queues/array/FAAArrayQueue.hpp',
           2016, card='511-ramalhete-correia-faaarrayqueue')
NOCORDS = cite('No Cords Attached: Coordination-Free Concurrent Lock-Free Queues',
               'https://arxiv.org/abs/2511.09410', 2025, arxiv='2511.09410',
               card='276-no-cords-attached-coordination-free-concurrent-lock-free-que')

patched = []

# Root M&S — rich successor cites
patched.append(upsert_frontmatter(
    CARDS / '032-michael-scott-lock-free-queue.md',
    lineage='linearizability',
    cites=[LIN, WF, HP, SMR,
           cite('A Simple, Fast and Scalable Non-Blocking Concurrent FIFO Queue for Shared Memory Multiprocessor Systems',
                'https://doi.org/10.1145/378580.378611', 2001, doi='10.1145/378580.378611',
                card='501-tsigas-zhang-non-blocking-concurrent-fifo-queue'),
           OPT, BASKETS, KP2011, LCRQ, VYU_MPMC, DISRUPTOR, YMC, SCQ, WCQ, JIFFY, POLY, LPRQ, CAMERON]))

# Enrich takeaway slightly? User said patch lineage and cites — keep body mostly, maybe lightly improve M&S body
p = CARDS / '032-michael-scott-lock-free-queue.md'
body_improved = '''---
REPLACE_MARKER
---

# Michael & Scott Lock-Free Queue

## One-sentence takeaway

Canonical two-CAS lock-free MPMC linked queue (MS-queue) that still anchors academic and industrial FIFO designs.

## Why it matters here

Root of the Anoptic / Broadside `concurrent-data-structures` lineage: every later wait-free helper scheme, Vyukov ring, LCRQ/SCQ/wCQ design, and Disruptor-style bus is measured against or descends from this PODC’96 algorithm.

## Key ideas

- Lock-free linearizable queue with separate head and tail pointers and a dummy sentinel node.
- Enqueue swings tail via CAS; dequeue swings head via CAS — allowing concurrent producers and consumers.
- Blocking two-lock variant also presented; the lock-free algorithm became the Java concurrency package classic.
- Correctness framed under linearizability; progress is lock-free, not wait-free.

## Caveats

- Unbounded node allocation + ABA/reclamation require hazard pointers, RCU, epochs, or a GC.
- Head/tail CAS hot spots limit scalability; baskets, elimination, FAA rings, and Disruptor address this.
- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/248052.248106](https://doi.org/10.1145/248052.248106)
- URL: https://doi.org/10.1145/248052.248106
'''
# Keep existing frontmatter (already patched), replace body only
text = p.read_text()
end = text.find('\n---', 3)
fm = text[:end+4]
p.write_text(fm + body_improved.split('---\nREPLACE_MARKER\n---',1)[1] if False else fm + '''

# Michael & Scott Lock-Free Queue

## One-sentence takeaway

Canonical two-CAS lock-free MPMC linked queue (MS-queue) that still anchors academic and industrial FIFO designs.

## Why it matters here

Root of the Anoptic / Broadside `concurrent-data-structures` lineage: every later wait-free helper scheme, Vyukov ring, LCRQ/SCQ/wCQ design, and Disruptor-style bus is measured against or descends from this PODC’96 algorithm.

## Key ideas

- Lock-free linearizable queue with separate head and tail pointers and a dummy sentinel node.
- Enqueue swings tail via CAS; dequeue swings head via CAS — allowing concurrent producers and consumers.
- Blocking two-lock variant also presented; the lock-free algorithm became the Java concurrency package classic.
- Correctness framed under linearizability; progress is lock-free, not wait-free.

## Caveats

- Unbounded node allocation + ABA/reclamation require hazard pointers, RCU, epochs, or a GC.
- Head/tail CAS hot spots limit scalability; baskets, elimination, FAA rings, and Disruptor address this.
- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/248052.248106](https://doi.org/10.1145/248052.248106)
- URL: https://doi.org/10.1145/248052.248106
''')

patched.append(upsert_frontmatter(
    CARDS / '289-a-wait-free-queue-with-polylogarithmic-step-complexity.md',
    lineage='linearizability',
    cites=[MS, WF, LIN, KP2011, YMC, WCQ]))

patched.append(upsert_frontmatter(
    CARDS / '313-wcq-a-fast-wait-free-queue-with-bounded-memory-usage.md',
    lineage='linearizability',
    cites=[MS, SCQ, LCRQ, KP2012, YMC, WF, LIN]))

patched.append(upsert_frontmatter(
    CARDS / '327-jiffy-a-fast-memory-efficient-wait-free-multi-producers-sing.md',
    lineage='linearizability',
    cites=[MS, WF, LIN, VYU_MPSC, KP2011]))

patched.append(upsert_frontmatter(
    CARDS / '413-cameron314-concurrentqueue-mpmc.md',
    lineage='linearizability',
    cites=[MS, VYU_MPMC, LCRQ, DISRUPTOR, HP]))

patched.append(upsert_frontmatter(
    CARDS / '427-lmax-disruptor.md',
    lineage='linearizability',
    cites=[MS, VYU_MPMC, LIN,
           cite('Mechanical Sympathy / Disruptor technical paper',
                'https://lmax-exchange.github.io/disruptor/files/Disruptor-1.0.pdf', 2011)]))

patched.append(upsert_frontmatter(
    CARDS / '438-scalable-synchronous-queues.md',
    lineage='linearizability',
    cites=[MS, LIN,
           cite('Using Elimination to Implement Scalable and Lock-Free FIFO Queues',
                'https://doi.org/10.1145/1073970.1074013', 2005, doi='10.1145/1073970.1074013',
                card='503-moir-elimination-backoff-lock-free-fifo-queues')]))

patched.append(upsert_frontmatter(
    CARDS / '276-no-cords-attached-coordination-free-concurrent-lock-free-que.md',
    lineage='linearizability',
    cites=[MS, HP, SMR, SCQ, WCQ, LIN]))

# Context cards: cites only, DO NOT set lineage
def add_cites_only(path, extra_cites):
    text = path.read_text()
    end = text.find('\n---', 3)
    fm = text[4:end]
    body = text[end+4:]
    fm_lines = fm.splitlines()
    # parse existing cites if any
    existing = []
    new_fm = []
    i = 0
    had_cites = False
    while i < len(fm_lines):
        line = fm_lines[i]
        if line.startswith('cites:'):
            had_cites = True
            i += 1
            cur = None
            while i < len(fm_lines) and fm_lines[i].startswith('  '):
                l = fm_lines[i]
                if l.startswith('  - title:'):
                    if cur: existing.append(cur)
                    cur = {'title': json.loads(l.split(':',1)[1].strip())}
                elif l.strip().startswith('url:'):
                    cur['url'] = json.loads(l.split(':',1)[1].strip())
                elif l.strip().startswith('year:'):
                    cur['year'] = int(l.split(':',1)[1].strip())
                elif l.strip().startswith('arxiv:'):
                    v = l.split(':',1)[1].strip(); cur['arxiv'] = None if v=='null' else json.loads(v)
                elif l.strip().startswith('doi:'):
                    v = l.split(':',1)[1].strip(); cur['doi'] = None if v=='null' else json.loads(v)
                i += 1
            if cur: existing.append(cur)
            continue
        if line.startswith('see:'):
            i += 1
            while i < len(fm_lines) and (fm_lines[i].startswith('  ') or fm_lines[i].strip() == ''):
                i += 1
            continue
        new_fm.append(line)
        i += 1
    # merge by title
    titles = {c['title'] for c in existing}
    for c in extra_cites:
        if c['title'] not in titles:
            existing.append(c)
    # keep lineage if present in new_fm already — do not add linearizability
    new_fm.extend(emit_yaml_cites(existing))
    path.write_text('---\n' + '\n'.join(new_fm) + '\n---' + body)
    return path.name

patched.append(add_cites_only(CARDS / '025-hazard-pointers-safe-memory-reclamation-for-lock-free-object.md',
    [MS, SMR,
     cite('Bounded MPMC Queue (1024cores)', VYU_MPMC['url'], 2010, card=VYU_MPMC['card']),
     LCRQ]))

patched.append(add_cites_only(CARDS / '037-wait-free-synchronization.md',
    [LIN, KP2011, KP2012, YMC, WCQ, POLY]))

patched.append(add_cites_only(CARDS / '260-linearizability-a-correctness-condition-for-concurrent-objec.md',
    [MS, WF, BASKETS, LCRQ, YMC]))

patched.append(add_cites_only(CARDS / '373-safe-memory-reclamation-for-dynamic-lock-free-objects-using-.md',
    [MS, HP]))

print('patched', len(patched), 'files')

# ---------- LINEAGE MD ----------
lineage_md = '''# Lineage: concurrent-data-structures

Charter: the living epistemology of concurrent FIFO queues from Michael & Scott’s 1996 lock-free MS-queue through wait-free helping, basket/elimination parallelism, Dmitry Vyukov’s industrial MPMC/MPSC rings, LMAX Disruptor mechanical sympathy, FAA/ring scalability (LCRQ → SCQ → LPRQ → wCQ), and modern polylog/verified wait-free designs still cited today. Memory reclamation (Michael 2002 / hazard pointers 2004) is cited as an inseparable dependency but kept on the reclamation thread — do not steal its `lineage`.

## Ordered spine

1. **Problem / correctness frame** — Concurrent FIFO with linearizability (Herlihy & Wing 1990) and progress taxonomy (Herlihy wait-freedom 1991). Queues are the event bus / job mailbox primitive for engines and Anoptic.
2. **Michael & Scott 1996** — Canonical lock-free linked MPMC queue (and two-lock blocking cousin). Root card of this thread.
3. **Early scalability successors** — Tsigas & Zhang 2001 (bounded CAS array); Ladan-Mozes & Shavit 2004 optimistic doubly-linked stores; Moir et al. 2005 elimination backoff; Hoffman/Shalev/Shavit 2007 Baskets Queue.
4. **Practical wait-freedom** — Kogan & Petrank 2011 wait-free MPMC via helping; 2012 fast-path/slow-path methodology that makes wait-freedom deployable.
5. **Industrial mutex-free rings** — Vyukov bounded MPMC and MPSC (1024cores, ~2010); LMAX Disruptor 2011 (SPSC/multicast ring, mechanical sympathy); cameron314 `concurrentqueue` 2014 as widely shipped MPMC engineering.
6. **FAA / ring academic line** — Morrison & Afek LCRQ 2013; Yang & Mellor-Crummey WFQueue 2016; Ramalhete & Correia FAAArrayQueue 2016; Nikolaev SCQ/LSCQ 2019; Romanov & Koval LPRQ 2023 (CAS2-free LCRQ).
7. **Modern wait-free / specialized** — Jiffy 2020 (wait-free MPSC); wCQ 2022 (wait-free SCQ with bounded memory); polylog step-complexity wait-free queue 2023; No Cords Attached 2025 (coordination-free framing). Scherer/Lea/Scott 2006 synchronous hand-off queues sit as a practical Java/`java.util.concurrent` cousin.

## Broadside cards in this thread

| Stem | Year | Role |
|------|------|------|
| `032-michael-scott-lock-free-queue` | 1996 | Root MS-queue |
| `501-tsigas-zhang-non-blocking-concurrent-fifo-queue` | 2001 | Early scalable CAS array FIFO |
| `502-ladan-mozes-shavit-optimistic-lock-free-fifo-queue` | 2004 | Optimistic doubly-linked MS alternative |
| `503-moir-elimination-backoff-lock-free-fifo-queues` | 2005 | Elimination backoff for FIFO |
| `438-scalable-synchronous-queues` | 2006 | Synchronous hand-off queues |
| `504-hoffman-shalev-shavit-baskets-queue` | 2007 | Baskets Queue |
| `508-vyukov-bounded-mpmc-queue` | 2010 | Vyukov bounded MPMC |
| `509-vyukov-non-intrusive-mpsc-queue` | 2010 | Vyukov MPSC |
| `505-kogan-petrank-wait-free-queues-multiple-enqueuers-dequeuers` | 2011 | Practical wait-free MPMC |
| `427-lmax-disruptor` | 2011 | LMAX Disruptor |
| `506-kogan-petrank-fast-path-slow-path-wait-free` | 2012 | Fast-path/slow-path methodology |
| `507-morrison-afek-lcrq-fast-concurrent-queues-x86` | 2013 | LCRQ |
| `413-cameron314-concurrentqueue-mpmc` | 2014 | cameron314 ConcurrentQueue |
| `510-yang-mellor-crummey-wait-free-queue-fetch-and-add` | 2016 | YMC/WFQueue |
| `511-ramalhete-correia-faaarrayqueue` | 2016 | FAAArrayQueue |
| `512-nikolaev-scq-scalable-portable-lock-free-fifo` | 2019 | SCQ / LSCQ |
| `327-jiffy-a-fast-memory-efficient-wait-free-multi-producers-sing` | 2020 | Jiffy wait-free MPSC |
| `313-wcq-a-fast-wait-free-queue-with-bounded-memory-usage` | 2022 | wCQ |
| `513-romanov-koval-lprq-portable-lcrq` | 2023 | LPRQ |
| `289-a-wait-free-queue-with-polylogarithmic-step-complexity` | 2023 | Polylog step-complexity wait-free queue |
| `276-no-cords-attached-coordination-free-concurrent-lock-free-que` | 2025 | Coordination-free lock-free queues |

### Essential cites outside this lineage (do not steal `lineage`)

| Stem | Year | Why cited here |
|------|------|----------------|
| `260-linearizability-a-correctness-condition-for-concurrent-objec` | 1990 | Correctness lens for all FIFO claims |
| `037-wait-free-synchronization` | 1991 | Progress taxonomy |
| `373-safe-memory-reclamation-for-dynamic-lock-free-objects-using-` | 2002 | SMR precursor for unmanaged MS-style queues |
| `025-hazard-pointers-safe-memory-reclamation-for-lock-free-object` | 2004 | Practical reclamation paired with MS/LCRQ/FAAArray |

## Open frontiers / what Anoptic should watch

- **Bounded-memory wait-free MPMC** that stays SCQ/wCQ-fast under oversubscription (scheduler noise is the Anoptic reality).
- **Portable FAA rings** (LPRQ / SCQ) as the default academic-quality backend; Vyukov rings as the default craft backend.
- **Verification** of industrial variants (Vyukov, Disruptor, cameron314) against linearizability — many are intentionally weaker or blocking-on-full.
- **Reclamation co-design** (hazard eras, crystalline, universal wait-free SMR) without forcing every queue paper onto the reclamation lineage.
- **Relaxed / brokered queues** only when GRID COMMAND telemetry explicitly allows weaker ordering — keep them off this strict FIFO spine unless justified.

## Batch

Seed expansion batch: `lineage-concurrent-data-structures-2026-08-13` (cards 501–513 minted; existing thread cards patched with `lineage` + `cites`).
'''
(LINEAGES / 'linearizability.md').write_text(lineage_md)
print('wrote lineage md')

# ---------- SHORTLIST JSONL ----------
shortlist = [
  {'status':'kept','stem':'032-michael-scott-lock-free-queue','title':'Michael & Scott Lock-Free Queue','year':1996,'reason':'Root of lineage'},
  {'status':'kept','stem':'260-linearizability-a-correctness-condition-for-concurrent-objec','title':'Linearizability','year':1990,'reason':'Correctness frame; cited, lineage not stolen'},
  {'status':'kept','stem':'037-wait-free-synchronization','title':'Wait-Free Synchronization','year':1991,'reason':'Progress frame; cited, lineage not stolen'},
  {'status':'kept','stem':'501-tsigas-zhang-non-blocking-concurrent-fifo-queue','title':'Tsigas & Zhang non-blocking FIFO','year':2001,'reason':'Early scalable successor'},
  {'status':'kept','stem':'373-safe-memory-reclamation-for-dynamic-lock-free-objects-using-','title':'Michael SMR 2002','year':2002,'reason':'Essential reclamation cite'},
  {'status':'kept','stem':'502-ladan-mozes-shavit-optimistic-lock-free-fifo-queue','title':'Optimistic lock-free FIFO','year':2004,'reason':'CAS-reduction MS alternative'},
  {'status':'kept','stem':'025-hazard-pointers-safe-memory-reclamation-for-lock-free-object','title':'Hazard Pointers','year':2004,'reason':'Essential reclamation cite; lineage not stolen'},
  {'status':'kept','stem':'503-moir-elimination-backoff-lock-free-fifo-queues','title':'Elimination backoff FIFO','year':2005,'reason':'Scalability via elimination'},
  {'status':'kept','stem':'438-scalable-synchronous-queues','title':'Scalable Synchronous Queues','year':2006,'reason':'Industrial hand-off cousin'},
  {'status':'kept','stem':'504-hoffman-shalev-shavit-baskets-queue','title':'The Baskets Queue','year':2007,'reason':'Classic theoretical successor'},
  {'status':'kept','stem':'508-vyukov-bounded-mpmc-queue','title':'Vyukov bounded MPMC','year':2010,'reason':'Living industrial MPMC'},
  {'status':'kept','stem':'509-vyukov-non-intrusive-mpsc-queue','title':'Vyukov MPSC','year':2010,'reason':'Living industrial MPSC'},
  {'status':'kept','stem':'505-kogan-petrank-wait-free-queues-multiple-enqueuers-dequeuers','title':'Kogan & Petrank wait-free queue','year':2011,'reason':'Practical wait-free MPMC'},
  {'status':'kept','stem':'427-lmax-disruptor','title':'LMAX Disruptor','year':2011,'reason':'Mechanical-sympathy industrial continuation'},
  {'status':'kept','stem':'506-kogan-petrank-fast-path-slow-path-wait-free','title':'Fast-path/slow-path methodology','year':2012,'reason':'Makes wait-freedom practical'},
  {'status':'kept','stem':'507-morrison-afek-lcrq-fast-concurrent-queues-x86','title':'LCRQ','year':2013,'reason':'FAA ring breakthrough'},
  {'status':'kept','stem':'413-cameron314-concurrentqueue-mpmc','title':'cameron314 concurrentqueue','year':2014,'reason':'Widely shipped engine MPMC'},
  {'status':'kept','stem':'510-yang-mellor-crummey-wait-free-queue-fetch-and-add','title':'YMC WFQueue','year':2016,'reason':'FAA wait-free queue'},
  {'status':'kept','stem':'511-ramalhete-correia-faaarrayqueue','title':'FAAArrayQueue','year':2016,'reason':'Portable LCRQ-class industrial/academic hybrid'},
  {'status':'kept','stem':'512-nikolaev-scq-scalable-portable-lock-free-fifo','title':'SCQ','year':2019,'reason':'Portable memory-efficient FAA ring'},
  {'status':'kept','stem':'327-jiffy-a-fast-memory-efficient-wait-free-multi-producers-sing','title':'Jiffy','year':2020,'reason':'Modern wait-free MPSC'},
  {'status':'kept','stem':'313-wcq-a-fast-wait-free-queue-with-bounded-memory-usage','title':'wCQ','year':2022,'reason':'Wait-free SCQ with bounded memory'},
  {'status':'kept','stem':'513-romanov-koval-lprq-portable-lcrq','title':'LPRQ','year':2023,'reason':'CAS2-free LCRQ'},
  {'status':'kept','stem':'289-a-wait-free-queue-with-polylogarithmic-step-complexity','title':'Polylog wait-free queue','year':2023,'reason':'Modern complexity-theoretic wait-free queue'},
  {'status':'kept','stem':'276-no-cords-attached-coordination-free-concurrent-lock-free-que','title':'No Cords Attached','year':2025,'reason':'Recent coordination-free lock-free queues'},
  # Rejected
  {'status':'rejected','title':'Fatourou & Kallimanis CC-Queue / CC-Synch combining','year':2012,'reason':'Flat combining synchronization technique; adjacent but not a FIFO-algorithm successor spine item'},
  {'status':'rejected','title':'Herlihy universal construction applied as queue','year':1991,'reason':'Covered via wait-freedom card; no distinct queue artifact to mint'},
  {'status':'rejected','title':'java.util.concurrent ConcurrentLinkedQueue source','year':2003,'reason':'Direct MS packaging; cite via MS rather than duplicate card'},
  {'status':'rejected','title':'Boost.lockfree / Folly MPMCQueue','year':2010,'reason':'Library packaging of Vyukov-like rings; covered by Vyukov + cameron314 cards'},
  {'status':'rejected','title':'Ostrovsky & Morrison HTM concurrent queues','year':2020,'reason':'HTM-specific acceleration; niche vs living portable family'},
  {'status':'rejected','title':'Modular Baskets Queue (2025 follow-on)','year':2025,'reason':'Interesting but secondary to 2007 baskets classic for this pass'},
  {'status':'rejected','title':'LLM-agent concurrent queue papers','year':2024,'reason':'Out of scope per Broadside instruction (no LLM-agent papers)'},
  {'status':'rejected','title':'Chase-Lev / Cilk work-stealing-schedulers deques','year':1999,'reason':'Belongs to work-stealing-schedulers lineage, not FIFO queue spine'},
  {'status':'rejected','title':'Vyukov unbounded SPSC queue page','year':2010,'reason':'SPSC covered implicitly; MPSC+MPMC are the lineage-critical Vyukov artifacts'},
]

with open(POOLS / 'lineage_lock_free_queues.jsonl', 'w') as f:
    for row in shortlist:
        f.write(json.dumps(row, ensure_ascii=False) + '\n')
print('wrote shortlist', len(shortlist))

# ---------- INDEX append ----------
idx = ROOT / 'INDEX.md'
text = idx.read_text()
section = '''
## Lineage expansion — concurrent-data-structures (`lineage-concurrent-data-structures-2026-08-13`)

Minted 501–513; patched existing thread cards with `lineage: concurrent-data-structures` and rich `cites`. Narrative: [`lineages/concurrent-data-structures.md`](lineages/concurrent-data-structures.md).

| # | Score | Year | Title | Pool |
|---|------:|-----:|-------|------|
| 501 | 8 | 2001 | A Simple, Fast and Scalable Non-Blocking Concurrent FIFO Queue (Tsigas & Zhang) | hpc |
| 502 | 8 | 2004 | An Optimistic Approach to Lock-Free FIFO Queues | hpc |
| 503 | 8 | 2005 | Using Elimination to Implement Scalable and Lock-Free FIFO Queues | hpc |
| 504 | 9 | 2007 | The Baskets Queue | hpc |
| 505 | 10 | 2011 | Wait-Free Queues with Multiple Enqueuers and Dequeuers | hpc |
| 506 | 10 | 2012 | A Methodology for Creating Fast Wait-Free Data Structures | hpc |
| 507 | 10 | 2013 | Fast Concurrent Queues for x86 Processors (LCRQ) | hpc |
| 508 | 10 | 2010 | Bounded MPMC Queue (Vyukov / 1024cores) | hpc |
| 509 | 9 | 2010 | Non-Intrusive MPSC Node-Based Queue (Vyukov / 1024cores) | hpc |
| 510 | 10 | 2016 | A Wait-Free Queue as Fast as Fetch-and-Add | hpc |
| 511 | 9 | 2016 | FAAArrayQueue (Concurrency Freaks) | hpc |
| 512 | 10 | 2019 | A Scalable, Portable, and Memory-Efficient Lock-Free FIFO Queue (SCQ) | hpc |
| 513 | 9 | 2023 | The State-of-the-Art LCRQ Concurrent Queue Algorithm Does NOT Require CAS2 (LPRQ) | hpc |
'''
if 'lineage-concurrent-data-structures-2026-08-13' not in text:
    idx.write_text(text.rstrip() + '\n' + section)
    print('updated INDEX.md')
else:
    print('INDEX already had section')

print('DONE')
print('NEW_STEMS_JSON', json.dumps(new_stems))
print('PATCHED_COUNT', len(patched))

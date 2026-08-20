import {
  Callout,
  Divider,
  H1,
  H2,
  H3,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  computeDAGLayout,
  useHostTheme,
} from "cursor/canvas";

const MONO = "ui-monospace, 'Cascadia Code', Consolas, monospace";

type FlowNode = {
  id: string;
  label: string;
  detail?: string;
  mono?: boolean;
  emphasis?: boolean;
};
type FlowEdge = { from: string; to: string; label?: string };

function FlowDiagram(props: {
  markerId: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
  direction?: "vertical" | "horizontal";
  nodeWidth?: number;
  nodeHeight?: number;
  rankGap?: number;
  nodeGap?: number;
}) {
  const theme = useHostTheme();
  const nodeWidth = props.nodeWidth ?? 200;
  const nodeHeight = props.nodeHeight ?? 68;
  const layout = computeDAGLayout({
    nodes: props.nodes.map((n) => ({ id: n.id })),
    edges: props.edges.map((e) => ({ from: e.from, to: e.to })),
    direction: props.direction ?? "vertical",
    nodeWidth,
    nodeHeight,
    rankGap: props.rankGap ?? 56,
    nodeGap: props.nodeGap ?? 28,
  });
  const specById = new Map(props.nodes.map((n) => [n.id, n]));
  const labelFor = (from: string, to: string) =>
    props.edges.find((e) => e.from === from && e.to === to)?.label;
  return (
    <div style={{ overflowX: "auto" }}>
      <div
        style={{
          position: "relative",
          width: layout.width,
          height: layout.height,
        }}
      >
        <svg
          width={layout.width}
          height={layout.height}
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <marker
              id={props.markerId}
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill={theme.text.tertiary} />
            </marker>
          </defs>
          {layout.edges.map((e, i) => {
            const d =
              layout.direction === "horizontal"
                ? `M ${e.sourceX},${e.sourceY} C ${(e.sourceX + e.targetX) / 2},${e.sourceY} ${(e.sourceX + e.targetX) / 2},${e.targetY} ${e.targetX},${e.targetY}`
                : `M ${e.sourceX},${e.sourceY} C ${e.sourceX},${(e.sourceY + e.targetY) / 2} ${e.targetX},${(e.sourceY + e.targetY) / 2} ${e.targetX},${e.targetY}`;
            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke={e.isBackEdge ? theme.stroke.tertiary : theme.text.tertiary}
                strokeWidth={1.4}
                strokeDasharray={e.isBackEdge ? "4 3" : undefined}
                markerEnd={`url(#${props.markerId})`}
              />
            );
          })}
        </svg>
        {layout.edges.map((e, i) => {
          const label = labelFor(e.from, e.to);
          if (!label) return null;
          return (
            <div
              key={`label-${i}`}
              style={{
                position: "absolute",
                left: (e.sourceX + e.targetX) / 2,
                top: (e.sourceY + e.targetY) / 2,
                transform: "translate(-50%, -50%)",
                background: theme.bg.editor,
                color: theme.text.tertiary,
                fontSize: 11,
                lineHeight: "13px",
                padding: "2px 6px",
                borderRadius: 4,
                whiteSpace: "nowrap",
                fontFamily: MONO,
              }}
            >
              {label}
            </div>
          );
        })}
        {layout.nodes.map((n) => {
          const spec = specById.get(n.id);
          if (!spec) return null;
          return (
            <div
              key={n.id}
              style={{
                position: "absolute",
                left: n.x,
                top: n.y,
                width: nodeWidth,
                height: nodeHeight,
                boxSizing: "border-box",
                border: `1px solid ${spec.emphasis ? theme.accent.primary : theme.stroke.secondary}`,
                borderRadius: 6,
                background: theme.bg.elevated,
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 4,
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: theme.text.primary,
                  lineHeight: "17px",
                  fontFamily: spec.mono ? MONO : undefined,
                }}
              >
                {spec.label}
              </span>
              {spec.detail ? (
                <span
                  style={{
                    fontSize: 12,
                    color: theme.text.secondary,
                    lineHeight: "15px",
                  }}
                >
                  {spec.detail}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Mark({ children }: { children: string }) {
  const theme = useHostTheme();
  return (
    <span
      style={{
        fontFamily: MONO,
        fontSize: 11,
        letterSpacing: "0.04em",
        color: theme.text.tertiary,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

type TabSpec = { id: string; label: string; body: unknown };

function tabChrome(
  theme: ReturnType<typeof useHostTheme>,
  selected: boolean,
): Record<string, string | number> {
  return {
    appearance: "none",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    lineHeight: "18px",
    padding: "6px 10px",
    borderRadius: 6,
    border: `1px solid ${selected ? theme.accent.primary : theme.stroke.secondary}`,
    background: selected ? theme.accent.primary : theme.bg.elevated,
    color: selected ? theme.text.onAccent : theme.text.primary,
  };
}

function activateTab(event: Event, tabId: string): void {
  const target = event.currentTarget;
  if (!(target instanceof HTMLElement)) return;
  const root = target.closest("[data-tabs]");
  if (!(root instanceof HTMLElement)) return;
  const theme = useHostTheme();
  for (const el of root.querySelectorAll(":scope > [role='tablist'] [data-tab]")) {
    if (!(el instanceof HTMLElement)) continue;
    const on = el.dataset.tab === tabId;
    el.setAttribute("aria-selected", on ? "true" : "false");
    const style = tabChrome(theme, on);
    for (const [key, value] of Object.entries(style)) {
      const cssKey = key.replace(/[A-Z]/g, (ch) => `-${ch.toLowerCase()}`);
      el.style.setProperty(cssKey, String(value));
    }
  }
  for (const panel of root.querySelectorAll(":scope > [data-panel]")) {
    if (!(panel instanceof HTMLElement)) continue;
    if (panel.dataset.panel === tabId) panel.removeAttribute("hidden");
    else panel.setAttribute("hidden", "");
  }
}

function Tabs(props: { id: string; tabs: TabSpec[] }) {
  const theme = useHostTheme();
  const first = props.tabs[0]?.id ?? "";
  return (
    <div data-tabs={props.id}>
      <div
        role="tablist"
        class="cv-row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
        }}
      >
        {props.tabs.map((tab) => {
          const selected = tab.id === first;
          return (
            <button
              type="button"
              role="tab"
              data-tab={tab.id}
              aria-selected={selected ? "true" : "false"}
              aria-controls={`${props.id}-${tab.id}`}
              onClick={(event: Event) => activateTab(event, tab.id)}
              style={tabChrome(theme, selected)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {props.tabs.map((tab) => (
        <div
          id={`${props.id}-${tab.id}`}
          role="tabpanel"
          data-panel={tab.id}
          hidden={tab.id === first ? undefined : true}
        >
          {tab.body}
        </div>
      ))}
    </div>
  );
}

type GameHit = {
  title: string;
  confidence: "shipped" | "demo" | "middleware" | "none";
  source: string;
};

type Method = {
  id: string;
  label: string;
  year: string;
  card: string;
  stores: string;
  where: string;
  dynamic: string;
  failure: string;
  status: string;
  timeline: Array<[string, string]>;
  games: GameHit[];
  note: string;
};

function confidenceLabel(kind: GameHit["confidence"]): string {
  if (kind === "shipped") return "shipped";
  if (kind === "demo") return "demo";
  if (kind === "middleware") return "middleware / SDK";
  return "none found / tech demo only";
}

function MethodBody(method: Method) {
  return (
    <Stack gap={10}>
      <Row gap={8} align="center" wrap>
        <Mark>{method.card}</Mark>
        <H3>{method.label}</H3>
      </Row>
      <Table
        headers={["Stores", "Where", "Dynamic 3D GI", "Failure", "Status"]}
        rows={[[method.stores, method.where, method.dynamic, method.failure, method.status]]}
      />
      <H3>Chronology</H3>
      <Table headers={["When", "What"]} rows={method.timeline} />
      <H3>Games</H3>
      <Table
        headers={["Title or finding", "Confidence", "Source"]}
        rows={method.games.map((g) => [g.title, confidenceLabel(g.confidence), g.source])}
      />
      <Text>{method.note}</Text>
    </Stack>
  );
}

const rcFamilyNodes: FlowNode[] = [
  { id: "founding", label: "RC founding WIP", detail: "2023 · card 005", emphasis: true },
  { id: "poe2", label: "PoE2 screenspace", detail: "2023 · card 1108" },
  { id: "shadertoy", label: "Shadertoy 2D", detail: "2023 · card 1109" },
  { id: "holographic", label: "Holographic 2D", detail: "2025 · card 211" },
  { id: "uv", label: "UV-space 3D", detail: "2024 · card 1110" },
  { id: "surfel", label: "Surfel RC", detail: "2025 · card 1113" },
  { id: "rcnee", label: "RC-NEE", detail: "2025 · card 1114" },
  { id: "split", label: "Split RC 3D sparse", detail: "2026 · card 208", emphasis: true },
];

const rcFamilyEdges: FlowEdge[] = [
  { from: "founding", to: "poe2", label: "SS ship" },
  { from: "founding", to: "shadertoy", label: "2D demo" },
  { from: "founding", to: "holographic", label: "2D paper" },
  { from: "founding", to: "uv", label: "surface cache" },
  { from: "founding", to: "surfel", label: "surface disks" },
  { from: "founding", to: "rcnee", label: "path PDF" },
  { from: "founding", to: "split", label: "sparse 3D" },
  { from: "shadertoy", to: "holographic" },
];

const giSpineNodes: FlowNode[] = [
  { id: "ir", label: "Instant radiosity", detail: "1997 · VPLs · 450" },
  { id: "ivol", label: "Irradiance volume", detail: "1998 · probes · 451" },
  { id: "prt", label: "PRT", detail: "2002 · baked SH · 366" },
  { id: "rsm", label: "RSM", detail: "2005 · light-view VPLs · 292" },
  { id: "lightcuts", label: "Lightcuts", detail: "2005 · light tree · 1042" },
  { id: "lpv", label: "LPV", detail: "2010 · SH lattice · 277" },
  { id: "vct", label: "VCT / VXGI", detail: "2011 · cones · 120/272" },
  { id: "lfp", label: "Light-field probes", detail: "2017 · 327" },
  { id: "ddgi", label: "DDGI", detail: "2019 · HW rays · 318" },
  { id: "rtxgi", label: "RTXGI scaling", detail: "2020 · 256" },
  { id: "gi10", label: "GI-1.0", detail: "2023 · 231" },
  { id: "restir", label: "ReSTIR GI", detail: "2021-24 SOTA" },
  { id: "lumen", label: "Lumen", detail: "UE5 SOTA" },
  { id: "rc", label: "Radiance Cascades", detail: "variable angular res", emphasis: true },
];

const giSpineEdges: FlowEdge[] = [
  { from: "ir", to: "rsm", label: "VPLs" },
  { from: "ir", to: "lightcuts" },
  { from: "ir", to: "lpv" },
  { from: "ivol", to: "prt" },
  { from: "ivol", to: "lfp" },
  { from: "rsm", to: "lpv" },
  { from: "lpv", to: "vct", label: "2010s dyn GI" },
  { from: "lfp", to: "ddgi", label: "dynamize probes" },
  { from: "ddgi", to: "rtxgi" },
  { from: "ddgi", to: "gi10" },
  { from: "ddgi", to: "restir" },
  { from: "ddgi", to: "lumen" },
  { from: "lpv", to: "rc", label: "vs SH volume" },
  { from: "vct", to: "rc", label: "vs cones" },
  { from: "ddgi", to: "rc", label: "vs uniform probes" },
  { from: "rsm", to: "rc", label: "vs VPLs" },
];

const rcMethods: Method[] = [
  {
    id: "founding",
    label: "RC founding",
    year: "2023",
    card: "card 005",
    stores: "Cascaded near-to-far radiance intervals. Spatial vs angular resolution follows the penumbra hypothesis.",
    where: "2D world / screenspace. 3D is written, not cheap.",
    dynamic: "2D yes. Dense 3D no. Storage is O(n³).",
    failure: "3D VRAM. Dense cascade-0 voxel or probe grids do not survive unbounded 3D.",
    status: "WIP. GitHub living writeup. Not a refereed HPG/SIGGRAPH/JCGT paper.",
    timeline: [
      ["2023", "Alexander Sannikov posts the living algorithm on GitHub, Raikiri/RadianceCascadesPaper."],
      ["2023-11", "ExileCon talk treats this as the writeup behind Path of Exile 2 screenspace GI. Card 1108."],
      ["2024-2026", "No dedicated HPG, SIGGRAPH, or JCGT RC game-GI paper. The 2024 Osborne/Sannikov RASTI paper is non-LTE radiative transfer, card 453, not that missing venue paper."],
    ],
    games: [
      {
        title: "none found / tech demo only for dense 3D founding RC. Path of Exile 2 is the screenspace fork, listed under PoE2 SS RC.",
        confidence: "none",
        source: "card 005, GitHub WIP, card 1108",
      },
    ],
    note: "2D RC works. The founding text already treats a full 3D grid as very hard. Later 3D attempts are escapes from that grid, not proofs that it was cheap.",
  },
  {
    id: "poe2",
    label: "PoE2 SS RC",
    year: "2023",
    card: "card 1108",
    stores: "Hierarchy of screenspace radiance-probe cascades, filled by screenspace raymarching.",
    where: "Screen. 3D game, mostly-fixed camera.",
    dynamic: "Screenspace only. Not world-space 3D GI.",
    failure: "Off-screen geometry cannot light or occlude.",
    status: "Shipped in Path of Exile 2. Conference talk, not a refereed paper.",
    timeline: [
      ["2019", "Predecessor named on stage: HSSVGI and hierarchical screenspace shadow cascades, ExileCon 2019."],
      ["2023-11", "Sannikov, ExileCon 2023, Rendering Path of Exile 2. First public RC presentation. YouTube TrHHTQqmAaM."],
    ],
    games: [
      {
        title: "Path of Exile 2",
        confidence: "shipped",
        source: "ExileCon 2023 talk, card 1108, card 005 takeaway",
      },
    ],
    note: "This is the production RC that exists. Shipping PoE2 is not evidence that dense 3D cascade-0 grids are cheap.",
  },
  {
    id: "shadertoy",
    label: "Shadertoy 2D",
    year: "2023",
    card: "card 1109",
    stores: "Flatland cascade hierarchy. Skybox integral in the highest-angular cascade. Shadertoy four-buffer temporal merge.",
    where: "2D.",
    dynamic: "No. 2D demo.",
    failure: "2D. Temporal merge lag and flicker are Shadertoy buffer limits, not an algorithm requirement.",
    status: "WIP / community demo. First public runnable 2D RC.",
    timeline: [
      ["2023-09-02", "fad Shadertoy mtlBzX. Fork root later 2D ports cite."],
      ["2023-11-23", "Quinchilion clVcD3."],
      ["2024-04", "Suslik MctXRr, then Experimental Testbed 4ctXD8, the most-cited 2D fork."],
      ["2024", "Yaazarai GM Shaders writeup, card 1111. Jason McGhee interactive essay, card 1112."],
    ],
    games: [
      {
        title: "none found / tech demo only. GameMaker sample repos exist. They are demos, not shipped titles.",
        confidence: "demo",
        source: "card 1109, 1111 Shadertoy / GM Shaders / jason.today",
      },
    ],
    note: "The merge people actually copy. Do not read a Shadertoy as a 3D O(n³) solution.",
  },
  {
    id: "uv",
    label: "UV-space 3D",
    year: "2024",
    card: "card 1110",
    stores: "3D radiance on surface UV charts. Constant memory per cascade if P_i ~ 1/4^i probes and Q_i ~ 4^i angular texels.",
    where: "UV. Not screenspace, not a 3D brick grid.",
    dynamic: "PoC. Multi-bounce and BRDF in the demo. Temporal merge because Shadertoy is short on buffers.",
    failure: "Seams. Chart packing, overlapping UVs, and unseen backfaces are unsolved in the demo.",
    status: "WIP Shadertoy proof of concept. Not a refereed paper.",
    timeline: [
      ["2023", "Founding paper notes 3D radiance encoded on a 2D surface has constant memory per cascade."],
      ["2024-11", "Suslik Shadertoy X3XfRM. radiance.wiki treats Suslik as Sannikov."],
    ],
    games: [
      {
        title: "none found / tech demo only",
        confidence: "none",
        source: "card 1110, Shadertoy X3XfRM",
      },
    ],
    note: "A surface-cache escape from dense O(n³) cascade-0 voxels. Do not treat it as 3D RC solved.",
  },
  {
    id: "holographic",
    label: "Holographic RC",
    year: "2025",
    card: "card 211",
    stores: "Multi-level probes compose short ray intervals. Holographic layout keeps high spatial resolution perpendicular to the march.",
    where: "2D frequency. 2D on purpose.",
    dynamic: "No. 2D GI. Single-shot, no temporal accumulation, no content preprocess.",
    failure: "3D memory. Paper cites O(N×X²) as the barrier to a naive 3D holographic cascade. No holographic-3D paper.",
    status: "Preprint. arXiv 2505.02041. Freeman, Sannikov, Margel.",
    timeline: [
      ["2025", "Holographic Radiance Cascades for 2D Global Illumination. arXiv 2505.02041."],
      ["2025", "Reported 1.85 ms at 512² and 7.67 ms at 1024² on a laptop RTX 3080. Card 211."],
    ],
    games: [
      {
        title: "none found / tech demo only",
        confidence: "none",
        source: "card 211, arXiv 2505.02041",
      },
    ],
    note: "Fixes small-penumbra and hard-shadow failures of naive interval merging without going stochastic. It stays 2D because 3D holographic storage is the stated wall.",
  },
  {
    id: "surfel",
    label: "Surfel RC",
    year: "2025",
    card: "card 1113",
    stores: "Radiance Cascades on spawned surfel probes. Six surfel cascades, 262k at cascade 0, 1/4× count each level. Cascade 0 integrated per pixel.",
    where: "Surfels. Surface disks, not a voxel brick.",
    dynamic: "WIP 3D. Transform-attach for moving meshes was skipped.",
    failure: "Coverage. Hash collisions, distribution, temporal stability remain open. radiance.wiki still marks 3D RC unsolved.",
    status: "WIP. GitHub mxcop/src-dgi, open-sourced 2025-03. Not a refereed paper.",
    timeline: [
      ["2021", "EA SEED GIBS, Global Illumination Based on Surfels. Inspiration, not RC."],
      ["2025-01-22", "Coppen, Surfel Maintenance for Global Illumination. Spawn, recycle, hash grid."],
      ["2025-03", "SRC-DGI repo. BUAS, MIT."],
    ],
    games: [
      {
        title: "none found / tech demo only",
        confidence: "none",
        source: "card 1113, github.com/mxcop/src-dgi",
      },
    ],
    note: "Different sparsity prior than Split RC. Surfels on surfaces vs world-space hashmap probes. Author does not call it production-ready.",
  },
  {
    id: "rcnee",
    label: "RC-NEE",
    year: "2025",
    card: "card 1114",
    stores: "2D cascade field as a hierarchical directional PDF for next-event estimation. Fluence splatted back with bilinear atomic add.",
    where: "Path PDF. 2D.",
    dynamic: "Not a realtime GI cache. RC guides a path tracer.",
    failure: "Uncommented prototype. 2D only. Snapshot repo, last push 2025-04-25.",
    status: "WIP. github.com/entropylost/vlam.",
    timeline: [
      ["2025-04-23", "vlam created."],
      ["2025-04-25", "Last push in the card record."],
    ],
    games: [
      {
        title: "none found / tech demo only",
        confidence: "none",
        source: "card 1114, radiance.wiki RC-guided NEE",
      },
    ],
    note: "Every other community RC is a raster GI cache. This one walks the cascade tree to pick an angle. Not pbrt-style NEE on explicit lights.",
  },
  {
    id: "split",
    label: "Split RC",
    year: "2026",
    card: "card 208",
    stores: "World-space RC probes in a sparse hashmap. Ray splitting bins hit intervals into the cascade whose spatial/angular budget matches that distance.",
    where: "Sparse world probes.",
    dynamic: "Yes. Realtime 3D diffuse GI. Preprint. Implementable.",
    failure: "Interior leak / probe bias. Leaks are not solved.",
    status: "Preprint. Freeman and Sannikov, 2026-07-22, arXiv 2607.20384.",
    timeline: [
      ["2023", "Founding dense 3D storage wall. Card 005, 1108."],
      ["2026-07-22", "Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes. arXiv 2607.20384."],
    ],
    games: [
      {
        title: "none found / tech demo only. Paper evaluates single-frame and temporally accumulated modes on several scenes, not a shipped title.",
        confidence: "none",
        source: "card 208, arXiv 2607.20384",
      },
    ],
    note: "This is the living 3D RC successor: sparse hashmap plus ray splitting. Remaining GI bug is interior leak / probe bias. Do not write that 3D RC is finished.",
  },
];

const comparisonMethods: Method[] = [
  {
    id: "ir",
    label: "Instant radiosity",
    year: "1997",
    card: "card 450",
    stores: "Virtual point lights deposited by a quasi-random walk. Indirect light is the VPL sum.",
    where: "Many-light / VPL. Offline-to-interactive research.",
    dynamic: "In principle yes. Original paper is hardware many-lights, not a probe volume.",
    failure: "VPL sampling noise, singularity, and the cost of shading too many lights.",
    status: "Paper. SIGGRAPH 1997, Keller. DOI 10.1145/258734.258769.",
    timeline: [
      ["1997", "Keller, Instant Radiosity, SIGGRAPH."],
      ["2005+", "RSM, ISM, LPV specialize the many-light view for GPUs."],
    ],
    games: [
      {
        title: "none found / tech demo only for Keller's original walk. Later shipped GI uses descendants, listed under RSM and LPV.",
        confidence: "none",
        source: "card 450",
      },
    ],
    note: "Root of the many-light family. Ask of any later RTGI: many-light, probe, voxel, or cascade-interval?",
  },
  {
    id: "ivol",
    label: "Irradiance volume",
    year: "1998",
    card: "card 451",
    stores: "Directional irradiance H(x,ω) on a spatial grid so any oriented patch can look up local lighting.",
    where: "World-space volume samples.",
    dynamic: "Semi-dynamic rooms in the original. Precomputed field, interpolated query.",
    failure: "Leak through thin walls if interpolation ignores occlusion. Low spatial resolution smears lighting.",
    status: "Paper. IEEE CGA 1998, Greger et al. DOI 10.1109/38.656788.",
    timeline: [
      ["1998", "Greger, Shirley, Hubbard, Greenberg. The Irradiance Volume."],
      ["2008", "Chen, Lighting and Material of Halo 3, SIGGRAPH course. SH irradiance volumes / SH lightmaps on the shipped title."],
    ],
    games: [
      {
        title: "Halo 3. SH lightmaps for static geometry, SH irradiance-volume style lookups for moving objects. Not Greger's paper running unmodified.",
        confidence: "shipped",
        source: "Chen, SIGGRAPH 2008 course notes, advances.realtimerendering.com/s2008/SIGGRAPH-Lighting of Halo 3.pdf. Cites GSHG98.",
      },
    ],
    note: "The move later probes keep making: store directional lighting in space, not only on meshes.",
  },
  {
    id: "prt",
    label: "PRT",
    year: "2002",
    card: "card 366",
    stores: "Static object transport in a low-order SH basis. Exit radiance is a matrix-vector product per vertex or texel.",
    where: "Baked per-object transfer. Lighting can be a dynamic environment map.",
    dynamic: "Lights, not geometry. High-frequency shadows and moving casters are out of scope.",
    failure: "Static geometry assumption. Low-frequency lighting only.",
    status: "Paper. SIGGRAPH 2002, Sloan, Kautz, Snyder. DOI 10.1145/566570.566612.",
    timeline: [
      ["2002", "Sloan, Kautz, Snyder. Precomputed Radiance Transfer."],
      ["2008", "Halo 3 renders dynamic objects with PRT against an SH lighting vector. Chen SIGGRAPH 2008."],
    ],
    games: [
      {
        title: "Halo 3, dynamic objects.",
        confidence: "shipped",
        source: "Chen 2008 SIGGRAPH course notes. Card 366 for the paper.",
      },
    ],
    note: "Opposite trade from RC and DDGI. Bake transport once, relight with a few dot products.",
  },
  {
    id: "rsm",
    label: "RSM",
    year: "2005",
    card: "card 292",
    stores: "Shadow map plus world position, normal, and reflected flux. Each texel is a VPL.",
    where: "Light view.",
    dynamic: "Yes. Rebuild the RSM every frame with the shadow pass. One-bounce diffuse.",
    failure: "One-bounce. VPL sampling noise. Fill-rate. No occlusion on the secondary lights unless a later method adds it.",
    status: "Paper. I3D 2005, Dachsbacher and Stamminger. DOI 10.1145/1053427.1053460.",
    timeline: [
      ["2005", "Reflective Shadow Maps, I3D."],
      ["2009-2010", "CryENGINE 3 LPV injects downsampled RSM VPLs into an SH volume. Kaplanyan SIGGRAPH 2009 / I3D 2010."],
    ],
    games: [
      {
        title: "No standalone RSM GI title found. RSM ships as the injection stage of CryENGINE 3 LPV. See LPV for Crysis 2 PC.",
        confidence: "middleware",
        source: "card 292, I3D 2010 LPV paper",
      },
    ],
    note: "Where secondary lights from the light's view starts. LPV, ISM, and later cascade methods answer it.",
  },
  {
    id: "lightcuts",
    label: "Lightcuts",
    year: "2005",
    card: "card 1042",
    stores: "Binary light tree over hundreds of thousands of point lights. Per-pixel perceptual cut with an error bound.",
    where: "Offline CPU ray tracing.",
    dynamic: "Not a realtime probe grid. Original algorithm is offline.",
    failure: "Cluster approximation. Glossy transport needs later bidirectional work. Not Vulkan GI.",
    status: "Paper. SIGGRAPH / TOG 2005, Walter et al. DOI 10.1145/1073204.1073318.",
    timeline: [
      ["2005", "Lightcuts."],
      ["2006", "Multidimensional Lightcuts."],
      ["2012", "Bidirectional Lightcuts."],
    ],
    games: [
      {
        title: "none found / tech demo only",
        confidence: "none",
        source: "card 1042, Cornell project page",
      },
    ],
    note: "How you shade a VPL cloud sublinearly. Same tree-cut shape as cascade interval merging, different machine.",
  },
  {
    id: "lpv",
    label: "LPV",
    year: "2010",
    card: "card 277",
    stores: "Nested 3D grids of low-order SH coefficients. RSM VPLs injected, then iteratively propagated through a geometry volume.",
    where: "World-space SH lattice. Cascades follow the camera.",
    dynamic: "Yes. 2010s dynamic GI. Millisecond console budgets in the paper's engine integration.",
    failure: "Light leaking. Low-order SH smears high-frequency directionality.",
    status: "Paper plus engine. I3D 2010, Kaplanyan and Dachsbacher. SIGGRAPH 2009 CryENGINE 3 course.",
    timeline: [
      ["2009", "Kaplanyan, Light Propagation Volumes in CryEngine 3, SIGGRAPH Advances."],
      ["2010", "Cascaded LPV, I3D. Integrated into CryENGINE 3 on PC, PS3, Xbox 360 in the paper."],
      ["2011", "Crysis 2 ships. Crytek tells Digital Foundry the full realtime GI was disabled on consoles for artifacts and budget. High-end PC kept the innovative GI. Consoles used a coarser art-directed approximation."],
    ],
    games: [
      {
        title: "Crysis 2, high-end PC. Consoles: disabled. Crytek interview, not a second-hand feature list.",
        confidence: "shipped",
        source: "GamesIndustry.biz / Digital Foundry Crysis 2 tech interview. I3D 2010 for engine integration. Card 277.",
      },
    ],
    note: "Classical cascade foil. Nested spatial LOD for dynamic GI. RC later reframes the cascade around radiance intervals, not SH lattice hops. I did not list Crysis 3 or Ryse. Those claims were weaker than the Crysis 2 interview.",
  },
  {
    id: "vct",
    label: "VCT / VXGI",
    year: "2011",
    card: "cards 120, 272",
    stores: "Sparse voxel octree of incoming radiance. A handful of mip-filtered cones gather two-bounce-ish GI.",
    where: "Voxel clip-map or octree. NVIDIA VXGI uses a clip-map, not an octree.",
    dynamic: "Yes. 2010s dynamic GI. Voxel update cost is the production tax.",
    failure: "Voxel resolution, rebuild cost, light leak through thin geometry. Kung 2025 thesis, card 1115, measures screenspace RC against VCT and still sees RC depth-discontinuity leaks.",
    status: "Paper I3D 2011, Crassin et al. NVIDIA VXGI is the industrial library. UE4 GitHub branch. No dedicated VXGI GI ship found.",
    timeline: [
      ["2009", "GigaVoxels."],
      ["2011", "Interactive Indirect Illumination Using Voxel Cone Tracing, I3D."],
      ["2014-2015", "NVIDIA VXGI, GTC/GDC. Maxwell Apollo 11 demo. UE4 GitHub integration."],
      ["2016", "Rise of the Tomb Raider ships VXAO, voxel ambient occlusion derived from VXGI, not full VXGI GI."],
      ["2018", "Wccftech reports no commercial game had implemented VXGI GI by GDC 2018."],
    ],
    games: [
      {
        title: "none found / tech demo only for full VXGI GI. Maxwell Apollo 11 demo. Rise of the Tomb Raider shipped VXAO, which is AO, not GI.",
        confidence: "demo",
        source: "NVIDIA GeForce VXAO article, GDC15 VXGI slides, Wccftech 2018 VXGI 2.0. Cards 120, 272.",
      },
    ],
    note: "The cone foil RC is measured against. Wins contact and local bounce, then pays voxel update and resolution.",
  },
  {
    id: "lfp",
    label: "Light-field probes",
    year: "2017",
    card: "card 327",
    stores: "Incoming radiance plus geometric visibility at world-space probes. Glossy and diffuse from the same field.",
    where: "World-space probes. Contents precomputed or rarely updated.",
    dynamic: "Camera yes. Probe contents no. That is the limitation DDGI removes.",
    failure: "Light leaks through thin walls if visibility tests fail. Stale probes if lighting moves.",
    status: "Paper. I3D 2017, McGuire, Mara, Nowrouzezahrai, Luebke. DOI 10.1145/3105762.3105774.",
    timeline: [
      ["2017", "Real-Time Global Illumination using Precomputed Light Field Probes."],
      ["2019", "DDGI dynamizes the probe field with hardware rays."],
    ],
    games: [
      {
        title: "none found / NVIDIA research. Production path is DDGI / RTXGI, not this paper unmodified.",
        confidence: "none",
        source: "card 327, NVIDIA research page",
      },
    ],
    note: "The probe representation DDGI later dynamizes and RC later sparsifies.",
  },
  {
    id: "ddgi",
    label: "DDGI",
    year: "2019",
    card: "card 318",
    stores: "World-space irradiance field in a probe grid. Irradiance plus octahedral visibility/depth. Moment-based interpolant.",
    where: "World probes, updated with hardware ray tracing.",
    dynamic: "Yes. Lighting and geometry can move. Probe field refreshes. Uniform angular resolution at each probe.",
    failure: "Probe bias, leaks, slow reaction vs reservoirs. Production paper adds a single self-shadow bias and a probe state machine.",
    status: "Paper. JCGT 8(2) 2019, Majercik et al. Shipped as NVIDIA RTXGI.",
    timeline: [
      ["2019", "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields, JCGT."],
      ["2020", "Scaling Probe-Based Real-Time Dynamic Global Illumination for Production, card 256."],
      ["2020-11", "NetEase Justice is NVIDIA's first announced RTXGI game."],
    ],
    games: [
      {
        title: "Justice, NetEase. First game NVIDIA announced with RTXGI.",
        confidence: "shipped",
        source: "NVIDIA Technical Blog, 2020-11-09, Justice Adds NVIDIA RTX Global Illumination",
      },
    ],
    note: "Industrial probe GI RC is measured against. Uniform angular resolution everywhere is the thing RC refuses.",
  },
  {
    id: "rtxgi",
    label: "RTXGI scaling",
    year: "2020",
    card: "card 256",
    stores: "Production DDGI. Cascaded probe volumes, probe state machine, irradiance reused as prefiltered radiance for glossy.",
    where: "NVIDIA RTXGI SDK. Unity, UE4 plugins, proprietary titles.",
    dynamic: "Yes. Same DDGI deal, with work pruning and cascade layout for large worlds.",
    failure: "Still probe GI. Bias knobs and state machines are how you ship it, not a new theory.",
    status: "Paper plus SDK. JCGT / arXiv 2009.10796. Majercik, Marrs, Spjut, McGuire.",
    timeline: [
      ["2020", "Scaling paper. Lessons from folding DDGI into RTXGI, Unity, UE4, proprietary titles."],
      ["2021-07-29", "Escape from Naraka ships with RTXGI on UE4 NvRTX."],
      ["2021-12", "ICARUS ships RTXGI Infinite Scrolling Volumes for an open world."],
    ],
    games: [
      {
        title: "Escape from Naraka. RTXGI / DDGI volume in UE4 NvRTX.",
        confidence: "shipped",
        source: "NVIDIA Technical Blog, RTX for Indies, Escape from Naraka",
      },
      {
        title: "ICARUS. First announced use of RTXGI Infinite Scrolling Volumes.",
        confidence: "shipped",
        source: "NVIDIA GeForce News, ICARUS Featuring NVIDIA DLSS and RTX Global Illumination Out Now",
      },
    ],
    note: "Same family as DDGI. Listed separately because card 256 is the industrial checklist, not a second algorithm.",
  },
  {
    id: "gi10",
    label: "GI-1.0",
    year: "2023",
    card: "card 231",
    stores: "Preprocess-free two-level radiance cache. Hardware ray queries. Handful of rays per pixel at high resolution.",
    where: "World cache hierarchy. AMD research / Capsaicin. Brixelizer GI is a later simplified FidelityFX implementation.",
    dynamic: "Yes. Probes plus HW rays, aimed at console-class ray budgets.",
    failure: "Explicitly not an RC variant. Positions itself between blurry irradiance probes and noisy reservoir GI.",
    status: "Preprint. arXiv 2310.19855. Boissé et al. No shipped GI-1.0 title found.",
    timeline: [
      ["2023-10", "GI-1.0 arXiv 2310.19855."],
      ["2024-07", "FidelityFX SDK 1.1 ships Brixelizer GI, described by AMD as a simplified GI-1.0. SDK sample, not a game announcement."],
    ],
    games: [
      {
        title: "none found / tech demo only. AMD Capsaicin / FidelityFX Brixelizer GI samples. No title-level GI-1.0 ship found.",
        confidence: "none",
        source: "card 231, GPUOpen Brixelizer GI, Wccftech 2024-07-11",
      },
    ],
    note: "Compare its cache hierarchy to cascade-interval storage. Do not treat them as the same algorithm.",
  },
  {
    id: "restir",
    label: "ReSTIR GI",
    year: "2021",
    card: "2020s SOTA, not RC",
    stores: "Reservoirs of path samples, resampled across space and time. Screen-space GI resampling on a path tracer.",
    where: "Path-traced secondary surfaces. RTXDI SDK.",
    dynamic: "Yes. Noisy, detailed, expensive compared with probes. Console-class budgets are the GI-1.0 complaint.",
    failure: "Noise, disocclusion, reservoir reuse artifacts. Needs a denoiser or DLSS Ray Reconstruction in the shipped path.",
    status: "Paper plus shipped path tracing. Ouyang et al. 2021. Cyberpunk 2077 Overdrive / Ultimate.",
    timeline: [
      ["2020", "ReSTIR DI, Bitterli et al., direct lighting."],
      ["2021", "ReSTIR GI: Path Resampling for Real-Time Path Tracing."],
      ["2023-04", "Cyberpunk 2077 Ray Tracing: Overdrive technology preview. SIGGRAPH 2023 course still planning ReSTIR GI."],
      ["2023-12 / 2024-03", "Ultimate Edition / GDC 2024: ReSTIR GI, radiance caching, and DLSS Ray Reconstruction take Overdrive out of preview."],
    ],
    games: [
      {
        title: "Cyberpunk 2077, Ray Tracing: Overdrive in the Ultimate Edition.",
        confidence: "shipped",
        source: "GDC 2024, RT: Overdrive in Cyberpunk 2077 Ultimate Edition. TweakTown citing NVIDIA Update 2.1 ReSTIR GI.",
      },
    ],
    note: "2020s SOTA that is not RC. Reservoir resampling, not cascade intervals.",
  },
  {
    id: "lumen",
    label: "Lumen",
    year: "2022",
    card: "2020s SOTA, not RC",
    stores: "UE5 hybrid GI. Software path traces a simplified scene, distance fields plus screenspace. Hardware path uses triangles.",
    where: "World plus screen. Unreal Engine 5.",
    dynamic: "Yes. Fully dynamic GI and reflections in the Fortnite ship.",
    failure: "Leaks remain, even on hardware Lumen. Digital Foundry noted new leaks, weak glass RT, and black voids for complex objects in reflections.",
    status: "Shipped middleware. Epic UE5. First title-level ship is Fortnite Chapter 4 / UE5.1.",
    timeline: [
      ["2021", "UE5 early access. Lumen in engine demos."],
      ["2022-12", "Fortnite Battle Royale Chapter 4 on UE5.1. Nanite, Lumen, Virtual Shadow Maps. Epic news post."],
    ],
    games: [
      {
        title: "Fortnite Battle Royale, Chapter 4. Software Lumen on consoles. Hardware Lumen optional on PC.",
        confidence: "shipped",
        source: "Epic, The Next Generation of Fortnite Battle Royale is Powered by Unreal Engine 5.1. Digital Foundry UE5 Fortnite analysis.",
      },
    ],
    note: "2020s SOTA that is not RC. A short sourced list. UE5 has more Lumen titles. I am not filling them in without the same class of primary source.",
  },
];

function methodTabs(id: string, methods: Method[]) {
  return (
    <Tabs
      id={id}
      tabs={methods.map((method) => ({
        id: method.id,
        label: method.label,
        body: MethodBody(method),
      }))}
    />
  );
}

export default function GiRadianceCascades() {
  return (
    <Stack gap={22}>
      <Stack gap={8}>
        <H1>Radiance Cascades and the GI line behind it</H1>
        <Text>
          Radiance Cascades stores near-to-far radiance in cascaded intervals and
          spends spatial resolution nearby, angular resolution far away. That is
          the penumbra hypothesis. 2D RC works. Dense 3D RC was storage-bound
          O(n³). The one shipped game path is screenspace, in Path of Exile 2.
          World-space 3D is still a family of escapes: UV charts, surfels, a
          2026 sparse-hashmap preprint with a leak.
        </Text>
      </Stack>
      <Row gap={24} wrap>
        <Stat value="2023" label="founding GitHub WIP" />
        <Stat value="PoE2" label="only sourced RC ship" tone="success" />
        <Stat value="O(n³)" label="dense 3D storage" tone="warning" />
        <Stat value="2607.20384" label="Split RC preprint" tone="info" />
      </Row>
      <Callout tone="warning" title="Leaks are not solved">
        Split RC is realtime 3D diffuse GI via sparse hashmap probes and ray
        splitting. Freeman and Sannikov, 2026-07-22, arXiv 2607.20384, card 208.
        Preprint. The remaining GI bug is interior leak / probe bias. The tech
        is implementable. Do not file the leaks under done.
      </Callout>
      <Callout tone="info" title="No HPG / SIGGRAPH / JCGT RC paper 2024-2026">
        The founding document is a GitHub WIP, card 005. PoE2 screenspace RC
        shipped, ExileCon 2023, card 1108. Holographic RC, 2025, card 211, is 2D
        on purpose. The paper cites the 3D memory wall. There is no holographic-3D
        paper. The 2024 Osborne/Sannikov RASTI article is a non-LTE formal
        solver, card 453, not a substitute game-GI venue paper.
      </Callout>
      <Divider />
      <H2>Lineage</H2>
      <Text>
        Two charts. The RC family hangs off the 2023 WIP. The older GI line is
        VPLs, volumes, SH bake, cones, then probes plus hardware rays. RC forks
        that line by refusing uniform angular resolution at every sample.
      </Text>
      <Tabs
        id="lineage"
        tabs={[
          {
            id: "rc-family",
            label: "RC family",
            body: (
              <Stack gap={10}>
                <FlowDiagram
                  markerId="rc-family-flow"
                  nodes={rcFamilyNodes}
                  edges={rcFamilyEdges}
                  nodeWidth={188}
                  nodeHeight={64}
                  rankGap={52}
                  nodeGap={22}
                />
                <Text tone="secondary" size="small">
                  Founding WIP fans out into screenspace PoE2, 2D Shadertoy,
                  holographic 2D, UV-space 3D, surfel, RC-NEE, and Split RC
                  sparse 3D.
                </Text>
              </Stack>
            ),
          },
          {
            id: "gi-spine",
            label: "Older GI line",
            body: (
              <Stack gap={10}>
                <FlowDiagram
                  markerId="gi-spine-flow"
                  nodes={giSpineNodes}
                  edges={giSpineEdges}
                  nodeWidth={176}
                  nodeHeight={64}
                  rankGap={48}
                  nodeGap={18}
                />
                <Text tone="secondary" size="small">
                  Instant radiosity, irradiance volume, PRT, RSM, Lightcuts,
                  LPV, VCT, light-field probes, DDGI, RTXGI, GI-1.0. ReSTIR GI
                  and Lumen sit as 2020s SOTA, not RC. Edge labels are the fork
                  argument: variable angular resolution versus uniform probes,
                  cones, and VPLs.
                </Text>
              </Stack>
            ),
          },
        ]}
      />
      <Divider />
      <H2>RC family at a glance</H2>
      <Table
        stickyHeader
        striped
        headers={["Method", "Year", "Card", "Where", "Dynamic 3D GI", "Failure"]}
        rows={[
          ["RC founding", "2023", "005", "2D world / SS; 3D written", "2D yes; dense 3D no", "3D VRAM"],
          ["PoE2 SS RC", "2023", "1108", "Screen", "SS only", "off-screen"],
          ["Shadertoy 2D", "2023", "1109", "2D", "no", "2D"],
          ["UV-space 3D", "2024", "1110", "UV", "PoC", "seams"],
          ["Holographic", "2025", "211", "2D frequency", "no", "3D memory"],
          ["Surfel RC", "2025", "1113", "surfels", "WIP 3D", "coverage"],
          ["RC-NEE", "2025", "1114", "path PDF", "not realtime cache", "2D prototype"],
          ["Split RC", "2026", "208", "sparse world probes", "yes realtime 3D diffuse", "leak/bias"],
        ]}
      />
      <Divider />
      <H2>Implementations</H2>
      <Text>
        Each tab is one method. What it stores, where it lives, whether it is
        dynamic 3D GI, the characteristic failure, status, a chronology, and
        sourced games. If a shipped title is missing, the row says so. No
        plausible filler.
      </Text>
      <Tabs
        id="families"
        tabs={[
          {
            id: "rc-impl",
            label: "RC methods",
            body: methodTabs("rc-methods", rcMethods),
          },
          {
            id: "gi-impl",
            label: "Comparison GI",
            body: methodTabs("gi-methods", comparisonMethods),
          },
        ]}
      />
      <Divider />
      <H2>How the comparison is supposed to be read</H2>
      <Table
        headers={["Family", "What it stores everywhere", "Cards"]}
        rows={[
          [
            "LPV / VCT",
            "2010s dynamic GI. SH lattice hops, or mip-filtered cones in a voxel volume.",
            "277, 120, 272",
          ],
          [
            "DDGI / GI-1.0",
            "Probes plus hardware rays. Uniform angular resolution at the sample, or a two-level radiance cache.",
            "318, 256, 231",
          ],
          [
            "ReSTIR GI / Lumen",
            "2020s SOTA that is not RC. Reservoirs on a path tracer, or UE5 hybrid SDF/screen/HW rays.",
            "not RC",
          ],
          [
            "Radiance Cascades",
            "Do not store uniform angular resolution everywhere. Near: high spatial, low angular. Far: the reverse.",
            "005, 1108, 208, 211",
          ],
        ]}
      />
      <Callout tone="neutral" title="Game list policy">
        Titles come from papers, GDC/SIGGRAPH talks, vendor posts, or the seed
        cards named in this canvas. Short and sourced. Confidence is shipped,
        demo, middleware, or none found. A missing game is written as none found
        / tech demo only.
      </Callout>
    </Stack>
  );
}

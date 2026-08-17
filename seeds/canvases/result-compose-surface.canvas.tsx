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

const NODE_W = 132;
const NODE_H = 36;

export default function ResultComposeSurface() {
  const theme = useHostTheme();
  const layout = computeDAGLayout({
    nodes: [
      { id: "source" },
      { id: "parse" },
      { id: "ok" },
      { id: "err" },
      { id: "chain" },
      { id: "catalog" },
    ],
    edges: [
      { from: "source", to: "parse" },
      { from: "parse", to: "ok" },
      { from: "parse", to: "err" },
      { from: "ok", to: "chain" },
      { from: "chain", to: "catalog" },
    ],
    direction: "horizontal",
    nodeWidth: NODE_W,
    nodeHeight: NODE_H,
    rankGap: 56,
    nodeGap: 28,
    padding: 12,
  });

  const labels: Record<string, string> = {
    source: "CardFile",
    parse: "parseCard",
    ok: "Ok<SeedCard>",
    err: "Err<ParseError>",
    chain: "chain",
    catalog: "Catalog",
  };

  return (
    <Stack gap={18}>
      <H1>Result compose surface</H1>
      <Text tone="secondary">
        Packer path in this repo: a total <Text as="span" weight="semibold">Result</Text> instead of
        thrown parse failures. Fail-fast under <Text as="span" weight="semibold">chain</Text>; collect
        with <Text as="span" weight="semibold">partitionResults</Text>.
      </Text>

      <Row gap={16} wrap>
        <Stat value="Ok | Err" label="Result tag" />
        <Stat value="chain" label="Compose" tone="info" />
        <Stat value="partition" label="Collect" tone="success" />
        <Stat value="0 throw" label="Domain core" />
      </Row>

      <Callout tone="info" title="Same morphism as the packer">
        CardFile → ParseResult → SeedCard. The catalog is only built from Ok values; every Err is
        printed and the process exits non-zero.
      </Callout>

      <Divider />

      <H2>Flow</H2>
      <H3>Parse then compose</H3>
      <svg
        width={layout.width}
        height={layout.height}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        role="img"
        aria-label="Result compose flow"
      >
        {layout.edges.map((edge, index) => {
          const midX = (edge.sourceX + edge.targetX) / 2;
          const midY = (edge.sourceY + edge.targetY) / 2;
          return (
            <path
              key={`${edge.from}-${edge.to}-${index}`}
              d={`M ${edge.sourceX} ${edge.sourceY} C ${midX} ${edge.sourceY}, ${midX} ${edge.targetY}, ${edge.targetX} ${edge.targetY}`}
              fill="none"
              stroke={theme.stroke.primary}
              strokeWidth={1.25}
              strokeDasharray={edge.isBackEdge ? "4 3" : undefined}
            />
          );
        })}
        {layout.nodes.map((node) => (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            <rect
              width={NODE_W}
              height={NODE_H}
              rx={6}
              fill={theme.fill.secondary}
              stroke={theme.stroke.primary}
            />
            <text
              x={NODE_W / 2}
              y={NODE_H / 2 + 4}
              textAnchor="middle"
              fill={theme.text.primary}
              fontSize="12"
              fontFamily="inherit"
            >
              {labels[node.id] ?? node.id}
            </text>
          </g>
        ))}
      </svg>

      <H2>Surface</H2>
      <Table
        headers={["Export", "Shape", "Role"]}
        rows={[
          ["ok / err", "A → Result<E, A>", "Constructors"],
          ["chain", "Result × (A → Result) → Result", "Compose, fail-fast"],
          ["partitionResults", "[Result] → { ok, err }", "Collect for the packer"],
        ]}
        columnAlign={["left", "left", "left"]}
      />

      <Callout tone="warning" title="Err is data">
        Do not throw in the domain core. The packer is the only place that turns leftover Err values
        into a process exit.
      </Callout>
    </Stack>
  );
}

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

function Eq({ children }: { children: string }) {
  const theme = useHostTheme();
  return (
    <div
      style={{
        fontFamily: MONO,
        fontSize: 13,
        lineHeight: "20px",
        color: theme.text.primary,
        padding: "8px 10px",
        background: theme.fill.tertiary,
        borderRadius: 6,
        overflowX: "auto",
        whiteSpace: "pre",
      }}
    >
      {children}
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  const theme = useHostTheme();
  return (
    <pre
      style={{
        margin: 0,
        fontFamily: MONO,
        fontSize: 13,
        lineHeight: "20px",
        color: theme.text.primary,
        padding: "12px 14px",
        background: theme.bg.elevated,
        border: `1px solid ${theme.stroke.tertiary}`,
        borderRadius: 6,
        overflowX: "auto",
        whiteSpace: "pre",
      }}
    >
      {children}
    </pre>
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

const flowNodes: FlowNode[] = [
  { id: "shape", label: "API shape", detail: "P_A(X) = Σ q X^R(q)", mono: true },
  { id: "algebra", label: "algebra", detail: "α_A : P_A → F_A", mono: true, emphasis: true },
  { id: "result", label: "Result(V, E)", detail: "V + E, the fallible carrier", mono: true, emphasis: true },
  { id: "function", label: "Function", detail: "ResultMorphism value", mono: true },
  { id: "kleisli", label: "and_then", detail: "g ★ f : A → Result(C, E)", mono: true },
  { id: "pair", label: "pair", detail: "W → Result(A × B, E)", mono: true },
  { id: "src", label: "src / owner", detail: "interprets α_A" },
];

const flowEdges: FlowEdge[] = [
  { from: "shape", to: "algebra", label: "not automatically a hom" },
  { from: "algebra", to: "result", label: "F includes Result" },
  { from: "result", to: "function" },
  { from: "function", to: "kleisli" },
  { from: "function", to: "pair" },
  { from: "kleisli", to: "src" },
  { from: "pair", to: "src" },
];

export default function ResultComposeSurface() {
  return (
    <Stack gap={22}>
      <Stack gap={8}>
        <H1>Anoptic API Algebra</H1>
        <Text>
          Intended public surface. No capability is removed. Reflected
          decompositions become private signatures. The public language names
          operations and enforceable laws.
        </Text>
      </Stack>

      <FlowDiagram
        markerId="general-flow"
        nodes={flowNodes}
        edges={flowEdges}
        nodeWidth={220}
        nodeHeight={70}
        rankGap={54}
        nodeGap={28}
      />

      <Eq>{`D --reify--> W --π_M--> W_M --C_M--> Result(E_M, Plan_M)
Result(V, E) = V + E
Function is the C++ object. ResultMorphism is the role.
and_then is Kleisli. pair is fail-fast on a shared witness.
headers name the type. src / owner interprets α_A.`}</Eq>

      <Row gap={24} wrap>
        <Stat value="27" label="public names" tone="success" />
        <Stat value="8" label="private signatures" />
        <Stat value="2" label="deleted collisions" tone="warning" />
        <Stat value="cc4696c0" label="HEAD still uses old names" />
      </Row>

      <Callout tone="info" title="HEAD is not this spelling yet">
        cc4696c0 still ships ResultAlgebra, OperationAlgebra, PureOperation,
        public Lifted, unary compose, and all. This canvas is the surface after
        the naming pass.
      </Callout>

      <Divider />

      <H2>anoptic_results.h</H2>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>1 public</Mark>
          <H3>Result&lt;Value, Error&gt;</H3>
        </Row>
        <Text>
          The fallible carrier. Exactly one inhabitant exists: success
          containing Value, or failure containing Error. It remains an alias
          for std::expected&lt;Value, Error&gt;.
        </Text>
        <Eq>{`Result(V, E) = V + E`}</Eq>
        <CodeBlock>{`ano::Result<Texture, ResourceError>`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>2 public</Mark>
          <H3>ResultError&lt;Error&gt;</H3>
        </Row>
        <Text>
          The admissibility constraint for an error type. It currently proves
          that an error can cross a Result boundary without throwing while
          being moved. It is a property of the error representation, not a
          separate algebra.
        </Text>
        <CodeBlock>{`static_assert(ano::ResultError<ResourceError>);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>3 public</Mark>
          <H3>ResultCarrier&lt;Type&gt;</H3>
        </Row>
        <Text>
          Recognizes whether a normalized type is exactly a
          Result&lt;Value, Error&gt;. It strips aliases, references, and
          cv-qualification, then uses reflection to inspect the template and
          its arguments.
        </Text>
        <CodeBlock>{`static_assert(ano::ResultCarrier<
    const ano::Result<Texture, ResourceError>&>);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::ResultSignature&lt;Type&gt;</H3>
        </Row>
        <Text>
          Formerly ResultAlgebra&lt;Type&gt;. It is not an algebra. It is
          reflected type information. It becomes private because users ask
          whether something is a ResultCarrier. Implementation code performs
          the decomposition.
        </Text>
        <CodeBlock>{`ResultAlgebra<Type>`}</CodeBlock>
        <CodeBlock>{`detail::ResultSignature<Type>`}</CodeBlock>
        <CodeBlock>{`using Carrier = std::expected<Value, Error>;
using Value   = ...;
using Error   = ...;`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>4 public</Mark>
          <H3>failure(error)</H3>
        </Row>
        <Text>
          Injects an error into the failure side. The destination Result
          supplies V through contextual conversion.
        </Text>
        <Eq>{`E  →  V + E`}</Eq>
        <CodeBlock>{`return ano::failure(ResourceError::invalidFormat);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>5 public</Mark>
          <H3>result_if(condition, error)</H3>
        </Row>
        <Text>Produces a unit-valued result.</Text>
        <Eq>{`resultIf : Bool × E → 1 + E`}</Eq>
        <CodeBlock>{`auto valid = ano::result_if(
    header.magic == glbMagic,
    ResourceError::invalidFormat);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>6 public</Mark>
          <H3>result_if(condition, value, error)</H3>
        </Row>
        <Text>
          Selects success or failure. It remains eager because it is an
          ordinary C++ function: both value and error arguments are evaluated
          before entry.
        </Text>
        <Eq>{`resultIf : Bool × V × E → V + E`}</Eq>
        <CodeBlock>{`return ano::result_if(
    offset < bytes.size(),
    bytes[offset],
    ParseError::outOfBounds);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>7 public</Mark>
          <H3>has_error(result, error)</H3>
        </Row>
        <Text>
          Checks the failure inhabitant without opening the success side. It
          requires a statically valid, nonthrowing comparison.
        </Text>
        <CodeBlock>{`if (ano::has_error(result, ParseError::truncated))
    recover();`}</CodeBlock>
      </Stack>

      <Divider />

      <H2>anoptic_compose.h</H2>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::OperationSignature&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Formerly OperationAlgebra&lt;Operation&gt;. It describes a reflected
          ordinary callable. It contains signature information, not an
          algebra.
        </Text>
        <CodeBlock>{`OperationAlgebra<Operation>`}</CodeBlock>
        <CodeBlock>{`detail::OperationSignature<Operation>`}</CodeBlock>
        <CodeBlock>{`Operation
Parameter
Domain
Value
nullary`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::ResultOperationSignature&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Formerly ResultOperationAlgebra&lt;Operation&gt;. It describes a
          reflected fallible callable. Internal declarations no longer claim
          that each inspected function possesses its own algebra.
        </Text>
        <Eq>{`A → Result(B, E)`}</Eq>
        <CodeBlock>{`ResultOperationAlgebra<Operation>`}</CodeBlock>
        <CodeBlock>{`detail::ResultOperationSignature<Operation>`}</CodeBlock>
        <CodeBlock>{`Operation
Parameter
Domain
Carrier
Value
Error
nullary`}</CodeBlock>
        <CodeBlock>{`using Signature =
    detail::ResultOperationSignature<Operation>;`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::DirectOperation&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Formerly PureOperation&lt;Operation&gt;. The old name was false. The
          concept did not prove purity. It only proved that an operation
          returns an ordinary value rather than a Result. A mapper that
          publishes renderer state can satisfy it. That is direct, but plainly
          not pure. It becomes private because callers ordinarily care about
          ResultTransformable or ErrorMappable.
        </Text>
        <CodeBlock>{`PureOperation<Operation>`}</CodeBlock>
        <CodeBlock>{`detail::DirectOperation<Operation>`}</CodeBlock>
        <CodeBlock>{`[](const Output& output) noexcept {
    publish_output(target, output);
}`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>8 public</Mark>
          <H3>NonthrowingOperation&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Recognizes a concrete reflected callable whose invocation is
          noexcept and whose declaration shape is supported. It says nothing
          about whether the return value is a Result.
        </Text>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>9 public</Mark>
          <H3>ResultOperation&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Recognizes a morphism of that form. It combines a concrete reflected
          declaration, a supported parameter shape, noexcept invocation, a
          reflected Result return type, and an admissible error
          representation.
        </Text>
        <Eq>{`A → Result(B, E)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::SameResultError&lt;Left, Right&gt;</H3>
        </Row>
        <Text>
          Formerly public. It is only one clause used to construct stronger
          public concepts. There is no reason for ordinary callers to name it
          directly.
        </Text>
        <CodeBlock>{`SameResultError<Left, Right>`}</CodeBlock>
        <Eq>{`E_left = E_right`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>10 public</Mark>
          <H3>KleisliComposable&lt;Left, Right&gt;</H3>
        </Row>
        <Text>
          Proves that two fallible operations form a legal Kleisli chain. It
          rejects mismatched intermediate types, mismatched error types, and
          invalid nullary transitions at compile time.
        </Text>
        <Eq>{`f : A → Result(B, E)
g : B → Result(C, E)
g ★ f : A → Result(C, E)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>11 public</Mark>
          <H3>ResultTransformable&lt;Operation, Mapper&gt;</H3>
        </Row>
        <Text>
          Proves that an ordinary mapper can legally transform a successful
          result. The spelling stays because it accurately describes the
          constraint used by .transform().
        </Text>
        <Eq>{`f : A → Result(B, E)
m : B → C
map(m, f) : A → Result(C, E)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>12 public</Mark>
          <H3>ErrorMappable&lt;Operation, Mapper&gt;</H3>
        </Row>
        <Text>
          Proves that a mapper can transform the failure side.
        </Text>
        <Eq>{`f : A → Result(B, E)
m : E → F
mapError(m, f) : A → Result(B, F)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>13 public</Mark>
          <H3>KleisliPairable&lt;Left, Right&gt;</H3>
        </Row>
        <Text>
          Proves that two fallible operations can read the same witness and
          produce a product. The shared domain is part of the type constraint.
          Failure selection is left-to-right and fail-fast.
        </Text>
        <Eq>{`f : W → Result(A, E)
g : W → Result(B, E)
W → Result(A × B, E)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>14 public</Mark>
          <H3>FoldStep&lt;Step, State, Item&gt;</H3>
        </Row>
        <Text>
          Recognizes an ordinary state transition. This name stays. It
          describes the role of the operation without claiming that compose.h
          already provides a general-purpose fold.
        </Text>
        <Eq>{`State × Item → State`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>15 public</Mark>
          <H3>KleisliFoldStep&lt;Step, State, Item, Error&gt;</H3>
        </Row>
        <Text>
          Recognizes a fallible state transition. Again, this recognizes the
          step shape. It is not itself a fold.
        </Text>
        <Eq>{`State × Item → Result(State, Error)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>16 public</Mark>
          <H3>ScanRange&lt;Range&gt;</H3>
        </Row>
        <Text>
          Recognizes the source-range properties required by the existing
          bounded scan operation. It does not mean all things that can
          mathematically be scanned. It is the concrete contract needed by
          .scan_into().
        </Text>
      </Stack>

      <Divider />

      <H2>The function value</H2>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>17 public</Mark>
          <H3>Function&lt;Operation&gt;</H3>
        </Row>
        <Text>
          The concrete, statically typed function value. It stores the
          operation with [[no_unique_address]]. Empty reflected operations
          therefore have no meaningful runtime payload. Its raw storage and
          implementation aliases become private. Users construct one through
          lift, function, or another composition operation. This prevents
          direct aggregate construction from bypassing the storage
          constraints.
        </Text>
        <CodeBlock>{`ano::Function<ParseOperation>`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>18 public</Mark>
          <H3>ResultMorphism&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Function names the concrete C++ object. ResultMorphism names its
          role in the fallible composition category.
        </Text>
        <CodeBlock>{`template<class Operation>
using ResultMorphism = Function<Operation>;`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>19 public</Mark>
          <H3>Invocation</H3>
        </Row>
        <Text>
          A Function remains directly callable. Both supported forms remain.
          Invocation returns the exact reflected Result&lt;Value, Error&gt;
          carrier.
        </Text>
        <CodeBlock>{`auto result = parse_file(bytes);`}</CodeBlock>
        <CodeBlock>{`operation()
operation(input)`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>20 public</Mark>
          <H3>.and_then(next)</H3>
        </Row>
        <Text>
          Constructs a reusable Kleisli composition. Nothing runs while this
          value is being declared. It builds a statically verified function
          value. Calling it later executes the route. Failure short-circuits
          automatically.
        </Text>
        <CodeBlock>{`inline constexpr auto load_scene =
    ano::lift<^^parse_glb>
        .and_then(canonicalize_scene)
        .and_then(cook_scene)
        .and_then(realize_scene);`}</CodeBlock>
        <CodeBlock>{`auto scene = load_scene(bytes);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>21 public</Mark>
          <H3>.transform(mapper)</H3>
        </Row>
        <Text>
          Maps the successful value while preserving the failure type. The
          name stays because it matches std::expected::transform and
          accurately distinguishes success mapping from error mapping.
        </Text>
        <Eq>{`Result(B, E)  --map(m)-->  Result(C, E)`}</Eq>
        <CodeBlock>{`auto published =
    prepare_scene.transform(publish_scene);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>22 public</Mark>
          <H3>.map_error(mapper)</H3>
        </Row>
        <Text>
          Transforms the error domain while preserving success.
        </Text>
        <Eq>{`Result(B, E)  --mapError(m)-->  Result(B, F)`}</Eq>
        <CodeBlock>{`auto resource_route =
    parse_route.map_error(to_resource_error);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>23 public</Mark>
          <H3>.scan_into(initial, step, output)</H3>
        </Row>
        <Text>
          Runs the existing bounded, seeded, inclusive left scan. The seed
          itself is not written. Processing is bounded by the smaller of the
          source length and output capacity. A fallible step stops on the
          first error. Already written prefixes remain written. This is
          deliberately not renamed to fold, reduce, or generic scan.
        </Text>
        <CodeBlock>{`input = [x₁, x₂, x₃]
seed  = s₀`}</CodeBlock>
        <CodeBlock>{`s₁ = step(s₀, x₁)
s₂ = step(s₁, x₂)
s₃ = step(s₂, x₃)

output = [s₁, s₂, s₃]`}</CodeBlock>
      </Stack>

      <Divider />

      <H2>Construction and products</H2>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::Lifted&lt;Declaration&gt;</H3>
        </Row>
        <Text>
          Formerly public Lifted&lt;Declaration&gt;. It is the generated empty
          callable that splices a reflected declaration back into directly
          compiled code. Users do not need to name it. They name lift.
          Intermediary tests that inspect Lifted itself can disappear.
        </Text>
        <CodeBlock>{`Lifted<Declaration>`}</CodeBlock>
        <CodeBlock>{`ano::lift<^^parse_glb>`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>24 public</Mark>
          <H3>lift&lt;^^declaration&gt;</H3>
        </Row>
        <Text>
          Turns a reflected named declaration into a zero-storage
          ResultMorphism. Reflection verifies the declaration shape at compile
          time. The resulting call remains a normal direct C++ call after
          optimization. The name lift stays. It is concise, accurate, and
          does not create a misleading collision here.
        </Text>
        <CodeBlock>{`inline constexpr auto parse =
    ano::lift<^^parse_glb>;`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>25 public</Mark>
          <H3>function(operation)</H3>
        </Row>
        <Text>
          Turns an operation object or lambda into a Function. This is the
          runtime-object / capture-friendly construction path.
        </Text>
        <CodeBlock>{`auto publish = ano::function(
    [&](Scene scene) noexcept -> ano::Result<Handle, Error> {
        return publish_scene(scene, target);
    });`}</CodeBlock>
      </Stack>

      <Callout tone="warning" title="Deleted: unary compose(operation)">
        Current behavior does not compose anything. It merely forwards to
        function(operation). That is a direct collision with the ordinary
        mathematical and programming meaning of composition.
      </Callout>
      <CodeBlock>{`ano::compose(operation)`}</CodeBlock>
      <CodeBlock>{`ano::function(operation)`}</CodeBlock>
      <CodeBlock>{`ano::function(operation).and_then(next)`}</CodeBlock>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>26 public</Mark>
          <H3>pair(left, right, ...)</H3>
        </Row>
        <Text>
          Both consume one shared witness. The left operation runs first. If
          it fails, the right operation is not run. The variadic form replaces
          all. This retains the existing left-to-right, fail-fast product
          construction. No separate word is needed for repeated pairing.
        </Text>
        <CodeBlock>{`auto dimensions =
    ano::pair(read_width, read_height);`}</CodeBlock>
        <CodeBlock>{`auto checks =
    ano::pair(check_format,
              check_extent,
              check_schema);`}</CodeBlock>
      </Stack>

      <Callout tone="warning" title="Deleted: all(...)">
        This name collides with established predicates. Haskell all, Python
        all, LINQ .All, and Elixir Enum.all? all mean universal Boolean
        quantification. Our operation constructs a product of fallible
        computations. The capability moves into variadic pair.
      </Callout>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>pair-pack compatibility</H3>
        </Row>
        <Text>
          The public AllPairable concept disappears. The implementation still
          needs to prove that an entire parameter pack can be paired, but that
          is a private recursive or folded predicate. It is an implementation
          requirement of pair(...), not an independent public operation.
        </Text>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>27 public</Mark>
          <H3>ANO_LET(name, operation)</H3>
        </Row>
        <Text>
          Declares a local function value. It remains scope-local and
          namespace-respecting. The macro bridges the declaration grammar
          only. All type checking still belongs to C++ concepts, reflection,
          and the concrete function type.
        </Text>
        <CodeBlock>{`ANO_LET(load_scene,
    ano::lift<^^parse_glb>
        .and_then(canonicalize_scene)
        .and_then(cook_scene)
        .and_then(realize_scene));`}</CodeBlock>
        <CodeBlock>{`const auto load_scene = ano::function(...);`}</CodeBlock>
      </Stack>

      <Divider />

      <H2>Final disposition</H2>
      <Table
        stickyHeader
        striped
        headers={["Current spelling", "Canonical spelling", "Visibility"]}
        rowTone={[
          "info",
          "info",
          "info",
          "info",
          "info",
          "info",
          "info",
          "info",
          "danger",
          "warning",
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
        ]}
        rows={[
          ["ResultAlgebra", "detail::ResultSignature", "Private"],
          ["OperationAlgebra", "detail::OperationSignature", "Private"],
          ["ResultOperationAlgebra", "detail::ResultOperationSignature", "Private"],
          ["local CarrierAlgebra / Algebra", "CarrierSignature / Signature", "Private"],
          ["PureOperation", "detail::DirectOperation", "Private"],
          ["SameResultError", "detail::SameResultError", "Private"],
          ["Lifted", "detail::Lifted", "Private"],
          ["AllPairable", "private pair-pack predicate", "Private"],
          ["compose(operation)", "deleted; use function(operation)", "Removed"],
          ["all(a, b, ...)", "pair(a, b, ...)", "Consolidated"],
          ["lift", "lift", "Public"],
          ["pair", "pair", "Public"],
          ["and_then", "and_then", "Public"],
          ["transform", "transform", "Public"],
          ["map_error", "map_error", "Public"],
          ["scan_into", "scan_into", "Public"],
          ["Function", "Function", "Public"],
          ["ResultMorphism", "ResultMorphism", "Public"],
          ["ANO_LET", "ANO_LET", "Public"],
        ]}
      />

      <Callout tone="success" title="The resulting API says exactly what it does">
        The public language now names actual operations and enforceable laws.
        Reflected decompositions become private signatures. Pure disappears
        because we never proved purity. A unary wrapper stops calling itself
        composition. Universal quantification stops sharing a name with
        product construction.
      </Callout>
    </Stack>
  );
}

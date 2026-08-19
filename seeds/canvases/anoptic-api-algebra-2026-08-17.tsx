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
  { id: "habit", label: "C habit", detail: "status + out-param, or throw" },
  { id: "result", label: "Result(V, E)", detail: "one value, two ways", mono: true, emphasis: true },
  { id: "function", label: "Function", detail: "a callable that returns that", mono: true },
  { id: "kleisli", label: "and_then", detail: "success feeds the next step", mono: true },
  { id: "pair", label: "pair", detail: "same input, first failure wins", mono: true },
  { id: "src", label: "the engine", detail: "the call actually runs here" },
];
const flowEdges: FlowEdge[] = [
  { from: "habit", to: "result", label: "both ways in one box" },
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
          This document describes the public language for fallible
          computation in Anoptic. A C function typically reports failure
          through a status code, a null pointer, or an exception, while the
          successful value occupies a separate channel. Here both outcomes
          occupy one value. The remaining declarations specify how such
          values are constructed, chained, mapped, and paired.
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
      <Row gap={24} wrap>
        <Stat value="26" label="public names" tone="success" />
        <Stat value="8" label="private signatures" />
        <Stat value="3" label="deleted collisions" tone="warning" />
        <Stat value="295759e3" label="HEAD hyper-c-resourcemgr" />
      </Row>
      <Callout tone="info" title="cc4696c0 is still an active work in progress">
        Algebraic traits, topologies, and API are all subject to change.
      </Callout>
      <Divider />
      <H2>anoptic_results.h</H2>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>1 public</Mark>
          <H3>Result&lt;Value, Error&gt;</H3>
        </Row>
        <Text>
          Result is a tagged sum. A value of this type holds exactly one
          inhabitant: a success of type Value, or a failure of type Error.
          It never holds both. It never holds neither. Status codes, null
          pointers, and exceptions report failure on a channel separate from
          the successful value. Result stores both outcomes in one object.
        </Text>
        <Text>
          The representation is a wrapper around
          `std::expected&lt;Value, Error&gt;`. The header adds a closed set of
          construction and composition laws, and compile-time admission for
          the types and callables that may participate. The in-memory layout
          remains that of expected. The algebra is the set of rules under
          which a route is well-formed. The compiler rejects a route that
          violates those rules.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Tagged sum",
              "The object holds a value or an error. A tagged union, equivalently Either. Not a pair. Not value-and-maybe-error.",
            ],
            [
              "Bind",
              "A success is fed to the next fallible step. An error skips remaining steps and is the result.",
            ],
            [
              "Map success",
              "Rewrite the value. The error type is unchanged. Failure is untouched.",
            ],
            [
              "Map error",
              "Rewrite the error. The value type is unchanged. Success is untouched.",
            ],
            [
              "Fail-fast pair",
              "Two checks on one input. The left check runs first. The first failure is the result. If both would fail, the result is the left error.",
            ],
            [
              "Associativity",
              "Grouping a chain does not change which steps run. (f then g) then h is the same work as f then (g then h).",
            ],
            [
              "Admissible error",
              "Moving the error cannot throw. Failure is not permitted to become a third control path.",
            ],
          ]}
        />
        <Text>
          A parse-then-cook-then-realize route therefore yields the first
          failure as its result. Intermediate steps do not write
          `if (!r) return r;`. A type that throws on move is not a legal
          error. A function that returns a bare Texture is not a fallible
          step. Both violations are diagnosed at compile time.
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
          ResultError is the admission constraint on the failure inhabitant.
          It currently requires one mechanical property: E can be moved into
          a Result without throwing.
        </Text>
        <Text>
          Failure in Result is data. If a move of E throws, the failure path
          becomes an exception, which is a third control path. ResultError
          therefore constrains the error representation. It is not a second
          algebra, and it does not classify types as conceptually erroneous.
        </Text>
        <Table
          headers={["If this holds", "Then"]}
          rows={[
            [
              "E is nothrow-movable",
              "A failed Result can be returned, stored, and forwarded as ordinary data.",
            ],
            [
              "E throws on move",
              "The type is rejected. A throw cannot be hidden inside the error side.",
            ],
          ]}
        />
        <CodeBlock>{`static_assert(ano::ResultError<ResourceError>);`}</CodeBlock>
      </Stack>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>3 public</Mark>
          <H3>ResultCarrier&lt;Type&gt;</H3>
        </Row>
        <Text>
          ResultCarrier is a concept that recognizes a Result after
          normalization. The input need not be spelled
          `Result&lt;Texture, ResourceError&gt;`. A typedef, a const
          reference, or an alias that reduces to expected may still
          qualify. Aliases, references, and cv-qualification are stripped
          first. The remaining type must be exactly a Result.
        </Text>
        <Text>
          Recognition uses reflection on the template and its two arguments.
          The concept answers yes or no. It does not expose Value and Error.
          Decomposition is an implementation concern.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Normalizes first",
              "Aliases, references, and const/volatile are stripped. Spelling is irrelevant.",
            ],
            [
              "Exact template",
              "After normalization the type must be expected of two types. Not a pair. Not optional.",
            ],
            [
              "Yes or no",
              "A concept. It does not yield Value and Error. That is ResultSignature.",
            ],
          ]}
        />
        <CodeBlock>{`static_assert(ano::ResultCarrier<
    const ano::Result<Texture, ResourceError>&>);`}</CodeBlock>
      </Stack>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::ResultSignature&lt;Type&gt;</H3>
        </Row>
        <Text>
          Formerly ResultAlgebra. That name treated the struct as the
          algebra. The struct is a reflected decomposition: the carrier, the
          Value, and the Error. The operation is analogous to reading the
          fields of a struct with offsetof. It does not state how those
          fields compose.
        </Text>
        <Text>
          The type is private. Callers ask whether a type is a
          ResultCarrier. Implementation code performs the decomposition.
          A public unpack invited treating a typedef sheet as a law.
        </Text>
        <Table
          headers={["Field", "In English"]}
          rows={[
            ["Carrier", "The expected type itself, after normalization."],
            ["Value", "The success inhabitant."],
            ["Error", "The failure inhabitant."],
          ]}
        />
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
          failure injects an error into a Result. Given a value of type E,
          it constructs the failure inhabitant of V + E. A C function would
          return EINVAL and rely on the caller to treat that integer as a
          status. The destination Result already has type V + E, so V is
          supplied by contextual conversion. The success type need not be
          named at the call site.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Injection",
              "E is the input. A Result is the output. No Value is constructed.",
            ],
            [
              "Contextual V",
              "The return slot names V. failure does not.",
            ],
            [
              "Nothrow move",
              "The error is moved in. ResultError already required that.",
            ],
          ]}
        />
        <Eq>{`E  →  V + E`}</Eq>
        <CodeBlock>{`return ano::failure(ResourceError::invalidFormat);`}</CodeBlock>
      </Stack>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>5 public</Mark>
          <H3>result_if(condition, error)</H3>
        </Row>
        <Text>
          result_if is the unit-valued conditional guard. Require this
          condition. Succeed with nothing when true. Return this error when
          false. The type is Result(Unit, E), written 1 + E. There is no
          other overload.
        </Text>
        <Text>
          A payload is not an argument to result_if. It is introduced
          afterward by composition. transform runs an infallible callable
          only after success. and_then runs a fallible callable only after
          success. The callable object is constructed eagerly. Its body is
          not invoked when the guard fails.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Unit guard",
              "True stores empty success. False stores E.",
            ],
            [
              "Single primitive",
              "Bool × E to Result(Unit, E). Payload construction is derived.",
            ],
            [
              "Lazy continuation",
              "transform introduces V on success. and_then starts another fallible step.",
            ],
            [
              "Complementary directions",
              "transform: success permits a value to exist. and_then: an existing success permits the next fallible step. Not an inverse. Failure discards the successful path.",
            ],
          ]}
        />
        <Eq>{`result_if : Bool × E → Result(Unit, E)
transform : Result(Unit, E) × (Unit → V) → Result(V, E)
and_then  : Result(A, E) × (A → Result(B, E)) → Result(B, E)`}</Eq>
        <CodeBlock>{`auto valid = ano::result_if(
    header.magic == glbMagic,
    ResourceError::invalidFormat);`}</CodeBlock>
        <CodeBlock>{`return ano::result_if(
        offset < bytes.size(),
        ParseError::outOfBounds)
    .transform([&]() noexcept {
        return bytes[offset];
    });`}</CodeBlock>
        <CodeBlock>{`return ano::result_if(
        offset < bytes.size(),
        ParseError::outOfBounds)
    .and_then([&]() noexcept -> ano::Result<Value, ParseError> {
        return decode(bytes[offset]);
    });`}</CodeBlock>
        <Text>
          Calling transform on the std::expected carrier does not itself
          enforce Anoptic's reflected noexcept admission. That admission
          belongs to the composition surface. The examples are safe when
          the lambda is explicitly noexcept.
        </Text>
      </Stack>
      <Callout tone="warning" title="Deleted: result_if(condition, value, error)">
        The three-argument overload was an ordinary C++ function. Both
        value and error were evaluated before entry. A bounds check could
        not protect bytes[offset]. The derived form is result_if(c, e)
        followed by transform of a unit-to-V callable. That spelling
        evaluates the payload only on success and reuses the proved map
        and bind laws.
      </Callout>
      <Eq>{`result_if(c, v, e)  ≅  result_if(c, e).map(() ↦ v)`}</Eq>
      <Table
        headers={["Before", "After"]}
        rows={[
          [
            "Payload passed as an eager argument",
            "Payload enclosed in a lazy callable",
          ],
          [
            "Unsafe expression runs before the check",
            "Callable body runs only on success",
          ],
          [
            "Three-argument overload",
            "Unit guard plus transform or and_then",
          ],
        ]}
      />
      <CodeBlock>{`return ano::result_if(
    offset < bytes.size(),
    bytes[offset],
    ParseError::outOfBounds);`}</CodeBlock>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>7 public</Mark>
          <H3>has_error(result, error)</H3>
        </Row>
        <Text>
          has_error tests whether a Result holds a particular failure.
          It inspects the error inhabitant and compares it to the given
          error. A typical use is to recover from one named case, such as
          a truncated file, and to leave every other error unchanged. The
          success side is not opened.
        </Text>
        <Text>
          The comparison must be well-formed and nonthrowing. If `==`
          could throw, classifying the error would introduce a third
          control path. On success the function returns false. The success
          inhabitant is not read.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Failure only",
              "Success yields false. The value is not read.",
            ],
            [
              "Typed compare",
              "The given error must be comparable to the Result's E without throwing.",
            ],
            [
              "No unwrap",
              "The error is not extracted. The function reports whether it equals the given case.",
            ],
          ]}
        />
        <CodeBlock>{`if (ano::has_error(result, ParseError::truncated))
    recover();`}</CodeBlock>
      </Stack>
      <Divider />
      <H2>anoptic_compose.h</H2>
      <Text>
        results.h defines the Result carrier. compose.h defines callables that
        return that carrier and the operations that compose those callables.
        Four words appear in the names. Each is a standard programming idea
        with inherited vocabulary.
      </Text>
      <Table
        headers={["Word", "The C picture", "Here"]}
        rows={[
          [
            "Morphism",
            "A function from A to B.",
            "A function from A to Result of B. The carrier is part of the type.",
          ],
          [
            "Kleisli",
            "g(f(x)), when f returns exactly what g requires.",
            "g applied to the success value inside f(x). On failure, g is not invoked.",
          ],
          [
            "Map",
            "For each slot, apply f. The container shape is unchanged.",
            "Apply f to the value inside the carrier, or to the error. The result remains a Result.",
          ],
          [
            "Fold",
            "A loop with an accumulator. One running value, one answer.",
            "The step (state, item) produces the next state. The scan is explicit. It is not a hidden reduce.",
          ],
        ]}
      />
      <Text>
        Each word is defined in the section that first uses it. Three private
        signatures unpack callables first. Reflection inspects a function the
        way ResultCarrier inspects a type.
      </Text>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::OperationSignature&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Formerly OperationAlgebra. The type is the reflected shape of an
          ordinary callable. It records the callable, the parameter, the
          domain that parameter denotes, the return type, and whether the
          callable is nullary. Those fields are signature information. They
          are not composition laws.
        </Text>
        <Table
          headers={["Field", "In English"]}
          rows={[
            ["Operation", "The inspected callable type."],
            ["Parameter", "The first declared argument, or void."],
            ["Domain", "That parameter with references and cv-qualifiers removed."],
            ["Value / Return", "The call's return type. The type may or may not be a Result."],
            ["nullary", "True when the callable takes no argument."],
          ]}
        />
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
          Formerly ResultOperationAlgebra. Because the return type is a
          Result, the signature also names Carrier, Value, and Error.
          Internal code binds the type with `using Signature = ...`. The
          name does not assert that each inspected function possesses its
          own algebra. The algebra is the composition laws. The function is
          one admitted arrow.
        </Text>
        <Table
          headers={["Field", "In English"]}
          rows={[
            ["Carrier", "The Result return type."],
            ["Value", "The success inhabitant of that Result."],
            ["Error", "The failure inhabitant."],
            ["Domain", "The input, if any. The A in A to Result of B."],
          ]}
        />
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
          Formerly PureOperation. PureOperation did not establish purity.
          Purity requires no IO, no mutation, and equal outputs for equal
          inputs. This concept established none of those properties. It
          established only that the operation returns an ordinary value
          rather than a Result.
        </Text>
        <Text>
          A mapper that publishes renderer state can satisfy the concept.
          That callable is direct and not pure. The concept is private
          because callers use ResultTransformable or ErrorMappable, not the
          internal classification that establishes those concepts.
        </Text>
        <Table
          headers={["What it proves", "What it does not"]}
          rows={[
            ["Returns an ordinary value, not a Result", "No IO"],
            ["NonthrowingOperation already held", "No mutation"],
            ["Usable as a transform or error mapper", "Same inputs, same outputs"],
          ]}
        />
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
          NonthrowingOperation is the first public admission condition on a
          callable. The compiler must be able to observe and invoke the
          function. Reflection finds a concrete declaration. The supported
          arities are 0 and 1. The invocation is noexcept.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Visible declaration",
              "Not an overload set and not a template that cannot be instantiated. One inspectable callable.",
            ],
            [
              "Arity 0 or 1",
              "A thunk, or a function of one input. Two-argument callables belong to fold steps.",
            ],
            [
              "noexcept",
              "The call cannot throw. Failure, if any, is returned as data.",
            ],
            [
              "Silent on Result",
              "int qualifies. Result qualifies. The concept does not distinguish them.",
            ],
          ]}
        />
        <Text>
          The concept asserts that the callable can be invoked without a
          throw. It does not assert that the callable is a fallible step.
          A function that returns int can satisfy it. A function that
          returns Result can satisfy it. ResultOperation adds the Result
          requirement.
        </Text>
      </Stack>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>9 public</Mark>
          <H3>ResultOperation&lt;Operation&gt;</H3>
        </Row>
        <Text>
          A ResultOperation is a fallible step. Morphism is defined here.
          In ordinary mathematics a morphism is a structure-preserving map
          from A to B. The corresponding C habit is a function from A to B.
          fopen has type FILE* fopen(path). The argument is a path. The
          return is a pointer. Failure is a null pointer, outside the
          success type.
        </Text>
        <Text>
          Definition. A Result-morphism is a function from A to Result of B,
          not from A to B. Failure belongs to the return type. The
          structure preserved is the carrier: a success value may be passed
          to the next step, and a failure is already a complete answer.
          Arrow denotes the same idea.
        </Text>
        <Table
          headers={["Habit", "Type of the step"]}
          rows={[
            ["C function", "A to B. Failure is null, errno, or a write to an out-parameter."],
            ["C++ exception", "A to B. Failure unwinds. The return type does not describe the failure path."],
            ["Result-morphism", "A to Result of B. Success and failure are both in the return type."],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Admitted callable",
              "NonthrowingOperation already holds: visible, arity 0 or 1, noexcept.",
            ],
            [
              "Returns a Result",
              "Reflection observes V + E, not a bare B.",
            ],
            [
              "Admissible E",
              "ResultError holds. The failure side is data.",
            ],
            [
              "Domain A",
              "The input, if any. Nullary denotes no input: a thunk that still returns a Result.",
            ],
          ]}
        />
        <Text>
          A ResultOperation is a visible callable that can be invoked
          without throwing and that returns V + E for an admissible E.
          That fact is the admission decision. Lean begins after admission
          and treats the callable as an arrow A → Result(B, E). C++
          concepts decide admission. The proofs assume admission already
          holds.
        </Text>
        <Eq>{`A → Result(B, E)`}</Eq>
      </Stack>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::SameResultError&lt;Left, Right&gt;</H3>
        </Row>
        <Text>
          A chain or pair of Result-morphisms is defined only when both
          steps share one error type E. Distinct error types yield no
          single result type. ParseError and ResourceError become
          comparable only after one is mapped onto the other.
        </Text>
        <Table
          headers={["If this holds", "Then"]}
          rows={[
            [
              "Both are ResultOperations, same E",
              "The composite has a single failure type E.",
            ],
            [
              "The E types differ",
              "The concept does not hold. Unify E with map_error, or treat the steps as incomparable.",
            ],
          ]}
        />
        <Text>
          Formerly public. The predicate is now a clause of stronger
          concepts and is not written at call sites.
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
          Ordinary function composition is defined when the codomain of f
          equals the domain of g. If f : A → B and g : B → C, then the
          composite is the function x ↦ g(f(x)). The intermediate type
          matches on the nose.
        </Text>
        <Text>
          A Result-morphism does not return B. It returns Result(B, E).
          Ordinary composition g(f(x)) is therefore ill-typed. g expects
          B, not the box. Kleisli composition is the composition of arrows
          into a monad, named for Heinrich Kleisli. For Result it is
          defined as follows.
        </Text>
        <Text>
          Given f : A → Result(B, E) and g : B → Result(C, E), the
          Kleisli composite has type A → Result(C, E). On success of f
          the value B is passed to g. On failure of f, g is not applied
          and that error is the result. Both steps must share E, or the
          composite has no single result type.
        </Text>
        <Table
          headers={["Habit", "What composition does"]}
          rows={[
            [
              "Ordinary compose",
              "g(f(x)). The codomain of f equals the domain of g. No Result box.",
            ],
            [
              "Kleisli compose",
              "If f(x) is success b, evaluate g(b). If f(x) is failure e, return e. g is not applied to e.",
            ],
            [
              "Pair, later",
              "Both arrows read the same input. Not sequential. The second step does not consume the first success.",
            ],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Matching intermediate",
              "The success type of f equals the input type of g.",
            ],
            [
              "Same error",
              "SameResultError. The chain has one E.",
            ],
            [
              "Nullary discipline",
              "A nullary step may follow only a void success.",
            ],
            [
              "Left unit",
              "The success-wrapping identity, then g, equals g.",
            ],
            [
              "Right unit",
              "f, then the success-wrapping identity, equals f.",
            ],
            [
              "Associativity",
              "(f then g) then h equals f then (g then h).",
            ],
            [
              "Failure short-circuit",
              "The first failure is the result. Subsequent steps are not applied.",
            ],
          ]}
        />
        <Text>
          When the concept holds, `.and_then` is well-typed. A broken
          chain is rejected at compile time. A sequence such as
          parse.and_then(cook).and_then(realize) is ordinary composition
          through the Result box rather than through B.
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
          Map is the functor action on a container. Given a container of
          elements of type B and a function m : B → C, map produces a
          container of the same shape whose elements are the images under
          m. For an array, length is preserved and each slot is replaced.
          For Optional, a present value is rewritten and an empty value
          is left unchanged. The shape of the box is invariant.
        </Text>
        <Text>
          Result is a two-sided box. Mapping the success side is defined
          as follows. If the box holds B, replace it by C = m(B) and
          retain E. If the box holds E, leave it unchanged. m is never
          applied to a failure. m returns an ordinary C, not a Result.
          That is the distinction from Kleisli composition. The next
          Kleisli step may fail, while a map step cannot introduce a new
          failure. It rewrites a success that is already present.
        </Text>
        <Text>
          ResultTransformable holds when an operation together with a
          mapper forms a legal success-side map. The identifier
          transform is used because the method is `.transform()`, and
          map would collide with map_error and with other map names in
          C++.
        </Text>
        <Table
          headers={["Habit", "What map does"]}
          rows={[
            ["Array map", "Length preserved. Each element replaced. The result is still an array."],
            ["Result transform", "Box preserved. Success rewritten. Failure left unchanged. The result is still a Result of the same E."],
            ["Kleisli and_then", "The next step returns a Result and may fail. Not a map."],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Mapper is direct",
              "m : B to C, ordinary return. DirectOperation, not a Result. The mapper may still mutate the world.",
            ],
            [
              "Error preserved",
              "E is unchanged. A failed parse remains that parse error.",
            ],
            [
              "Identity",
              "Mapping by the identity function leaves the Result unchanged.",
            ],
            [
              "Fusion",
              "map f, then map g, equals map (g after f).",
            ],
          ]}
        />
        <Text>
          When the concept holds, `.transform(publish)` is well-typed on a
          Result of Scene. publish may write GPU state. The step remains a
          map: direct, not pure.
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
          Error-side map is the same functor action on the other summand.
          The container remains a Result. The function is applied to E,
          not to B. A successful B is left unchanged. A failure is
          rewritten to a new failure type F.
        </Text>
        <Text>
          This is the boundary map between error vocabularies. A parser
          produces ParseError. A resource manager produces ResourceError.
          Mapping E to F at the boundary leaves a successful scene
          unchanged and does not require the manager to import the
          parser's error type.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Mapper is direct",
              "m : E to F. Ordinary return. F itself must be ResultError.",
            ],
            [
              "Success preserved",
              "A successful B is unchanged. The producer is not rerun.",
            ],
            [
              "Identity",
              "Mapping errors by the identity function leaves the Result unchanged.",
            ],
            [
              "Fusion",
              "map_error f, then map_error g, equals map_error (g after f).",
            ],
          ]}
        />
        <Text>
          When the concept holds, `.map_error(to_resource_error)` is
          well-typed. The failure type of the whole arrow changes. The
          operation is not a string patch onto errno.
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
          Kleisli composition is sequential: the second step consumes the
          success of the first. Pair is the other binary combination of
          Result-morphisms. Both arrows read one shared input W, a file
          header, a shared witness, or a byte span, and produce either a
          product of values or a single error.
        </Text>
        <Text>
          The qualifier Kleisli records that both sides remain fallible
          arrows with a common E, and that failure remains data. It does
          not record sequencing. Pair is not a chain. The right arrow
          does not receive the left success. It receives the same W that
          the left arrow received.
        </Text>
        <Table
          headers={["Machine", "Data flow"]}
          rows={[
            ["and_then", "x to f, then the success of f to g. Sequential."],
            ["pair", "x to f and the same x to g. Independent reads. Fail-fast on the left error."],
            ["transform", "x to f, then a direct function on the success. No second Result."],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Shared domain",
              "The input type is a shared W, or both arrows are nullary. That W is part of the constraint.",
            ],
            [
              "Same error",
              "SameResultError. One E.",
            ],
            [
              "Left first",
              "If left fails, right is not applied. If both would fail, the result is the left error.",
            ],
            [
              "Product of values",
              "Success is a pair (A, B), not a Boolean. Both values are retained.",
            ],
            [
              "Object successes",
              "A and B are object types, not void. A pair requires two values.",
            ],
          ]}
        />
        <Text>
          When the concept holds, `pair` is well-typed. read_width and
          read_height both inspect the header. A missing width means
          height is not read.
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
          A fold consumes a sequence and a binary step and produces one
          value. The step takes the current accumulator and the next item
          and returns the next accumulator. After the last item, that
          accumulator is the result. Sum is a fold. Product is a fold. A
          predicate that asks whether any element is true is a fold. C#
          Aggregate, Python functools.reduce, and Haskell foldl are the
          same operator under different names.
        </Text>
        <Text>
          A scan applies the same step and retains every intermediate
          accumulator, not only the last. An inclusive left scan starts
          from a seed and writes the state after item 1, after item 2,
          after item 3. The seed itself is not written. C++
          std::inclusive_scan has the same shape. A running gold total
          over loot drops is a scan. The final total is the fold of that
          same step.
        </Text>
        <Text>
          compose.h does not provide a general-purpose fold. It provides
          `.scan_into()`, defined later. That scan requires a step
          function. FoldStep is that step: state and item in, new state
          out. No Result. No throw. The name records the role. The header
          does not grow a reduce around it.
        </Text>
        <Table
          headers={["Machine", "What is retained"]}
          rows={[
            ["Fold / reduce", "One final accumulator. The last state of the walk."],
            ["Scan", "Every intermediate accumulator, in order."],
            ["FoldStep", "The loop body only. Not the walk itself."],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Two arguments",
              "State first, item second. That order is the running-total order.",
            ],
            [
              "Same state type in and out",
              "The accumulator does not change representation mid-loop.",
            ],
            [
              "Direct return",
              "New state is an ordinary value. This step cannot fail.",
            ],
            [
              "noexcept",
              "The loop body is not allowed to throw. A fallible step is the next concept.",
            ],
          ]}
        />
        <Text>
          Concretely, a noexcept function that takes a Total and a Drop
          and returns their gold sum is a FoldStep when the types line
          up. scan_into is what walks a range with that body. This
          concept admits the body only.
        </Text>
        <Eq>{`State × Item → State`}</Eq>
      </Stack>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>15 public</Mark>
          <H3>KleisliFoldStep&lt;Step, State, Item, Error&gt;</H3>
        </Row>
        <Text>
          The same loop body, now a Result-morphism on the pair (state,
          item). The running state may fail to advance. The first error
          stops the scan. That is Kleisli in the small: the next
          iteration runs only when this one succeeded.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Fallible step",
              "(state, item) to Result of state. Same E as the scan's source.",
            ],
            [
              "Short-circuit",
              "First error ends the walk. Later items are not visited.",
            ],
            [
              "Prefix remains",
              "States already written stay written. A failed scan remains observable.",
            ],
            [
              "Still not a fold",
              "This is the body. scan_into is the loop.",
            ],
          ]}
        />
        <Text>
          Concretely, a step that parses the next record into the running
          builder, or returns truncated, is a KleisliFoldStep. The scan
          stops at the bad record. Records already written remain
          visible.
        </Text>
        <Eq>{`State × Item → Result(State, Error)`}</Eq>
      </Stack>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>16 public</Mark>
          <H3>ScanRange&lt;Range&gt;</H3>
        </Row>
        <Text>
          An abstract fold may walk any sequence: a linked list, an input
          iterator, a generator. This header does not. ScanRange is the
          contract `.scan_into()` requires. The implementation is a
          pointer and a count.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Real object",
              "The range is stored. A temporary expression that cannot be named is rejected.",
            ],
            [
              "Contiguous",
              "Elements sit in one block. data() is a pointer.",
            ],
            [
              "Sized",
              "size() is known up front. The bound is the min of source length and output capacity.",
            ],
            [
              "noexcept observers",
              "data and size do not throw. Walking the range cannot become a third control path.",
            ],
          ]}
        />
        <Text>
          Concretely, a std::span, a std::vector, or a C array. Not a
          std::list. Not an input stream. Those sequences require a
          different walk. This concept rejects them.
        </Text>
      </Stack>
      <Divider />
      <H2>The function value</H2>
      <Text>
        The preceding names were tickets and laws. Function is the
        statically typed callable object those laws admit. It is
        constructed, composed, and invoked later. ResultMorphism is that
        same object, named as the arrow defined above.
      </Text>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>17 public</Mark>
          <H3>Function&lt;Operation&gt;</H3>
        </Row>
        <Text>
          The concrete C++ object. The C analogue is a function pointer.
          The wrapper may be empty. A reflected callable with no captures
          is stored with `[[no_unique_address]]`. After inlining there is
          no payload. The call is the underlying call.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Statically typed",
              "The Operation is in the type. No void*, no type erasure, no vtable.",
            ],
            [
              "Empty-friendly",
              "A lift of a named function can be zero bytes. A capturing lambda is as big as its captures.",
            ],
            [
              "Private storage",
              "Brace-initialization by hand is not part of the API. lift, function, and the composition methods construct it.",
            ],
            [
              "Nothrow store",
              "Moving the operation into the Function cannot throw. Same rule as ResultError, now for the callable.",
            ],
          ]}
        />
        <Text>
          Concretely, `ano::Function&lt;ParseOperation&gt;` is a value
          that may live in a constexpr variable, be passed, and be
          called. The constraints were checked at construction.
        </Text>
        <CodeBlock>{`ano::Function<ParseOperation>`}</CodeBlock>
      </Stack>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>18 public</Mark>
          <H3>ResultMorphism&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Two names, one object. Function is the struct in memory, as
          FILE* is a pointer. ResultMorphism is the role: the value is an
          admitted fallible arrow A → Result(B, E). The distinction is
          the same as "this FILE*" versus "this is the handle used for
          reads."
        </Text>
        <Text>
          Morphism was introduced at ResultOperation as a property of a
          callable. Here it is a type alias, so prose and proofs can say
          morphism without treating the C++ value as anything other than
          Function. If Operation is a ResultOperation, the Function is a
          ResultMorphism. If it is only a DirectOperation, the value is
          still a Function, and is not a Result-morphism. There is no
          box.
        </Text>
        <Table
          headers={["Name", "What it names"]}
          rows={[
            ["Function", "The C++ object. Storage, call operator, methods."],
            ["ResultMorphism", "That object, viewed as an arrow into a Result."],
            ["ResultOperation", "The concept that admitted the underlying callable."],
          ]}
        />
        <CodeBlock>{`template<class Operation>
using ResultMorphism = Function<Operation>;`}</CodeBlock>
      </Stack>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>19 public</Mark>
          <H3>Invocation</H3>
        </Row>
        <Text>
          Invocation applies the held morphism. The form is zero
          arguments, or one input. The return is the exact reflected
          Result, not a decayed status code and not a thrown exception.
          If the Function was a chain, this is when that chain runs.
        </Text>
        <Table
          headers={["Form", "When"]}
          rows={[
            ["operation()", "Nullary. A thunk. No witness."],
            ["operation(input)", "Unary. The shared witness, the bytes, the header."],
          ]}
        />
        <Text>
          Concretely, `load_scene(bytes)` is ordinary C++ call syntax. The
          algebra ran at compile time. The work runs now.
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
          This is Kleisli composition as a method. C++ already spells it
          `and_then` on `std::expected`. The next fallible step is
          attached. Nothing runs while the value is being declared. The
          compiler checks KleisliComposable. The result is a new Function.
          Invocation later is what executes the route.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Declaration is construction",
              "The chain is a value. No I/O happens at the assignment.",
            ],
            [
              "Short-circuit",
              "First error is the result. Later steps do not run.",
            ],
            [
              "Associativity",
              "Three and_then calls in a row are one route. Parentheses do not change the work.",
            ],
            [
              "New Function",
              "The result is another morphism, not a Result. Invocation is a separate step.",
            ],
          ]}
        />
        <Text>
          Concretely, if parse fails, cook never sees the bytes. If cook
          fails, realize never sees the scene. The `if (!r) return r;`
          ladder is not written by hand. The method is that checked
          ladder.
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
          This is success-map as a method. The name matches
          `std::expected::transform` on purpose. The corresponding
          concept is ResultTransformable. The method is the operation
          that concept admits.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Success rewritten",
              "B becomes C. The box is still a Result.",
            ],
            [
              "Error untouched",
              "Same E. A failed prepare is still that failure.",
            ],
            [
              "Direct mapper",
              "publish_scene may write GPU state. Direct, not pure.",
            ],
            [
              "New Function",
              "Again a morphism. Invocation is what runs it.",
            ],
          ]}
        />
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
          This is error-map as a method. The corresponding concept is
          ErrorMappable. The method is the boundary between two error
          vocabularies.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Failure rewritten",
              "E becomes F. ParseError becomes ResourceError.",
            ],
            [
              "Success untouched",
              "A good scene is still that scene.",
            ],
            [
              "Identity and fusion",
              "Do-nothing mapper is a no-op. Two maps fuse into one.",
            ],
          ]}
        />
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
          This is the loop. FoldStep and KleisliFoldStep were the body.
          ScanRange was the source. scan_into is the walk: bounded, seeded,
          inclusive, left to right, into a caller-owned buffer.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Seeded",
              "s0 is the starting state. It is not written. The first output is step(s0, x1).",
            ],
            [
              "Inclusive left",
              "Each written slot is the state after that item, not before.",
            ],
            [
              "Bounded",
              "Stops at min(source length, output capacity). No unbounded walk.",
            ],
            [
              "Fallible prefix",
              "A failing step stops the walk. Already written slots stay. The written prefix shows how far the walk reached.",
            ],
            [
              "Not fold",
              "A fold would return only the last state. This writes every intermediate.",
            ],
          ]}
        />
        <Text>
          Concretely, the call takes a seed, a step, and a span, and fills
          the span. If the step is a KleisliFoldStep, the return is a
          Result of that span. If the step is a FoldStep, the return is
          the span.
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
      <Text>
        A Function is constructed in one of two ways. lift wraps a named
        declaration that reflection can recover. function wraps a callable
        object or lambda that already exists. pair applies independent
        fallible operations to one shared input. Two deleted names formerly
        misidentified those roles.
      </Text>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::Lifted&lt;Declaration&gt;</H3>
        </Row>
        <Text>
          Formerly public. Lifted is the generated empty callable that
          splices a reflected declaration into ordinary compiled code.
          After optimization the call is `parse_glb(bytes)`. Callers write
          `lift`. They do not name Lifted.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Empty callable",
              "No captures. no_unique_address. The Function wrapping it can be zero bytes.",
            ],
            [
              "Splice, not dispatch",
              "The call becomes a direct call to the named function, not a table lookup.",
            ],
            [
              "Private on purpose",
              "The public constructor is lift. Lifted is an implementation detail.",
            ],
          ]}
        />
        <CodeBlock>{`Lifted<Declaration>`}</CodeBlock>
        <CodeBlock>{`ano::lift<^^parse_glb>`}</CodeBlock>
      </Stack>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>24 public</Mark>
          <H3>lift&lt;^^declaration&gt;</H3>
        </Row>
        <Text>
          lift constructs a zero-storage ResultMorphism from a named
          function whose declaration reflection can recover. The `^^`
          operator denotes that declaration, not a string and not a
          function pointer. The compiler checks admission of the
          declaration at compile time.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Named only",
              "A declaration recoverable by reflection. A lambda is constructed with function().",
            ],
            [
              "Admitted",
              "Fallible, noexcept, arity 0 or 1. Same gates as ResultOperation.",
            ],
            [
              "Zero storage",
              "The resulting Function can be empty. After inlining it is parse_glb.",
            ],
            [
              "Name stays",
              "The name denotes recovery of a declaration into a Function.",
            ],
          ]}
        />
        <Text>
          `ano::lift&lt;^^parse_glb&gt;` is a constexpr morphism that may
          be chained. Lifted is not constructed at the call site.
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
          function constructs a Function from a callable that has no
          reflectable name, including a lambda or an object that captures
          `target`. The object is stored inside a Function under the same
          nothrow storage rule.
        </Text>
        <Table
          headers={["Constructor", "Argument"]}
          rows={[
            ["lift", "A named declaration. Zero storage. Spliced call."],
            ["function", "A value: lambda, functor, already-built Function. May capture."],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Nothrow store",
              "Moving the operation in cannot throw.",
            ],
            [
              "Admitted callable",
              "NonthrowingOperation is required. ResultOperation is required for a ResultMorphism.",
            ],
            [
              "Not composition",
              "One operation in, one Function out. Composition is and_then.",
            ],
          ]}
        />
        <CodeBlock>{`auto publish = ano::function(
    [&](Scene scene) noexcept -> ano::Result<Handle, Error> {
        return publish_scene(scene, target);
    });`}</CodeBlock>
      </Stack>
      <Callout tone="warning" title="Deleted: unary compose(operation)">
        The unary form does not compose. It forwards to function(operation).
        The name compose denotes composition of two functions. A unary
        wrapper is not that operation. Construct a single callable with
        function. Compose two fallible steps with and_then.
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
          pair is the function form of KleisliPairable. Two fallible
          operations share one input. read_width and read_height both
          inspect the same header. The left operation runs first. If
          width is absent, height is not read and the result is the width
          error. If both succeed, the result is both values. The success
          inhabitant is a product, not a Boolean conjunction.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Shared witness",
              "Both morphisms read the same W. Right does not receive left's success.",
            ],
            [
              "Fail-fast, left first",
              "Left error wins, even if right would also have failed.",
            ],
            [
              "Product, not predicate",
              "Success is (A, B). Both values are retained.",
            ],
            [
              "Variadic is repeated pair",
              "pair(a, b, c) is pair(pair(a, b), c), reassociated. The pairing is the same.",
            ],
            [
              "Associativity",
              "Parentheses on the tuples change the nesting, not which checks run.",
            ],
          ]}
        />
        <CodeBlock>{`auto dimensions =
    ano::pair(read_width, read_height);`}</CodeBlock>
        <CodeBlock>{`auto checks =
    ano::pair(check_format,
              check_extent,
              check_schema);`}</CodeBlock>
      </Stack>
      <Callout tone="warning" title="Deleted: all(...)">
        In Haskell, Python, LINQ, and Elixir, all denotes universal
        Boolean quantification over a collection. The deleted operation
        constructed a product of fallible computations under that name.
        Variadic pair now provides the product.
      </Callout>
      <Table
        headers={["Surface", "Quantifier reading", "Implemented operation"]}
        rows={[
          [
            "all(check_a, check_b)",
            "Universal Boolean quantification.",
            "Run both on one input. First failure wins. Product of values.",
          ],
          [
            "pair(check_a, check_b)",
            "A product of values",
            "The same product, under the product name.",
          ],
        ]}
      />
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>pair-pack compatibility</H3>
        </Row>
        <Text>
          The public AllPairable concept is removed with all. The
          implementation still requires that a parameter pack be pairable
          by successive adjacent applications of KleisliPairable. That
          predicate remains private. It is a constraint of pair, not a
          name on the public surface.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Folded KleisliPairable",
              "pair(a, b) must hold, then pair of that result with c, and so on.",
            ],
            [
              "Private",
              "Callers write pair(...). AllPairable is not part of the public surface.",
            ],
          ]}
        />
      </Stack>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>27 public</Mark>
          <H3>ANO_LET(name, operation)</H3>
        </Row>
        <Text>
          ANO_LET binds a scope-local, namespace-respecting name to a
          Function. The expansion is const auto name = ano::function(...).
          The macro exists to accommodate declaration grammar around
          reflection splices and long chains. Typechecking remains the
          work of concepts, reflection, and the Function type. The macro
          is grammar only.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Grammar only",
              "It expands to a const auto. No new type. No new law.",
            ],
            [
              "Local",
              "The name is bound in the current scope. It is not a global registry or a string key.",
            ],
            [
              "Still checked",
              "function(...) still requires an admitted callable. The macro does not bypass that requirement.",
            ],
          ]}
        />
        <CodeBlock>{`ANO_LET(load_scene,
    ano::lift<^^parse_glb>
        .and_then(canonicalize_scene)
        .and_then(cook_scene)
        .and_then(realize_scene));`}</CodeBlock>
        <CodeBlock>{`const auto load_scene = ano::function(...);`}</CodeBlock>
      </Stack>
      <Divider />
      <H2>Glossary</H2>
      <Text>
        Info tone marks private names. Success tone marks public names.
        compose, all, and the three-argument result_if are omitted.
        They appear above as deletions, not as glossary entries.
      </Text>
      <Table
        stickyHeader
        striped
        headers={["Name", "Properties", "Visibility"]}
        rowTone={[
          "info",
          "info",
          "info",
          "info",
          "info",
          "info",
          "info",
          "info",
          "success",
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
          ["detail::ResultSignature", "reflection, unpack, carrier", "Private"],
          ["detail::OperationSignature", "reflection, callable, arity", "Private"],
          ["detail::ResultOperationSignature", "reflection, fallible, unpack", "Private"],
          ["CarrierSignature / Signature", "local, alias, unpack", "Private"],
          ["detail::DirectOperation", "direct, mapper, not-pure", "Private"],
          ["detail::SameResultError", "same-error, clause", "Private"],
          ["detail::Lifted", "splice, empty, generated", "Private"],
          ["pair-pack predicate", "variadic, recursive, folded", "Private"],
          ["result_if", "unit, guard, primitive", "Public"],
          ["lift", "reflection, splice, zero-storage", "Public"],
          ["pair", "product, fail-fast, shared-witness", "Public"],
          ["and_then", "Kleisli, bind, short-circuit", "Public"],
          ["transform", "map, success, functor", "Public"],
          ["map_error", "map, failure, vocabulary", "Public"],
          ["scan_into", "scan, bounded, prefix", "Public"],
          ["Function", "value, callable, storage", "Public"],
          ["ResultMorphism", "alias, arrow, role", "Public"],
          ["ANO_LET", "macro, local, grammar", "Public"],
        ]}
      />
    </Stack>
  );
}

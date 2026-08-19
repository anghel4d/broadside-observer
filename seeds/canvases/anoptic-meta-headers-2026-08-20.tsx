import {

  Callout,

  Divider,

  Grid,

  H1,

  H2,

  H3,

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

  const nodeWidth = props.nodeWidth ?? 220;

  const nodeHeight = props.nodeHeight ?? 72;

  const layout = computeDAGLayout({

    nodes: props.nodes.map((n) => ({ id: n.id })),

    edges: props.edges.map((e) => ({ from: e.from, to: e.to })),

    direction: props.direction ?? "vertical",

    nodeWidth,

    nodeHeight,

    rankGap: props.rankGap ?? 52,

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

                stroke={theme.text.tertiary}

                strokeWidth={1.4}

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

export default function MetaResultCompose() {

  return (

    <Stack gap={28}>

      <Stack gap={8}>

        <H1>The three-header calculus</H1>

        <Text>

          Anoptic types the program at compile time. Ordinary C++26

          declarations become finite mathematical objects; fallible

          computation has one explicit sum; functions become typed edges.

          Reflection classifies the program. It is not a runtime registry.

        </Text>

      </Stack>

      <Grid columns={3} gap={12}>

        <Stat

          value="meta"

          label="What structure does this declaration possess?"

        />

        <Stat

          value="results"

          label="What can this fallible computation produce?"

        />

        <Stat

          value="compose"

          label="Which operations may connect, and what does that mean?"

        />

      </Grid>

      <Stack gap={10}>

        <H2>Complementary structures, not a stack</H2>

        <Text>

          anoptic_results.h is foundational. It supplies the carrier Result(V,

          E) = V + E and the rules that admit carriers and errors.

          anoptic_meta.h and anoptic_compose.h build two complementary

          structures over that carrier. They are not a linear dependency

          chain.

        </Text>

        <FlowDiagram

          markerId="calc-fork"

          nodeWidth={228}

          nodeHeight={70}

          rankGap={48}

          nodes={[

            {

              id: "program",

              label: "C++26 program",

              detail: "types, members, callables",

            },

            {

              id: "meta",

              label: "anoptic_meta.h",

              detail: "reflected data",

              mono: true,

            },

            {

              id: "compose",

              label: "anoptic_compose.h",

              detail: "reflected callables",

              mono: true,

            },

            {

              id: "results",

              label: "anoptic_results.h",

              detail: "Result(V, E) = V + E",

              mono: true,

              emphasis: true,

            },

          ]}

          edges={[

            { from: "program", to: "meta", label: "declarations" },

            { from: "program", to: "compose", label: "functions" },

            { from: "meta", to: "results" },

            { from: "compose", to: "results" },

          ]}

        />

        <Callout tone="info" title="Monad spans two headers">

          With E fixed, Result is the carrier of a monad. The success

          constructor is the unit. Constrained bind and Kleisli composition

          live in anoptic_compose.h. Result itself is not generally a monoid.

        </Callout>

      </Stack>

      <Divider />

      <Stack gap={10}>

        <H2>anoptic_meta.h</H2>

        <Text>

          Mathematics over declarations. Selected structural families become

          finite objects the compiler can inspect, validate, and project:

          unsigned arithmetic, enumerations, records, annotations, sets,

          flags, and command layouts. The header does not attempt one

          universal representation of every C++ type.

        </Text>

        <H3>Checked arithmetic</H3>

        <Text>

          Partial unsigned arithmetic becomes total fallible functions.

          Overflow is an explicit alternative, not a silent wrap.

        </Text>

        <Eq>

          {`checked_add        : N x N -> Result(N, ArithmeticError)

checked_subtract   : N x N -> Result(N, ArithmeticError)

checked_multiply   : N x N -> Result(N, ArithmeticError)

checked_accumulate : N x N -> Result(N, ArithmeticError)

checked_allocation_size, checked_align`}

        </Eq>

        <H3>Structural admission</H3>

        <Text>

          These concepts are compile-time propositions. A contiguous

          enumeration is admitted as E isomorphic to Fin(n). That

          correspondence licenses ordinal indexing, fixed tables, sets, and

          total dispatch.

        </Text>

        <Table

          headers={["Concept", "Admitted structure"]}

          rows={[

            ["Data", "Standard-layout, trivially copyable, non-polymorphic"],

            ["ReflectedEnum", "An enumeration"],

            ["CompleteRecord", "A complete class or union"],

            ["ContiguousEnum", "One enumerator at every ordinal from zero"],

            [

              "DenseEnum",

              "Contiguous, with exactly one correctly valued _COUNT sentinel",

            ],

            ["BitFlagEnum", "Nonzero, disjoint, single-bit enumerators"],

            [

              "CoversWindow",

              "One enumerator at every ordinal in a stated window",

            ],

            ["PrefixedEnum", "Dense enumeration whose identifiers share a prefix"],

            [

              "ContractedWindow",

              "Covered window whose declarations each carry one annotation",

            ],

          ]}

          striped

        />

        <H3>Reflected interpretations</H3>

        <Table

          headers={["Object", "Meaning"]}

          rows={[

            [

              "Enumeration",

              "Reflected enum: count, admit, project, names, contracts, visit",

            ],

            [

              "EnumValue",

              "Admitted ordinal. Validation happened; table indexing is then lawful",

            ],

            [

              "EnumTable",

              "Finite function Fin(n) to V, stored as a fixed array",

            ],

            [

              "Record",

              "Finite indexed family of members taken from the declaration",

            ],

            [

              "annotation",

              "Declaration to Option(Contract); zero or multiple matches fail",

            ],

            ["EnumSet", "Power set of a contiguous enum"],

            [

              "EnumFlags",

              "Subset of a proved bit basis; only admitted flags may be named",

            ],

            [

              "FieldPermissions",

              "Relation Permitted subset Command x Field, proved from annotations",

            ],

          ]}

          striped

        />

        <Eq>

          {`project : (E -> V) -> Table(E, V)

admit   : Integer -> Option(EnumValue(E))`}

        </Eq>

        <Text tone="secondary" size="small">

          Field contracts also prove that every declared field is accounted

          for, pointer-bearing commands have the expected payload, and tagged

          unions match their registry. Runtime lookup follows the proved

          relation.

        </Text>

      </Stack>

      <Divider />

      <Stack gap={10}>

        <H2>anoptic_results.h</H2>

        <Text>

          One explicit fallibility type. std::expected is the concrete

          storage. Anoptic adds the rules that decide which carriers and

          errors may enter the calculus.

        </Text>

        <Eq>

          {`Result(V, E)    = V + E

Result(void, E) = 1 + E`}

        </Eq>

        <Text>

          A value holds exactly one alternative: success containing V, or

          failure containing E. For void, success is the unit value.

          ResultError requires a nothrow-movable error so that

          short-circuit propagation cannot open a third control path.

          ResultCarrier reflects a candidate, normalizes aliases and

          cv-reference, and proves the template is exactly std::expected.

        </Text>

        <Table

          headers={["Operation", "Role"]}

          rows={[

            [

              "failure(error)",

              "Constructs unexpected E; rejects decaying arrays and throwing construction",

            ],

            [

              "result_if(condition, error)",

              "Unit guard Bool x E to Result(1, E). Guarded work lives in the next callable",

            ],

            [

              "has_error(result, error)",

              "Nonthrowing observation of one known error",

            ],

          ]}

          striped

        />

        <Callout tone="neutral" title="Unit guard, not eager selection">

          The deleted three-argument result_if selected between

          already-computed alternatives. The remaining guard establishes

          permission to continue. transform introduces an infallible value

          after success; and_then begins another fallible step. Direct

          calls on the std::expected carrier short-circuit correctly but

          skip ResultTransformable and KleisliComposable. Those concepts

          admit ano::Function. Lean proves the abstract algebra, not this

          particular carrier.

        </Callout>

      </Stack>

      <Divider />

      <Stack gap={10}>

        <H2>anoptic_compose.h</H2>

        <Text>

          Types for the edges. Reflection extracts declaration, arity, exact

          parameter and return types, the B and E inside a Result, noexcept,

          and agreement between declaration and invocation. Ordinary

          composition admits concrete nullary or unary operations. Binary

          shapes appear only where the algebra requires them: transactional

          stages and fold or scan steps.

        </Text>

        <Table

          headers={["Concept", "Compile-time proposition"]}

          rows={[

            [

              "NonthrowingOperation",

              "Concrete nullary or unary noexcept callable with an exact signature",

            ],

            [

              "ResultOperation",

              "Nonthrowing, returns an admitted Result",

            ],

            [

              "TransactionOperation",

              "Exact transactional state-transition form",

            ],

            [

              "KleisliComposable",

              "A to Result(B, E) then B to Result(C, E)",

            ],

            [

              "ResultTransformable",

              "Pure mapper B to C over the success side",

            ],

            [

              "ErrorMappable",

              "Mapper E to F over the failure side",

            ],

            [

              "KleisliPairable",

              "Same input, same error, safe object values",

            ],

            [

              "FoldStep / KleisliFoldStep",

              "Binary step consumed by scan_into; no public fold",

            ],

          ]}

          striped

        />

        <H3>Function</H3>

        <Text>

          ano::function(f) wraps an admitted callable as a statically typed

          function value. lift from a reflected declaration preserves the

          named function itself. For a stateless named function the lifted

          operation is empty; after translation the constraints disappear

          into a direct call graph.

        </Text>

        <Eq>

          {`and_then   : (A -> Result(B, E))  x  (B -> Result(C, E))  ->  A -> Result(C, E)

transform  : (A -> Result(B, E))  x  (B -> C)              ->  A -> Result(C, E)

map_error  : (A -> Result(B, E))  x  (E -> F)              ->  A -> Result(B, F)

pair       : (A -> Result(B, E))  x  (A -> Result(C, E))  ->  A -> Result(B x C, E)`}

        </Eq>

        <Text>

          and_then is Kleisli composition: the first failure stops the

          route; later stages are not invoked; earlier effects are not

          rolled back. transform maps only success. map_error changes only

          the error domain. pair is left-to-right fail-fast fan-in on one

          immutable input; left error has precedence. It is applicative-like,

          not an unconstrained categorical product. scan_into writes a scan

          over a successful contiguous range into caller-owned storage.

        </Text>

      </Stack>

      <Divider />

      <Stack gap={10}>

        <H2>Transactions</H2>

        <Text>

          Function cannot roll back arbitrary effects. A transaction is a

          distinct type whose stages have a distinct shape. Input state is

          immutable. A stage proposes a successor only by returning it

          inside success. Failure contains no successor.

        </Text>

        <Eq>

          {`A x S  ->  (B x S) + E

(Input, const State&) noexcept

    -> Result<pair<Value, State>, Error>`}

        </Eq>

        <Text>

          Stages joined by and_then form an open segment. Failure discards

          that segment's uncommitted successor. commit establishes the

          successful state as the next recovery checkpoint. Successful

          invocation commits the remaining open segment implicitly. The

          return is a pair of State and Result: on failure, State is the

          last explicit checkpoint, or the initial state.

        </Text>

        <Callout tone="warning" title="Threaded state only">

          File writes, device commands, packets, and global mutation are not

          undone. The guarantee applies to the explicit State value. That

          is why transaction is a different type from function.

        </Callout>

      </Stack>

      <Divider />

      <Stack gap={10}>

        <H2>Translation and runtime</H2>

        <Grid columns={2} gap={16}>

          <Stack gap={8}>

            <H3>During translation</H3>

            <Text>

              The compiler reflects types, members, enumerators, annotations,

              and call operators. It classifies finite domains, proves

              concepts, extracts Result value and error types, checks every

              adjacent route edge, verifies transaction continuity, and

              generates enum tables and dispatch. Illegal programs do not

              compile.

            </Text>

            <Text>

              A constexpr route on constant inputs may also execute during

              constant evaluation. Runtime work such as loading a scene is

              not required to happen at compile time.

            </Text>

          </Stack>

          <Stack gap={8}>

            <H3>At runtime</H3>

            <Text>

              What remains is ordinary static C++: compact Result carriers,

              direct callable objects, direct branches, nested empty stages

              stored with no unique address, explicit state values, and

              generated fixed tables.

            </Text>

            <Text>

              There is no virtual dispatch, no reflective registry

              interpretation, and no exception-based control path.

            </Text>

          </Stack>

        </Grid>

      </Stack>

      <Divider />

      <Stack gap={10}>

        <H2>Responsibility</H2>

        <Table

          headers={["Header", "Mathematical responsibility", "Question"]}

          rows={[

            [

              "anoptic_meta.h",

              "Finite domains, indexed families, subsets, projections, structural predicates and contracts",

              "What structure does this declaration possess?",

            ],

            [

              "anoptic_results.h",

              "Sum type V + E and admissible failure representation",

              "What can this fallible computation produce?",

            ],

            [

              "anoptic_compose.h",

              "Typed arrows, Kleisli composition, success and error maps, shared-input products, checkpointed state transitions",

              "Which operations may connect, and what does connecting them mean?",

            ],

          ]}

        />

        <Text tone="secondary">

          meta gives the compiler mathematical structure over declarations.

          results gives fallibility one explicit sum. compose turns

          functions into typed edges and permits only lawful routes,

          including a separate checkpointed transactional form.

        </Text>

      </Stack>

    </Stack>

  );

}

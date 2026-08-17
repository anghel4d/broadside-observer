import { h, type Child } from "./h.ts";
import { mergeStyle, toneFill, toneHex, useHostTheme } from "./theme.ts";

type Style = Record<string, string | number>;

export type StackProps = { children?: Child; gap?: number; style?: Style };
export function Stack({ children, gap = 16, style }: StackProps): Child {
  return h("div", { class: "cv-stack", style: mergeStyle({ gap: `${gap}px` }, style) }, children);
}

export type RowProps = {
  children?: Child;
  gap?: number;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "space-between";
  wrap?: boolean;
  style?: Style;
};
export function Row({
  children,
  gap = 12,
  align = "center",
  justify = "start",
  wrap = false,
  style,
}: RowProps): Child {
  return h(
    "div",
    {
      class: "cv-row",
      style: mergeStyle(
        {
          alignItems: align === "start" ? "flex-start" : align === "end" ? "flex-end" : align,
          justifyContent: justify === "start" ? "flex-start" : justify === "end" ? "flex-end" : justify,
          flexWrap: wrap ? "wrap" : "nowrap",
          gap: `${gap}px`,
        },
        style,
      ),
    },
    children,
  );
}

export type DividerProps = { style?: Style };
export function Divider({ style }: DividerProps): Child {
  const theme = useHostTheme();
  return h(
    "hr",
    {
      class: "cv-divider",
      style: mergeStyle({ border: 0, borderTop: `1px solid ${theme.stroke.tertiary}` }, style),
    },
  );
}

export type TextWeight = "normal" | "medium" | "semibold" | "bold";
export type TextProps = {
  children?: Child;
  tone?: "primary" | "secondary" | "tertiary" | "quaternary";
  size?: "body" | "small";
  as?: "p" | "span";
  weight?: TextWeight;
  italic?: boolean;
  truncate?: boolean | "start" | "end";
  style?: Style;
};
const WEIGHT: Record<TextWeight, number> = { normal: 400, medium: 500, semibold: 600, bold: 700 };
export function Text({
  children,
  tone = "primary",
  size = "body",
  as = "p",
  weight = "normal",
  italic,
  truncate,
  style,
}: TextProps): Child {
  const theme = useHostTheme();
  const color =
    tone === "secondary"
      ? theme.text.secondary
      : tone === "tertiary"
        ? theme.text.tertiary
        : tone === "quaternary"
          ? theme.text.quaternary
          : theme.text.primary;
  return h(
    as,
    {
      class: size === "small" ? "cv-text cv-text-small" : "cv-text",
      style: mergeStyle(
        {
          color,
          fontSize: size === "small" ? 12 : 14,
          fontWeight: WEIGHT[weight],
          fontStyle: italic === true ? "italic" : "normal",
          ...(truncate === true || truncate === "end"
            ? { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }
            : truncate === "start"
              ? { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", direction: "rtl" }
              : {}),
        },
        style,
      ),
    },
    children,
  );
}

export type H1Props = { children?: Child; style?: Style };
export function H1({ children, style }: H1Props): Child {
  const theme = useHostTheme();
  return h(
    "h1",
    {
      class: "cv-h1",
      style: mergeStyle(
        { color: theme.text.primary, fontSize: 24, fontWeight: 650, lineHeight: "30px" },
        style,
      ),
    },
    children,
  );
}
export type H2Props = { children?: Child; style?: Style };
export function H2({ children, style }: H2Props): Child {
  const theme = useHostTheme();
  return h(
    "h2",
    {
      class: "cv-h2",
      style: mergeStyle(
        { color: theme.text.primary, fontSize: 18, fontWeight: 600, lineHeight: "24px" },
        style,
      ),
    },
    children,
  );
}
export type H3Props = { children?: Child; style?: Style };
export function H3({ children, style }: H3Props): Child {
  const theme = useHostTheme();
  return h(
    "h3",
    {
      class: "cv-h3",
      style: mergeStyle(
        { color: theme.text.primary, fontSize: 16, fontWeight: 600, lineHeight: "22px" },
        style,
      ),
    },
    children,
  );
}

export type StatTone = "success" | "danger" | "warning" | "info";
export type StatProps = { value: Child; label: string; tone?: StatTone; style?: Style };
export function Stat({ value, label, tone, style }: StatProps): Child {
  const theme = useHostTheme();
  const valueColor = tone === undefined ? theme.text.primary : (toneHex[tone] ?? theme.text.primary);
  return h(
    "div",
    { class: tone === undefined ? "cv-stat" : `cv-stat cv-stat-${tone}`, style },
    h(
      "div",
      {
        class: "cv-stat-value",
        style: { color: valueColor, fontSize: 22, fontWeight: 700, lineHeight: 1.2 },
      },
      value,
    ),
    h(
      "div",
      {
        class: "cv-stat-label",
        style: { color: theme.text.tertiary, fontSize: 12 },
      },
      label,
    ),
  );
}

export type CalloutTone = "info" | "success" | "warning" | "danger" | "neutral";
export type CalloutProps = {
  children?: Child;
  tone?: CalloutTone;
  title?: Child;
  icon?: Child;
  style?: Style;
};
export function Callout({ children, tone = "neutral", title, icon, style }: CalloutProps): Child {
  const theme = useHostTheme();
  const accent = toneHex[tone] ?? toneHex.neutral ?? theme.stroke.primary;
  return h(
    "aside",
    {
      class: `cv-callout cv-callout-${tone}`,
      style: mergeStyle(
        {
          color: theme.text.primary,
          background: toneFill(tone),
          border: `1px solid ${toneFill(tone, 0.4)}`,
        },
        style,
      ),
    },
    icon === undefined ? null : h("div", { class: "cv-callout-icon" }, icon),
    h(
      "div",
      { class: "cv-callout-body" },
      title === undefined
        ? null
        : h("div", { class: "cv-callout-title", style: { color: accent, fontWeight: 650 } }, title),
      children,
    ),
  );
}

export type TableColumnAlign = "left" | "center" | "right";
export type TableRowTone = "success" | "danger" | "warning" | "info" | "neutral";
export type TableProps = {
  headers: Child[];
  rows: Child[][];
  columnAlign?: Array<TableColumnAlign | undefined>;
  rowTone?: Array<TableRowTone | undefined>;
  framed?: boolean;
  striped?: boolean;
  stickyHeader?: boolean;
  style?: Style;
  emptyMessage?: Child;
};
export function Table({
  headers,
  rows,
  columnAlign,
  rowTone,
  framed = true,
  striped,
  stickyHeader,
  style,
  emptyMessage,
}: TableProps): Child {
  const theme = useHostTheme();
  const body =
    rows.length === 0
      ? [
          h(
            "tr",
            null,
            h(
              "td",
              { colSpan: headers.length, class: "cv-td cv-td-empty", style: { color: theme.text.tertiary } },
              emptyMessage ?? "No data",
            ),
          ),
        ]
      : rows.map((row, rowIndex) => {
          const tone = rowTone?.[rowIndex];
          const stripe = striped === true && rowIndex % 2 === 1;
          const background = tone !== undefined ? toneFill(tone) : stripe ? theme.fill.tertiary : undefined;
          return h(
            "tr",
            {
              class: [stripe ? "cv-tr-stripe" : "", tone === undefined ? "" : `cv-tr-${tone}`]
                .filter((part) => part.length > 0)
                .join(" ") || undefined,
              style: background === undefined ? undefined : { background },
            },
            headers.map((_, colIndex) =>
              h(
                "td",
                {
                  class: "cv-td",
                  style: {
                    textAlign: columnAlign?.[colIndex] ?? "left",
                    color: theme.text.primary,
                    borderBottom: `1px solid ${theme.stroke.tertiary}`,
                    // `<tr>` background often computes transparent; paint the cells.
                    ...(background === undefined ? {} : { background }),
                  },
                },
                row[colIndex] ?? "",
              ),
            ),
          );
        });
  return h(
    "div",
    {
      class: framed ? "cv-table-wrap" : "cv-table-wrap is-bare",
      style: mergeStyle(
        framed
          ? {
              border: `1px solid ${theme.stroke.tertiary}`,
              background: theme.bg.chrome,
            }
          : { border: 0, background: "transparent" },
        style,
      ),
    },
    h(
      "table",
      { class: stickyHeader === true ? "cv-table is-sticky" : "cv-table" },
      h(
        "thead",
        null,
        h(
          "tr",
          null,
          headers.map((header, index) =>
            h(
              "th",
              {
                class: "cv-th",
                style: {
                  textAlign: columnAlign?.[index] ?? "left",
                  color: theme.text.tertiary,
                  borderBottom: `1px solid ${theme.stroke.tertiary}`,
                  ...(stickyHeader === true
                    ? { position: "sticky", top: 0, background: theme.bg.chrome }
                    : {}),
                },
              },
              header,
            ),
          ),
        ),
      ),
      h("tbody", null, body),
    ),
  );
}

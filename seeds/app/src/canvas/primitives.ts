import { h, type Child } from "./h.ts";
import { mergeStyle, useHostTheme } from "./theme.ts";

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
  return h("hr", { class: "cv-divider", style: mergeStyle({ borderColor: theme.stroke.tertiary }, style) });
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
  return h("h1", { class: "cv-h1", style }, children);
}
export type H2Props = { children?: Child; style?: Style };
export function H2({ children, style }: H2Props): Child {
  return h("h2", { class: "cv-h2", style }, children);
}
export type H3Props = { children?: Child; style?: Style };
export function H3({ children, style }: H3Props): Child {
  return h("h3", { class: "cv-h3", style }, children);
}

export type StatTone = "success" | "danger" | "warning" | "info";
export type StatProps = { value: Child; label: string; tone?: StatTone; style?: Style };
export function Stat({ value, label, tone, style }: StatProps): Child {
  return h(
    "div",
    { class: tone === undefined ? "cv-stat" : `cv-stat cv-stat-${tone}`, style },
    h("div", { class: "cv-stat-value" }, value),
    h("div", { class: "cv-stat-label" }, label),
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
  return h(
    "aside",
    { class: `cv-callout cv-callout-${tone}`, style },
    icon === undefined ? null : h("div", { class: "cv-callout-icon" }, icon),
    h(
      "div",
      { class: "cv-callout-body" },
      title === undefined ? null : h("div", { class: "cv-callout-title" }, title),
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
  const body =
    rows.length === 0
      ? [
          h(
            "tr",
            null,
            h("td", { colSpan: headers.length, class: "cv-td cv-td-empty" }, emptyMessage ?? "No data"),
          ),
        ]
      : rows.map((row, rowIndex) => {
          const tone = rowTone?.[rowIndex];
          return h(
            "tr",
            { class: [striped === true && rowIndex % 2 === 1 ? "cv-tr-stripe" : "", tone === undefined ? "" : `cv-tr-${tone}`].filter((part) => part.length > 0).join(" ") || undefined },
            headers.map((_, colIndex) =>
              h(
                "td",
                { class: "cv-td", style: { textAlign: columnAlign?.[colIndex] ?? "left" } },
                row[colIndex] ?? "",
              ),
            ),
          );
        });
  return h(
    "div",
    { class: framed ? "cv-table-wrap" : "cv-table-wrap is-bare", style },
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
            h("th", { class: "cv-th", style: { textAlign: columnAlign?.[index] ?? "left" } }, header),
          ),
        ),
      ),
      h("tbody", null, body),
    ),
  );
}

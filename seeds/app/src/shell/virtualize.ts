/** Window math for the browse pane. No DOM. */

export type Slice = {
  readonly start: number;
  readonly end: number;
  readonly padTop: number;
  readonly padBottom: number;
  readonly total: number;
};

export function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}

/** `prefix[0] = 0`, `prefix[i] = sum of the first i sizes`. */
export function prefixSums(sizes: ArrayLike<number>): Float64Array {
  const prefix = new Float64Array(sizes.length + 1);
  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i];
    const prev = prefix[i];
    prefix[i + 1] = (prev ?? 0) + (size ?? 0);
  }
  return prefix;
}

export function fillSizes(
  count: number,
  fallback: number,
  known?: ReadonlyMap<number, number>,
): Float64Array {
  const sizes = new Float64Array(count);
  sizes.fill(fallback);
  if (known === undefined) return sizes;
  for (const [index, height] of known) {
    if (index >= 0 && index < count) sizes[index] = height;
  }
  return sizes;
}

/** Largest index whose offset range contains `y`, clamped to `[0, count-1]`. */
export function indexAtOffset(prefix: ArrayLike<number>, y: number): number {
  const count = prefix.length - 1;
  if (count <= 0) return 0;
  const total = prefix[count] ?? 0;
  if (y <= 0) return 0;
  if (y >= total) return count - 1;
  let lo = 0;
  let hi = count - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const off = prefix[mid] ?? 0;
    const next = prefix[mid + 1] ?? off;
    if (y < off) hi = mid - 1;
    else if (y >= next) lo = mid + 1;
    else return mid;
  }
  return clamp(lo, 0, count - 1);
}

export function listSlice(
  prefix: ArrayLike<number>,
  scrollTop: number,
  viewport: number,
  overscan: number,
  insetTop: number,
  insetBottom: number,
): Slice {
  const count = Math.max(0, prefix.length - 1);
  const content = count === 0 ? 0 : (prefix[count] ?? 0);
  const total = insetTop + content + insetBottom;
  if (count === 0) {
    return { start: 0, end: 0, padTop: insetTop, padBottom: insetBottom, total };
  }
  const scan = Math.max(0, overscan);
  if (viewport <= 0) {
    const end = Math.min(count, Math.max(1, scan * 2));
    const endOff = prefix[end] ?? 0;
    return {
      start: 0,
      end,
      padTop: insetTop,
      padBottom: insetBottom + content - endOff,
      total,
    };
  }
  const y0 = Math.max(0, scrollTop - insetTop);
  const y1 = Math.max(0, scrollTop + viewport - insetTop);
  const start = Math.max(0, indexAtOffset(prefix, y0) - scan);
  const end = Math.min(count, indexAtOffset(prefix, y1) + 1 + scan);
  const startOff = prefix[start] ?? 0;
  const endOff = prefix[end] ?? 0;
  return {
    start,
    end,
    padTop: insetTop + startOff,
    padBottom: insetBottom + content - endOff,
    total,
  };
}

/**
 * CSS `repeat(auto-fill, track)` column count for a content box of
 * `innerWidth` with `gap` between fixed tracks.
 * `floor((innerWidth + gap) / (track + gap))`, at least 1.
 */
export function gridColumns(innerWidth: number, track: number, gap: number): number {
  if (innerWidth <= 0 || track <= 0) return 1;
  const pitch = track + Math.max(0, gap);
  if (pitch <= 0) return 1;
  return Math.max(1, Math.floor((innerWidth + Math.max(0, gap)) / pitch));
}

export function gridRowCount(count: number, columns: number): number {
  const cols = Math.max(1, columns);
  if (count <= 0) return 0;
  return Math.ceil(count / cols);
}

export function gridTotalHeight(
  rows: number,
  rowHeight: number,
  gap: number,
  insetTop: number,
  insetBottom: number,
): number {
  if (rows <= 0) return insetTop + insetBottom;
  return insetTop + insetBottom + rows * rowHeight + Math.max(0, rows - 1) * gap;
}

function sliceFromGridRows(
  startRow: number,
  endRow: number,
  count: number,
  columns: number,
  rowHeight: number,
  gap: number,
  insetTop: number,
  insetBottom: number,
  rows: number,
): Slice {
  const cols = Math.max(1, columns);
  const start = startRow * cols;
  const end = Math.min(count, endRow * cols);
  const padTop = insetTop + startRow * (rowHeight + gap);
  const visibleRows = Math.max(0, endRow - startRow);
  const content =
    visibleRows <= 0 ? 0 : visibleRows * rowHeight + Math.max(0, visibleRows - 1) * gap;
  const total = gridTotalHeight(rows, rowHeight, gap, insetTop, insetBottom);
  return {
    start,
    end,
    padTop,
    padBottom: Math.max(0, total - padTop - content),
    total,
  };
}

export function gridSlice(
  count: number,
  columns: number,
  rowHeight: number,
  gap: number,
  scrollTop: number,
  viewport: number,
  overscanRows: number,
  insetTop: number,
  insetBottom: number,
): Slice {
  const cols = Math.max(1, columns);
  const rows = gridRowCount(count, cols);
  if (count <= 0 || rows === 0) {
    return {
      start: 0,
      end: 0,
      padTop: insetTop,
      padBottom: insetBottom,
      total: insetTop + insetBottom,
    };
  }
  const pitch = rowHeight + gap;
  const rowAt = (y: number): number => {
    const rel = y - insetTop;
    if (rel <= 0 || pitch <= 0) return 0;
    return clamp(Math.floor(rel / pitch), 0, rows - 1);
  };
  const scan = Math.max(0, overscanRows);
  if (viewport <= 0) {
    const endRow = Math.min(rows, Math.max(1, scan * 2));
    return sliceFromGridRows(0, endRow, count, cols, rowHeight, gap, insetTop, insetBottom, rows);
  }
  const startRow = Math.max(0, rowAt(scrollTop) - scan);
  const endRow = Math.min(rows, rowAt(scrollTop + viewport) + 1 + scan);
  return sliceFromGridRows(startRow, endRow, count, cols, rowHeight, gap, insetTop, insetBottom, rows);
}

/** Largest `scrollTop` that still shows the end of a `total`-tall plane. */
export function maxScrollTop(total: number, viewport: number): number {
  return Math.max(0, total - Math.max(0, viewport));
}

/** New `scrollTop` if `item` is outside the padded viewport; otherwise `null`. */
export function scrollToShow(
  itemTop: number,
  itemBottom: number,
  scrollTop: number,
  viewport: number,
  pad: number,
): number | null {
  const settle = (next: number): number | null => (next === scrollTop ? null : next);
  if (viewport <= 0) return settle(Math.max(0, itemTop - pad));
  if (itemTop < scrollTop + pad) return settle(Math.max(0, itemTop - pad));
  if (itemBottom > scrollTop + viewport - pad) {
    return settle(Math.max(0, itemBottom - viewport + pad));
  }
  return null;
}

export type SetRevealChange = {
  readonly selectionChanged: boolean;
  readonly viewChanged: boolean;
  readonly itemsChanged: boolean;
};

/**
 * Scroll the selection into view only when the user changed which card is
 * selected, or switched List/Cards (item sizes are not comparable). Filter
 * and other item-list updates must not steal the user's scroll.
 */
export function shouldRevealOnSet(change: SetRevealChange): boolean {
  return change.selectionChanged || change.viewChanged;
}

export function listItemBounds(
  prefix: ArrayLike<number>,
  index: number,
  insetTop: number,
): { readonly top: number; readonly bottom: number } | null {
  const count = prefix.length - 1;
  if (index < 0 || index >= count) return null;
  const top = insetTop + (prefix[index] ?? 0);
  const bottom = insetTop + (prefix[index + 1] ?? top);
  return { top, bottom };
}

export function gridItemBounds(
  index: number,
  columns: number,
  rowHeight: number,
  gap: number,
  insetTop: number,
): { readonly top: number; readonly bottom: number } | null {
  if (index < 0) return null;
  const cols = Math.max(1, columns);
  const row = Math.floor(index / cols);
  const top = insetTop + row * (rowHeight + gap);
  return { top, bottom: top + rowHeight };
}

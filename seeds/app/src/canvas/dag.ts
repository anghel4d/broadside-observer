export type DAGLayoutOptions = {
  nodes: Array<{ id: string }>;
  edges: Array<{ from: string; to: string }>;
  direction?: "vertical" | "horizontal";
  nodeWidth?: number;
  nodeHeight?: number;
  rankGap?: number;
  nodeGap?: number;
  padding?: number;
};

export type DAGLayoutNode = {
  id: string;
  x: number;
  y: number;
  rank: number;
  order: number;
};

export type DAGLayoutEdge = {
  from: string;
  to: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  isBackEdge: boolean;
};

export type DAGLayoutRank = {
  rank: number;
  x: number;
  y: number;
  width: number;
  height: number;
  nodeIds: string[];
};

export type DAGLayoutResult = {
  nodes: DAGLayoutNode[];
  edges: DAGLayoutEdge[];
  ranks: DAGLayoutRank[];
  direction: "vertical" | "horizontal";
  width: number;
  height: number;
};

/** Longest-path ranks, barycenter crossing reduction, cubic-friendly anchors. */
export function computeDAGLayout(options: DAGLayoutOptions): DAGLayoutResult {
  const direction = options.direction ?? "vertical";
  const nodeWidth = options.nodeWidth ?? 160;
  const nodeHeight = options.nodeHeight ?? 40;
  const rankGap = options.rankGap ?? 64;
  const nodeGap = options.nodeGap ?? 48;
  const padding = options.padding ?? 24;

  const ids: string[] = [];
  const idSet = new Set<string>();
  for (const node of options.nodes) {
    if (!idSet.has(node.id)) {
      idSet.add(node.id);
      ids.push(node.id);
    }
  }

  const edges = options.edges.filter((edge) => idSet.has(edge.from) && idSet.has(edge.to));
  const WHITE = 0;
  const GRAY = 1;
  const BLACK = 2;
  const color = new Map<string, number>(ids.map((id) => [id, WHITE]));
  const outEdgeIndices = new Map<string, number[]>(ids.map((id) => [id, []]));
  edges.forEach((edge, index) => {
    outEdgeIndices.get(edge.from)?.push(index);
  });
  const isBack = edges.map(() => false);

  for (const root of ids) {
    if (color.get(root) !== WHITE) continue;
    color.set(root, GRAY);
    const stack: Array<{ node: string; next: number }> = [{ node: root, next: 0 }];
    while (stack.length > 0) {
      const frame = stack[stack.length - 1];
      if (frame === undefined) break;
      const children = outEdgeIndices.get(frame.node) ?? [];
      if (frame.next < children.length) {
        const edgeIndex = children[frame.next];
        frame.next += 1;
        if (edgeIndex === undefined) continue;
        const target = edges[edgeIndex]?.to;
        if (target === undefined) continue;
        const targetColor = color.get(target);
        if (targetColor === GRAY) isBack[edgeIndex] = true;
        else if (targetColor === WHITE) {
          color.set(target, GRAY);
          stack.push({ node: target, next: 0 });
        }
      } else {
        color.set(frame.node, BLACK);
        stack.pop();
      }
    }
  }

  const forwardOut = new Map<string, string[]>(ids.map((id) => [id, []]));
  const forwardIn = new Map<string, string[]>(ids.map((id) => [id, []]));
  const inDegree = new Map<string, number>(ids.map((id) => [id, 0]));
  edges.forEach((edge, index) => {
    if (isBack[index] === true) return;
    forwardOut.get(edge.from)?.push(edge.to);
    forwardIn.get(edge.to)?.push(edge.from);
    inDegree.set(edge.to, (inDegree.get(edge.to) ?? 0) + 1);
  });

  const rankOf = new Map<string, number>(ids.map((id) => [id, 0]));
  const queue = ids.filter((id) => (inDegree.get(id) ?? 0) === 0);
  for (let qi = 0; qi < queue.length; qi++) {
    const u = queue[qi];
    if (u === undefined) continue;
    for (const v of forwardOut.get(u) ?? []) {
      rankOf.set(v, Math.max(rankOf.get(v) ?? 0, (rankOf.get(u) ?? 0) + 1));
      const remaining = (inDegree.get(v) ?? 0) - 1;
      inDegree.set(v, remaining);
      if (remaining === 0) queue.push(v);
    }
  }

  const rankCount = ids.length > 0 ? Math.max(...ids.map((id) => rankOf.get(id) ?? 0)) + 1 : 0;
  const byRank: string[][] = Array.from({ length: rankCount }, () => []);
  for (const id of ids) {
    const rank = rankOf.get(id) ?? 0;
    byRank[rank]?.push(id);
  }

  const orderOf = new Map<string, number>();
  const refreshOrders = (): void => {
    for (const rankNodes of byRank) {
      rankNodes.forEach((id, index) => {
        orderOf.set(id, index);
      });
    }
  };
  const sortByBarycenter = (rankNodes: string[], neighbors: Map<string, string[]>): void => {
    const bary = new Map<string, number>();
    rankNodes.forEach((id, index) => {
      const ns = neighbors.get(id) ?? [];
      bary.set(
        id,
        ns.length > 0 ? ns.reduce((sum, node) => sum + (orderOf.get(node) ?? 0), 0) / ns.length : index,
      );
    });
    rankNodes.sort((left, right) => (bary.get(left) ?? 0) - (bary.get(right) ?? 0));
  };

  refreshOrders();
  for (let sweep = 0; sweep < 4; sweep++) {
    for (let r = 1; r < rankCount; r++) {
      const rankNodes = byRank[r];
      if (rankNodes !== undefined) sortByBarycenter(rankNodes, forwardIn);
    }
    refreshOrders();
    for (let r = rankCount - 2; r >= 0; r--) {
      const rankNodes = byRank[r];
      if (rankNodes !== undefined) sortByBarycenter(rankNodes, forwardOut);
    }
    refreshOrders();
  }

  const crossSize = direction === "vertical" ? nodeWidth : nodeHeight;
  const mainSize = direction === "vertical" ? nodeHeight : nodeWidth;
  const crossSpan = (count: number): number =>
    count > 0 ? count * crossSize + (count - 1) * nodeGap : 0;
  const maxCrossSpan = byRank.reduce((max, rankNodes) => Math.max(max, crossSpan(rankNodes.length)), 0);
  const mainSpan = rankCount > 0 ? rankCount * mainSize + (rankCount - 1) * rankGap : 0;

  const nodeById = new Map<string, DAGLayoutNode>();
  const nodes: DAGLayoutNode[] = [];
  const ranks: DAGLayoutRank[] = [];

  for (let r = 0; r < rankCount; r++) {
    const rankNodes = byRank[r] ?? [];
    const span = crossSpan(rankNodes.length);
    const mainStart = padding + r * (mainSize + rankGap);
    const crossStart = padding + (maxCrossSpan - span) / 2;
    rankNodes.forEach((id, order) => {
      const cross = crossStart + order * (crossSize + nodeGap);
      const node: DAGLayoutNode =
        direction === "vertical"
          ? { id, x: cross, y: mainStart, rank: r, order }
          : { id, x: mainStart, y: cross, rank: r, order };
      nodeById.set(id, node);
    });
    ranks.push(
      direction === "vertical"
        ? { rank: r, x: crossStart, y: mainStart, width: span, height: mainSize, nodeIds: [...rankNodes] }
        : { rank: r, x: mainStart, y: crossStart, width: mainSize, height: span, nodeIds: [...rankNodes] },
    );
  }
  for (const id of ids) {
    const node = nodeById.get(id);
    if (node !== undefined) nodes.push(node);
  }

  const layoutEdges: DAGLayoutEdge[] = edges.map((edge, index) => {
    const from = nodeById.get(edge.from);
    const to = nodeById.get(edge.to);
    if (from === undefined || to === undefined) {
      return {
        from: edge.from,
        to: edge.to,
        sourceX: 0,
        sourceY: 0,
        targetX: 0,
        targetY: 0,
        isBackEdge: isBack[index] === true,
      };
    }
    let sourceX: number;
    let sourceY: number;
    let targetX: number;
    let targetY: number;
    if (direction === "vertical") {
      if (to.rank > from.rank) {
        sourceX = from.x + nodeWidth / 2;
        sourceY = from.y + nodeHeight;
        targetX = to.x + nodeWidth / 2;
        targetY = to.y;
      } else if (to.rank < from.rank) {
        sourceX = from.x + nodeWidth / 2;
        sourceY = from.y;
        targetX = to.x + nodeWidth / 2;
        targetY = to.y + nodeHeight;
      } else if (to.x >= from.x) {
        sourceX = from.x + nodeWidth;
        sourceY = from.y + nodeHeight / 2;
        targetX = to.x;
        targetY = to.y + nodeHeight / 2;
      } else {
        sourceX = from.x;
        sourceY = from.y + nodeHeight / 2;
        targetX = to.x + nodeWidth;
        targetY = to.y + nodeHeight / 2;
      }
    } else if (to.rank > from.rank) {
      sourceX = from.x + nodeWidth;
      sourceY = from.y + nodeHeight / 2;
      targetX = to.x;
      targetY = to.y + nodeHeight / 2;
    } else if (to.rank < from.rank) {
      sourceX = from.x;
      sourceY = from.y + nodeHeight / 2;
      targetX = to.x + nodeWidth;
      targetY = to.y + nodeHeight / 2;
    } else if (to.y >= from.y) {
      sourceX = from.x + nodeWidth / 2;
      sourceY = from.y + nodeHeight;
      targetX = to.x + nodeWidth / 2;
      targetY = to.y;
    } else {
      sourceX = from.x + nodeWidth / 2;
      sourceY = from.y;
      targetX = to.x + nodeWidth / 2;
      targetY = to.y + nodeHeight;
    }
    return {
      from: edge.from,
      to: edge.to,
      sourceX,
      sourceY,
      targetX,
      targetY,
      isBackEdge: isBack[index] === true,
    };
  });

  const width = direction === "vertical" ? maxCrossSpan + 2 * padding : mainSpan + 2 * padding;
  const height = direction === "vertical" ? mainSpan + 2 * padding : maxCrossSpan + 2 * padding;
  return { nodes, edges: layoutEdges, ranks, direction, width, height };
}

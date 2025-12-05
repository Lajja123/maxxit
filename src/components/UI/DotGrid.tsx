"use client";

import { useDotGrid } from "@/hooks/useDotGrid";
import { DOT_GRID_CONFIG } from "@/constants/dotgrid.constants";

export default function DotGrid() {
  const { canvasRef } = useDotGrid(DOT_GRID_CONFIG);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: "transparent" }}
    />
  );
}

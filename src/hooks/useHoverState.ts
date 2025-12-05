"use client";

import { useState, useCallback } from "react";

export function useHoverState<T extends string | null>(initialState: T = null as T) {
  const [hoveredItem, setHoveredItem] = useState<T>(initialState);

  const handleHover = useCallback((item: T) => {
    setHoveredItem(item);
  }, []);

  const handleHoverEnter = useCallback((item: T) => {
    setHoveredItem(item);
  }, []);

  const handleHoverLeave = useCallback(() => {
    setHoveredItem(null as T);
  }, []);

  return {
    hoveredItem,
    handleHover,
    handleHoverEnter,
    handleHoverLeave,
    isHovered: (item: string) => hoveredItem === item,
  };
}


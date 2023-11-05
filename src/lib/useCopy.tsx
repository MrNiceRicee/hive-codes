"use client";
import { useState, useCallback } from "react";

export function useCopy(value: string, duration = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, duration);
    } catch (error) {
      console.error(error);
      setIsCopied(false);
    }
  }, [duration, value]);

  return { isCopied, copy };
}

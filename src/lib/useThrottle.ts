import { useRef, useEffect, useCallback } from "react";

function throttle<F extends (...args: any[]) => any>(
  func: F,
  delay: number,
): (...args: Parameters<F>) => void {
  let inThrottle: boolean = false;
  let lastFunc: any;
  let lastArgs: any;

  return (...args: Parameters<F>): void => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
        if (lastFunc) {
          lastFunc(...lastArgs);
          lastFunc = null;
          lastArgs = null;
        }
      }, delay);
    } else {
      lastFunc = func;
      lastArgs = args;
    }
  };
}

export function useThrottle<F extends (...args: any[]) => any>(
  func: F,
  delay = 500,
): (...args: Parameters<F>) => void {
  // Store the throttled function in a ref to persist it across renders
  const throttledFuncRef = useRef(throttle(func, delay));

  // Update the throttled function if `func` or `delay` changes
  useEffect(() => {
    throttledFuncRef.current = throttle(func, delay);
  }, [func, delay]);

  return useCallback((...args: Parameters<F>) => {
    throttledFuncRef.current(...args);
  }, []);
}

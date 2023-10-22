// useDebounce.ts
import { useState, useEffect, useCallback, useRef } from "react";
import { debounce as pBounce } from "perfect-debounce";

export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

function debounce<F extends (...args: any[]) => any>(
  func: F,
  wait: number,
): (...args: Parameters<F>) => ReturnType<F> | undefined {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<F>): ReturnType<F> | undefined => {
    if (timeout) {
      clearTimeout(timeout);
    }

    let result: ReturnType<F> | undefined;

    timeout = setTimeout(() => {
      result = func(...args);
    }, wait);

    return result;
  };
}

type Fn = (...args: any[]) => any;

// export function useDebouncedFunction<F extends Fn>(
//   func: F,
//   delay = 500,
// ): (...args: Parameters<F>) => void {
//   // Store the debounced function in a ref to persist it across renders
//   const debouncedFuncRef = useRef(debounce(func, delay));

//   // Update the debounced function if `func` or `wait` changes
//   useEffect(() => {
//     debouncedFuncRef.current = debounce(func, delay);
//   }, [func, delay]);

//   // Clean up on component unmount
//   useEffect(() => {
//     return () => {
//       // If there's a pending debounced call, clear it
//       clearTimeout(debouncedFuncRef.current as any);
//     };
//   }, []);

//   return useCallback((...args: Parameters<F>) => {
//     debouncedFuncRef.current(...args);
//   }, []);
// }

export function useDebounceFn<T extends (...args: any[]) => any>(
  fn: T,
  delay = 500,
  options?: {
    leading?: boolean;
    maxWait?: number;
    trailing?: boolean;
  },
) {
  const debouncedFn = pBounce(fn, delay, options);

  return debouncedFn;
}

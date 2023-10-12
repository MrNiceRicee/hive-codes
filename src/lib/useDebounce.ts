// useDebounce.ts
import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// useDebounceFn
// will run the function after the delay

type Fn = (...args: any[]) => any;

export function useDebounceFn<T extends Fn>(fn: T, delay: number) {
  const debouncedFn = useDebounce(fn, delay);

  useEffect(() => {
    debouncedFn();
  }, [debouncedFn]);

  return debouncedFn;
}

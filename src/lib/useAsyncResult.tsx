import { useState } from "react";

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type Fn = (...args: any[]) => any;

export function useAsyncResult<T extends Fn>(fn: T, delay: number) {
  const [result, setResult] = useState<Awaited<ReturnType<T>> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  async function run(...args: Parameters<T>) {
    setLoading(true);
    try {
      const result = await fn(...args);
      setResult(result);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }

  return {
    result,
    error,
    isLoading: loading,
    run,
  };
}

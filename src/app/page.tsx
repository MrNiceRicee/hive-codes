import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-[100dvh] w-screen items-center justify-center overflow-hidden bg-gradient-1 before:grainy before:opacity-40">
      <header className="flex w-full flex-col items-center overflow-hidden py-10 text-center before:crt before:animate-crt">
        <div aria-hidden className="scan-line animate-scan-line" />
        <h1 className="ml-[-1.25cqw] animate-text-glitch font-cal text-7xl font-bold tracking-tighter mix-blend-hard-light sm:text-[22cqw]">
          <span className="inline-block duration-500 ease-spring-3 animate-in fade-in-0 slide-in-from-bottom-2">
            Hive Codes
          </span>
        </h1>
        <p className="mt-[-0.5cqw] text-xl font-light tracking-wide duration-500 ease-spring-3 animate-in fade-in-0 slide-in-from-top-3 sm:mt-[-1.5cqw] sm:text-[3.5cqw]">
          Support your favorite{" "}
          <span className="animate-text-glitch font-cal tracking-wider underline underline-offset-4 mix-blend-hard-light">
            creators
          </span>{" "}
          with their brand sponsors
        </p>
        <section className="mt-[3cqw] origin-top duration-500 animate-in fade-in-0 zoom-in-50">
          <Link
            href="/search"
            className="rounded-lg border border-border px-4 py-2 font-bold tracking-wider transition-all ease-elastic-out-3 [box-shadow:var(--shadow-3)] visited:text-[var(--text-1)] focus:outline-dashed focus:outline-4"
          >
            Get Started
          </Link>
        </section>
      </header>
    </main>
  );
}

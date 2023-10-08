import Link from "next/link";

export default function Home() {
  return (
    <main className="dotted-graph flex h-fit min-h-screen w-screen items-center justify-center bg-fixed before:grainy">
      <header className="flex w-full flex-col items-center overflow-hidden py-10 text-center before:crt before:animate-crt">
        <div aria-hidden className="scan-line animate-scan-line" />
        <h1 className="ml-[-1.25cqw] animate-text-glitch font-cal text-[22cqw] font-bold tracking-tighter">
          <span className="ease-spring-3 inline-block duration-500 animate-in fade-in-0 slide-in-from-bottom-2">
            Hive Codes
          </span>
        </h1>
        <p className="ease-spring-3 -mt-[6cqw] text-[3.5cqw] font-light tracking-wide duration-500 animate-in fade-in-0 slide-in-from-top-3">
          Support your favorite{" "}
          <span className="animate-text-glitch font-cal tracking-wider underline underline-offset-4">
            creators
          </span>{" "}
          with their brand sponsors
        </p>
        <section className="mt-4 origin-top duration-500 animate-in fade-in-0 zoom-in-50">
          <Link
            href="/search"
            className="group rounded-lg border border-border px-4 py-2 text-[1.5cqw] font-bold tracking-wider transition-all ease-elastic-out-3 [box-shadow:var(--shadow-3)] visited:text-[var(--text-1)]"
          >
            Get Started
          </Link>
        </section>
      </header>
    </main>
  );
}

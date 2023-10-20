"use client";

import { Check, Trash2 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CommandItem } from "~/components/Command";
import { Trie } from "~/lib/structures/trie";
import { cn } from "~/lib/utils";

function Highlighted({ children }: { children: string }) {
  return (
    <span className="bg-[var(--yellow-8)] font-cal text-background">
      {children}
    </span>
  );
}

function HighlightText({ text, query }: { text: string; query: string }) {
  const trie = new Trie();
  // Insert all substrings of query into trie
  for (let i = 0; i < query.length; i++) {
    for (let j = i + 1; j <= query.length; j++) {
      trie.insert(query.slice(i, j).toLowerCase());
    }
  }

  const parts: (string | JSX.Element)[] = [];
  let i = 0;
  while (i < text.length) {
    let found = false;
    for (let j = i + 1; j <= text.length; j++) {
      const substring = text.slice(i, j).toLowerCase();
      if (trie.search(substring)) {
        parts.push(<Highlighted key={i}>{text.slice(i, j)}</Highlighted>);
        i = j;  // Move the pointer i to end of the highlighted part
        found = true;
        break;
      }
    }
    if (!found) {
      parts.push(text[i]);
      i++;
    }
  }

  return <span>{parts}</span>;
}

export function CompanyItem({
  value,
  clear,
  children,
}: {
  value: string;
  clear?: boolean;
  children?: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const match = searchParams.get("company") === value;

  function onSelect(value: string) {
    const params = new URLSearchParams(searchParams);

    if (clear) {
      params.delete("company");
      params.delete("companyQuery");
      return router.push(pathName);
    }

    if (value) {
      params.set("company", value);
    } else {
      params.delete("company");
    }

    router.push(`${pathName}?${params.toString()}`);
  }

  if (children) {
    return (
      <CommandItem value={value} onSelect={onSelect}>
        {children}
      </CommandItem>
    );
  }

  if (clear) {
    return (
      <CommandItem value={value} onSelect={onSelect} className="group">
        <Trash2 className="mr-2 h-4 w-4 duration-300 ease-spring-3 animate-in zoom-in-0 spin-in-[-45deg] slide-in-from-left-2" />
        <span>clear</span>
      </CommandItem>
    );
  }

  return (
    <CommandItem value={value} onSelect={onSelect}>
      {match && (
        <Check className="mr-2 h-4 w-4 text-[var(--green-6)] duration-300 ease-spring-3 animate-in zoom-in-0 spin-in-[-45deg] slide-in-from-left-2" />
      )}
      <span className={cn(match ? "font-cal tracking-wide " : "ml-6")}>
        {/* {value} */}
        <HighlightText text={value} query={searchParams.get("companyQuery") || ''} />
      </span>
    </CommandItem>
  );
}

import { Trie } from "~/lib/structures/trie";

function Highlighted({ children }: { children: string }) {
  return (
    <span className="font-cal tracking-wide underline">
      {children}
    </span>
  );
}

export function HighlightText({ text, query }: { text: string; query: string }) {
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

  return <>{parts}</>;

  // sliding window
  // const parts: (string | JSX.Element)[] = [];
  // let textPointer = 0;
  // let queryPointer = 0;

  // while (textPointer < text.length && queryPointer < query.length) {
  //   if (text[textPointer].toLowerCase() === query[queryPointer].toLowerCase()) {
  //     let start = textPointer;
  //     while (
  //       textPointer < text.length &&
  //       queryPointer < query.length &&
  //       text[textPointer].toLowerCase() === query[queryPointer].toLowerCase()
  //     ) {
  //       textPointer++;
  //       queryPointer++;
  //     }
  //     parts.push(
  //       <Highlighted key={start}>{text.slice(start, textPointer)}</Highlighted>,
  //     );
  //   } else {
  //     parts.push(text[textPointer]);
  //     textPointer++;
  //   }
  // }

  // // Append any remaining characters from text
  // parts.push(text.slice(textPointer));

  // return <span>{parts}</span>;
}
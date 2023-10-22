import { Trie, TrieNode } from "~/lib/structures/trie";

function Highlighted({ children }: { children: string }) {
  return (
    <span className="font-cal tracking-wide underline">
      {children}
    </span>
  );
}

export function HighlightTextTrie({ text, query }: { text: string; query: string }) {
  const trie = new Trie();
  const lowerQuery = query.toLowerCase();  // Precompute lowercase query

  for (let i = 0; i < lowerQuery.length; i++) {
    let node = trie.root;  // Start from the root for each new starting position i
    for (let j = i; j < lowerQuery.length; j++) {
      const char = lowerQuery[j];
      const children = node.children;
      if (!children[char]) {
        children[char] = new TrieNode();
      }
      node = children[char];  // Move to the next node
      trie.insertFrom(lowerQuery.slice(i, j + 1), trie.root);  // Insert the substring [i, j] from the root
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
}


// sliding window
export function HighlightTextSliding({
  text,
  query,
}: {
  text: string;
  query: string;
}) {
  const parts: (string | JSX.Element)[] = [];
  let textPointer = 0;
  let queryPointer = 0;

  while (textPointer < text.length && queryPointer < query.length) {
    if (text[textPointer].toLowerCase() === query[queryPointer].toLowerCase()) {
      let start = textPointer;
      while (
        textPointer < text.length &&
        queryPointer < query.length &&
        text[textPointer].toLowerCase() === query[queryPointer].toLowerCase()
      ) {
        textPointer++;
        queryPointer++;
      }
      parts.push(
        <Highlighted key={start}>{text.slice(start, textPointer)}</Highlighted>,
      );
    } else {
      parts.push(text[textPointer]);
      textPointer++;
    }
  }

  // Append any remaining characters from text
  parts.push(text.slice(textPointer));

  return <span>{parts}</span>;
}

export function HighlightTextHybrid({ text, query }: { text: string; query: string }) {
  const parts: (string | JSX.Element)[] = [];
  let i = 0;
  let trie: Trie | null = null;  // Initialize trie to null

  while (i < text.length) {
    let found = false;

    // Sliding window for complete match
    for (let j = i + query.length; j > i; j--) {
      const substring = text.slice(i, j).toLowerCase();
      if (substring === query.toLowerCase()) {
        parts.push(<Highlighted key={i}>{text.slice(i, j)}</Highlighted>);
        i = j;  // Move the pointer i to end of the highlighted part
        found = true;
        break;
      }
    }

    // Build the trie if necessary and not already built
    if (!found && !trie) {
      trie = new Trie();
      for (let i = 0; i < query.length; i++) {
        for (let j = i + 1; j <= query.length; j++) {
          trie.insert(query.slice(i, j).toLowerCase());
        }
      }
    }

    // Trie search for partial match if no complete match found
    if (!found && trie) {
      for (let j = i + 1; j <= text.length; j++) {
        const substring = text.slice(i, j).toLowerCase();
        if (trie.search(substring)) {
          parts.push(<Highlighted key={i}>{text.slice(i, j)}</Highlighted>);
          i = j;  // Move the pointer i to end of the highlighted part
          found = true;
          break;
        }
      }
    }

    // No match found, add unhighlighted character
    if (!found) {
      parts.push(text[i]);
      i++;
    }
  }

  return <span>{parts}</span>;
}
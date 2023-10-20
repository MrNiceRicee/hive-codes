// Trie Node
class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEndOfWord = false;
}

// Trie
export class Trie {
  root = new TrieNode();

  insert(word: string) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
}

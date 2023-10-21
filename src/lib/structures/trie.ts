export class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEndOfWord = false;
}

export class Trie {
  root = new TrieNode();

  insert(word: string) {
    let node = this.root;
    for (let char of word) {
      const children = node.children;
      if (!children[char]) {
        children[char] = new TrieNode();
      }
      node = children[char];
    }
    node.isEndOfWord = true;
  }

  insertFrom(word: string, startNode: TrieNode) {
    let node = startNode;
    for (let char of word) {
      const children = node.children;
      if (!children[char]) {
        children[char] = new TrieNode();
      }
      node = children[char];
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

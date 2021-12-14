class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    // hashing key
    let hash = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0) * 599 % this.size;
    return hash;
  }
  add(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    let bucket = { [key]: value };
    this.map[hash].add(bucket);
  }
  get(key) {
    let hash = this.hash(key);
    if (this.map[hash]) {
      let pointer = this.map[hash].head;
      while (pointer) {
        if (pointer.value[key]) {
          return pointer.value[key];
        }
        pointer = pointer.next;
      }
    }
    else {
      return 'empty';
    }
  }
  contains(key) {
    let hash = this.hash(key);
    if (this.map[hash]) {
      let pointer = this.map[hash].head;
      while (pointer) {
        if (pointer.value[key]) {
          return true;
        }
        pointer = pointer.next;
      }
    }
    else {
      return false;
    }
  }

  repeatedWord(string) {

    let words = string.split(' ');

    let key;
    let hash;
    for (let i = 0; i < words.length; i++) {

      key = words[i].toLowerCase();
      this.add(key, ' ');
      hash = this.hash(key);
      if (this.map[hash].head.next) {
        return key;
      }

    }
  }
  leftJoin(hash1, hash2) {

    let leftJoinArr = [];
    let output = [];

    for (let i = 0; i < hash1.map.length; i++) {

      output = [];
      if (hash1.map[i]) {

        const leftKey = Object.keys(hash1.map[i].head.value);
        const leftVal = Object.values(hash1.map[i].head.value);
        output = output.concat(leftKey);
        output = output.concat(leftVal);
        if (hash2.map[i]) {
          const rightKey = Object.keys(hash2.map[i].head.value);
          const rightVal = Object.values(hash2.map[i].head.value);
          if (rightKey[0] === leftKey[0]) {
            output = output.concat(rightVal);
          }
        }
        else {
          output.push('empty');
        }

        leftJoinArr.push(output);
      }

    }

    return leftJoinArr;
  }

}
module.exports = HashTable;

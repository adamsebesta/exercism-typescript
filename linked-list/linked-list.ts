class Node<T> {
  value: T;
  next: Node<T> | undefined;
  prev: Node<T> | undefined;

  constructor(value: T, next: Node<T> | undefined, prev: Node<T> | undefined) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList<T> {
  private first: Node<T> | undefined;
  private last: Node<T> | undefined;
  public push(value: T): void {
    const currentLast = this?.last;
    const newNode = new Node(value, undefined, currentLast);
    if (currentLast) {
      currentLast.next = newNode;
    }
    this.last = newNode;
    if (!this.first) {
      this.first = this.last;
    }
  }

  public pop(): T | undefined {
    const lastNode = this.last;
    if (lastNode?.prev) {
      lastNode.prev.next = undefined;
      this.last = lastNode.prev;
    } else {
      this.first = undefined;
      this.last = undefined;
    }
    return lastNode?.value;
  }

  public shift(): T | undefined {
    const firstNode = this.first;
    if (firstNode?.next) {
      firstNode.next.prev = undefined;
      this.first = firstNode.next;
    } else {
      this.first = undefined;
      this.last = undefined;
    }
    return firstNode?.value;
  }

  public unshift(value: T): void {
    const currentFirst = this?.first;
    const newNode = new Node(value, currentFirst, undefined);
    if (currentFirst) {
      currentFirst.prev = newNode;
    }
    this.first = newNode;
    if (!this.last) {
      this.last = this.first;
    }
  }

  public delete(value: T): void {
    let node = this.first;
    while (node?.value !== value) {
      node = node?.next;
      if (!node) return;
    }
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.last = undefined;
    }
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.first = undefined;
    }
  }

  public count(): number | undefined {
    let node = this.first;
    let count = 0;
    while (node !== undefined) {
      count += 1;
      node = node.next;
    }
    return count;
  }
}

class Node {
    value;
    next;
    prev;
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
export class LinkedList {
    first;
    last;
    push(value) {
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
    pop() {
        const lastNode = this.last;
        if (lastNode?.prev) {
            lastNode.prev.next = undefined;
            this.last = lastNode.prev;
        }
        else {
            this.first = undefined;
            this.last = undefined;
        }
        return lastNode?.value;
    }
    shift() {
        const firstNode = this.first;
        if (firstNode?.next) {
            firstNode.next.prev = undefined;
            this.first = firstNode.next;
        }
        else {
            this.first = undefined;
            this.last = undefined;
        }
        return firstNode?.value;
    }
    unshift(value) {
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
    delete(value) {
        let node = this.first;
        while (node?.value !== value) {
            node = node?.next;
            if (!node)
                return;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        else {
            this.last = undefined;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        else {
            this.first = undefined;
        }
    }
    count() {
        let node = this.first;
        let count = 0;
        while (node !== undefined) {
            count += 1;
            node = node.next;
        }
        return count;
    }
}

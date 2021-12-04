import {Sorter} from "./Sorter";

export class LinkedList extends Sorter {

    private head: Node | null;
    private tail: Node | null;

    constructor() {
        super();
        this.head = null;
        this.tail = null;
    }

    add(value: number): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
            this.tail = newNode
        }
    }

    at(index: number): Node | null {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (index === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    toArray(): number[] {
        const nodes: number[] = [];
        let node = this.head;
        while (node) {
            nodes.push(node.value)
            node = node.next;
        }
        return nodes;
    }

    compare(i: number, j: number): boolean {
        const left = this.at(i);
        const right = this.at(j);
        return (left !== null && right !== null) ? left.value > right.value : false;
    }

    get length(): number {
        let counter = 0;
        let node = this.head;
        while (node) {
            node = node.next;
            counter++;
        }
        return counter;
    }

    swap(i: number, j: number): void {
        const left = this.at(i);
        const right = this.at(j);
        if (left !== null && right !== null) {
            const tempValue = right.value;
            right.value = left.value;
            left.value = tempValue;
        }
    }
}

class Node {

    public next: Node | null = null;

    constructor(public value: number, node?: Node) {
        this.next = node || null;
    }
}

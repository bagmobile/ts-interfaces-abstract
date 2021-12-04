"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super();
        this.head = null;
        this.tail = null;
    }
    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
            this.tail = newNode;
        }
    }
    at(index) {
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
    toArray() {
        const nodes = [];
        let node = this.head;
        while (node) {
            nodes.push(node.value);
            node = node.next;
        }
        return nodes;
    }
    compare(i, j) {
        const left = this.at(i);
        const right = this.at(j);
        return (left !== null && right !== null) ? left.value > right.value : false;
    }
    get length() {
        let counter = 0;
        let node = this.head;
        while (node) {
            node = node.next;
            counter++;
        }
        return counter;
    }
    swap(i, j) {
        const left = this.at(i);
        const right = this.at(j);
        if (left !== null && right !== null) {
            const tempValue = right.value;
            right.value = left.value;
            left.value = tempValue;
        }
    }
}
exports.LinkedList = LinkedList;
class Node {
    constructor(value, node) {
        this.value = value;
        this.next = null;
        this.next = node || null;
    }
}

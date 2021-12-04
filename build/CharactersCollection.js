"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(i, j) {
        return this.data[i].localeCompare(this.data[j]) > 0;
    }
    swap(i, j) {
        const chars = [...this.data];
        const temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
        this.data = chars.join('');
    }
}
exports.CharactersCollection = CharactersCollection;

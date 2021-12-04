"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor() {
        this.sort = () => {
            for (let j = 0; j < this.length - 1; j++) {
                for (let i = 0; i < this.length - j; i++) {
                    if (this.compare(i, i + 1)) {
                        this.swap(i, i + 1);
                    }
                }
            }
        };
    }
}
exports.Sorter = Sorter;

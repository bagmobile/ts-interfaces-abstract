import {Sortable} from "./interfaces";

export abstract class Sorter implements Sortable{

    abstract length: number;

    abstract compare(i: number, j: number): boolean;

    abstract swap(i: number, j: number): void;

    sort = () => {
        for (let j = 0; j < this.length - 1; j++) {
            for (let i = 0; i < this.length - j; i++) {
                if (this.compare(i, i + 1)) {
                    this.swap(i, i + 1);
                }
            }
        }
    }
}

import {Sorter} from "./Sorter";

export class CharactersCollection extends Sorter {

    constructor(public data: string) {
        super();
    }

    get length() {
        return this.data.length;
    }

    compare(i: number, j: number): boolean {
        return this.data[i].localeCompare(this.data[j]) > 0;
    }

    swap(i: number, j: number): void {
        const chars = [...this.data];
        const temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
        this.data = chars.join('');
    }

}

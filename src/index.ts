import {Sorter} from "./Sorter";
import {NumberCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const a = new NumberCollection([3, -1, 8, 10, 12, 4, 0, 5, -2]);
a.sort();
console.log(a.data);

const b = new CharactersCollection('bagnaxm');
b.sort()
console.log(b.data);

const c = new LinkedList();
c.add(4);
c.add(55);
c.add(0);
c.add(6);
c.add(-1);
c.add(0);
c.sort();
console.log(c.toArray())

/*const sortRecursive = (ar: number[], inc: number = 1): number[] => {

    for (let i = 0; i < ar.length - inc; i++) {
        if (ar[i] > ar[i + 1]) {
            const temp = ar[i];
            ar[i] = ar[i + 1];
            ar[i + 1] = temp;
        }
    }
    inc++;
    return (inc === ar.length) ? ar : sortRecursive(a, inc);
}*/
//console.log(sortRecursive(a));

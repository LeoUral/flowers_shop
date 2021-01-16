import { makeAutoObservable } from "mobx";

class BascketStore {

    flowersId = []; // последовательность ID купленных букетов
    total = 0;


    constructor() {
        makeAutoObservable(this);
    }

    incrementTotal(numberData) {
        this.total = +this.total + +numberData;
        console.log(this.total, 'increment');
    }

    decrementTotla(numberData) {
        this.total = +this.total - +numberData;
        console.log(this.total, 'decrement');
    }

    getPurchasedFlowers(id) {
        this.flowersId.push(id);
        console.log(this.flowersId, 'arrFlowers');
    }

}

export default new BascketStore();
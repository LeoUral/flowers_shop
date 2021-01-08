import { makeAutoObservable, observable } from "mobx";

class BascketStore {

    basket = observable({
        flowersId: [],
        total: 0
    });

    constructor() {
        makeAutoObservable(this);
    }

    incrementTotal(numberData) {
        this.total = this.total + numberData;
        console.log(this.total + 'increment');
    }

    decrementTotla(numberData) {
        this.total = this.total - numberData;
        console.log(this.total + 'decrement');
    }

}

export default new BascketStore();
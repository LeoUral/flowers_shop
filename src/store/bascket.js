import { makeAutoObservable, observable } from "mobx";


class BascketStore {

    basket = observable({
        flowersId: [],
        total: 0
    });

    constructor() {
        makeAutoObservable(this);
    }

    incrementTotal() {
        this.total = this.total + 1;
        console.log(this.total + 'increment');
    }

    decrementTotla() {
        this.total = this.total - 1;
        console.log(this.total + 'decrement');
    }

}



export default new BascketStore();
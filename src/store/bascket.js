import { makeAutoObservable } from "mobx";

class BascketStore {

    lengthArray = 6; //длинна массива БАЗЫ
    quantity = new Array(this.lengthArray); // массив купленных букетов, количество по ID
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

    //Заносим в массив количество покупок
    getPurchasedFlowers(id) {
        if (this.quantity[id] === null || this.quantity[id] === undefined) {
            this.quantity[id] = 1;
        } else {
            this.quantity[id] = this.quantity[id] + 1;
        }

        console.log(this.quantity, 'arrFlowers');
    }
}

export default new BascketStore();
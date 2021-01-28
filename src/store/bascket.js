import { makeAutoObservable } from "mobx";

class BascketStore {

    lengthArray = 12; //длинна массива БАЗЫ
    quantity = new Array(this.lengthArray); // массив купленных букетов, количество по ID    
    total = 0; //итоговая стоимость покупок
    base = []; //база букетов
    show = false;

    constructor() {
        makeAutoObservable(this);
    }

    incrementTotal(numberData) {
        this.total = (+this.total) + (+numberData);
    }

    decrementTotla(numberData) {
        this.total = (+this.total) - (+numberData);
    }

    writeBase(data) {
        this.base = data;
    }
    changeShow() {
        this.show = !this.show;
    }

    //Заносим в массив количество покупок
    getPurchasedFlowers(id) {
        if (this.quantity[id] === null || this.quantity[id] === undefined) {
            this.quantity[id] = 1;
        } else {
            this.quantity[id] = this.quantity[id] + 1;
        }
        console.log(this.quantity, 'arrFlowers');//test -> change quantity
    }

    //убираем покупки
    removePurchasedFlowers(id) {
        if (this.quantity[id] > 0) {
            this.quantity[id] = this.quantity[id] - 1;
        }
    }
}

export default new BascketStore();
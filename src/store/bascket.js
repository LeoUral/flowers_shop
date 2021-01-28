import { makeAutoObservable } from "mobx";

class BascketStore {

    total = 0; //итоговая стоимость покупок
    base = []; //база букетов
    show = false;
    composition = ''; // состав букета

    constructor() {
        makeAutoObservable(this);
        this.quantity = this.base.map(item => 0);// пустой массив покупок
    }

    incrementTotal(numberData) {
        this.total = (+this.total) + (+numberData);
    }

    decrementTotla(numberData) {
        this.total = (+this.total) - (+numberData);
    }

    writeBase(data) {
        this.base = data;
        console.log(this.base + '<<< GET BASE in STORAGE');
    }
    changeShow() {
        this.show = !this.show;
    }
    changeComposition(flower) {
        this.composition = flower;
        console.log(this.composition + ' <<< FLOWER');//test flower includes
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
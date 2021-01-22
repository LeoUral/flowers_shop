import React from 'react';
import BascketStore from '../store/bascket';

// блок формированиея покупки
export default class ModalItem extends React.Component {

    handleIncrement(event) {
        const price = event.target.dataset.price;
        const numberID = event.target.dataset.number;
        BascketStore.incrementTotal(price);
        BascketStore.getPurchasedFlowers(numberID);
        console.log(price + " " + numberID);
    }
    handleDecrement(event) {
        const price = event.target.dataset.price;
        const numberID = event.target.dataset.number;
        BascketStore.decrementTotla(price);
        BascketStore.removePurchasedFlowers(numberID);
        console.log(price + " " + numberID);
    }

    render() {
        return (
            <>
                <div className="modal__all">
                    <div className="modal__Item" style={{ backgroundImage: `url(../image/${this.props.urlImg})` }}></div>
                    <div className="modal__data">
                        <div className="modalItem__name"> {this.props.name} </div>
                        <div className="modalItem__quantity">Количество: {this.props.quantity} </div>
                        <div className="modalItem__price">За шт.: {this.props.price}<span> руб.</span> </div>
                        <div className="modalItem__total">Сумма: {this.props.quantity * this.props.price}<span> руб.</span> </div>
                        <button
                            className="modalItem__button btn_increment"
                            data-number={this.props.numberID}
                            data-price={this.props.price}
                            onClick={this.handleIncrement}
                        >
                            +
                    </button>
                        <button
                            className="modalItem__button btn_decrement"
                            data-number={this.props.numberID}
                            data-price={this.props.price}
                            onClick={this.handleDecrement}
                        >
                            -
                    </button>
                    </div>
                </div>
            </>
        );
    }
}
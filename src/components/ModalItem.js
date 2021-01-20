import React from 'react';

// блок формированиея покупки
export default class ModalItem extends React.Component {

    handleIncrement(event) {
        const price = event.target.dataset.price;
        const numberID = event.target.dataset.number;
        console.log(event.target);
        console.log(price + " " + numberID);
    }
    handleDecrement(event) {
        const price = event.target.dataset.price;
        const numberID = event.target.dataset.number;
        console.log(event.target);
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
                            className="modalItem__button_increment"
                            data-number={this.props.numberID}
                            data-price={this.props.price}
                            onClick={this.handleIncrement}
                        >
                            +
                    </button>
                        <button
                            className="modalItem__button_decrement"
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
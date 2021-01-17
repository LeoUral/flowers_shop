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
                <div className="Modal__Item" style={{ backgroundImage: `url(../image/${this.props.urlImg})` }}>
                    <div className="ModalItem__name"> {this.props.name} </div>
                    <div className="ModalItem__quantity"> {this.props.quantity} </div>
                    <div className="ModalItem__price"> {this.props.price}<span> руб.</span> </div>
                    <div className="ModalItem__total"> {this.props.quantity * this.props.price}<span> руб.</span> </div>
                    <button
                        className="ModalItem__button_increment"
                        data-number={this.props.numberID}
                        data-price={this.props.price}
                        onClick={this.handleIncrement}
                    >
                        +
                    </button>
                    <button
                        className="ModalItem__button_decrement"
                        data-number={this.props.numberID}
                        data-price={this.props.price}
                        onClick={this.handleDecrement}
                    >
                        -
                    </button>
                </div>
            </>
        );
    }
}
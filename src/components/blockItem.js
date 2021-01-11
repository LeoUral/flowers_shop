
import React from 'react';
import BascketStore from '../store/bascket';

export default class BlockItem extends React.Component {

    handleIncrement(event) {
        const price = event.target.dataset.price;
        BascketStore.incrementTotal(price);
    }

    render() {

        return (
            <>
                <div className="blockItem" style={{ backgroundImage: `url(../image/${this.props.urlImg})` }}>
                    <div className="blockItem__name"> {this.props.name} </div>
                    <div className="blockItem__price"> {this.props.price}<span> руб.</span> </div>
                    <button
                        className="blockItem__button_buy"
                        data-price={this.props.price}
                        onClick={this.handleIncrement}>
                        buy
                    </button>
                </div>
            </>
        );
    }

}
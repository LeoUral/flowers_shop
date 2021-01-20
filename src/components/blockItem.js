
import React from 'react';
import BascketStore from '../store/bascket';

export default class BlockItem extends React.Component {

    handleIncrement(event) {
        const price = event.target.dataset.price;
        const id = event.target.dataset.id;

        BascketStore.incrementTotal(price);
        BascketStore.getPurchasedFlowers(id);
    }


    render() {

        return (
            <>
                <div className="blockItem" style={{ backgroundImage: `url(../image/${this.props.urlImg})` }}>
                    <div className="blockItem__name"> {this.props.name} </div>
                    <div className="blockItem__price"> {this.props.price}<span> руб.</span> </div>
                    <button
                        className="blockItem__button_buy"
                        data-id={this.props.id}
                        data-name={this.props.name}
                        data-price={this.props.price}
                        data-url={this.props.urlImg}
                        data-inc={this.props.inc}
                        onClick={this.handleIncrement}>
                        buy
                    </button>
                </div>
            </>
        );
    }

}
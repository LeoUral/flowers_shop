
import React from 'react';
import BascketStore from '../store/bascket';

export default class BlockItem extends React.Component {

    handleIncrement(event) {
        const price = event.target.dataset.price;
        const data = {};
        data.price = event.target.dataset.price;
        data.id = event.target.dataset.id;
        data.name = event.target.dataset.name;
        data.url = event.target.dataset.url;
        data.inc = event.target.dataset.inc;

        BascketStore.incrementTotal(price);
        BascketStore.getPurchasedFlowers(data);
    }

    getNumberFlowers(e) {
        const data = {};
        data.price = e.target.dataset.price;
        data.id = e.target.dataset.id;
        data.name = e.target.dataset.name;
        data.url = e.target.dataset.url;
        data.inc = e.target.dataset.inc;


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
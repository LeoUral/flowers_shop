import React from 'react';

export default class BlockItem extends React.Component {

    render() {

        return (
            <>
                <div className="blockItem">
                    <div className="blockItem__name"> {this.props.name} </div>
                    <div className="blockItem__price"> {this.props.price}<span> руб.</span> </div>
                    <button className="blockItem__button_buy">buy</button>
                </div>
            </>
        );
    }

}
import React from 'react';
import BascketStorage from '../store/bascket';

export default class HeaderSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            composition: ''
        }
        this.handleChangeComposition = this.handleChangeComposition.bind(this);
    }


    handleChangeComposition(event) {
        this.setState({
            composition: event.target.value
        });

        BascketStorage.changeComposition(event.target.value);
    }


    render() {
        return (
            <>
                <input type="text" onChange={this.handleChangeComposition} />
                <span> Искать букеты с цветком (роза, тюльпан, гербера, хризантема, гвоздика, пион) - {this.state.composition}</span>
            </>
        );
    }
}
import React, { Fragment } from 'react';
import ViewBacket from './viewBascket';
import BascketStore from '../store/bascket';


class ModalBascket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            base: []// наполнение покупками
        };

        this.handleOpenModalWindow = this.handleOpenModalWindow.bind(this);
        this.handleCloseModalWindow = this.handleCloseModalWindow.bind(this);
    }

    handleOpenModalWindow() {
        this.setState({ show: true });
    }

    handleCloseModalWindow() {
        this.setState({ show: false });
    }

    componentDidMount() {

        this.setState({
            base: BascketStore.base
        })

    }

    render() {

        return (
            <>
                <button onClick={this.handleOpenModalWindow} className="mobal__button_top" >Ваши покупки</button>
                <div className="modal" style={{ display: this.state.show ? 'block' : 'none' }}>
                    <div className="modal__shadow" onClick={this.handleCloseModalWindow}></div>
                    <div className="modal_window">
                        <h3>Ваши покупки:</h3>
                        <ViewBacket />
                        <div className="btn-block">
                            <button className="btn-close" onClick={this.handleCloseModalWindow}>Close</button>
                            <button className="btn-pay">To pay</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ModalBascket;
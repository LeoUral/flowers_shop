import React from 'react';
import ModalWindow from './ModalWindow';

class ModalBascket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openWindow: false };
        this.handleOpenModalWindow = this.handleOpenModalWindow.bind(this);
    }

    handleOpenModalWindow() {
        this.setState({ openWindow: true });
        setTimeout(() => {
            console.log('open -> true ', this.state);
        }, 100);

    }

    render() {

        return (
            <>
                <button onClick={this.handleOpenModalWindow}>Ваши покупки</button>
                <ModalWindow showModal={this.state.openWindow} />
            </>
        );
    }
}
export default ModalBascket;
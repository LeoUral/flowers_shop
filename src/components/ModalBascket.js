import React from 'react';


class ModalBascket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
        this.handleOpenModalWindow = this.handleOpenModalWindow.bind(this);
        this.handleCloseModalWindow = this.handleCloseModalWindow.bind(this);
    }

    handleOpenModalWindow() {
        this.setState({ show: true });
    }
    handleCloseModalWindow() {
        this.setState({ show: false });
    }

    render() {

        return (
            <>
                <button onClick={this.handleOpenModalWindow}>Ваши покупки</button>
                <div className="modal" style={{ display: this.state.show ? 'block' : 'none' }}>
                    <div className="modal__shadow" onClick={this.handleCloseModalWindow}></div>
                    <div className="modal_window">
                        <h3>Modal Window</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ut cupiditate possimus officiis assumenda suscipit rerum eum, nisi nulla magni repellat laborum quisquam dolorum ipsum voluptas inventore vero accusamus ratione minima distinctio. Voluptatum ullam est neque, modi numquam ut. Distinctio velit eveniet, aut ipsum quibusdam eos obcaecati eaque impedit iusto?</p>
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
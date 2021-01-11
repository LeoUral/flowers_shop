import React from 'react';

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.showModal
        }
        this.handleClose = this.handleClose.bind(this);
    }


    handleClose() {
        this.setState({ show: false });
    }

    render() {
        return (
            <>
                <div
                    className="modal_shadow"
                    onClick={this.handleClose}
                    style={{ display: this.state.show ? 'block' : 'none' }}>
                </div>
                <div
                    className="modal__window"
                    style={{ display: this.state.show ? 'block' : 'none' }}>
                    <h3>Modal Window</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptatum vel quas porro facere enim exercitationem! Corporis, quidem ipsam, quasi magnam cumque consectetur eos, facilis at quos tempora cum. Atque ut eum, corporis accusantium recusandae amet consequatur obcaecati dolores nulla nemo dicta tempore! Officiis, nihil dicta deleniti nesciunt aliquam odio?</p>
                    <button onClick={this.handleClose}>Close</button>
                    <button>To pay</button>
                </div>

            </>

        );
    }
}
export default ModalWindow;
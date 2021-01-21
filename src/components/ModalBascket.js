import React, { Fragment } from 'react';
import Base from './Base';
import ModalItem from './ModalItem';
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

    //TODO вынести отдельным функциональным компонентом с observer -ом
    //TODO для перерисовки корзины
    viewBacket(data, quantity, total) {

        this.basketBlock = [];

        for (let i = 0; i < data.length; i++) {
            if (quantity[i] > 0) {
                this.basketBlock.push(
                    <React.Fragment key={data[i].id}>
                        <ModalItem
                            quantity={quantity[i]}
                            name={data[i].name}
                            price={data[i].price}
                            urlImg={data[i].urlImg}
                            id={data[i].id}
                            numberID={data[i].id}
                            inc={data[i].inc}
                        />
                    </React.Fragment>
                )
            }
        }

        this.basketBlock.push(
            <React.Fragment key={data.length + 1}>
                <div>
                    <span>ИТОГО: </span> {total} <span> руб.</span>
                </div>
            </React.Fragment>
        )
        console.log(this.basketBlock);
    }

    componentDidMount() {
        let promiseData = Base.getDataBase();
        promiseData.then((data) => {
            this.setState({
                base: data
            })
        });
    }

    render() {

        this.viewBacket(this.state.base, BascketStore.quantity, BascketStore.total)

        return (
            <>
                <button onClick={this.handleOpenModalWindow}>Ваши покупки</button>
                <div className="modal" style={{ display: this.state.show ? 'block' : 'none' }}>
                    <div className="modal__shadow" onClick={this.handleCloseModalWindow}></div>
                    <div className="modal_window">
                        <h3>Ваши покупки:</h3>
                        {this.basketBlock}
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
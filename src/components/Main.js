import React from 'react';
import Base from './Base';
import BlockItem from './blockItem';
import BascketStore from '../store/bascket';
import FormCustomer from './FormCustomer';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            base: []
        }
    }

    //формируем каталог товара
    writeBlockProduct() {
        const data = this.state.base;
        this.renderBase = [];

        data.forEach((dataItem) => {
            this.renderBase.push(
                <React.Fragment key={dataItem.id}>
                    <BlockItem
                        name={dataItem.name}
                        price={dataItem.price}
                        urlImg={dataItem.urlImg}
                        id={dataItem.id}
                        inc={dataItem.inc}
                    />
                </React.Fragment>
            );
        });
        console.log(this.renderBase);
    }

    //получаем загруженную базу
    getPromiseDataBase() {
        let promiseData = Base.getDataBase();
        promiseData.then((data) => {
            this.setState({
                base: data
            })
            BascketStore.writeBase(data);
        })
            .catch((error) => {
                console.log(error + ' <= ERROR данные не получены!');//test -> err base
            });
    }

    componentDidMount() {

        this.getPromiseDataBase();
    }

    render() {

        this.writeBlockProduct();

        return (
            <>
                <FormCustomer />
                <div className="main">
                    {this.renderBase}
                </div>


            </>
        );
    }
}
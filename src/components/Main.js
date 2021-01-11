import React, { Fragment } from 'react';
import Base from './Base';
import BlockItem from './blockItem';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            base: []
        }
    }

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
                    />
                </React.Fragment>
            );
        });
        console.log(this.renderBase);
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

        this.writeBlockProduct();

        return (
            <>
                <div className="main">
                    {this.renderBase}
                </div>

            </>
        );
    }
}
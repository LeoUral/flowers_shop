import React from 'react';
import FormCustomer from './FormCustomer';
import Base from './Base';
import BlockProduct from './BlockProduct';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            base: [],
            composition: ''
        }
    }

    componentDidMount() {
        Base.getDataBase();
    }

    render() {

        return (
            <>
                <FormCustomer />
                <div className="main">
                    <BlockProduct />
                </div>


            </>
        );
    }
}
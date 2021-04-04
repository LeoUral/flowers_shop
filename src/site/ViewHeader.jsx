import React from 'react';
import ViewHeaderLeft from './ViewHeaderLeft';
import ViewHeaderRight from './ViewHeaderRight';
import ViewNavbar from './ViewNavbar';



export default class ViewHeader extends React.Component {

    render() {
        return (
            <>
                <ViewNavbar />
                <section className="container container-flex" >

                    <ViewHeaderLeft />
                    <ViewHeaderRight />
                </section>
            </>
        )
    }
}
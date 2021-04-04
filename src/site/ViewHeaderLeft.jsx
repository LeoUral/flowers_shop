import React from 'react';
import ViewHeaderMain from './ViewHeaderMain';


export default class ViewHeaderLeft extends React.Component {

    render() {
        return (
            <>
                <div className="container-left">
                    <ViewHeaderMain />
                </div>
            </>
        )
    }
}
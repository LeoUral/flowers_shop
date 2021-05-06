import React from 'react';
import ViewHeader from './ViewHeader';
import ViewAbout from './ViewAbout';
import ViewCatalog from './ViewCatalog';

//основной класс для сайта
export default class View extends React.Component {

    render() {
        return (
            <>
                <ViewHeader />
                <div>
                    <ViewAbout />
                    <ViewCatalog />
                </div>
            </>
        )
    }
}
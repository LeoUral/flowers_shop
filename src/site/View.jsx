import React from 'react';
import ViewHeader from './ViewHeader';

//основной класс для сайта
export default class View extends React.Component {

    render() {
        return (
            <>
                <ViewHeader />
                <div>
                    ОСНОВНОЙ САЙТ
                </div>
            </>
        )
    }
}
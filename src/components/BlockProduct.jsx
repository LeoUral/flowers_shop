import React from 'react';
import BlockItem from './blockItem';
import BascketStorage from '../store/bascket';
import { observer } from 'mobx-react';

const BlockProduct = observer(() => {

    const data = BascketStorage.base;
    console.log(data + '<< BASE in MAIN');//test
    const renderBase = [];
    let composition = BascketStorage.composition;

    data.forEach((dataItem) => {
        if (dataItem.inc.includes(composition) || composition === '') {
            renderBase.push(
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
        }

    });
    console.log(renderBase);

    return (
        <>
            {renderBase}
        </>
    );
})
export default BlockProduct;
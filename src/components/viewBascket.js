import React from 'react';
import { observer } from 'mobx-react';
import ModalItem from './ModalItem';
import BascketStore from '../store/bascket';


const ViewBacket = observer(() => {

    const data = BascketStore.base;
    let quantity = BascketStore.quantity;
    let total = BascketStore.total;

    let basketBlock = [];

    for (let i = 0; i < data.length; i++) {
        if (quantity[i] > 0) {
            basketBlock.push(
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

    basketBlock.push(
        <React.Fragment key={data.length + 1}>
            <div>
                <span> ИТОГО: </span> {total} <span> руб.</span>
            </div>
        </React.Fragment>
    )
    console.log(basketBlock);
    return (
        <>
            <div>
                {basketBlock}
            </div>
        </>
    )
})


export default ViewBacket;
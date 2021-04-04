import { observer } from 'mobx-react';
import React from 'react';
import BascketStore from '../store/bascket';
import ModalBascket from './ModalBascket';

const HeaderTotal = observer(() => {

    const total = BascketStore.total;

    return (
        <>
            <div className="header_total">
                <div><span>TOTAL: </span> {total}<span> руб.</span></div>
                {total > 0 ? <ModalBascket /> : <span></span>}
            </div>
        </>
    );
})
export default HeaderTotal;
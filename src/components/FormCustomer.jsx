import { observer } from 'mobx-react';
import React from 'react';
import BascketStore from '../store/bascket';

//! отправка ФОРМЫ отключена preventDefault

const FormCustomer = observer(() => {

    const show = BascketStore.show;
    console.log(show + ' <- state SHOW in FORM component'); // test -> show for FORM

    return (
        <>
            <form className="form" style={{ display: show ? 'block' : 'none' }}>
                <div className="form__shadow"></div>
                <div className="form__window">
                    <h4>Для уточнения данных по заказу, оставте Ваш телефон.</h4>
                    <label>
                        Your Name
                <input type="text" placeholder="your name" className="form__input" />
                    </label>
                    <label>
                        You Phone
                <input type="tel" className="form__input" />
                    </label>
                    <input type="submit" className="form__btn_submit"
                        onClick={(e) => {
                            e.preventDefault();
                            BascketStore.changeShow();
                        }} />
                </div>
            </form>
        </>
    );
})

export default FormCustomer;
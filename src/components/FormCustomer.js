import React from 'react';

export default class FormCustomer extends React.Component {

    render() {
        return (
            <>
                <form>
                    <label>
                        You Name
                    <input type="text" placeholder="you name" />
                    </label>
                    <label>
                        You Phone
                    <input type="phone" />
                    </label>
                </form>
            </>
        );
    }
}
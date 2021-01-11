
import React from 'react';
import HeaderTotal from './headerTotal';


class Header extends React.Component {


    render() {
        return (
            <>
                <div className="header">
                    Header block
                    <HeaderTotal />
                </div>
            </>
        );
    }
}
export default Header;

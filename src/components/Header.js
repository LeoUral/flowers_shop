
import React from 'react';
import HeaderSearch from './HeaderSearch';
import HeaderTotal from './headerTotal';


class Header extends React.Component {


    render() {
        return (
            <>
                <div className="header">
                    <HeaderSearch />
                    <HeaderTotal />
                </div>
            </>
        );
    }
}
export default Header;

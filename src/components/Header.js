
import React from 'react';
import HeaderSearch from './HeaderSearch';
import HeaderTotal from './headerTotal';
import image_1 from '../image/flowers_2.png';
import image_2 from '../image/flowers_0.png';


class Header extends React.Component {

    //анимация букетиков. Летают по экрану
    animationBlock() {
        const point = document.querySelector('.animation_block');
        const point2 = document.querySelector('.animation_block2');
        setInterval(() => {
            point.classList.add("invisible_block");
            point2.classList.remove("invisible_block");
            console.log('ADD');
        }, 30000);
        setInterval(() => {
            point.classList.remove("invisible_block");
            point2.classList.add("invisible_block");
            console.log('REMOVE');
        }, 60000);
    }

    componentDidMount() {
        this.animationBlock();
    }

    render() {
        return (
            <>
                <div className="header">
                    {/* <div className="animation_block" >
                        <img src={image_1} alt="pic" />
                    </div>
                    <div className="animation_block2 invisible_block" >
                        <img src={image_2} alt="pic" />
                    </div> */}
                    <HeaderSearch />
                    <HeaderTotal />
                </div>
            </>
        );
    }
}
export default Header;

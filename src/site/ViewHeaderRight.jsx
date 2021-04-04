import React from 'react';
import { Image } from 'react-bootstrap';
import image from '../image/flowers_0.png';

export default class ViewHeaderRight extends React.Component {

    render() {
        return (
            <>
                <div className="container-right">
                    <Image src={image} fluid className="view-image" alt="image" />
                </div>
            </>
        )
    }
}
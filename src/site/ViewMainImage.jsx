
import React from 'react';
import { Col, Image } from 'react-bootstrap';

export default class ViewMainImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {

        const number = this.props.number;
        const imageUrl = this.props.imageUrl;
        const linkUrl = this.props.linkUrl;
        const text = this.props.text;
        const textPrice = this.props.textPrice;
        const textBtn = this.props.textBtn;

        return (
            <>

                <Col md={number}>
                    <Image className="view_main_image" src={imageUrl} rounded />
                    <a className="view_main_image_link" href={linkUrl}> {text} </a>
                    <div style={{ textAlign: 'center' }} > {textPrice} </div>
                    {textBtn && <button className="view_main_image_btn"> {textBtn} </button>}
                </Col>

            </>
        )
    }
}
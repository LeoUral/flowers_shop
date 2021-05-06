import React from 'react';
import { Jumbotron, Container, Row } from 'react-bootstrap';
import ViewMainImage from './ViewMainImage';
import imageUrl from '../image/flowers_2.png';
import imageUrl1 from '../image/flowers_0.png';

export default class ViewAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {

        const linkUrl1 = '#';
        const linkUrl2 = '#';
        const linkUrl3 = '#';
        const linkUrl4 = '#';
        const text1 = 'Название букета'
        const text2 = 'Название букета'
        const text3 = 'Название букета'
        const text4 = 'Название букета'

        return (
            <>
                <Container>
                    <Jumbotron style={{ borderRadius: '0px', backgroundColor: '#E4E7F0' }} >
                        <Container>
                            <h1 className="view-main__h1" style={{ textAlign: 'center', marginBottom: '40px' }} >Каталог</h1>
                            <Row>
                                <ViewMainImage
                                    imageUrl={imageUrl}
                                    linkUrl={linkUrl1}
                                    text={text1}
                                    number="3"
                                    textPrice="2500 руб."
                                    textBtn="Заказать букет"
                                />
                                <ViewMainImage
                                    imageUrl={imageUrl1}
                                    linkUrl={linkUrl2}
                                    text={text2}
                                    number="3"
                                    textPrice="2500 руб."
                                    textBtn="Заказать букет"
                                />
                                <ViewMainImage
                                    imageUrl={imageUrl}
                                    linkUrl={linkUrl3}
                                    text={text3}
                                    number="3"
                                    textPrice="2500 руб."
                                    textBtn="Заказать букет"
                                />
                                <ViewMainImage
                                    imageUrl={imageUrl1}
                                    linkUrl={linkUrl4}
                                    text={text4}
                                    number="3"
                                    textPrice="2500 руб."
                                    textBtn="Заказать букет"
                                />

                            </Row>
                        </Container>
                    </Jumbotron>
                </Container>
            </>
        )
    }
}
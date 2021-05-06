import React from 'react';
import { Jumbotron, Container, Row } from 'react-bootstrap';
import ViewMainImage from './ViewMainImage';
import imageUrl from '../image/flowers_2.png';

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
        const text1 = 'Свежие цветы'
        const text2 = 'Чувственные букеты'
        const text3 = 'Опытные флористы'

        return (
            <>
                <Container>
                    <Jumbotron style={{ borderRadius: '0px', backgroundColor: '#fff' }} >
                        <Container>
                            <h1 className="view-main__h1" style={{ textAlign: 'center', marginBottom: '40px' }} >О нас</h1>
                            <Row>
                                <ViewMainImage
                                    imageUrl={imageUrl}
                                    linkUrl={linkUrl1}
                                    text={text1}
                                    number="4"
                                />
                                <ViewMainImage
                                    imageUrl={imageUrl}
                                    linkUrl={linkUrl2}
                                    text={text2}
                                    number="4"
                                />
                                <ViewMainImage
                                    imageUrl={imageUrl}
                                    linkUrl={linkUrl3}
                                    text={text3}
                                    number="4"
                                />

                            </Row>
                        </Container>
                    </Jumbotron>
                </Container>
            </>
        )
    }
}
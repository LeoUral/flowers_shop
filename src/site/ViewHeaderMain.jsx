import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default class ViewHeaderMain extends React.Component {

    render() {
        return (
            <>
                <Jumbotron className="view-main" style={{ backgroundColor: '#E4E7F0', borderRadius: '0' }} >
                    <Container>
                        <h1 className="view-main__h1" >Рыжая лавка</h1>
                        <p>
                            Первый искренний цветочный в Екатеринбурге
                        </p>
                        <p>
                            <button variant="danger" className="btn_view">Заказать букет</button>
                        </p>
                    </Container>
                </Jumbotron>
            </>
        )
    }
}
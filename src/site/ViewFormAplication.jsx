import React from 'react';
import { Jumbotron, Container, Row, Form } from 'react-bootstrap';

export default class ViewFormAplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {



        return (
            <>
                <Container>
                    <Jumbotron style={{ borderRadius: '0px', backgroundColor: '#fff' }} >
                        <Container>
                            <h1 className="view-main__h1" style={{ textAlign: 'center', marginBottom: '40px' }} >Оставить заявку</h1>
                            <Row>
                                <Form>
                                    <Form.Group className="view_form_group">
                                        <Form.Label></Form.Label>
                                        <Form.Control type="text" className="view_form_group_input" placeholder="Ваше имя" />
                                        <Form.Label></Form.Label>
                                        <Form.Control type="text" className="view_form_group_input" placeholder="Ваш номер телефона" />
                                        <Form.Label></Form.Label>
                                        <Form.Control as="textarea" rows={3} className="view_form_group_input " placeholder="Комментарий (какой букет Вы бы хотешли заказать или какой вопрос задать нашему флористу)" style={{ resize: 'none' }} />
                                        <Form.Text className="text-muted">
                                            * Мы перезвоним Вам в течении 15 минут
                                        </Form.Text>
                                        <button variant="danger" className="btn_view">Перезвоните мне</button>
                                    </Form.Group>
                                </Form>


                            </Row>
                        </Container>
                    </Jumbotron>
                </Container>
            </>
        )
    }
}
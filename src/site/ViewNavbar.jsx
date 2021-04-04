import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ViewNavbar extends React.Component {

    render() {
        return (
            <>
                <Container>
                    <Navbar bg="light" expand="lg" className="view-navbar">
                        <Container>
                            <Navbar.Brand> <Link to="/" className="view-navbar__link-link" style={{ textDecoration: 'none' }}> </Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link className="view-navbar__link" > <Link to='/' className="view-navbar__link-link"> Home </Link></Nav.Link>
                                    <Nav.Link className="view-navbar__link"> <Link to='/eshop' className="view-navbar__link-link"> Каталог </Link></Nav.Link>
                                    <Nav.Link className="view-navbar__link"> <Link to='/' className="view-navbar__link-link"> Доставка </Link></Nav.Link>
                                    <Nav.Link className="view-navbar__link"> <Link to='/' className="view-navbar__link-link"> Оплата </Link></Nav.Link>
                                    <Nav.Link className="view-navbar__link"> <Link to='/' className="view-navbar__link-link"> Контакты </Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </>
        )
    }
}
import React from 'react';
import { useHistory } from 'react-router-dom';
import { URL } from 'routes/routes';
import { Navbar, Nav } from 'react-bootstrap';

export const HeaderAuth: React.FC = React.memo(() => {
    const history = useHistory();

    const { pathname } = history.location;

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href={URL.HOME_PAGE}>Home page</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={URL.ABOUT_US} className={pathname.startsWith(URL.ABOUT_US) ? 'active' : ''}>
                        About Us
                    </Nav.Link>
                    <Nav.Link href={URL.PRODUCTS} className={pathname.startsWith(URL.PRODUCTS) ? 'active' : ''}>
                        Products
                    </Nav.Link>
                    <Nav.Link href="/contact-us">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            <Nav className="navbar-nav px-3">
                <Nav.Link href={''}>Hi, Admin</Nav.Link>
            </Nav>
        </Navbar>
    );
});

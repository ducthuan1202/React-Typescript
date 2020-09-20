import React from 'react';
import { useHistory } from 'react-router-dom';
import { URL } from 'routes/routes';
import { Navbar, Nav } from 'react-bootstrap';

export const Header: React.FC = React.memo(() => {
    const history = useHistory();

    const { pathname } = history.location;

    return (
        <Navbar bg="light" variant="light" expand="lg">
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
                    <Nav.Link href={URL.USERS} className={pathname.startsWith(URL.USERS) ? 'active' : ''}>
                        Users
                    </Nav.Link>
                    <Nav.Link href="/contact-us">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
});

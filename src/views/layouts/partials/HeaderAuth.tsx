import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { URL } from 'routes/routes';

export const HeaderAuth: React.FC = React.memo(() => {
    const history = useHistory();

    const { pathname } = history.location;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={URL.HOME_PAGE} title="Home" className="navbar-brand">
                    Home page
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${pathname === URL.ABOUT_US ? 'active' : ''}`}>
                            <Link to={URL.ABOUT_US} title="About Us" className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className={`nav-item ${pathname.startsWith(URL.PRODUCTS) ? 'active' : ''}`}>
                            <Link to={URL.PRODUCTS} title="Products" className="nav-link">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact-us" title="Contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">
                            Hi, Admin
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
});

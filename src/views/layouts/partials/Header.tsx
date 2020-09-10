import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export const Header: React.FC = React.memo(() => {
    const history = useHistory();

    const { pathname } = history.location;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" title="Home" className="navbar-brand">
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
                        <li className={`nav-item ${pathname === '/about-us' ? 'active' : ''}`}>
                            <Link to="/about-us" title="About Us" className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className={`nav-item ${pathname === '/products' ? 'active' : ''}`}>
                            <Link to="/products" title="Products" className="nav-link">
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
            </nav>
        </div>
    );
});

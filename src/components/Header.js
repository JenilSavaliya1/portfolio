import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg " style={{ background: "rgb(170, 156, 156)" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Jenil Savaliya</Link>
                    <div className="navbar-nav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

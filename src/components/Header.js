import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <p className="navbar-brand">shopku</p>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add" className="nav-link">Add Produk</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header

import React from 'react';
import './header.css';
import ProductListPage from '../../page/Product/productlist/ProductListPage';

function NavBar() {
    return (
        <header className="App-header">
            <div className="logo">EduKids</div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href='/product'>Products</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <button className="enroll-btn">Enroll</button>
        </header>
    );
}

export default NavBar;

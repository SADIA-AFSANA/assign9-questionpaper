import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div className='header'>
            <div><h1>Question-Paper</h1></div>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/question'>Question</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/chart'>Chart</Link>
            </div>
        </div>
    );
};

export default Header;
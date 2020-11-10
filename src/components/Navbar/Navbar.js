import classes from './Navbar.module.css';
import React from 'react';
import Logo from './Logo/Logo';
import Links from './Nav-Links/NavLinks';

const navBar = props => {
    return (
        <div className = {classes.Navbar}>
            <Logo />
            <Links />
        </div>
    )
}

export default navBar;
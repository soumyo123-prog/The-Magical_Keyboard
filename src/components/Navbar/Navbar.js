import classes from './Navbar.module.css';
import React from 'react';
import Logo from './Logo/Logo';
import Links from './Nav-Links/NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const navBar = props => {
    return (
        <div className = {classes.Navbar}>
            <div className = {classes.RealNavbar}>
                <Logo />
                <Links />
                <div 
                    className = {classes.Bars}
                    onClick = {props.click}
                >
                    <FontAwesomeIcon icon = {faBars} />
                </div>
            </div>
        </div>
    )
}

export default navBar;
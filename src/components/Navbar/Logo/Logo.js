import React from 'react';
import Logo from '../../../assets/Images/logo.jpg';
import classes from './Logo.module.css';

const logo = props => {
    return (
        <div className = {classes.Logo}>
            <img src = {Logo} ></img>
        </div>
    )
}

export default logo;
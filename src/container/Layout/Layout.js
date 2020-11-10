import classes from './Layout.module.css';
import React from 'react';
import Keyboard from '../../components/Main/Keyboard/Keyboard';
import Navbar from '../../components/Navbar/Navbar';

const layout = props => {
    return (
        <div>
            <Navbar />
            <Keyboard />
        </div>
    )
}

export default layout;

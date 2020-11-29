import React from 'react';
import classes from './Features.module.css';
import Hover from './PlayHover/onHover';
import Keyboard from './PlayKeyboard/PlayKeyboard';

const features = props => {
    return (
        <div className={classes.Features}>
            <Hover />
            <Keyboard />
        </div>
    )
}

export default features;
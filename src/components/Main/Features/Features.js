import React from 'react';
import classes from './Features.module.css';
import Hover from './PlayHover/onHover';

const features = props => {
    return (
        <div className={classes.Features}>
            <Hover />
        </div>
    )
}

export default features;
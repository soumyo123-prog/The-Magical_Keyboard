import React from 'react';
import classes from './Modal.module.css';

const modal  = props => {
    let modalContent = null;
    if (props.showModal) {
        modalContent = (
            <div 
                className = {classes.Modal}
            >
            </div>
        )
    }
    else{
        modalContent = null;
    }

    return (
        modalContent
    )
}

export default modal;
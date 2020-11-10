import React from 'react';
import classes from './Backdrop.module.css'

const backdrop = props => {
    let backdropContent = null;
    if (props.showBackdrop) {
        backdropContent = (
            <div 
                className = {classes.Backdrop} 
                onClick = {props.hideBackdrop}
            >
            </div>
        )
    } 
    else{
        backdropContent = null;
    }

    return(
        backdropContent
    )
}

export default backdrop;
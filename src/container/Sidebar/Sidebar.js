import React from 'react';
import classes from './Sidebar.module.css';

const sidebar = props => {
    let sideBar = null;
    if (props.visible) {
        sideBar = (
            <div className = {classes.Sidebar}>
                {props.children}
            </div>
        )
    }

    return(
        sideBar
    )
}

export default sidebar;
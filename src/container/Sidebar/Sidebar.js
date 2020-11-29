import React from 'react';
import classes from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

const sidebar = props => {
    let sideBar = null;
    if (props.visible) {
        sideBar = (
            <ul className = {classes.Sidebar}>
                <li>About</li>
                <hr />
                <li>Controls</li>
                <hr />
                <li className = {classes.Github}>
                    <a 
                        href = "https://github.com/soumyo123-prog/The-Magical_Keyboard"
                        target = "_blank"
                    >
                        <div className = {classes.GithubIcon}>
                            <FontAwesomeIcon icon = {faGithubSquare} />
                        </div>
                        <div>
                            Repository
                        </div>
                    </a>
                </li>
            </ul>
        )
    }

    return(
        sideBar
    )
}

export default sidebar;
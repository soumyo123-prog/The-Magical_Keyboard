import React from 'react';
import classes from './Github.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';

const github = props => {
    return (
        <a 
            href = "https://github.com/soumyo123-prog/The-Magical_Keyboard" 
            className = {classes.Github}
            target = "_blank"
        >
            <div className = {classes.Gcontainer}>
                <div className = {classes.GithubIcon}><FontAwesomeIcon icon = {faGithubSquare} /></div>
                Repository
            </div>
        </a>
    )
}

export default github;
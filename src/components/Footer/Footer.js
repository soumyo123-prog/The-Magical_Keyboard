import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const footer = props => {
    return (
        <div className = {classes.Footer}>
            <ul className = {classes.Social}>
                My social media handles :
                <li className = {classes.Instagram}>
                    <a 
                        href = "https://www.instagram.com/soumyo_jyoti99/"
                        target = "_blank"
                    >
                        <FontAwesomeIcon icon = {faInstagram} />                   
                    </a> 
                </li>
                <li>
                    <a
                        href = "https://github.com/soumyo123-prog"
                        target = "_blank"
                    >
                        <FontAwesomeIcon icon = {faGithubSquare} />                       
                    </a> 
                </li>
            </ul>
        </div>
    )
}

export default footer;
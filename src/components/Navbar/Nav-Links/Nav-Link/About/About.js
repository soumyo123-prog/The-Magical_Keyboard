import React from 'react';
import classes from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import Aux from '../../../../../hoc/Auxilliary';
import Backdrop from '../../../../../UI/Backdrop/Backdrop';
import Modal from '../../../../../UI/Modal/Modal';

const about = props => {
    return (
        <Aux>
            <div 
                className = {classes.About}
                onClick = {props.clicked}
            >
                <div className = {classes.AboutIcon}>
                    <div><FontAwesomeIcon icon = {faInfoCircle} /></div>
                    About
                </div>
                
            </div>
            <Backdrop 
                showBackdrop = {props.show}
                hideBackdrop = {props.hide}
            />
            <Modal 
                showModal = {props.show}
            />
        </Aux>
    )
}

export default about;
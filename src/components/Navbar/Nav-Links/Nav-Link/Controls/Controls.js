import React from 'react';
import classes from './Controls.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../../../../../UI/Backdrop/Backdrop';
import Modal from '../../../../../UI/Modal/Modal';
import Aux from '../../../../../hoc/Auxilliary';

class Controls extends React.Component {
    render() {
        return (
            <Aux>
                <div 
                    onClick = {this.props.clicked}
                    className = {classes.Controls}
                >
                    <div className = {classes.ControlsIcon}>
                        <div><FontAwesomeIcon icon = {faGamepad} /></div>
                        Controls
                    </div>
                </div>
                <Backdrop
                    showBackdrop = {this.props.show}
                    hideBackdrop = {this.props.hide}
                />
                <Modal 
                    showModal = {this.props.show}
                />
            </Aux>
        )
    }
}

export default Controls;
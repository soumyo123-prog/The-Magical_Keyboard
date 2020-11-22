import React from 'react';
import classes from './KeyboardButtons.module.css';
import Aux from '../../../../hoc/Auxilliary';
import Pattern1 from '../Patterns/Pattern1/Pattern1';
import Pattern2 from '../Patterns/Pattern2/Pattern2';

class Keys extends React.Component {
    
    render(){
        return(
            <div>
                <div className = {classes.ButtonContainerBig}>
                    <Pattern1 />
                </div>
                <div className = {classes.ButtonContainerSmall}>
                    <Pattern2 />
                </div>
                <div className = {classes.ButtonContainerBig}>
                    <Pattern1 />
                </div>
                <div className = {classes.ButtonContainerSmall}>
                    <Pattern2 />
                </div>
                <div className = {classes.ButtonContainerBig}>
                    <Pattern1 />
                </div>
                <div className = {classes.ButtonContainerSmall}>
                    <Pattern2 />
                </div>
            </div>
        )
    }
}

export default Keys;
import React from 'react';
import classes from './Pattern2.module.css';
import C from '../../../../../assets/audio/C.wav';
import D from '../../../../../assets/audio/D.wav';
import E from '../../../../../assets/audio/E.wav';
import DB from '../../../../../assets/audio/DB.wav';
import EB from '../../../../../assets/audio/EB.wav';
import {enabled} from '../../../Features/PlayHover/onHover';
 
const playAudio = (src) => {
    var a = new Audio(src);
    a.play();
}

const keyPlayAudio = src =>{
    var a = new Audio(src);
    a.play();
}

const MouseEventHandler = src => {
    if (enabled){
        playAudio(src);
    }
}

const fullKeyMap = {
    playC : 'j',
    playD : 'k',
    playE : 'l',
    playDB : 'u',
    playEB : 'i'
}

const fullHandlers = {
    playC : () => keyPlayAudio(C),
    playD : () => keyPlayAudio(D),
    playE : () => keyPlayAudio(D),
    playDB : () => keyPlayAudio(DB),
    playEB : () => keyPlayAudio(EB)
}

const patternS = props => {
    return (
        <div className = {classes.Container}>
            <li className = {classes.White} >
                <button 
                    onClick = {() => playAudio(C)} 
                    className = {classes.WhiteButton}
                    onMouseOver = {() => MouseEventHandler(C)}
                ></button>
            </li>
            <li className = {classes.Black1} >
                <button 
                    onClick = {() => playAudio(DB)}
                    className = {classes.BlackButton}
                    onMouseOver = {() => MouseEventHandler(DB)}
                ></button>
            </li>
            <li className = {classes.White} >
                <button 
                    onClick = {() => playAudio(D)}
                    className = {classes.WhiteButton}
                    onMouseOver = {() => MouseEventHandler(D)}
                ></button>
            </li>
            <li className = {classes.Black2} >
                <button 
                    onClick = {() => playAudio(EB)}
                    className = {classes.BlackButton}
                    onMouseOver = {() => MouseEventHandler(EB)}
                ></button>
            </li>
            <li className = {classes.White} >
                <button 
                    onClick = {() => playAudio(E)}
                    className = {classes.WhiteButton}
                    onMouseOver = {() => MouseEventHandler(E)}
                ></button>
            </li>
        </div>
    )
}

export default patternS;
export {fullKeyMap, fullHandlers};
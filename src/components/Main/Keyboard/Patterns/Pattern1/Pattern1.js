import classes from './Pattern1.module.css';
import React from 'react';
import F from '../../../../../assets/audio/F.wav';
import G from '../../../../../assets/audio/G.wav';
import A from '../../../../../assets/audio/A.wav';
import B from '../../../../../assets/audio/B.wav';
import GB from '../../../../../assets/audio/GB.wav';
import AB from '../../../../../assets/audio/AB.wav';
import BB from '../../../../../assets/audio/BB.wav';

const playAudio = (src) => {
    var a = new Audio(src);
    a.play();
}

const keyPlayAudio = src =>{
    var a = new Audio(src);
    a.play();
}

const keyMap = {
    playF : 'd',
    playG : 'f',
    playA : 'g',
    playB : 'h',
    playGB : 'r',
    playAB : 't',
    playBB : 'y'
}

const handlers = {
    playF : () => keyPlayAudio(F),
    playG : () => keyPlayAudio(G),
    playA : () => keyPlayAudio(A),
    playB : () => keyPlayAudio(B),
    playGB : () => keyPlayAudio(GB),
    playAB : () => keyPlayAudio(AB),
    playBB : () => keyPlayAudio(BB)
}

const PatternB = props => {
    const whiteClass = [classes.WhiteButton];

    return (
        <div className={classes.Container}>
            <li className={classes.White}>   
                <button
                    onClick={() => playAudio(F)}
                    className = {whiteClass.join(' ')}
                ></button>
            </li>
            <li className={classes.Black1}>
                <button 
                    onClick={() => playAudio(GB)} 
                    className = {classes.BlackButton}
                ></button>
            </li>
            <li className={classes.White}>
                <button 
                    onClick={() => playAudio(G)} 
                    className = {classes.WhiteButton}
                ></button>
            </li>
            <li className={classes.Black2}>
                <button 
                    onClick={() => playAudio(AB)} 
                    className = {classes.BlackButton}
                ></button>
            </li>
            <li className={classes.White}>
                <button 
                    onClick={() => playAudio(A)} 
                    className = {classes.WhiteButton} 
                ></button>
            </li>
            <li className={classes.Black3}>
                <button 
                    onClick={() => playAudio(BB)} 
                    className = {classes.BlackButton}
                ></button>
            </li>
            <li className={classes.White}>
                <button 
                    onClick={() => playAudio(B)} 
                    className = {classes.WhiteButton}
                ></button>
            </li>
        </div>
    )
}

export default PatternB;
export {keyMap , handlers};
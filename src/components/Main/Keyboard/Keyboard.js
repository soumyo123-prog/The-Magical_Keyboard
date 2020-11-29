import React , {Component} from 'react';
import Keys from './Keyboard-buttons/KeyboardButtons';
import classes from './Keyboard.module.css';
import active from './Patterns/Pattern1/Pattern1.module.css';
import { HotKeys } from  'react-hotkeys';
import {fullKeyMap, fullHandlers} from './Patterns/Pattern2/Pattern2';
import {keyMap, handlers} from './Patterns/Pattern1/Pattern1';
import Recording from './RecordingBar/Recording';
import Features from '../Features/Features';
import {playWithKeyboard} from '../Features/PlayKeyboard/PlayKeyboard';

class Keyboard extends Component{
    constructor(props){
        super(props);
        this.keyboardRef = React.createRef();
    }

    state = {
        keyboard : true
    }

    componentDidMount (){
        this.keyboardRef.current.focus();
    }

    render(){
        return (
            <HotKeys keyMap = {keyMap} handlers = {handlers}>
                <HotKeys keyMap = {fullKeyMap} handlers = {fullHandlers}>
                    <div className = {classes.KeyboardContainer}>
                        <div 
                            className = {classes.Keyboard} 
                            tabIndex = "0"
                            ref = {this.keyboardRef}
                        >
                            <Recording />
                            <Keys />
                            <Features />
                        </div>
                    </div>
                </HotKeys>
            </HotKeys>
        )
    }
}

export default Keyboard;
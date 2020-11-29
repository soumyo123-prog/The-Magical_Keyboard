import React from 'react';
import classes from './PlayKeyboard.module.css';

let playWithKeyboard = true;

class PlayKeyboard extends React.Component {
    constructor(props){
        super(props);
        this.checkboxRef = React.createRef();
    }

    componentDidMount(){
        this.checkboxRef.current.checked = true;
        this.checkboxRef.current.parentElement.style.backgroundColor = "#5b98f5"; 
    }

    onCheckHandler = (event) => {
        if (event.target.checked){
            playWithKeyboard = true;
            event.target.parentElement.style.backgroundColor = "#5b98f5";
        }
        else{
            event.target.parentElement.style.backgroundColor = "#bfacac";
            playWithKeyboard = false;
        }
    }

    render(){
        return (
            <section className = {classes.Hover}>
                <div className = {classes.Slide}>
                    <input ref = {this.checkboxRef} type = "checkbox" onChange={this.onCheckHandler}/>
                    <span className = {classes.Switch} />
                </div>
                <div>Play with Keyboard</div>
            </section>
        )
    }
}

export default PlayKeyboard;
export {playWithKeyboard};
import React from 'react';
import classes from './onHover.module.css';

let enabled = false;

class OnHover extends React.Component {
    onCheckHandler = event => {
        if (event.target.checked){
            event.target.parentElement.style.backgroundColor = "#5b98f5";
            enabled = true;
        }
        else{
            event.target.parentElement.style.backgroundColor = "#bfacac";
            enabled = false;
        }
    }

    render(){
        return (
            <section className = {classes.Hover}>
                <div className = {classes.Slide}>
                    <input type = "checkbox" onChange={this.onCheckHandler}/>
                    <span className = {classes.Switch} />
                </div>
                <div>Play with Hover</div>
            </section>
        )
    }
}

export default OnHover;
export {enabled};
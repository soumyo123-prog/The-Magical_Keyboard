import React from 'react';
import classes from './onHover.module.css';

let enabled = false;

class OnHover extends React.Component {
    onCheckHandler = event => {
        if (event.target.checked){
            enabled = true;
        }
        else{
           enabled = false;
        }
    }

    render(){
        return (
            <section className = {classes.Hover}>
                <div className = {classes.Slide}>
                    <input type = "checkbox" onChange={this.onCheckHandler}/>
                    Play with Hover
                </div>
            </section>
        )
    }
}

export default OnHover;
export {enabled};
import classes from './NavLinks.module.css';
import React from 'react';
import Github from './Nav-Link/Github/Github';
import Controls from './Nav-Link/Controls/Controls';
import About from './Nav-Link/About/About';

class NavLinks extends React.Component {
    state = {
        showControls : false,
        showAbout : false
    }

    showControlsHandler = () => {
        this.setState({
            showControls : true
        })
    }

    hideControlsHandler = () => {
        this.setState({
            showControls : false
        })
    }

    showAboutHandler = () => {
        this.setState({
            showAbout : true
        })
    }

    hideAboutHandler = () => {
        this.setState({
            showAbout : false
        })
    }

    render() {
        return (
            <div className = {classes.Links}>
                <Github />
                <Controls 
                    show = {this.state.showControls}
                    clicked = {this.showControlsHandler}
                    hide = {this.hideControlsHandler}
                />
                <About 
                    show = {this.state.showAbout}
                    clicked = {this.showAboutHandler}
                    hide = {this.hideAboutHandler}
                />
            </div>
        )
    }
}

export default NavLinks;
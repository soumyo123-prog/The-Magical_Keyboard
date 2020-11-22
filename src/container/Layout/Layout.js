import classes from './Layout.module.css';
import React from 'react';
import Keyboard from '../../components/Main/Keyboard/Keyboard';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Backdrop from '../../../src/UI/Backdrop/Backdrop';
import Footer from '../../components/Footer/Footer';

class Layout extends React.Component {
    state = {
        visible: false
    }

    hideBackdropHandler = () => {
        this.setState({
            visible : false
        })
    }

    barClickHandler = () => {
        this.setState({
            visible: true
        })
    }

    render(){
        return (
            <div>
                <Sidebar visible = {this.state.visible}/>
                <Navbar click = {this.barClickHandler} />
                <Keyboard />
                <Footer />
                <Backdrop 
                    showBackdrop = {this.state.visible}
                    hideBackdrop = {this.hideBackdropHandler}
                />
            </div>
        )
    }
}

export default Layout;

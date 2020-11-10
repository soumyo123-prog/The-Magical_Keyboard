import React, { Component } from 'react';
import Layout from './container/Layout/Layout';
import Aux from './hoc/Auxilliary';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Layout />
      </div>
    )
  }
}

export default App;

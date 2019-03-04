import React, { Component } from 'react';
import Resume from './components/Resume';
import'./App.css'
class App extends Component {
  render() {
    return (
      <div style={{background:"#F2F2F2"}}>
      <Resume/>
      </div>
    );
  }
}

export default App;

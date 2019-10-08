import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

// import './App.css';

// import pages here 
import About from './pages/About';
import Homepage from './pages/Homepage' 
import Gallery from './pages/Gallery'
class App extends Component {
  render() {
    return (
      <div> 
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
      </div>
    )
  }
} 


export default App;

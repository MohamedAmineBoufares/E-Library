import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Style/App.css';
import Header from './Header'
import Body from './Body'
import Books from './Books'

function App() {
  return (
  
    <Router>
      
      <div className='App'>
        <Header/>
        
        <Switch>

          <Route path="/viewbooks">
            <Books/>
          </Route>
          
          <Route path="/">
            <Body/>
          </Route>

        </Switch>
      </div>

    </Router>
  
  );
}

export default App;
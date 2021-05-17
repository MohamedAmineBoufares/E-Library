import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Style/App.css';
import Header from './Header'
import Body from './Body'
import Books from './Books'
import Login from './Login';
import axios from './axios'
import { useState, useEffect } from 'react';


function App() {

  const [user, setUser] = useState([])

  const getUser = () => {

    axios.get('/get/userConnected?connected=true').then((res) => {
        setUser(res.data)

    })} 

  useEffect (() => {
      
    getUser();

  }, [])

  //const result = user.filter(us => us.connected===false)
  console.log(user.connected)

  return (

    <div className='App'>

      {
        user.connected ? (
                              <Router>

                                <Header name={user.userName}/>
                                <Switch>
                                    
                                  <Route path="/viewbooks">
                                    <Books/>
                                  </Route>

                                  <Route path="/">
                                    <Body/>
                                  </Route>

                                </Switch>

                              </Router>
                                
          ) : <Login/>
      }

    </div>


  
  );
}

export default App;
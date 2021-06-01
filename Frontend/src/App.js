import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Style/App.css';

import Header from './Admin/Header'
import Body from './Admin/Body'
import Books from './Admin/Books'
import Login from './Admin/Login'; 

import axios from './axios'

import Description from './Client/Description'
import Catalogue from './Client/Catalogue'
import HeaderClient from './Client/HeaderClient';



function App() {

  const [user, setUser] = useState([])

  const getUser = () => {

    axios.get('/get/userConnected?connected=true').then((res) => {
        setUser(res.data)

    })}

  useEffect (() => {
      
    getUser();

  }, [])

  const [books, setBooks] = useState([]);

    const getBooks = () => {

            axios.get('/get/allBooks').then((res) => {
                setBooks(res.data)
                
            })
    }

    useEffect (() => {
    
        getBooks();

    }, [])

  //const result = user.filter(us => us.connected===false)
  //console.log(user.connected)
  
  

  return (

    <div className='App'>

      { 
        user.connected ? (
                              <Router>

                                <Header name={user.userName} />
                                <Switch>
                                    
                                  <Route path="/viewbooks">
                                    <Books/>
                                  </Route>

                                  <Route path="/">
                                    <Body/>
                                  </Route>

                                </Switch>

                              </Router>
                                
          ) : (
         
          <Router>

            <Switch>
                                    
              <Route path="/Catalogue">
                <HeaderClient/>
                <Catalogue/>
              </Route>

            {books.map(({ _id, bookSum, url, price, quantity, author, genre, numPages, bookName }, i) => (
            
              <Route path={`/show_more/${_id}`} key={i}>
                <HeaderClient/>
                    <Description 
                            src={url}
                            summary={bookSum}
                            price={price}
                            quantity={quantity}
                            genre={genre}
                            author={author}
                            numPages={numPages}
                            bookName={bookName}
                            /> 
              </Route>
                    
                )
                
            ) }

              <Route path="/">
                <Login/>
              </Route>

            </Switch>

          </Router>)
      }
      
</div>

  );
}

export default App;
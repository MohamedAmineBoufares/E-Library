import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Style/App.css';
import Header from './Header'
import Body from './Body'
import Books from './Books'
import Login from './Login'; 
import axios from './axios'
/*import Description from './Description'
import Catalogue from './Catalogue'
import HeaderClient from './HeaderClient'; */



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
                                
          ) : <Login/>
      }
      
     {/* <Router>

      <div className="App">
        <HeaderClient/>
        
        <Switch>

         
          
          { /*books.map(({ _id, bookSum, url, price, quantity, author, genre, numPages, bookName }, i) => (
            

            <Route path={`/show_more/${_id}`} key={i}>
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
                
            )*/}

          

         {/* <Route path="/">
               <Catalogue/>
          </Route>

        </Switch>
      </div>
    </Router>
         */}


    </div>


  
  );
}

export default App;
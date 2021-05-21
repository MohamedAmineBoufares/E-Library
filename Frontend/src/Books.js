import React, { useState, useEffect } from 'react'
import './Style/Books.css'
import BookElem from './BookElem'
import axios from './axios'

function Books() {

    const [books, setBooks] = useState([]);

    const getBooks = () => {

            axios.get('/get/allBooks').then((res) => {
                setBooks(res.data)
                
            })
    }

    useEffect (() => {
    
        getBooks();

    }, [])

    return (

        <div className='books__body'>

            { books.map(({ _id, bookName, author, price, quantity, url }) => (
                
                <BookElem id={_id} 
                        src={url}
                        title={bookName}
                        author={author}
                        price={price + ' DT'}
                        qt={quantity}/> 
                    
                )
            
            )}
           
        </div>
    ) 
}

export default Books

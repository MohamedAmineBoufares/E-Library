import React, { useState, useEffect } from 'react'
import './Style/Catalogue.css'
import Card from './Card'
import axios from './axios'

function Catalogue() {

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

        <div className='catalogue__main'>
        
            { books.map(({ _id, bookName, bookSum, quantity, url}, i) => (
                
                <div className='catlaogue__card' key={i}>

                    <Card
                        
                        id= {_id}
                        title={bookName}
                        qt={quantity}
                        imageUrl={url}
                        body={bookSum}/>

                </div>

                )
            )}


        </div>
    )
}

export default Catalogue
import React, { useState } from 'react'
import './Style/BookElem.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import axios from './axios'

function BookElem({src, title, author, price, qt, id}) {
    
    const [Qt, setQt] = useState(0)

    const inc = () => {
        const a = qt + Qt;
        setQt(Qt + 1);
        axios.post(`/update/book?id=${id}`,{
            quantity: a + 1
        })

    }

    const dec = () => {

        const a = qt + Qt;
        
        if (a === 0) {

            alert("Quantity is already at 0 !")

        } else {
            
            setQt(Qt - 1);

            axios.post(`/update/book?id=${id}`,{
                quantity: a - 1 
            })
        }
    }

    const deletBook = () => {
        
       let confirm  = window.confirm('Are you sure you want to delete this book ?')
       if (confirm) {
           
            axios.delete(`/delete/book?id=${id}`)
            window.location.reload();
       }
        

        
    }

    return (
        
        <div className='books__content' style={{borderColor: (qt + Qt) === 0 ? 'red' : 'black'}}>
                
            <div className='books__content__left'>
                <img src={src} alt='book cover' width='100'/>
                <div>
                    <h1>{title}</h1>
                    <h3>{author}</h3>
                </div>
                
            </div>

            <div className='books__content__middle'>

                <h3>Price</h3>
                <h4>{price}</h4>

            </div>

            <div className='books__content__right'>

                <h3>Quantity</h3>
                <p>{qt + Qt}</p>
                <div>
                    <AddIcon className='icon__plus' onClick={inc}/>
                    <RemoveIcon className='icon__min' onClick={dec}/>
                </div>
                
            </div>

            <div className='books__content__end'>
                <DeleteIcon className='icon__bin' fontSize='large' onClick={deletBook}/>
            </div>
       
        </div>
    )
}

export default BookElem

import React, { useState } from 'react'
import './Style/BookElem.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/DeleteForever';

function BookElem(props) {
    
    const [qt, setQt] = useState(0)

    const inc = () => {
        setQt(qt + 1);
    }

    const dec = () => {
        if (qt === 0) {

            alert("Quantity is already at 0 !")

        } else {
            
            setQt(qt - 1);
        }
    }

    return (
        
        <div className='books__content'>
                
            <div className='books__content__left'>
                <img src={props.src} alt='book cover' width='100'/>
                <div>
                    <h1>{props.title}</h1>
                    <h3>{props.author}</h3>
                </div>
                
            </div>

            <div className='books__content__middle'>

                <h3>Price</h3>
                <h4>{props.price}</h4>

            </div>

            <div className='books__content__right'>

                <h3>Quantity</h3>
                <p>{props.qt}</p>
                <div>
                    <AddIcon className='icon__plus' onClick={inc}/>
                    <RemoveIcon className='icon__min' onClick={dec}/>
                </div>
                
            </div>

            <div className='books__content__end'>
                <DeleteIcon className='icon__bin' fontSize='large'/>
            </div>
       
        </div>
    )
}

export default BookElem

import React from 'react'
import './Description.css'
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function Description({ /*parameteres... */}) {

// function call


    return (
        <div className="description__main">
            
            <div className='description__image'>
                <img 
                    src='https://i2-prod.walesonline.co.uk/incoming/article6890072.ece/ALTERNATES/s615b/hp1.jpg'
                    alt='book cover'
                    width='500'/>
            </div>
            
            <div className='description__summary'>
                <ShoppingCartIcon fontSize='large'/>
                < FavoriteBorderIcon fontSize='large'/>
                <h1>Summary</h1>
                <p>bla bla bla</p>
            </div>
            
        </div>
    )
}

export default Description

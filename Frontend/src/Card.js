import React from 'react'
import './Style/Card.css'
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function Card({ id, title, imageUrl, body, qt }) {

    

    return (

        <Link to={`/show_more/${id}`} className='link'>
               
            <div className='card-container'>
    
                <div className="image-container">
                    <img src={imageUrl} alt='Book cover'/>
                </div>

                <div className="card-content">
                    
                    <div className="card-title" >
                        <h3>{title}</h3>
                    </div>

                    <div className='card-icons'>
                        
                        <div className='item-1'>
                            <ShoppingCartIcon/>
                        </div>

                        <div className='item-2'>
                            <FavoriteBorderIcon/>
                        </div>
                          
                    </div>

                    <div className="card-body">
                        <p>{body}</p>
                    </div>

                </div>

                <div className='show-more'>
                    <h3>Click me to show more </h3>
                </div>

                <div style={ qt !== 0 ? {display: 'none'} : {display: 'block'} }>
                    
                    <h1 className='sold-out'> Sold OUT ! 
                        <span role='img' aria-label='xxxxx'> 😔</span> 
                    </h1>
                
                </div>

            </div>

        </Link>

    )
}

export default Card;
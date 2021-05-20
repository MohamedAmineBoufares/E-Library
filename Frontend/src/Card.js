import React from 'react'
import './card.css'
import {
    Link
  } from "react-router-dom";
function Card({title,imageUrl,body}) {
    return (
        <div className='card-container'>
           <div className="image-container">
               <img src={imageUrl} alt='book cover' />
           </div>
           <div className="card-content">
                <div className="card-title" >
                <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body} </p>
                </div>
           </div>
          
           <div className="btn">
               <Link to="/next" className='link'>
                 <h4>view more</h4>
               </Link> 
           </div>

        </div>
    )
}
export default Card;

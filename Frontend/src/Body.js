import React from 'react'
import './Style/Body.css'

function Body() {

    return (
        <div className='body__main'>
        
            <div className='body__info'>

                <div className='body__info__add'>

                    <h3>Book name</h3>
                    <input placeholder='Write book name here'/>

                </div>

                <div className='body__info__add'>

                    <h3>Book Author</h3>
                    <input placeholder='Write book author here'/>
                
                </div>

                <div className='body__info__add'>

                    <h3>Genre</h3>
                    <input placeholder='Write book genre here'/>

                </div>

                <div className='body__info__add'>

                    <h3>Number of pages</h3>
                    <input placeholder='Write number of pages here'/>
                
                </div>

                <div className='body__info__add'>

                    <h3>Book Author</h3>
                    <input placeholder='Write book author here'/>
                
                </div>

                <button/>
                <div className='body__info__btn'>Add Book</div>
            </div>
            <img src='icon.png' alt='E-Library Logo' width='350'/>
        </div>
    )
}

export default Body
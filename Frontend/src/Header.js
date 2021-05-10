import React from 'react'
import './Style/Header.css'
import PersonIcon from '@material-ui/icons/Person';

function Header() {

    return (

        <div className='header__main'>

            <div className='header__left'>

                <PersonIcon/>
                <p>Welcome, Name</p>
            
            </div>

            <div className='header__middle'>

                <div className='header__option'>
                    <h3>Add A book</h3>
                </div>
               
               <div className='header__option'>
                    <h3>View books</h3>
               </div>
                
            </div>
        </div>
    )
}

export default Header

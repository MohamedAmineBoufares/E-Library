import React from 'react'
import './Style/Header.css'
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

function Header() {

    return (

        <div className='header__main'>

            <div className='header__left'>

                <PersonIcon/>
                <p>Welcome, Name</p>
            
            </div>

            <div className='header__middle'>

                <div className='header__option'>
                    <Link to="/" className='header__option__link'>
                        <h3>Add A book</h3>
                    </Link>
                   
                </div>
               
               <div className='header__option'>
                    <Link className='header__option__link' to="/viewbooks">
                        <h3>View books</h3>
                    </Link>
                    
               </div>
                
            </div>
        </div>
    )
}

export default Header

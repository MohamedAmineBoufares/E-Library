import React from 'react'
import './Style_Admin/Header.css'
import axios from '../axios'
import PersonIcon from '@material-ui/icons/Person';
import LogOutIcon from '@material-ui/icons/MeetingRoom';
import { Link } from 'react-router-dom';



function Header({name}) {

    const logOut = (e) => {
        
        e.preventDefault();

        axios.post(`/update/Connected?userName=${name}`,{
                
            connected: false 
        })

        window.location.reload();        
    }

    return (

        <div className='header__main'>

            <div className='header__left__admin'>

                <PersonIcon/>
                <p>Welcome, {name}</p>
            
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

            <div className='header__right' onClick={logOut}>

                <LogOutIcon/>
                <p>Log out</p>
            
            </div>

        </div>
    )
}

export default Header

import React from 'react'
import './Style/HeaderClient.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function HeaderClient() {
    
    const number = 5;

    const header__itemStyle  = {

        position: 'relative',
        top: '-1.5rem',
        left: '0.01rem',
        borderRadius: '50%'
        
    };
    
    return (

        <div className='header__main'>

            <div className='header__left'>

                
                <SearchIcon />
                <input placeholder='a3mil recherche' type='text'/>
            
            </div>

            <div className='header__middle'>
            
                <div className='header__option'>
                        
                    
                        <h1>W E L C O M E</h1>
                    
                    
                </div>
                
            </div>

            <div className='header__right'>

                <div className='header__right__option'>
                    <ShoppingCartIcon fontSize='large'/>

                    <span className='header__item' style={ number === 0 ? { display: 'none' }: header__itemStyle }>
                        {number}
                    </span>

                </div>
                
                <div className='header__right__option'>
                    
                    <FavoriteBorderIcon fontSize='large'/>
                    <span className='header__item' style={ number === 0 ? { display: 'none' }: header__itemStyle }>
                        {number}
                    </span>
                </div>
                
            
            </div>

        </div>

    )
}

export default HeaderClient
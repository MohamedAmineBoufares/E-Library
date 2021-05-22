import React, { useEffect, useState }  from 'react'
import './Style/Description.css'
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from './axios'


function Description({ src, summary, quantity, price, author, genre, numPages, bookName }) {


    const [user, setUser] = useState([]);

    const addToCart = () => {

        const findBookName = (find) => find.bookName === bookName;
            
        
        const found = user.cart.some(findBookName);
        
        console.log(found)

        if(found) {
            
            alert('Already in cart')

        
        } else {
            
            axios.post(`/update/clientCart?clientName=${user.clientName}`, {
                cart: {
                    bookName: bookName,
                    quantity: 1
                }
            }).then(()=> {
                alert('Added to cart')
            })
        }
                   
    }

    const addToFavorites= () => {

        const findBookName = (find) => find.bookName === bookName;
            
        
        const found = user.favorites.some(findBookName);
        
        console.log(found)

        if(found) {
            
            alert('Already in Favorit')

        
        } else {
            
            axios.post(`/update/clientFavorites?clientName=${user.clientName}`, {
                favorites: {
                    bookName: bookName
                }
            }).then(()=> {
                alert('Added to Favorit list')
            })
        }
                   
    }

    const getClientConnected = () => {
        
        axios.get('/get/clientConnected?isConnected=true').then((res) => {
            setUser(res.data)
        })
    }

    useEffect (() => {
        getClientConnected();
    }, [])

    return (

        <div className="description__main">
            
            <div className='description__image'>

                <img 
                    src={src}
                    alt='book cover'
                    width='400'/>

            </div>
            
            <div className='description__right'>

                <div className='description__summary'>

                    <h1>Summary</h1>
                    <p>{summary}</p>
                    

                </div>

                <div className='description__right__inofs'>

                    <div className='description__infos'>

                        <h2>Author</h2>
                        <h3>{author}</h3>

                    </div>

                    <div className='description__infos'>

                        <h2>Genre</h2>
                        <h3>{genre}</h3>

                        </div>

                        <div className='description__infos'>

                        <h2>N° of pages</h2>
                        <h3>{numPages}</h3>

                    </div>
                    
                    <div className='description__infos'>

                        <h2>Price</h2>
                        <h3>{price + ' DT'}</h3>

                    </div>

                    <div className='description__infos'>

                        <h2>Quantity</h2>
                        <h3>{quantity}</h3>

                    </div>

                </div>
               
               <div className='description__right__icons'>

                    <div className='right__icon' onClick={addToCart}>
                        <ShoppingCartIcon fontSize='large'/>
                    </div>
                    
                    <div className='right__icon' onClick={addToFavorites}>
                        <FavoriteBorderIcon fontSize='large'/>
                    </div>
                    
               </div>
                
            </div>
            
        </div>
    )
}

export default Description
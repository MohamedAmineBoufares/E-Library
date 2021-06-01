import React, { useEffect, useState } from 'react'
import './Style_Client/HeaderClient.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { auth, provider } from './firebase'
import axios from '../axios'


function HeaderClient() {
    
    const number = 0;
    const [name, setName] = useState('')
    const [users, setUsers ] = useState([])

    const header__itemStyle  = {

        position: 'relative',
        top: '-1.5rem',
        left: '0.01rem',
        borderRadius: '50%'
        
    };

    const getAllClients = () => {
        axios.get('get/allClients').then((res) => {
            setUsers(res.data)
        })
    }

    useEffect(() => {
        getAllClients()
    }, [])

    //console.log(users)

    const signIn = () => {
        
        auth.signInWithPopup(provider).then( () => {

            setName(auth.currentUser.displayName)
            const findName = (find) => find.clientName === auth.currentUser.displayName;
            console.log(users)
            const found = users.some(findName);

            if(found) {
                
                axios.post(`/update/clienIsConnected?clientName=${auth.currentUser.displayName}`, {
                    isConnected: true
                })
            
            } else {
                console.log("hani hneye")

                axios.post('/new/client', {
                
                    clientName: auth.currentUser.displayName,
                    clientMail: auth.currentUser.email,
                    isConnected: true

                })
            }
       
        }
            
        )
        .catch((error) => alert(error.message))
    }
     
    const signOut = () => {
        
        axios.post(`/update/clienIsConnected?clientName=${name}`, {
            isConnected: false
        })

        setName('')
        window.location.reload();
    }
    
    return (

        <div className='header__main'>

            <div className='header__left'>

                <SearchIcon />
                <input placeholder='Search for a book' type='text'/>
            
            </div>

            <div className='header__middle'>
            
                <div className='header__option' onClick={signIn}>
                        
                        <h1>Welcome {name}</h1>
            
                </div>

                <div className='header__option' onClick={signOut}>
                        
                        <h2> Bye ? </h2>
                    
                </div>
                
            </div>

            <div className='header__right'>

                <div className='header__right__option'>
                    <ShoppingCartIcon fontSize='large'/>

                    <span className='header__item' 
                            style={ number === 0 ? { display: 'none' }: header__itemStyle }>
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
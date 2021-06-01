import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Style_Admin/Login.css'
import axios from '../axios'
import VisibilityIcon from '@material-ui/icons/Visibility';


function Login() {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUser] = useState([]);

    const getAllUsers = () => {

        
        axios.get(`/get/userName?userName=${login}`).then((res) => {
            setUser(res.data)
    
        })} 

    
    useEffect(() => {
        getAllUsers();
    }, [pass])

    const setConnected = (e) => {
        
        e.preventDefault();

        //getAllUsers();
        
        if (user.userPass === pass) {

            axios.post(`/update/Connected?userName=${user.userName}`,{
                connected: true
            })
            window.location.reload();
        
        } else {
            alert("wrong password mate !")
        }
         
    }

    const showPass = () => {
        
        const passwordInput = document.getElementById('password__input');
        
        if (passwordInput.type === "password") {

            passwordInput.type = "text";
        
        } else {
          
            passwordInput.type = "password";
        
        }
    }
    
    return (

        <div className='login__body'>

            
            <div className='login__infos'>

                <div className='login__input'>

                    <h1>Login</h1>
                    <input 
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            type='text' 
                            placeholder='Login here' />

                </div>

                <div className='password__input'>

                    <h1>Password</h1>
                    
                    <div>
                    <input 
                            id='password__input'
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            size='15'
                            maxLength='10'
                            type='password' placeholder='Password here'/>
                            
                    <VisibilityIcon className='eye__icon' onClick={showPass}/>

                    </div>
                    
                </div>

                <div onClick={setConnected} className='login__enter'>
                    
                    Login
                
                </div>

            </div>

            <div>

                <Link to='/Catalogue'>
                    <h2 className='just__client'>I'm just a client</h2>
                </Link>
                
            </div>
            
        </div>
    )
}

export default Login

import React, { useState } from 'react'
import './Style_Admin/Body.css'
import Toast from './Toast'
import axios from '../axios'
import checkIcon from './assets/check.svg';
import errorIcon from './assets/error.svg';
import infoIcon from './assets/info.svg';
import warningIcon from './assets/warning.svg';

function Body() {

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [number, setNumber] = useState('');
    const [summary, setSummary] = useState('');
    const [price, setPrice] = useState('');
    const [qt, setQt] = useState('');
    const [url, setUrl] = useState('');

    const [displayVal, setDisplayVal] = useState('none');
    const [title, setTile] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [icon, setIcon] = useState("./assets/check.svg");
    
    const values = [
        
        'Action and Adventure', 'Classic', 'Comic Book', 'Detective and Mystery',
        'Fantasy', 'Historical Fiction', 'Horror', 'Literary Fiction', 'Romance', 
        'Science Fiction (Sci-Fi)', 'Short Storie', 'Suspense and Thriller',
        'Biographie', 'Cookbook', 'History', 'Poetry', 'Self-Help', 'True Crime'

    ]

    const addBook = (e) => {
        e.preventDefault();
        if ((name === '') || (author === '') || 
                            (genre === '') || (number === '') || 
                            (summary === '') || (price === '') || 
                            (qt === '') || (url === '')) {
                                
                                setTile('Error')
                                setColor('red');
                                setDescription('Still one missing information')
                                setIcon(errorIcon)
                                setDisplayVal('block');

                                
                                setInterval(() => { 
                                    
                                    setDisplayVal("none"); 
                                
                                }
                                , 3500);
                            
                            } else {

                                axios.post('/new/book', {

                                    bookName: name,
                                    author: author,
                                    genre: genre,
                                    numPages: number,
                                    bookSum: summary,
                                    price: price,
                                    quantity: qt,
                                    url: url,
                                    timestamp: Date.now()
                                })

                                setTile('Done')
                                setColor('green');
                                setDescription('Book added to catalogue')
                                setIcon(checkIcon)
                                setDisplayVal('block');

                                setInterval(() => { 
                                    
                                    setDisplayVal("none"); 
                                
                                }
                                , 3500);
                        
                                setName('');
                                setAuthor('');
                                setGenre('');
                                setNumber('');
                                setSummary('');
                                setPrice('');
                                setQt('');
                                setUrl('');

                            }

        
    };


    const displayToast = () => {
        
        setTile('Info')
        setColor('#32a899');
        setDescription('This feature will be available soon')
        setIcon(infoIcon)
        setDisplayVal("block");

        
        setInterval(() => { 
            
            setDisplayVal("none"); 
        
        }
        , 3500);
    }

    return (
        <div className='body__main'>

            <Toast 
                title = {title}
                description = {description}
                color = {color}
                icon = {icon}
                display = {displayVal}
            />
        
            <div className='body__info'>

                <div className='body__info__btn' onClick={displayToast}>Simply Scan a Tag</div>

                <div className='body__info__add'>

                    <h3>Book name</h3>
                    
                    <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            placeholder='Write book name here'/>

                </div>

                <div className='body__info__add'>

                    <h3>Book Author</h3>
                    
                    <input 
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            type='text'
                            placeholder='Write book author here'/>
                
                </div>

                <div className='body__info__add'>

                    <h3>Genre</h3>

                    <select 
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            type='text'
                            placeholder='Write book genre here'>

                        { values.sort().map((i, j) => (
                            
                            <option key={j} value={i}>{i}</option>
                            
                            )) 

                        }

                    </select>

                </div>

                <div className='body__info__add'>

                    <h3>Number of pages</h3>

                    <input 
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            type='number' 
                            min='0'
                            placeholder='Write number of pages here' />
                
                </div>

                <div className='body__info__add'>

                    <h3>Book Summary</h3>

                    <textarea 
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                                type='text'
                                rows='5' 
                                cols='25'
                                placeholder='Write book summary here' />
                
                </div>

                <div className='body__info__add'>

                    <h3>Book Price</h3>

                    <input 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type='number' 
                            min='0'
                            placeholder='Write book price here' />
                
                </div>

                <div className='body__info__add'>

                    <h3>Quantity</h3>

                    <input 
                            value={qt}
                            onChange={(e) => setQt(e.target.value)}
                            type='number' 
                            min='0'
                            placeholder='Write book quantity herer' />
                
                </div>

                <div className='body__info__add'>

                    <h3>Book Cover URL</h3>

                    <input 
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            type='text' 
                            placeholder='Past Book URL here' />
                
                </div>

                <div className='body__info__btn' onClick={addBook}>Add Book</div>
                
            </div>
            
            <img className='image__logo' src='/icon.png' alt='E-Library Logo' width='350'/>

        </div>
    )
}

export default Body
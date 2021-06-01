import React from 'react'
import './Style_Admin/Toast.css'

function Toast({ color, display, icon, title, description }) {
    
    return (

        <div className='notification-container top-left' style={{display: display}}>
               
                    
            <div 
                className = 'notification toast top-left'
                style={{ backgroundColor: color }}>

                            <div className="notification-image">
                                <img src= {icon} alt="" />
                            </div>

                            <div>
                                <h1 className="notification-title">{title}</h1>
                                
                                <h3 className="notification-message">
                                    {description}
                                </h3>

                            </div>
                        </div>

    
        </div>
    )
}

export default Toast
import React from 'react';
import '../Header/header.css';
import { faUserCircle, faBell, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <FontAwesomeIcon icon={faCrosshairs}/>
                <p>ribbon</p>
            </div>

            <div className="icons">
                <FontAwesomeIcon icon={faUserCircle} className='user'/>
                <FontAwesomeIcon icon={faBell} className='bell'/>
            </div>
        </div>
    )
}

export default Header;
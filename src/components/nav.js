import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
 

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='header'>
            <header>
                <a href='/' className='logo punjabits'></a>
                <ul className='headList'>
                    <li><a href='/' className='navbar-text glossy'>Home</a></li>
                    <li><a href='/gallery' className='navbar-text glossy'>Gallery</a></li>
                    <li><a href='/wonders' className='navbar-text glossy'>Wonders</a></li>
                    <li><a href='/events' className='navbar-text glossy'>Events</a></li>
                    <li><a href='/about' className='navbar-text glossy'>About</a></li>
                </ul>
                {/* toggle navbar for small screens */}
                <div className='toggle' onClick={() => {
                    // add show to className
                    document.querySelector('.headList').classList.toggle('show');
                    setIsMenuOpen(!isMenuOpen);
                }}>
                    <FontAwesomeIcon icon={faBars} style={{display: (isMenuOpen)? 'none' : 'block'}} />
                    <FontAwesomeIcon icon={faXmark} style={{display: (!isMenuOpen)? 'none' : 'block'}}/>
                </div>
            </header>
        </div>
    )
}

export default Header;
import React from 'react';
import '../css/Navbar.css';
import logo from '../img/logo.png';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar__navigation" >
                <ul style={{ transform: showMenu ? 'translateX(0px)' : '' }}>
                    <Link to="/"> <li>OUR FACILTY</li></Link>
                    <Link to="/rates"><li>RATES</li></Link>
                    <Link to="/gallery"><li>GALLERY</li></Link>
                    <Link to="/contact"><li>CONTACT</li></Link>
                </ul>
                <div className="menuIcon">
                    <MenuOutlinedIcon onClick={() => setShowMenu(!showMenu)} className="menuIcon" style={{ color: 'white', fontSize: '40px' }} />
                </div>
            </div>
        </div>
    )
}

export default Navbar

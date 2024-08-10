import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.scss';
import SearchIcon from '../assets/images/header-search-icon.png';
import LocationIcon from '../assets/images/header-location-icon.png';
import UserIcon from '../assets/images/header-user-icon.png';
import ConfigIcon from '../assets/images/header-config-icon.png';
import NotificationIcon from '../assets/images/header-notification-icon.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <Link to='/'>
                    <p>f</p>
                </Link>
            </div>
            <nav>
                <div className='header__links'>
                    <a href="#">Explorar</a>
                    <a href="#">Comunidade</a>
                    <a href="#">FAQ</a>
                </div>
                <div className='header_search'>
                    <a href="#">
                        <img src={SearchIcon} alt="Search" width="22.5" height="22.5" />
                    </a>
                    <p>____________</p>
                </div>
                <div className='header__location'>
                    <a href="#">
                        <img src={LocationIcon} alt="Location" width="20.14" height="27" />
                    </a>
                    <p>São Paulo, SP</p>
                </div>
                <div className='header__icons'>
                    <a href="#">
                        <img src={UserIcon} alt="User" width="51" height="51" />
                    </a>
                    <a href="#">
                        <img src={ConfigIcon} alt="Config" width="51" height="51" />
                    </a>
                    <a href="#">
                        <img src={NotificationIcon} alt="Notification" width="51" height="51" />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
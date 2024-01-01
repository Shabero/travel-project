import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import Logo from '../../Assets/logo.png'
import UserIcon from '../../Assets/user.png'
import SearchIcon from '../../Assets/search.png'

const Header = () => {
    return (
        <>
            <header className={'header'}>
                <div className={'container header-wrapper'}>
                    <img src={Logo} alt=""/>
                    <nav className={'header-nav'}>
                        <ul className={'header-nav-list'}>
                            <li className={'header-nav-item'}>
                                <Link to={'/'} className={'header-nav-link'}>Destination</Link>
                            </li>
                            <li className={'header-nav-item'}>
                                <Link to={'/'} className={'header-nav-link'}>Offer</Link>
                            </li>
                            <li className={'header-nav-item'}>
                                <Link to={'/'} className={'header-nav-link'}>Tour</Link>
                            </li>
                            <li className={'header-nav-item'}>
                                <Link to={'/'} className={'header-nav-link'}>Blog</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={'header-action'}>
                        <button className={'header-action-btn'}>
                            <img src={UserIcon} alt=""/>
                        </button>
                        <p>My Account</p>
                        <button className={'header-action-btn'}>
                            <img src={SearchIcon} alt=""/>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
// Import 'useState' and 'useEffect' hooks
import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown } from 'react-bootstrap';
import { Branches } from '@/constants/db';
import logo from '../images/logo.png';

const Header = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Fragment>
            <header className="site-header header mo-left">
                {/* Top bar */}
                <div className="top-bar">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li><i className="fa fa-phone m-r5"></i> +1 (315) 402-1234</li>
                                    <li><i className="fa fa-map-marker m-r5"></i> 28 Princeton Drive, Syosset, New York 11791</li>
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul>
                                    <li className='d-flex align-items-center'>
                                        <i className="fa fa-globe m-r5"></i>
                                        <Dropdown className='top-bar-dropdown'>
                                            <Dropdown.Toggle className='btn btn-info'>Location</Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {Branches.map((item, index) => (
                                                    <Dropdown.Item href="/locations" key={index}>{item.country}</Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main header */}
                <div className={`sticky-header ${isScrolled ? 'fixed-top' : ''} main-bar-wraper navbar-expand-lg`}>
                    <div className="main-bar clearfix">
                        <div className="container clearfix">
                            {/* Logo */}
                            <div className="logo-header mostion">
                                <Link href='/' className="dez-page">
                                    <img src='/images/logo.png' className='logo-size-header' alt="" />
                                </Link>
                            </div>
                            {/* Nav toggle button */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${isMenuOpen ? 'open' : ''}`}
                                type="button"
                                onClick={toggleMenu} // Call toggleMenu function on click
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* Main Nav */}
                            <div className={`header-nav navbar-collapse collapse myNavbar justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarNavDropdown">
                                <div className="logo-header mostion">
                                    <Link href='/' className="dez-page">
                                        <img src={''} alt="" />
                                    </Link>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li className={`nav-item ${router.pathname === '/' ? 'active' : ''}`}>
                                        <Link href={'/'} className="nav-link" key="home">Home</Link>
                                    </li>
                                    <li className={`nav-item ${router.pathname === '/about' ? 'active' : ''}`}>
                                        <Link href={'/about'} className="nav-link" key="about">About</Link>
                                    </li>
                                    <li className={`nav-item ${router.pathname === '/activities' ? 'active' : ''}`}>
                                        <Link href={'/activities'} className="nav-link" key="activities">Activities</Link>
                                    </li>
                                    <li className={`nav-item ${router.pathname === '/locations' ? 'active' : ''}`}>
                                        <Link href={'/locations'} className="nav-link" key="locations">Locations</Link>
                                    </li>
                                    <li className={`nav-item ${router.pathname === '/shop' ? 'active' : ''}`}>
                                        <Link href={'/shop'} className="nav-link" key="shop">Shop</Link>
                                    </li>
                                    <li className={`nav-item ${router.pathname === '/news' ? 'active' : ''}`}>
                                        <Link href={'/news'} className="nav-link" key="news">News</Link>
                                    </li>
                                    <li className={`nav-item ${router.pathname === '/connect' ? 'active' : ''}`}>
                                        <Link href={'/connect'} className="nav-link" key="connect">Connect</Link>
                                    </li>
                                    <li className={`nav-item ${router.pathname === '/contact-us' ? 'active' : ''}`}>
                                        <Link href={'/contact-us'} className="nav-link" key="contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main header END */}
            </header>
        </Fragment>
    );
};

export default Header;

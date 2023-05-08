import React, {useState} from 'react';
import logo from '../assets/logo.png';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";


const links = [
    {
        image: logo,
        to: '/',
        active: 'home'
     },
     {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About',
        to: '/about',
        active: 'about'
    },
    
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    },
    {
        name: 'Resume',
        to: '/resume',
        active: 'resume'
    },
    {
        name: 'Contact',
        to: '/contact',
        active: 'contact'
    },
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '0.8rem', md: '6rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <li className={(link.active === active && !link.image) ? Style.active : ''} key={index}>
                    <Link aria-label={'home page'} to={link.to} onClick={() => setActive(link.active)}>
                       {link.name && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                       {link.image && <img alt={''} src={link.image} style={{maxWidth: '75px'}}/>}
                    </Link>
                 </li>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </Box>
        </Box>
    )
}

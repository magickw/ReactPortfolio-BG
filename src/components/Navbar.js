import React, {useState} from 'react';
import logo from '../assets/logo.png';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";


const links = [
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
        image: logo,
        to: '/',
        active: 'home'
     },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <li className={(link.active === active && !link.image) ? Style.active : ''} key={index}>
                    <Link aria-label={'home page'} to={link.to} onClick={() => setActive(link.active)}>
                       {link.name && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                       {link.image && <img alt={''} src={link.image} style={{maxWidth: '75px'}}/>}
                    </Link>
                 </li>
                    // <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                    //      sx={{borderImageSource: info.gradient}}>
                    //     <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                    //         {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                    //         {link.type && <h1>{link.name}</h1>}
                    //     </Link>
                    // </Box>
                ))}
                <li>
                    <a href="https://flowcv.com/resume/6mnf9c4to0">résumé</a>
                </li>
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </Box>
        </Box>
    )
}
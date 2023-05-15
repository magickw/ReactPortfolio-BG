import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";


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

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                // Fetch user's current position using Geolocation API
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    // const apiKey = process.env.WEATHER_API_KEY; // Access the API key from environment variable
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=723b345acdd52204dfb9a13e95119b61`
                        // `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=hourly,daily&appid=723b345acdd52204dfb9a13e95119b61`
                    );
                    console.log(response);
                    const data = await response.json();
                    setWeatherData(data);
                });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    // const convertKelvinToFahrenheit = (kelvin) => {
    //     return ((kelvin - 273.15) * 9) / 5 + 32;
    //   };
    const convertKelvinToCelsius = (kelvin) => {
        return kelvin - 273.15;
    };

    return (
        <Box display="inline-block" alignItems="center">
            {weatherData ? (
                <p>{Math.round(convertKelvinToCelsius(weatherData.main.temp))}°C
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="weathericon" /></p>
            ) : (
                <p>Loading weather...</p>
            )}
        </Box>
    );
};

export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));


    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'}
                display={'flex'}
                flexWrap={'wrap'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={{ xs: '0.8rem', md: '6rem' }}
                // textTransform={'lowercase'}
                fontSize={'1rem'}>
                {links.map((link, index) => (
                    <li className={(link.active === active && !link.image) ? Style.active : ''} key={index}>
                        <Link aria-label={'home page'} to={link.to} onClick={() => setActive(link.active)}>
                            {link.image && <img alt={''} src={link.image} style={{ maxWidth: '75px' }} />}
                            {link.name && <p style={{ paddingBottom: '0.5rem' }}>{link.name}</p>}
                        </Link>
                    </li>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
                <li>
                    <Weather />
                </li>
            </Box>
        </Box>
    )
}

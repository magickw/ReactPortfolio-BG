import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import VisitorLocation from './VisitorLocation';
import About from './about/About';
import Home from './home/Home';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Portfolio from './portfolio/Portfolio';
import Resume from './resume/Resume';
import Contact from './contact/Contact';
import Style from './BaseLayout.module.scss';
import PacmanLoader from 'react-spinners/PacmanLoader';

function Footer() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentDate = today.toLocaleDateString();
  const currentTime = today.toLocaleTimeString();

  return (
    <Box
      component='footer'
      display='flex'
      flexDirection='column'
      alignItems='center'
      px={{ xs: 2, sm: 3 }}
      py={{ xs: 2, sm: 3 }}
      sx={{ opacity: 0.7, fontSize: '0.9rem' }}
      width="100%"
      >
      <VisitorLocation />
      <p>{currentDate} {currentTime}. This website was adapted from the template created by <a href='https://paytonpierce.dev'>Payton Pierce</a> &copy; {currentYear}</p>
      <p>Bitcoin: bc1qp3j3p02kpfqqfdf98xgj3h32m3777cgp549lys   ETH: 0xE762574d76b9dc668DC28c1E0B8Ba005c5eefF2A</p>
    </Box>
  );
}

export default function BaseLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);



  const handleToggleDarkMode = () => {
    const oppositeOfCurrentDarkMode = !darkMode;
    localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  };

  useEffect(() => {
    const detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem('darkMode', 'false');
    }

    // Simulate loading
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid container display='flex' flexDirection='column' minHeight='100vh' justifyContent='space-between'>
        <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <PacmanLoader color="#36d7b7" size={25} />
          </Box>
        ) : (
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/resume' element={<Resume />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        )}
        <Footer/>
      </Grid>
    </Box>
  );
}


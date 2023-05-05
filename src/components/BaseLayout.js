import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import VisitorLocation from './VisitorLocation';
import About from './about/About';
import Home from './home/Home';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Portfolio from './portfolio/Portfolio';
import Resume from './resume/Resume';
import Style from './BaseLayout.module.scss';

function Footer({ currentYear }) {

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
      <p>Welcome to my portfolio website. This website was adapted from the template created by <a href='https://paytonpierce.dev'>Payton Pierce</a></p>
      <p>&copy; {currentYear}</p>
    </Box>
  );
}

export default function BaseLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const today = new Date();
  const currentYear = today.getFullYear();

  const handleToggleDarkMode = () => {
    const oppositeOfCurrentDarkMode = !darkMode;
    localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      {isLoading ? (
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          minHeight='100vh'
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container display='flex' flexDirection='column' minHeight='100vh' justifyContent='space-between'>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/resume' element={<Resume />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer currentYear={currentYear} />
        </Grid>
      )}
    </Box>
  );
}

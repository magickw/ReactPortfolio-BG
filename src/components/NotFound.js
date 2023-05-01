import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <Box className={styles.notFound} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Typography variant='h1' align='center'>404 Not Found</Typography>
      <Typography variant='body1' align='center'>Sorry, the page you are looking for could not be found.</Typography>
      <Link to="/" className={styles.link}>Go back to the home page</Link>
    </Box>
  );
}

export default NotFound;

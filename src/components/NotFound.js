import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowLeft as ArrowLeftIcon } from '@mui/icons-material';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <Typography variant='h1' color='error' align='center'>404</Typography>
      <Typography variant='h1' color='error' align='center'>Page Not Found</Typography>
      <Typography variant='body1' align='center'>Sorry, the page you are looking for could not be found.</Typography>
      <div className={styles.buttonContainer}>
        <Button
          component={Link}
          to="/"
          variant='contained'
          color='primary'
          startIcon={<ArrowLeftIcon />}
          className={styles.button}
        >
          Go back to the home page
        </Button>
      </div>
    </div>
  );
}

export default NotFound;

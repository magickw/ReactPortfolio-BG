import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowLeft as ArrowLeftIcon } from '@mui/icons-material';
import Style from './NotFound.module.scss';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function NotFound() {
  return (
    <div className={Style.notFound}>
      <Zoom top>
        <Typography variant='h1' color='error' align='center'>404</Typography>
        <Typography variant='h1' color='error' align='center'>Oops, Page Not Found</Typography>
      </Zoom>

      <Fade delay={1000}>
        <Typography variant='body1' align='center'>Sorry, the page you are looking for could not be found.</Typography>
      </Fade>

      <Fade delay={1500}>
        <div className={Style.buttonContainer}>
          <Button
            component={Link}
            to="/"
            variant='contained'
            color='primary'
            startIcon={<ArrowLeftIcon />}
            className={Style.button}
          >
            Go back to the homepage
          </Button>
        </div>
      </Fade>
    </div>
  );
}

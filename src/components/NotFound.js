import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowLeft as ArrowLeftIcon } from '@mui/icons-material';
import Style from './NotFound.module.scss';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import NotFound404 from './NotFound.png';

export default function NotFound() {
  return (
    <div className={Style.notFound}>
      <Zoom top>
        <img src={NotFound404} alt="notfound" width="500" height="500"/>
      </Zoom>

      <Fade delay={1000}>
        <Typography variant='body1' align='center'><a href="https://storyset.com/illustration/oops-404-error-with-a-broken-robot/amico">Web illustrations by Storyset.</a></Typography>
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
            Go Home
          </Button>
        </div>
      </Fade>
    </div>
  );
}

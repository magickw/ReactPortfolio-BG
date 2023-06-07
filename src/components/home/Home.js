import React from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { info } from '../../info/Info';
import Style from './Home.module.scss';
import me from '../../assets/self.png';
import EmojiBullet from './EmojiBullet';
import SocialIcons from './SocialIcons';
import Type from './Type';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const miniBio=[ 
  {
      emoji: '📍',
      text: 'based in San Francisco Bay Area'
  },
  {
      emoji: "💼",
      text: "looking for a full-stack development position"
  }
]

const socials= [
  {
      link: "mailto:peterguo1983@gmail.com8",
      icon: 'fa fa-envelope',
      label: 'email'
  },
  {
      link: "tel:+19174324438",
      icon: 'fa fa-phone',
      label: 'phone'
  },
  {
      link: "https://www.facebook.com/peter.guo",
      icon: 'fa fa-facebook',
      label: 'facebook'
  },
  {
      link: "https://instagram.com/petguo",
      icon: 'fa fa-instagram',
      label: 'instagram'
  },
  {
      link: "https://github.com/magickw",
      icon: "fa fa-github",
      label: 'github'
  },
  {
      link: "https://linkedin.com/in/bfguo",
      icon: "fa fa-linkedin",
      label: 'linkedin'
  },
  {
      link: "https://www.youtube.com/@guobaodev",
      icon: "fa fa-youtube",
      label: 'youtube'
  },

]

export default function Home() {

  return (
    <Box
      component="main"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
    // minHeight="calc(100vh - 175px)"
    >
      <Zoom left>
        <Box
          className={classNames(Style.avatar, Style.shadowed)}
          alt="developer's photo"
          style={{ background: info.gradient }}
          component="img"
          src={me}
          width={{ xs: '35vh', md: '40vh' }}
          height={{ xs: '35vh', md: '40vh' }}
          borderRadius="50%"
          p="0.75rem"
          mb={{ xs: '1rem', sm: 0 }}
          mr={{ xs: 0, md: '2rem' }}
        />
      </Zoom>
      <Fade delay={1000}>
        <Box>
          <h1>
            Hi, I'm{' '}
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {info.firstName} {info.lastName}{' '}
            </span>
            <span className={Style.hand}>🤚</span>
          </h1>

          <h2 style={{ padding: "1.5rem", textAlign: 'left' }}>
            <Type />
          </h2>

          <Box component="ul" p="0.8rem" mb="2rem">
            {miniBio.map((bio, index) => (
              <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
            ))}
          </Box>

          <Box display="flex" gap="1.5rem" justifyContent="left" fontSize={{ xs: '2rem', md: '2.5rem' }}>
            {socials.map((social, index) => (
              <SocialIcons key={index} link={social.link} icon={social.icon} label={social.label} />
            ))}
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}

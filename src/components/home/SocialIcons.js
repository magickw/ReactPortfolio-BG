import React from 'react';
import { IconButton } from '@mui/material';

export default function SocialIcons(props) {
    const { link, icon, label } = props;
    return (
        <IconButton
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            sx={{
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)', // Add the boxShadow style
                backgroundColor: 'lightblue', // Set the backgroundColor to light blue
            }} 
        >
            <i className={icon} aria-hidden="true" />
        </IconButton>
    );
}

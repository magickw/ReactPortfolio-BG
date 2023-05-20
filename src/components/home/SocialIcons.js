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
            sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)' }} // Add the boxShadow style
        >
            <i className={icon} aria-hidden="true" />
        </IconButton>
    );
}

import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import Stack from '@mui/joy/Stack';


export default function PortfolioBlock(props) {
   const { image, description, techStacks, live, source, title } = props;
   // const [isHover, setIsHover] = React.useState(false);
   return (
      <Box
         display={'flex'}
         flexDirection={'column'}
         justifyContent={'center'}
         alignItems={'center'}
         // onMouseEnter={() => setIsHover(true)}
         // onMouseLeave={() => setIsHover(false)}
         // style={{ transform: isHover ? 'scale(1.1)' : 'scale(1)'}}
         transition="transform 0.3s ease-in-out"
      >
         <Box component={'img'} src={image} alt={'projects'} />
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <h1 style={{ fontSize: '1rem' }}>{description}</h1>
         <Stack
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               fontSize: '1rem'
            }}
            direction="row"
            spacing={5}
         >
            <ul style={{ margin: 1, padding: 1, display: 'flex', flexWrap: 'wrap' }}>
               {techStacks.map((techStack) => (
                  <li key={techStack} style={{
                     border: '1px solid green', borderRadius: '3px', padding: '1px', marginRight: '10px'
                  }}>{techStack}</li>
               ))}
            </ul>
         </Stack>
         <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1rem'} py={'1rem'} justifyContent={'space-between'}>
            <Box p={1} border={'2px solid green'} borderRadius={'15px'}>
               <IconLink link={live} title={'View Site'} icon={'fa fa-link'} />
            </Box>
            <Box p={1} border={'2px solid green'} borderRadius={'15px'}>
               <IconLink link={source} title={'View Code'} icon={'fa fa-github'} />
            </Box>
         </Box>
      </Box>
   );
}



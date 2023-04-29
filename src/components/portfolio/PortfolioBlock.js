import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, description, live, source, title} = props;
   return (
      <Box 
         display={'flex'}
         flexDirection={'column'}
         justifyContent={'center'}
         alignItems={'center'}
         p={10}
      >
         <Box component={'img'} src={image} alt={'projects'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <h1 style={{fontSize: '1rem'}}>{description}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'} justifyContent={'space-between'}>
            <Box p={1} border={'2px solid green'} borderRadius={'15px'}>
               <IconLink link={live} title={'View Site'} icon={'fa fa-link'}/>
            </Box>
            <Box p={1} border={'2px solid green'} borderRadius={'15px'}>
               <IconLink link={source} title={'View Code'} icon={'fa fa-github'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
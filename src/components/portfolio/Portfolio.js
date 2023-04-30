import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import Zoom from 'react-reveal/Zoom';


export default function Portfolio() {
    return (
        <Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} fontSize={'1.5rem'}>
                <Zoom top>
                    <h2>Recent Work</h2>
                </Zoom>
            </Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock image={project.image} description={project.description} live={project.live} source={project.source} title={project.title} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
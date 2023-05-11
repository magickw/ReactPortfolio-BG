import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


export default function Portfolio() {
    return (
        <Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} fontSize={'1.5rem'}>
                <Zoom top>
                    <h1>
                        <span
                            style={{
                                background: info.gradient,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Recent Work
                        </span>
                    </h1>
                </Zoom>
            </Box>
            <Fade delay={1000}>
            <Grid container sx={{ gap: 6 }} justifyContent="center">
                {info.portfolio.map((project, index) => (
                    <Grid item xs={8} md={6} lg={4} key={index}>
                        <PortfolioBlock image={project.image} description={project.description} techStacks={project.techStacks} live={project.live} source={project.source} title={project.title} />
                    </Grid>
                ))}
            </Grid>
            </Fade>
        </Box>
    );
};

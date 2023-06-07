import React, { useState } from 'react';
import ProjectCard from "./ProjectCard";
import { Box, Grid, Button } from "@mui/material";
import { info } from "../../info/Info";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Style from './Portfolio.module.scss';
import TextEditor from "../../assets/TextEditor.gif"
import AstroDash from "../../assets/AstroDash.gif"
import CodeQuiz from "../../assets/codequiz.gif"
import WeatherDashboard from "../../assets/WeatherDashboard.gif"
import scheduler from "../../assets/scheduler.gif"
import notetaker from "../../assets/notetaker.gif"
import techblog from "../../assets/techblog.gif"

const portfolio = [ 
        
    {
        title: "Text Editor",
        live: "https://jate-bfguo.herokuapp.com", 
        description: "This application enhances an existing text editor app by enabling it to work as a Progressive Web App (PWA) and providing offline functionality.",
        techStacks: ["React", "Node.js", "Express.js", "PWA"],
        source: "https://github.com/magickw/TextEditor",
        image: TextEditor
    },
    {
        title: "Note Taker",
        live: "https://note-taker-gd3e35eh5-magickw.vercel.app/",
        description: "This application allows you to write notes, save notes and deletes those are being stored in a db.json file.",
        techStacks: ["Javascript", "Express.js", "Node.js"],
        source: "https://github.com/magickw/NoteTaker",
        image: notetaker
    },

    {
        title: "Tech Blog",
        live: "https://guotechblog.herokuapp.com/",
        description: "This application is a tech blog that utilizes the MVC architectural structure, Handlebars.js, and Sequelize.",
        techStacks: ["Node.js", "Express.js", "Handlebars", "mySQL", "MVC", "restful API", "Sequelize"],
        source: "https://github.com/magickw/MVCTechBlog",
        image: techblog
    },
   {
        title: "AstroDash",
        live: "https://magickw.github.io/Astronomy-Dashboard", 
        description: "The Astronomy Dashboard utilizes geolocation functions and a weather API to display weather conditions such as visibility, cloudiness, and moon phases.",
        techStacks: ["Javascript", "HTML", "CSS", "TailwindCSS", "jQuery", "Datatables"],
        source: "https://github.com/DazedChou/Astronomy-Dashboard", 
        image: AstroDash
    },
    {
        title: "CodeQuiz",
        live: "https://magickw.github.io/CodeQuiz",
        description: "CodeQuiz is a timed coding quiz with multiple-choice questions.",
        techStacks: ["Javascript", "HTML", "CSS", "jQuery"],
        source: "https://github.com/magickw/CodeQuiz",
        image: CodeQuiz
    },
    {
        title: "Work Day Scheduler",
        live: "https://magickw.github.io/Work-Day-Scheduler/",
        description: "This simple calendar application enables users to save and delete events for each hour of the day.",
        techStacks: ["Javascript", "HTML", "CSS", "MomentJS", "Bootstrap"],
        source: "https://github.com/magickw/Work-Day-Scheduler",
        image: scheduler
    },
    {
        title: "Weather Dashboard",
        live: "https://magickw.github.io/WeatherDashboard",
        description: "The Weather Dashboard is a browser-based application that dynamically updates HTML and CSS to display current weather information.",
        techStacks: ["Javascript", "HTML", "CSS", "MomentJS", "Bootstrap"],
        source: "https://github.com/magickw/WeatherDashboard",
        image: WeatherDashboard
    }
]


export default function Portfolio() {
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    return (
        <Box mb={4}>
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
                <Grid container sx={{ gap: 4 }} justifyContent="center">
                    {portfolio.slice(0, showAll ? portfolio.length : 4).map((project, index) => (
                        <Grid item xs={8} md={6} lg={4} key={index}>
                            <ProjectCard image={project.image} description={project.description} techStacks={project.techStacks} live={project.live} source={project.source} title={project.title} />
                        </Grid>
                    ))}
                </Grid>
            </Fade>
            <Fade delay={1000}>
            <Box display="flex" justifyContent="center" mt={2}>
                <Button className={Style.showButton} variant="outlined" onClick={toggleShowAll}>
                    {showAll ? 'Show Less' : 'Show More'}
                </Button>
            </Box>
            </Fade>
        </Box>
    );
};

import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const bio = "Greetings! My name is Baofeng Guo, and I am based in the San Francisco Bay Area. I have a Bachelor's degree in Biology and have been working as an English-Chinese medical translator for over 14 years. After residing in the Bay Area for four years and being inspired by its entrepreneurial environment, I decided to pursue a coding career. I graduated from the Full Stack Web Development bootcamp at UC Berkeley Extension in 2022. Please feel free to contact me if you require my services. I am excited to collaborate with innovative teams on exciting projects.";
const skills =
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'nodejs', 'bootstrap', 'html5', 'css3', 'tailwindcss', 'mangodb', 'mySQL', 'vs code', 'Apollo GraphQL', 'Relational Databases', 'Webpack', 'PWA', 'Unit Testing w/ JEST', 'Express.js', 'jQuery', 'API'],
            learning: ['python', 'react native', 'java']
        };
const hobbies = [
        
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'hiking',
            emoji: '🥾'
        }


    ];
const services = [
        
        {
            label: 'medical translation, $0.12/word, $35/hour for editing',
            emoji: '🏥'
        },
        {
            label: 'web development',
            emoji: '🌐'
        },
        {
            label: 'full-stack development',
            emoji: '👨‍💻'
        }


    ]


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <Slide left>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                    about{firstName} </p>
            </Slide>
            <Slide right>
                <p><span style={{ color: info.baseColor }}>about{firstName} <span
                    className={Style.green}>(main)</span> $ </span>
                    {bio}
                </p>
            </Slide>
        </>;
    }

    function skillsText() {
        return <>
        
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <Slide left>
                <ul className={Style.skills}>
                    {skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
                </ul>
            </Slide>
            <p style={{ color: info.baseColor }}> Learning</p>
            <Slide right>
                <ul className={Style.skills}>
                    {skills.learning.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
            </Slide>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>

            <Slide left>
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                    ))}
                </ul>
            </Slide>
        </>;
    }
    function servicesText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                services</p>
            <p><span style={{ color: info.baseColor }}>services <span
                className={Style.green}>(main)</span> $</span> ls</p>

            <Slide left>
                <ul>
                    {services.map((service, index) => (
                        <li key={index}><Box component={'span'} mr={'1rem'}>{service.emoji}</Box>{service.label}</li>
                    ))}
                </ul>
            </Slide>
        </>;
    }

    return (
        
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'1rem'}>
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
                            About Me
                        </span>
                    </h1>
                </Zoom>
            </Box>
            <Terminal text={aboutMeText()} />
            <Terminal text={servicesText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
        </Box>
        
    )
}
import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

import Slide from 'react-reveal/Slide';

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
                    {info.bio}
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
                    {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
                </ul>
            </Slide>
            <p style={{ color: info.baseColor }}> Exposed To</p>
            <Slide right>
                <ul className={Style.skills}>
                    {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
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
                    {info.hobbies.map((hobby, index) => (
                        <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                    ))}
                </ul>
            </Slide>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
        </Box>
    )
}
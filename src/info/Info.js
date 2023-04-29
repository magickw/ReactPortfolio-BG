import self from "../assets/self.png"
import TextEditor from "../assets/TextEditor.gif"
import AstroDash from "../assets/AstroDash.gif"
import CodeQuiz from "../assets/codequiz.gif"
import WeatherDashboard from "../assets/WeatherDashboard.gif"
import scheduler from "../assets/scheduler.gif"
import notetaker from "../assets/notetaker.gif"
import techblog from "../assets/techblog.gif"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Baofeng",
    lastName: "Guo",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🌎',
            text: 'based in San Francisco Bay Area'
        },
        {
            emoji: "💼",
            text: "looking for a full-stack development position"
        },
        {
            emoji: "📧",
            text: (
                <a href="mailto:peterguo1983@gmail.com">peterguo1983@gmail.com</a>
              )
        }
    ],
    socials: [
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

    ],
    bio: "Hello! I'm Baofeng Guo from San Francisco Bay Area. I hold a BS degree in Biology and have been working as an English - Chinese medical translator for more than 14 years. 4 years after moving to the Bay Area and inspired by its entrepreneurial atmosphere, I felt it's about time to make a change by pursuing a coding career. I attended 2022 UC Berkeley Extension Coding Bootcamp for Full Stack Web Development. Do not hesitate to contact me if you need my services. Looking forward to working with ingenious teams on challenging projects.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'tailwindcss', 'mangodb', 'mySQL', 'vs code', 'Apollo GraphQL', 'Relational Databases', 'Webpack', 'PWA', 'Unit Testing w/ JEST', 'Express.js', 'jQuery', 'API'],
            exposedTo: ['nodejs', 'python', 'react native']
        }
    ,
    hobbies: [
        
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


    ],
    portfolio: [ 
        
        {
            title: "Text Editor",
            live: "https://jate-bfguo.herokuapp.com/", 
            description: "This application takes an existing text editor app and adds functionality for it to work as a PWA and function offline. ",
            source: "https://github.com/magickw/TextEditor",
            image: TextEditor
        },
       {
            title: "AstroDash",
            live: "https://dazedchou.github.io/Astronomy-Dashboard", 
            description: "Astronomy Dashboard uses geolocation functions and weather API to present the weather conditions such as visibility and cloudiness, and moon phases.",
            source: "https://github.com/DazedChou/Astronomy-Dashboard", 
            image: AstroDash
        },
        {
            title: "CodeQuiz",
            live: "https://magickw.github.io/CodeQuiz",
            description: "CodeQuiz is a timed coding quiz with multiple-choice questions.",
            source: "https://github.com/magickw/CodeQuiz",
            image: CodeQuiz
        },
        {
            title: "Weather Dashboard",
            live: "https://magickw.github.io/WeatherDashboard",
            description: "It's a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
            source: "https://github.com/magickw/WeatherDashboard",
            image: WeatherDashboard
        },
        {
            title: "Work Day Scheduler",
            live: "https://magickw.github.io/Work-Day-Scheduler/",
            description: "This simple calendar application that allows a user to save and delete events for each hour of the day.",
            source: "https://github.com/magickw/Work-Day-Scheduler",
            image: scheduler
        },
        {
            title: "Note Taker",
            live: "https://notetaker-guo.herokuapp.com/",
            description: "This application allows you to write notes, save notes and deletes that are being stored in a db.json file.",
            source: "https://github.com/magickw/NoteTaker",
            image: notetaker
        },
        {
            title: "Tech Blog",
            live: "https://guotechblog.herokuapp.com/",
            description: "This application is a tech blog which allows the developers to publish blog posts, make comments and create accounts using MVC architectural structure, Handlebars.js, Sequelize.",
            source: "https://github.com/magickw/MVCTechBlog",
            image: techblog
        }
    ]
}
import self from "../assets/self.png"
import TextEditor from "../assets/TextEditor.gif"
import AstroDash from "../assets/AstroDash.gif"
import CodeQuiz from "../assets/codequiz.gif"
import WeatherDashboard from "../assets/WeatherDashboard.gif"
import scheduler from "../assets/scheduler.gif"
import notetaker from "../assets/notetaker.gif"


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
                <a href="mailto:peterguo1983@gmail.com">email me</a>
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
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'tailwindcss', 'mangodb', 'mySQL', 'vs code'],
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
            source: "https://github.com/magickw/TextEditor",
            image: TextEditor
        },
       {
            title: "AstroDash",
            live: "https://dazedchou.github.io/Astronomy-Dashboard", 
            source: "https://github.com/DazedChou/Astronomy-Dashboard", 
            image: AstroDash
        },
        {
            title: "CodeQuiz",
            live: "https://magickw.github.io/CodeQuiz",
            source: "https://github.com/magickw/CodeQuiz",
            image: CodeQuiz
        },
        {
            title: "Weather Dashboard",
            live: "https://magickw.github.io/WeatherDashboard",
            source: "https://github.com/magickw/WeatherDashboard",
            image: WeatherDashboard
        },
        {
            title: "Work Day Scheduler",
            live: "https://magickw.github.io/Work-Day-Scheduler/",
            source: "https://github.com/magickw/Work-Day-Scheduler",
            image: scheduler
        },
        {
            title: "Note Taker",
            live: "https://notetaker-guo.herokuapp.com/",
            source: "https://github.com/magickw/NoteTaker",
            image: notetaker
        }
    ]
}
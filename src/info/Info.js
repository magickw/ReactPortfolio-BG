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
                <a href="mailto:peterguo1983@gmail.com">let's get in touch!</a>
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
        {
            link: "https://www.youtube.com/@guobaodev",
            icon: "fa fa-youtube",
            label: 'youtube'
        },

    ],
    bio: "Greetings! My name is Baofeng Guo, and I am based in the San Francisco Bay Area. I have a Bachelor's degree in Biology and have been working as an English-Chinese medical translator for over 14 years. After residing in the Bay Area for four years and being inspired by its entrepreneurial environment, I decided to pursue a coding career. I graduated from the Full Stack Web Development bootcamp at UC Berkeley Extension in 2022. Please feel free to contact me if you require my services. I am excited to collaborate with innovative teams on exciting projects.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'nodejs', 'bootstrap', 'html5', 'css3', 'tailwindcss', 'mangodb', 'mySQL', 'vs code', 'Apollo GraphQL', 'Relational Databases', 'Webpack', 'PWA', 'Unit Testing w/ JEST', 'Express.js', 'jQuery', 'API'],
            exposedTo: ['python', 'react native']
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
            live: "https://jate-bfguo.herokuapp.com", 
            description: "This application takes an existing text editor app and adds functionality for it to work as a PWA and function offline. ",
            techStacks: ["React", "Node.js", "Express.js", "PWA"],
            source: "https://github.com/magickw/TextEditor",
            image: TextEditor
        },
       {
            title: "AstroDash",
            live: "https://magickw.github.io/Astronomy-Dashboard", 
            description: "Astronomy Dashboard uses geolocation functions and weather API to present the weather conditions such as visibility and cloudiness, and moon phases.",
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
            title: "Weather Dashboard",
            live: "https://magickw.github.io/WeatherDashboard",
            description: "It's a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
            techStacks: ["Javascript", "HTML", "CSS", "MomentJS", "Bootstrap"],
            source: "https://github.com/magickw/WeatherDashboard",
            image: WeatherDashboard
        },
        {
            title: "Work Day Scheduler",
            live: "https://magickw.github.io/Work-Day-Scheduler/",
            description: "This simple calendar application that allows a user to save and delete events for each hour of the day.",
            techStacks: ["Javascript", "HTML", "CSS", "MomentJS", "Bootstrap"],
            source: "https://github.com/magickw/Work-Day-Scheduler",
            image: scheduler
        },

        {
            title: "Tech Blog",
            live: "https://guotechblog.herokuapp.com/",
            description: "This application is a tech blog which allows the developers to publish blog posts, make comments and create accounts using MVC architectural structure, Handlebars.js, Sequelize.",
            techStacks: ["Node.js", "Express.js", "Handlebars", "mySQL", "MVC", "restful API", "Sequelize"],
            source: "https://github.com/magickw/MVCTechBlog",
            image: techblog
        },
        {
            title: "Note Taker",
            live: "https://notetaker-guo.herokuapp.com/",
            description: "This application allows you to write notes, save notes and deletes that are being stored in a db.json file.",
            techStacks: ["Javascript", "Express.js", "Node.js"],
            source: "https://github.com/magickw/NoteTaker",
            image: notetaker
        },
    ]
}

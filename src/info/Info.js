export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Baofeng",
    lastName: "Guo",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '📍',
            text: 'based in San Francisco Bay Area'
        },
        {
            emoji: "💼",
            text: "looking for a full-stack development position"
        }
    ],
    socials: [
        {
            link: "mailto:peterguo1983@gmail.com8",
            icon: 'fa fa-envelope',
            label: 'email'
        },
        {
            link: "tel:+19174324438",
            icon: 'fa fa-phone',
            label: 'phone'
        },
        // {
        //     link: "https://www.facebook.com/peter.guo",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
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
            learning: ['python', 'react native', 'java']
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
    services: [
        
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
}

module.exports = {
    siteTitle: 'Hemanth Yarlagadda | DevOps Engineer',
    siteDescription: 'Hemanth Yarlagadda is a DevOps Engineer, based in USA, who loves learn and try out new things.',
    siteKeywords: 'devops, devops engineer, software engineer, cloud, AWS, GCP, Azure, CI/CD, Jenkins ',
    siteUrl: 'https://hemanthyarlagadda.github.io/',
    siteLanguage: 'en_US',
    googleAnalyticsID: 'UA-45666519-2',
    googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
    name: 'Hemanth Yarlagdda',
    location: 'USA',
    email: 'yarlaghh@mail.uc.edu',
    github: 'https://github.com/Hemanth-Yarlagadda',
    twitterHandle: '@Hemanthyarlag',
    socialMedia: [{
            name: 'GitHub',
            url: 'https://github.com/Hemanth-Yarlagadda',
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in//',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/hemanthyarlagadda/',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/Hemanthyarlag',
        },
    ],

    navLinks: [{
            name: 'About',
            url: '/#about',
        },
        {
            name: 'Experience',
            url: '/#jobs',
        },
        {
            name: 'Projects',
            url: '/#projects',
        },
        {
            name: 'Contact',
            url: '/#contact',
        },
    ],

    navHeight: 100,

    colors: {
        green: '#64ffda',
        navy: '#0a192f',
        darkNavy: '#020c1b',
    },

    srConfig: (delay = 200) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
};
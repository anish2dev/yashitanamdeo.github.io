module.exports = {
  siteTitle: 'Anish Sharma',
  siteDescription:'I am Anish born and raised in india in a middle class family in hosarpur punjab. Programing is my hoby that why i am practicing it from 6th grade ',
  siteKeywords:
    'Anish Sharma,Anish  , Sharma, Anish Sharma, software engineer, web developer, javascript, python, java, svvv, india, anishdevtech, anish2dev,anishdev',
  siteUrl: 'https://anishdev.tech',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Anish Sharma',
  location: 'Punjab, India',
  email: 'anishdev02@gmail.com',
  github: 'https://github.com/anishdevtech',
  twitterHandle: '@anish2dev',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/anishdevtech',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/a.n.i.s.hx18',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/anishdevtech',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Services',
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

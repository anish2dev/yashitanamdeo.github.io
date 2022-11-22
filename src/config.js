module.exports = {
  siteTitle: 'Anish Sharma',
  siteDescription:
    'Anish Sharma a incoming Software Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Anish Sharma,Anish  , Sharma, Anish Sharma, software engineer, web developer, javascript, python, java, svvv, india',
  siteUrl: 'https://anishdev.tech',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Anish Sharma',
  location: 'Punjab, India',
  email: 'anishdev02@gmail.com',
  github: 'https://github.com/anish2dev',
  twitterHandle: '@anish2dev',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/anish2dev',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/anish2dev',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/anish2dev',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience-Soon',
      url: '/#jobs',
    },
    {
      name: 'Projects-Soon',
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

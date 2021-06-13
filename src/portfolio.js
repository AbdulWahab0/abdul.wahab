/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  /* Your Summary And Greeting Section */
  //title: "Hi all 👋 I'm Saad",
  title: "Abdul Wahab 🇵🇰,🇩🇪",
  nickname: "Eat, Sleep, Code, Repeat",
  // subTitle:
  //   "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks",
  subTitle:
    "A highly organized, dynamic, enthusiastic and experienced deadline-oriented software tester in a manual testing environment and recent experience in automation. Collaborates seamlessly with developers and project managers to accomplish milestones.Graduated Master in Computer Science,with  year of experience in Software Testing and some Frontend Technologies.Detailed oriented with strong problem-solving, work ethics, communication, interpersonal and teamwork skill.",
  resumeLink:
    "https://drive.google.com/file/d/1TssfkNpYTEY6CghAB8eWjhLtoaP7HPZ6/view?usp=sharing",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/AbdulWahab0",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdul-wahab-750174103/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "wahab3060@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Abdul99860802",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/abdulx.formanite",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abdul_wahab099/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Software Test Engineer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Test powerful (web) applications based on JavaScrip that meets accessibility and web browser standards",
        "⚡ Introducing & Establishing Automation testing (UI & API), with modern tools and technologies ( Cypress.io, Parallel run, mochawesome report, Jenkins, & Qase test management tool ) ",
        "⚡ Solution designing, coding, unit and integration testing, debugging and documentation of programs.",
        "⚡ Experience of working with agile development team with testing and development of microservices",
        "⚡ Tools and Technlogies :Cypress framework,Selenium(Basic),Mocha,Jira,Jasmine,Confluence ,Browser stack,Jenkins,Api Tetsing , Rest Assured (Basic),Postman, Page object model, CI/CD and maintaining testing pipeline and BBD",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "FrontEnd Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Design develop and test powerful (web) applications based on JavaScrip (Vue js & React Js) that meets accessibility and web browser standards",
        "⚡ Fixed front end bugs (HTML, CSS, Javascript errors (JQUERY), testing (A/B Split Testing), unit testing",
        "⚡ Solution designing, coding, unit and integration testing, debugging and documentation of programs.",
        "⚡ Experience of working with agile development team with testing and development of microservices",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms(Clustring)",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying React Applition on Heroku and Github Pages",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface (Figma) for mobile and web applications",
        "⚡ Customizing website designs (PSD to HTML )",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Technical University Berlin (Officially Graduated)",
      subtitle: "Master in Computer Science",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020(July)",
      descriptions: [
        "⚡ I have studied Master in Computer Science, Specialization in Distributed System and Networking.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.tu.berlin/",
    },
    {
      title: "Punjab University College of Information Technology",
      subtitle: "Bachelor Information Technology",
      logo_path: "pucit.png",
      alt_name: "IIITDM Kurnool",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ I have studied Bachelor Information Technology",
        "⚡ Apart from this, I have done courses on Data Dtructures,Object Oriented Programming theory of automata and formal languages and Internet programming, .",
        "⚡ I was selected for Merit Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://pucit.edu.pk/",
    },
  ],
};
const events = {
  events: [
    {
      title: "Automous mini Bus Demo To Transport Minister of Deutschland",
      subtitle: "Collaboration with Dai-Labor and Tu-Berlin",
      logo_path: "car.jpg",
      alt_name: "IIITDM Kurnool",
      duration: "2019(OCT)",
      descriptions: [
        "⚡ During my job at Dai-labor with 5G team ,I got this great opportunity to show the demo of first mini autonomous bus thats Opening of a test track for automated and networked driving in the heart of Berlin (DIGINET-PS) ",
        "⚡ Apart from this, I  had arrange  this all Event and joined with  BMW and  fraunhofer fokus autonomous car ",
      ],
      website_link: "https://diginet-ps.de/en/home/",
    },
    {
      title: "Berlin 5G Week in Fraunhofer Fokus",
      subtitle: "Collaboration with Europeran Union and Fuseco Forum",
      logo_path: "fokus.jpeg",
      alt_name: "IIITDM Kurnool",
      duration: "2019 (Sep)",
      descriptions: [
        "⚡ In The #Berlin5GWeek I am the part of three of the biggest conferences in the context of the upcoming 5G like IEECSCN16 , IEEE 5G Summit Fokus Feseco Forum. In Berlin 5G week I worked and setup of all the demo related to 5G (Like 5G fokus playground)",
      ],
      website_link:
        "https://www.fokus.fraunhofer.de/ngni/events/fuseco_forum_2019",
    },
  ],
};
const travel = {
  travel: [
    {
      title: "NewYork 🇺🇸",
      subtitle: "Collaboration with Dai-Labor and Tu-Berlin",
      logo_path: "nyc.jpg",
    },
    {
      title: "London 🇬🇧",
      logo_path: "uk.jpg",
      alt_name: "IIITDM Kurnool",
    },
    {
      title: "Abu Dhabi 🏴󠁡󠁥󠁡󠁺󠁿",
      subtitle: "Collaboration with Europeran Union and Fuseco Forum",
      logo_path: "dubi.jpg",
    },
    {
      title: "Washington,D.C.🇺🇸",
      subtitle: "Collaboration with Europeran Union and Fuseco Forum",
      logo_path: "wdc.jpeg",
    },
    {
      title: "Boston 🇺🇸",
      subtitle: "Collaboration with Europeran Union and Fuseco Forum",
      logo_path: "boston.jpg",
    },
    {
      title: "Niagara Falls(🇺🇸)",
      logo_path: "nig.jpg",
    },
    {
      title: "Copenhagen 🇩🇰",
      logo_path: "cop.jpg",
    },
    {
      title: "Poland 🇵🇱",
      logo_path: "poland.jpg",
    },
    {
      title: "Itlay 🇮🇹",
      logo_path: "itlay.jpg",
    },
    {
      title: "Spain 🇪🇸",
      logo_path: "spain.jpg",
    },
    {
      title: "Leipzig 🇩🇪 ",
      logo_path: "lip.jpg",
    },
    {
      title: "Dresden 🇩🇪 ",
      logo_path: "basti.jpg",
    },
    {
      title: "Keil 🇩🇪 ",
      logo_path: "keil.jpg",
    },
    {
      title: "Pisa 🇮🇹",
      logo_path: "pisa.jpg",
    },
    {
      title: "Palma 🇪🇸",
      logo_path: "palma.jpg",
    },
    {
      title: "Stuttgart 🇩🇪",
      logo_path: "stu.jpg",
    },
    {
      title: "Berlin 🇩🇪 ",
      logo_path: "Berlin.jpg",
    },
    {
      title: "Venice 🇮🇹",
      logo_path: "venice.jpg",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect - Associate (SSA)",
      subtitle: "AWS",
      logo_path: "Aws.png",
      certificate_link: "https://www.udemy.com/certificate/UC-OF74IE4C/",
      color_code: "#8C151599",
    },
    {
      title: "Basic to Advance React Js ",
      subtitle: "U-demy",
      logo_path: "react.png",
      certificate_link: "https://www.udemy.com/",
      color_code: "#8C151599",
    },
    {
      title: "Vue JS & VueX ",
      subtitle: "U-demy",
      logo_path: "vue.png",
      certificate_link:
        "https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/5941810?start=165#overview",
      color_code: "#8C151599",
    },
    {
      title: "Cypress -UI Automation & Integration Testing+Framework",
      subtitle: "U-demy",
      logo_path: "cy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-766af79d-f892-4f79-a18f-9e73ac8d50c1/",
      color_code: "#8C151599",
    },
    // {
    //   title: "Basic to Advance React Js ",
    //   subtitle: "- U-demy Monash",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving Companies  like ONCARE GmbH & DataGaurd (Munich) as Software Tester Designer and Frontend developer. I have also worked with some well established  and some biggest research institute like DAI-Labor (TU-Berlin), and Fraunhofer Fokus Berlin, I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Test Engineer  (Full Time)",
          company: "ONCARE GmbH",
          company_url: "https://www.myoncare.com/",
          logo_path: "oncare.jpeg",
          duration: "Jan 2021 - Present",
          location: "Munich, Germany",
          description:
            "I am working closely closely with developers on story card under development and ensure the quality of development is of the highest standards.I got the opportunity for taking ownership of regression runs at the end of each sprint & performing exploratory testing.Locating and documenting bugs in the development of the product, execute manual and automated test cases, analyse results, report and track defects, verify fixes and perform follow-up work to resolve issues Defect lifecycle management and follow up until closur ",
          color: "#0879bf",
        },
        {
          title: "Master Thesis & Frontend Developer (Working Student)",
          company: "DAI-Labor(Distributed Artificial Intelligence Laboratory)",
          company_url: "https://www.dai-labor.de/en/",
          logo_path: "dai.png",
          duration: "June 2019 - Feb 2020",
          location: "Berlin, Germany",
          description:
            "I worked in the team of DAI Labor (www.dai-labor.de) on the Diginet-PS project (www.diginet-ps.de).I was involved in the discussion of network design, deployment of infrastructure, architectural design, making presentations, organizing events (e.g., inauguration of Autonomous Driving Car at Strasse des 17. Juni in September 2019), etc. During my job at Dai-labor I worked closely with 5G-MOBIX and Health5G (Celtic-plus project),Eu-project team and perform research on automated vehicle functionalities using 5G core technological. During my Job I had also completed my master Thesis (UnderStanding Sdnized Network Slicing in 5G Mobile Networks) from Dai-Labor.5G Use Case for Autonomous Driving, Network Slicing in 5G and 5G tool are main key aspects of my job at Dai-Labor",
          color: "#0879bf",
        },
        {
          title: "Frontend Web Developer (Working Student)",
          company: "Fraunhofer-Institut für Offene Kommunikationssysteme FOKUS",
          company_url: "https://www.fokus.fraunhofer.de/",
          logo_path: "fokus.png",
          duration: "June 2018 - Feb 2019",
          location: "Berlin, Germany",
          description:
            "I got the opportunity to work on EU-Project(ASTRID) as frontend developer and Tester.Being a Frontend developer at Fraunhofer I got the opportunity to work on EU-Project ASTRID. My job was to work closely with web development teams and perform research on virtualization technologies and micro-services architectures (e.g., for cloud computing and network function virtualization) and Moreover, Planning & execution of software tests, validation & verification and optimize the frontend code and designed Dashboard for my Astrid were core responsibilities of job.Futher more I gain experienced in React Js, Es6 , UI / UX, architecture, backend (Node.js), database, tests, monitoring and Deploy app on Heroku.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer ( Full Stack)",
          company: "Consultech",
          company_url: "https://dukanlay.com/",
          logo_path: "cons.png",
          duration: "Jan 2016 - Jan 2017",
          location: "Lahore, Pakistan",
          description:
            "I worked as Asp.Net Developer  and Developed E-commerce sites for clients from fashion, automobile, apparel, and cosmetic industries.Being a web developer i Participated in system specification meetings, analyzed user requirements, coordinated with coders and team members ",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Quality Assurance Specialist Intern",
          company: "DataGuard (Munich)",
          company_url: "https://www.dataguard.com/",
          logo_path: "dataguard.jpeg",
          duration: "July 2020 - Dec 2020",
          location: "Munich, Germany",
          description:
            "During my Internship in DataGaurd, Munich (GDPR compliance).I worked with developers and various internal stakeholders, conducting user acceptance tests and building proof of concepts. .My core responsibility is to test the  DataGuard Product (Customer Data protection platform ).I was also involved in the deploy the application using GitLab CI/CD | Commands. I also gained Good knowledge of Grount,Webpack,Node.js and JavaScript , Units Test.I was also reponsible for creating BUG Uats and writing the test cases Writing BBD’s in Gherkin to perform automation",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Berlin 5G Week ",
          company: "Fraunhofer-Institut für Offene Kommunikationssysteme FOKUS",
          company_url: "https://www.fokus.fraunhofer.de/",
          logo_path: "fokus.png",
          duration: "June 2018 - Feb 2019",
          location: "Berlin, Germany",
          description:
            "In The #Berlin5GWeek I am the part of three of the biggest conferences in the context of the upcoming 5G like IEECSCN16 , IEEE 5G Summit Fokus Feseco Forum. In Berlin 5G week I worked and setup of all the demo related to 5G (Like 5G fokus playground)",
          color: "#4285F4",
        },
        {
          title: "Autonomous Car",
          company: "Tu-Berlin and Dai-labor",
          company_url: "https://diginet-ps.de/en/home/",
          logo_path: "iiitk_logo.png",
          duration: "June 2019 - Feb 2020",
          location: "Berlin, Germany",
          description:
            "I got the opportunity to show autonomous car to German transport minister under TU berlin and DaI Labor.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create different websites as frontend developer and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "wahab2.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Software Tetsing and Frontend Website developemnt and deploment in React Js , Vue , Java Script and some Basic Node Js Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link:
      "https://www.linkedin.com/pulse/data-scientist-sexiest-job-21st-century-abdul-wahab/?articleId=6326891767505526785#comments-6326891767505526785&trk=public_profile-settings_article_view",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Potsdamer Straße 63,10785,Berlin",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Potsdamer+Stra%C3%9Fe+63,+10785+Berlin/data=!4m2!3m1!1s0x47a8504aae625d53:0x6c3d2cdd22eebc9?sa=X&ved=2ahUKEwjow6P4kN7rAhWGAxAIHT3nBBgQ8gEwAHoECAsQAQ",
  },
  phoneSection: {
    title: "Email Id",
    subtitle: "wahab3060@gmail.com",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  events,
  travel,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};

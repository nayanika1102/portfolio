export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Order-N-Eat - Food Ordering Application",
    des: "Discover and order from top restaurants across cities with Order-N-Eat. Advanced search, secure authentication, live order tracking, and seamless Stripe payments ensure a fast, reliable dining experience.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/Imanubhav11/mern-food-ordering-app-frontend",
  },
  {
      id: 2,
      title: "Job Finder - Job Hunting Application",
      des: "A secure, optimized job search platform built with Node.js and React, featuring authentication, encrypted data, and streamlined job management.",
      img: "/p2.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/Imanubhav11",
    },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Nayanika has been an incredible experience. Her dedication, technical expertise, and innovative approach to web development brought immense value to our team. Her contributions have made a significant impact on our projects, and we are grateful for her involvement in IEEE. Nayanika is truly a standout talent in tech.",
    name: "Arjun Mehta",
    title: "IEEE Club Board Member",
  },
  {
    quote:
      "Nayanika's commitment to excellence and her ability to bring fresh ideas to the table have elevated our projects at ISTE to new levels. Her technical skills in web development, coupled with her enthusiasm, make her an invaluable asset. Her active participation has inspired many others in our community.",
    name: "Sneha Rajan",
    title: "Chairperson, ISTE",
  },
  {
    quote:
      "It has been a pleasure working alongside Nayanika on various web development projects. Her passion, attention to detail, and drive to innovate are truly commendable. The value she has added to Alpha Biocell is exceptional, and her proactive attitude makes her a joy to collaborate with.",
    name: "Rajiv Malhotra",
    title: "Director, Alpha Biocell",
  },
  {
    quote:
      "Nayanika brings unparalleled energy and focus to her work. Her contributions in web development and technical innovation have helped our IEEE team achieve outstanding results. She has a natural talent for tackling complex problems, and her commitment to growth sets her apart in every project she undertakes.",
    name: "Pooja Nair",
    title: "IEEE Club Member",
  },
  {
    quote:
      "Nayanika is a true asset to any team. Her technical expertise and her proactive approach to web development have led to many successful projects within ISTE. Her enthusiasm and dedication have helped drive our club’s initiatives forward, setting a high standard for all members.",
    name: "Vikram Shah",
    title: "Vice Chair, ISTE",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Head Of Alpha Bio Cell",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity for Bio based algorithms.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "ISTE - Board Member",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Capstone Flutter Dev",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developement in Movido as an intern",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

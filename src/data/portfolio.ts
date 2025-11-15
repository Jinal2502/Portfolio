export const personalInfo = {
  name: "Jinalkumar Rathva",
  title: "Full Stack Developer & Tech Lead",
  email: "jilu.jr11@gmail.com",
  phone: "8320116624",
  linkedin: "https://www.linkedin.com/in/jinal-rathva-370bb1269",
  github: "https://github.com/Jinal2502",
  bio: "I'm a full stack developer and tech lead who's passionate about building scalable, impactful digital solutions. Currently leading the tech team, I've built comprehensive platforms from the ground up, turning ideas into reality through clean code and innovative thinking.",
  intro: [
    "Crafting digital experiences that users actually love.",
    "From zero to production, I build it all.",
    "Turning complex problems into elegant solutions.",
    "Code that doesn't just work—it performs.",
  ],
  availability: {
    status: "2 Slots Available for Next Month",
    isAvailable: true
  },
  heroText: {
    greeting: "Hey there, I'm",
    headline: "I Build Powerful Web Solutions That Scale",
    subheadline: "Full-stack development that transforms your ideas into production-ready platforms",
    subtitle: "I build things for the web",
    description: "Full Stack Developer & Tech Founder of GUIDOPIA—an edtech platform serving real users.",
    tagline: "Turning ideas into digital reality"
  },
  journey: [
    {
      title: "Full Stack Developer",
      description: "Building end-to-end solutions with modern tech stack"
    },
    {
      title: "Tech Lead",
      description: "Leading development teams and architecting scalable systems"
    },
    {
      title: "Platform Builder",
      description: "Creating comprehensive platforms that serve thousands of users"
    }
  ]
};

export const projects = [
  {
    id: 1,
    name: "GUIDOPIA",
    description: "A complete full-stack edtech platform built from scratch. A comprehensive educational solution with advanced features, scalable architecture, and seamless user experience.",
    longDescription: "GUIDOPIA is a full-stack edtech platform that I built entirely from the ground up. Starting from scratch, I developed a comprehensive educational solution that includes student management, course delivery, assessments, real-time analytics, and more. The platform is live and serving users, demonstrating scalable architecture and modern development practices.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
    link: "https://guidopia.com",
    image: "/guidopia.png",
    featured: true
  }
];

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML/CSS", level: 95 }
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "Authentication", level: 85 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Vite", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 85 }
  ]
};

export const pricing = {
  tiers: [
    {
      id: "basic",
      name: "Basic",
      price: "$400",
      description: "Frontend OR Backend Development",
      features: [
        "Single-stack development (choose one)",
        "Responsive design implementation",
        "Modern framework setup",
        "Clean, maintainable code",
        "Basic deployment support",
        "2 weeks delivery"
      ],
      popular: false
    },
    {
      id: "essential",
      name: "Essential",
      price: "$800",
      description: "Frontend & Backend Development",
      features: [
        "Complete full-stack development",
        "Database design & implementation",
        "RESTful API development",
        "Authentication & authorization",
        "Frontend & backend integration",
        "Deployment & hosting setup",
        "4 weeks delivery"
      ],
      popular: true
    },
    {
      id: "elite",
      name: "Elite",
      price: "$1000+",
      description: "Design & Development",
      features: [
        "Everything in Essential",
        "Custom UI/UX design",
        "Brand identity elements",
        "Advanced animations & interactions",
        "Performance optimization",
        "Ongoing support & maintenance",
        "6+ weeks delivery"
      ],
      popular: false
    }
  ],
  note: "Custom projects available. Let's discuss your specific requirements."
};

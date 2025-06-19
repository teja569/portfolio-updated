import pro1 from "../assets/project-1.jpg";
import pro2 from "../assets/Project-2.png";
import pro3 from "../assets/project-3.png";

const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "GeoBike Dashboard",
    text: "Smart Bike is a PHP-based IoT project for vehicle tracking and security.",
    description:
      "GeoBike provides real-time tracking, theft alerts, and remote control features using PHP, MySQL, and ESP32. It offers a dynamic dashboard with GPS, fuel level, and remote vehicle control.",
    skillsUsed: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "ESP32", "IoT"],
    comparison:
      "Compared to traditional GPS-only systems, GeoBike adds remote control, theft alerts, and a visual dashboard — making it more interactive and secure.",
    improvementPercent: 60,
    source: "https://github.com/teja569"
  },
  {
    imgsrc: pro2,
    title: "Blog Website",
    text: "A full-stack blog platform for posting and managing articles.",
    description:
      "Built with React, Node.js, Express, and MongoDB, this blog site allows user sign-in, post creation, and dynamic content display.",
    skillsUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
    comparison:
      "Unlike static blogging platforms, this allows full user interactivity, dynamic post creation, and real-time database updates.",
    improvementPercent: 40,
    source: "https://github.com/teja569"
  },
  {
    imgsrc: pro3,
    title: "Portfolio Website",
    text: "Responsive portfolio built with React and Tailwind CSS.",
    description:
      "A sleek personal portfolio with modular React components, animated transitions, skills filtering, and project modals.",
    skillsUsed: ["React.js", "Tailwind CSS", "React Icons", "HTML"],
    comparison:
      "Compared to a plain HTML site, this offers component reuse, better UX, and animations — increasing user engagement.",
    improvementPercent: 50,
    source: "https://github.com/teja569"
  }
];

export default ProjectCardData;

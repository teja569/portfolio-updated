import pro1 from "../assets/project-1.jpg";
import pro2 from "../assets/Project-2.jpg";
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
  title: "Expense Tracker App",
  text: "A cross-platform expense management app with charts, categories, and analytics.",
  description:
    "Built using React Native, Context API, and AsyncStorage, this app helps users track daily expenses, view summaries with charts, and categorize spending effectively.",
  skillsUsed: ["React Native", "Expo", "Context API", "AsyncStorage", "react-native-chart-kit", "Tailwind CSS"],
  comparison:
    "Unlike basic expense trackers, this app includes persistent local storage, category-wise breakdowns, responsive UI, and real-time chart visualizations.",
  improvementPercent: 65,
  source: "https://github.com/teja569/expensetracker"

  },
  {
  imgsrc: pro3,
  title: "Feedback System Web App",
  text: "A role-based feedback platform with dashboards, PDF export, and markdown support.",
  description:
    "This full-stack app is built with React (frontend), Python FastAPI (backend), and PostgreSQL. It allows managers and employees to exchange feedback, filter by tags, and download feedback in PDF format.",
  skillsUsed: ["React", "FastAPI", "PostgreSQL", "Python", "Tailwind CSS", "PDFKit"],
  comparison:
    "Compared to traditional feedback tools, this system supports anonymous peer reviews, tag filtering, and markdown-based responses, improving communication transparency and usability.",
  improvementPercent: 70,
  source: "https://github.com/teja569/feedback-system"
}

];

export default ProjectCardData;

import manashealth from "../assets/projects/manashealth.png";
import world from "../assets/projects/world.png";
import feedback from "../assets/projects/feedback.png";
import study from "../assets/projects/study.png";
import Anony from "../assets/projects/Anony.png";


export const projects = [
    {
      title: "Manas Health",
      image: manashealth,
      deploy: "",
      gitlink: "https://github.com/Sai-Srevan2004/ManasHealth",
      desc: "A MERN stack web application that helps assess students' mental health through quizzes on stress, depression, and anxiety. An integrated ML model evaluates their condition, and teachers can access detailed reports to provide personalized support.",
      tech:['MERN stack','Flask','Machine Learning']
    },
    {
      title: "World Atlas",
      image: world,
      deploy: "https://world-atlas-project-react.vercel.app/",
      gitlink: "https://github.com/Sai-Srevan2004/WorldAtlas-Project-React",
      desc: "A React-based web application that displays information about all countries, including their capitals, languages, and continents. Users can search for countries and sort them by continent, name, or capital in ascending or descending order for easy exploration.",
       tech:['MERN stack','Flask','Machine Learning']
    },
    {
      title: "Feedback Analysis",
      image: feedback,
      deploy: "",
      gitlink: "https://github.com/kmitofficial/FeedbackAnalysisUsingGenAI-G206-PS24",
      desc: "A MERN stack web application with Deep Learning that analyzes product reviews from Amazon and Flipkart. It generates a concise summary, sentiment scores, and detailed pros & cons, helping buyers make informed decisions and sellers improve their products.",
       tech:['MERN stack','Flask','Machine Learning']
    },
    {
      title: "Study Notion",
      image: study,
      deploy: "",
      gitlink: "https://github.com/Sai-Srevan2004/Study-Notion",
      desc: "A MERN stack-based ed-tech platform that enables users to create, consume, and rate educational content. It provides an interactive learning experience for students and a space for instructors to share their expertise globally. The platform features a seamless UI, well-structured APIs.",
       tech:['MERN stack','Flask','Machine Learning']
    },
    {
      title: "AnonyCare",
      image: Anony,
      deploy: "",
      gitlink: "https://github.com/Sai-Srevan2004/AnonyCare",
      desc: "An anonymous mental health support web app where users can freely share their feelings without fear of judgment. It provides a safe space for anonymous chats, allowing individuals to express their emotions and receive support without revealing their identity.",
       tech:['MERN stack','Flask','Machine Learning']
    },
  ];
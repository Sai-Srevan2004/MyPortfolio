import manashealth from "../assets/projects/manashealth.png";
import world from "../assets/projects/world.png";
import feedback from "../assets/projects/feedback.png";
import study from "../assets/projects/study.png";


export const projects = [
    {
      title: "Manas Health",
      image: manashealth,
      deploy: "",
      gitlink: "https://github.com/Sai-Srevan2004/ManasHealth",
      desc: "A MERN stack web application that helps assess students' mental health through quizzes on stress, depression, and anxiety. An integrated ML model evaluates their condition, and teachers can access detailed reports to provide personalized support.",
      tech:['MERN stack','Flask','Machine Learning','JWT']
    },
    {
      title: "World Atlas",
      image: world,
      deploy: "https://world-atlas-project-react.vercel.app/",
      gitlink: "https://github.com/Sai-Srevan2004/WorldAtlas-Project-React",
      desc: "A React-based web application that displays information about all countries, including their capitals, languages, and continents. Users can search for countries and sort them by continent, name, or capital in ascending or descending order for easy exploration.",
       tech:['React']
    },
    {
      title: "Feedback Analysis",
      image: feedback,
      deploy: "",
      gitlink: "https://github.com/kmitofficial/FeedbackAnalysisUsingGenAI-G206-PS24",
      desc: "A MERN stack web application with Deep Learning that analyzes product reviews from Amazon and Flipkart. It generates a concise summary, sentiment scores, and detailed pros & cons, helping buyers make informed decisions and sellers improve their products.",
       tech:['MERN stack','Flask','Deep Learning','JWT']
    },
    {
      title: "E-Commerce",
      image: study,
      deploy: "https://e-commerce-frontend-btf9.onrender.com/shop/home",
      gitlink: "https://github.com/Sai-Srevan2004/E-commerce",
      desc: "A full-featured e-commerce platform using the MERN stack with secure user authentication and role-based access. Integrated Redux Toolkit for efficient state management and Razorpay for seamless payment processing. Implemented responsive UI, protected routes, dynamic product handling, and order management, ensuring a scalable and user-friendly shopping experience",
       tech:['MERN stack','Redux Toolkit','Razorpay','JWT']
    },
  ];
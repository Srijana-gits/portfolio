import React, { useState, useEffect } from "react";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../assets/styles/Main.scss';
import profileImage from "../assets/images/profile.jpg";
import Srijana_Resume from '../assets/Srijana_Resume.pdf';

const phrases = [
  "figuring things out as I go",
  "building stuff to understand it better",
  "breaking things until they make sense",
  "learning by actually doing the work",
];


const techCategories = [
  {
    title: "Programming & Core SWE",
    skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "SQL", "Java", "JavaScript", "R", "REST APIs", "Git / GitHub"]
  },
  {
    title: "Machine Learning & AI",
    skills: ["Supervised/Unsupervised Learning", "Predictive Modeling", "NLP", "RAG", "LLM Applications", "LangChain", "Vector DBs"]
  },
  {
    title: "Data Analytics & Visualization",
    skills: ["EDA", "Data Wrangling", "Statistical Analysis", "Hypothesis Testing", "Matplotlib", "Seaborn", "Tableau", "Power BI", "Streamlit"]
  },
  {
    title: "Cloud, DevOps & Automation",
    skills: ["AWS (EC2/S3)", "Docker", "Linux", "API Integration", "Data Pipelines", "Workflow Automation"]
  }
];

function Main() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPhraseIndex(prev => (prev + 1) % phrases.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  setDisplayedText("");
  let index = 0;

  const typing = setInterval(() => {
    if (index < phrases[phraseIndex].length) {
      setDisplayedText(phrases[phraseIndex].slice(0, index + 1));
      index++;
    } else {
      clearInterval(typing);
    }
  }, 40);

    return () => clearInterval(typing);
    }, [phraseIndex]);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Srijana Shrestha" />
        </div>
        <div className="content">
          <h1>Srijana Shrestha</h1>
          <div className={`animated-subtitle${fading ? ' fading' : ''}`}>
            {displayedText}
          </div>
          

          <a
            href={Srijana_Resume}
            className="resume-btn"
          >
            <FileDownloadIcon fontSize="small" />
            View Resume
          </a>

        </div>
      </div>

      <div className="who-am-i" id="about">
        <div className="who-am-i-content">
          <h1>About Me</h1>
            <p>
              I'm a senior at St. Joseph's University, Brooklyn, double-majoring in Computer Science and Mathematics with a minor in Data Science.
            </p>
            <p>
              My work centers on machine learning, software engineering, and agentic AI architectures—focused on turning abstract ideas into reliable, production-ready code.
            </p>
            <p>
              <strong>Currently:</strong> Exploring AI agents and contributing to open-source software.
            </p>
            <p>
              <strong>Looking for:</strong> New Grad & Internship roles in AI/ML Engineering, Data Science, and Software Development.
            </p>
          

          <div className="tech-stack">
            <span className="tech-stack-label">Tech Stack</span>
          <   div className="tech-categories-grid">
            {techCategories.map((cat, catIdx) => (
          <div key={catIdx} className="tech-category-box">
            <h3>{cat.title}</h3>
          <div className="tech-chips">
          {cat.skills.map((tech, techIdx) => (
            <span
              key={techIdx}
              className="tech-chip"
              style={{ animationDelay: `${(catIdx * cat.skills.length + techIdx) * 0.04}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Main;

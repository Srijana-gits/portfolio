import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faChartBar, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "SQL",
    "R",
    "Tableau",
    "Power BI",
    "Streamlit",
];

const labelsSecond = [
    "PyTorch",
    "Transformers",
    "Tiktoken",
    "Scikit-Learn",
    "Groq (LLaMA 3.3)",
    "RAG",
    "Hugging Face",
    "Statistical Modeling",
    "Predictive Modeling",
];

const labelsThird = [
    "Java",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git / GitHub",
    "Matlab",
    "REST APIs",
    "MS Office Suite",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science & Analytics</h3>
                    <p>I analyze large datasets to uncover insights using Python, R, and visualization tools. Experienced in data cleaning, statistical analysis, experimental design, and building end-to-end data pipelines.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Machine Learning & AI</h3>
                    <p>I build and fine-tune ML models, LLMs, and AI-powered systems. Projects include training a GPT-style transformer from scratch, building RAG pipelines, and developing feedback-loop recommender systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Software Development</h3>
                    <p>I develop clean, maintainable code across multiple languages. Web development experience from internship work building responsive applications, integrating backend APIs, and optimizing frontend performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;

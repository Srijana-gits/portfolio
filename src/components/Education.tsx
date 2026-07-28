import React from "react";
import '../assets/styles/Education.scss';
import sjnyLogo from "../assets/images/sjny.jpeg";

const coursework = [
  "Data Structures & Algorithms", 
  "Principles and Statistical Methods of Data Science", "Linear Algebra", "Discrete Mathematics", "Multivariable Calculus",
  "Database Management", "Computer Organization and Assembly", "Operating Systems",
  "Software Engineering", "Probability and Statistics", "Real Analysis", 
];

const honors = [
  "Presidential Scholar",
  "Emerging Leader Award 2025",
  "SURF 2026 Recipient",
  "Delta Epsilon Sigma",
  "Sigma Iota Chi",
];

const certificates = [
  {
    title: "AI Engineering Certificate",
    provider: "CodePath",
    date: "April 2026",
    link: "https://www.linkedin.com/in/srijanaashrestha/overlay/Certifications/920452820/treasury/?profileId=ACoAAEcES84BZiepaetjbzMDWrmt8K4DG_BG8_E",
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    provider: "DeepLearning.AI",
    date: "April 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/BB1687TLDGRG",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    provider: "DeepLearning.AI",
    date: "March 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/NCNPPI3WWGDZ",
  },
];

function Education() {
  return (
    <div className="education-section" id="education">
      <div className="education-container">

        <h1>Education</h1>

        <div className="edu-card">
          <div className="edu-card-body">
            <div className="edu-main-info">
              <div className="edu-title-row">
                <img src={sjnyLogo} alt="St. Joseph's University" className="edu-logo" />
                <h2>St. Joseph's University</h2>
              </div>
              <span className="edu-tag">Expected May 2027 · Brooklyn, NY</span>
              <p className="edu-degree">(Hons.) B.S. Computer Science &amp; Mathematics</p>
              <p className="edu-minor">Minor in Data Science</p>
            </div>
            <div className="edu-stats">
              <div className="edu-stat">
                <span className="stat-value">3.998</span>
                <span className="stat-label">GPA / 4.00</span>
              </div>
              <div className="edu-stat">
                <span className="stat-value">6×</span>
                <span className="stat-label">Dean's List</span>
              </div>
              <div className="edu-stat">
                <span className="stat-value">5</span>
                <span className="stat-label">Awards</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="subsection-title">Honors &amp; Awards</h2>
        <div className="honors-list">
          {honors.map((h, i) => (
            <div key={i} className="honor-item">
              <div className="honor-left">
                <img src={sjnyLogo} alt="St. Joseph's University" className="honor-logo" />
              </div>
              <span>{h}</span>
            </div>
          ))}
        </div>

        <h2 className="subsection-title">Certificates</h2>
        <div className="certificates-list">
          {certificates.map((cert, i) => (
            <a key={i} href={cert.link} target="_blank" rel="noreferrer" className="certificate-card">
              <div className="certificate-main">
                <p className="certificate-provider">{cert.provider}</p>
                <h3>{cert.title}</h3>
              </div>
              <span className="certificate-date">{cert.date}</span>
            </a>
          ))}
        </div>

        <h2 className="subsection-title">Relevant Coursework</h2>
        <div className="coursework-pills">
          {coursework.map((c, i) => (
            <span key={i} className="course-pill">{c}</span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Education;

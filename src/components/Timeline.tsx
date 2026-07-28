import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faRobot,
  faChalkboardTeacher,
  faLaptopCode,
  faPen,



} from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

import microsoftLogo from "../assets/images/microsoft.png";
import sjnyLogo from "../assets/images/sjny.jpeg";
import bttLogo from "../assets/images/btt.png";
import lfLogo from "../assets/images/LF.png";

const cardStyle = { background: "white", color: "rgb(39, 40, 34)" };
const arrowStyle = { borderRight: "7px solid white" };

function Timeline() {
  return (
    <VerticalTimeline>

      {/* SURF */}
      <VerticalTimelineElement
        contentStyle={cardStyle}
        contentArrowStyle={arrowStyle}
        date="May 2026 – Present"
        iconStyle={{ background: "#6a1b9a", color: "white" }}
        icon={<FontAwesomeIcon icon={faChartLine} />}
      >
        <div className="tl-card-header">
          <div>
            <h3>Summer Undergraduate Research Fellow</h3>
            <h4>St. Joseph's University,       Brooklyn, NY</h4>
          </div>
          <img src={sjnyLogo} alt="SJNY" className="company-logo" />
        </div>

        <ul>
          <li>Conducting faculty-mentored research through the SURF program using NYC Open Data to build predictive models and analyze urban trends.</li>
        </ul>
      </VerticalTimelineElement>

      {/* BREAKTHROUGH TECH */}
      <VerticalTimelineElement
        contentStyle={cardStyle}
        contentArrowStyle={arrowStyle}
        date="March 2026 – Present"
        iconStyle={{ background: "#1a73e8", color: "white" }}
        icon={<FontAwesomeIcon icon={faRobot} />}
      >
        <div className="tl-card-header">
          <div>
            <h3>AI/ML Fellow</h3>
            <h4>Break Through Tech @ Cornell Tech</h4>
          </div>
          <img src={bttLogo} alt="Break Through Tech" className="company-logo" />
        </div>

        <ul>
          <li> Selected as an AI/ML Fellow in Break Through Tech, applying machine learning methods in Python to solve real-world problems using large-scale datasets and end-to-end ML workflows.</li>
          <li> Developing predictive models using supervised learning techniques, including data cleaning, feature engineering, and model evaluation with Python (pandas, scikit-learn), from exploration to validation.</li>
        </ul>
      </VerticalTimelineElement>

      {/* MICROSOFT */}
      <VerticalTimelineElement
        contentStyle={cardStyle}
        contentArrowStyle={arrowStyle}
        date="May 2025 – June 2025"
        iconStyle={{ background: "#0078d4", color: "white" }}
        icon={<FontAwesomeIcon icon={faMicrosoft} />}
      >
        <div className="tl-card-header">
          <div>
            <h3>Data Science Research Fellow</h3>
            <h4>Microsoft · Manhattan, NY</h4>
          </div>
          <img src={microsoftLogo} alt="Microsoft" className="company-logo" />
        </div>

        <ul>
          <li>Reproduced published research using statistical modeling and hypothesis testing</li>
          <li>Built Linux/Bash pipelines to automate data processing and reproducibility workflows</li>
          <li>Applied R and ML techniques to analyze datasets and validate findings</li>
        </ul>
      </VerticalTimelineElement>

      {/* FACULTY COMMITTEE */}
      <VerticalTimelineElement
        contentStyle={cardStyle}
        contentArrowStyle={arrowStyle}
        date="September 2024 – Present"
        iconStyle={{ background: "#7b1fa2", color: "white" }}
        icon={<FontAwesomeIcon icon={faChalkboardTeacher} />}
      >
        <div className="tl-card-header">
          <div>
            <h3>Faculty Technology Committee Representative</h3>
            <h4>St. Joseph's University · Brooklyn, NY</h4>
          </div>
          <img src={sjnyLogo} alt="SJNY" className="company-logo" />
        </div>

        <ul>
          <li>Represent 1,400+ students on technology and digital learning initiatives</li>
          <li>Provide feedback on LMS usability, cybersecurity, and campus systems</li>
          <li>Collaborate with faculty to improve student tech experience</li>
        </ul>
      </VerticalTimelineElement>

      {/* Peer Tutor*/}
      <VerticalTimelineElement
        contentStyle={cardStyle}
        contentArrowStyle={arrowStyle}
        date="September 2023 – May 2025"
        iconStyle={{ background: "#7b1fa2", color: "white" }}
        icon={<FontAwesomeIcon icon={faPen} />}
        
      >
        <div className="tl-card-header">
          <div>
            <h3>Honors Peer Tutor</h3>
            <h4>St. Joseph's University ·      Brooklyn, NY</h4>
          </div>
          <img src={sjnyLogo} alt="SJNY" className="company-logo" />
        </div>

        <ul>
          <li>Tutored 24–30 students in Pre-Calculus and Calculus through personalized instruction.</li>
          <li>Improved student performance by an average of 76% using targeted lessons and practice.</li>
          <li>Developed study strategies that strengthened problem-solving skills and exam outcomes</li>
        </ul>
      </VerticalTimelineElement>

      {/* LEAPFROG */}
      <VerticalTimelineElement
        contentStyle={cardStyle}
        contentArrowStyle={arrowStyle}
        date="March 2023 – June 2023"
        iconStyle={{ background: "#3a8a5f", color: "white" }}
        icon={<FontAwesomeIcon icon={faLaptopCode} />}
      >
        <div className="tl-card-header">
          <div>
            <h3>Software Engineering Intern</h3>
            <h4>Leapfrog Technology · Dillibazar, Kathmandu</h4>
          </div>
          <img src={lfLogo} alt="Leapfrog Technology" className="company-logo" />
        </div>


        <ul>
          <li>Designed, tested, and deployed 3+ web features and integrated RESTful APIs.</li>
          <li>Resolved key production bugs and optimized application performance.</li>
          <li>Delivered technical solutions via close collaboration with engineering teams in an Agile environment.</li>
        </ul>
      </VerticalTimelineElement>

    </VerticalTimeline>
  );
}

export default Timeline;
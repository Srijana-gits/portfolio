import React from "react";
import '../assets/styles/Leadership.scss';
import codepathLogo from '../assets/images/codepath.png';
import bttLogo      from '../assets/images/btt.png';
import sjnyLogo     from '../assets/images/sjny.jpeg';

const affiliations = [
  {
    logo: codepathLogo,
    alt: "CodePath",
    role: "Applied AI Engineering",
    org: "CodePath",
    date: "Feb 2026 – Present",
    description: "Selected for CodePath's competitive AI Engineering track, building applied AI projects and sharpening technical interview skills.",
  },
  {
    logo: bttLogo,
    alt: "BreakThrough Tech",
    role: "AI/ML Fellow",
    org: "BreakThrough Tech · Cornell Tech",
    date: "March 2026 – Present",
    description: "Selected as an AI/ML Fellow through BreakThrough Tech at Cornell Tech, working on machine learning applications and collaborating with industry partners on applied AI projects.",
  },
  {
    logo: sjnyLogo,
    alt: "St. Joseph's University",
    role: "Treasurer",
    org: "Computer Club · St. Joseph's University",
    date: "April 2026 – Present",
    description: "Managing finances and co-organizing events for the university's Computer Club at St. Joe's, fostering a tech community on campus.",
  },
  {
    logo: sjnyLogo,
    alt: "St. Joseph's University",
    role: "President",
    org: "International Student Union · St. Joseph's University",
    date: "May 2025 – May 2026",
    description: "Served as President of the International Student Union, bringing together diverse student organizations and university leadership to foster cross-cultural connection, amplify student voices, and build a more inclusive campus community.",
  },
];

function Leadership() {
  return (
    <div className="leadership-section" id="leadership">
      <div className="leadership-container">
        <h1>Leadership &amp; Affiliations</h1>
        <div className="leadership-grid">
          {affiliations.map((a, i) => (
            <div key={i} className="leadership-card">
              <span className="leadership-date-pill">{a.date}</span>
              <div className="leadership-logo-wrap">
                <img src={a.logo} alt={a.alt} className="leadership-logo" />
              </div>
              <h3 className="leadership-role">{a.role}</h3>
              <h4 className="leadership-org">{a.org}</h4>
              <p className="leadership-desc">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leadership;

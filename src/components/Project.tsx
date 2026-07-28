import React, { useState } from "react";
import music from "../assets/images/music.jpeg";
import lordoftherings from "../assets/images/lordoftherings.jpeg";
import ds3 from "../assets/images/ds3.png";
import freeBites from "../assets/images/freeBites.png";
import ScrollReveal from "./ScrollReveal";
import "../assets/styles/Project.scss";

const projects = [
  {
    image: music,
    alt: "Music Recommender",
    title: "Music Recommender with AI Feedback Loop",
    summary:
      "Built a scalable recommender on a 72k-song dataset using cosine similarity and ranking systems.",
    details:
      "Integrated LLM feedback (LLaMA 3.3 via Groq) inside a RAG pipeline, improving user satisfaction from 75% to 93%. Tuned ranking weights against live feedback loops and benchmarked retrieval quality against a held-out listening test set.",
    stack: ["Python", "NumPy", "Streamlit", "Groq", "LLaMA 3.3", "RAG"],
  },
  {
    image: lordoftherings,
    alt: "LLM Project",
    title: "1LLM2RuleThemAll",
    summary:
      "Built a GPT-style transformer from scratch using tokenization, multi-head attention, positional encoding, and AdamW optimization for downstream classification tasks.",
    details:
      "Implemented the tokenizer, attention blocks, and training loop without relying on high-level transformer libraries, then validated performance against a pretrained baseline on the same classification task.",
    stack: ["PyTorch", "NumPy", "Tiktoken", "Transformers"],
  },
  {
    image: ds3,
    alt: "Fact Checking",
    title: "Community-Based Fact-Checking",
    summary:
      "Reproduced ICWSM Birdwatch study using 11,802 notes and 52,981 ratings.",
    details:
      "Built R pipelines to clean and join the raw note/rating exports, then fit regression models and ran statistical validation to check whether the original study's conclusions held on the reproduced dataset.",
    stack: ["R", "tidyverse", "ggplot2", "Bash"],
  },
  {
    image: freeBites,
    alt: "Free Bites",
    title: "SJNY Free Bites",
    summary:
      "Built a full-stack Next.js app that reduces campus food waste by enabling real-time posting and discovery of free food using a location-based feed.",
    details:
      "Designed the Supabase schema for posts and locations, added real-time subscriptions so new posts appear instantly, and built a distance-based feed so users see the closest available food first.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
  },
];

function Project() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpanded((current) => (current === index ? null : index));
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <section id="projects"></section>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const isOpen = expanded === index;
          return (
            <ScrollReveal key={project.title} className="project" delay={index * 80}>
              <img className="project-image zoom" src={project.image} alt={project.alt} />

              <h2>{project.title}</h2>

              <p>{project.summary}</p>

              <div
                className={`project-details ${isOpen ? "project-details-open" : ""}`}
                aria-hidden={!isOpen}
              >
                <p>{project.details}</p>
              </div>

              <div className="tech-chips project-tech-chips">
                {project.stack.map((tech, techIdx) => (
                  <span
                    key={tech}
                    className="tech-chip"
                    style={{ animationDelay: `${(index * project.stack.length + techIdx) * 0.04}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="project-toggle"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                {isOpen ? "Show less ↑" : "Read more ↓"}
              </button>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

export default Project;

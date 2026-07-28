import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const contactLinks = [
  { icon: <EmailIcon />,    href: 'mailto:srijanashrestha013@gmail.com',      label: 'Email' },
  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/srijanaashrestha', label: 'LinkedIn' },
  { icon: <GitHubIcon />,   href: 'https://github.com/Srijana-gits',           label: 'GitHub' },
];

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className="items-container contact-wrapper">
        <h1>Let's connect</h1>
        <p className="contact-intro">
          Always open to new opportunities, collaborations, or interesting conversations.
        </p>
        <div className="contact-icons">
          {contactLinks.map((c, i) => (
            <a key={i} href={c.href} target="_blank" rel="noreferrer" className="contact-icon-btn" aria-label={c.label}>
              {c.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;

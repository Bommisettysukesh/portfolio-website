import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
        
          <div className="about-details">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
            <p className="about-text">
              <strong>Hello! I'm an engineering graduate</strong> with a BE in Computer Science (IoT) from St. Ann's College of Engineering & Technology.
              <br /><br />
              <span className="about-highlight">
                I’m passionate about building modern web applications and am transitioning into a <strong>React developer</strong> role.
              </span>
              <br /><br />
              My technical toolkit includes:
            </p>
            <ul className="about-skills">
              <li>React &amp; JavaScript (ES6+)</li>
              <li>Python</li>
              <li>SQL &amp; Databases</li>
              <li>HTML5 &amp; CSS3</li>
              <li>IoT Concepts</li>
            </ul>
            <p className="about-text">
              <span className="about-goal">
                My goal is to contribute to innovative organizations by developing high-quality solutions and continuously enhancing my programming skills, especially in the React ecosystem.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
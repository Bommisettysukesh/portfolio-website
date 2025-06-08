import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "Customer Segmentation",
      description: "Implemented K-Means clustering to segment customers based on income and spending score, with visualization using elbow plots and scatter plots.",
      technologies: ["Python", "Scikit-learn", "Matplotlib"],
      category: "Data Science",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Interactive Fraud Dataset Explorer",
      description: "Built a Streamlit web app allowing natural language queries on credit card fraud data using OpenAI's language model.",
      technologies: ["Python", "Streamlit", "OpenAI API"],
      category: "Web App",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "IoT Vehicle Security System",
      description: "Developed a security system with various sensors (alcohol, eye-blink, etc.) for autonomous vehicles with automated responses.",
      technologies: ["IoT", "Arduino", "Sensors"],
      category: "IoT",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio website built with React, Framer Motion, and CSS with dark mode support.",
      technologies: ["React", "Framer Motion", "CSS"],
      category: "Web Dev",
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  const filters = ['All', 'Web Dev', 'Data Science', 'Web App', 'IoT'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-container"
      >
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my best work</p>
        </div>

        <div className="project-filters">
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                
                <div className="project-footer">
                  <div className="tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
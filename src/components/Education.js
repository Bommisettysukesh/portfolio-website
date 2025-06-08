import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "BE in CSE-IoT",
      institution: "St. Ann's College of Engineering & Technology",
      period: "2022 - 2025",
      score: "CGPA: 6.7"
    },
    {
      degree: "Diploma in EEE",
      institution: "VRS & YRN Group of Educational Institutions",
      period: "2019 - 2022",
      score: "70%"
    },
    {
      degree: "Class 10th, SSC",
      institution: "NPR Vidya E.M. High School",
      period: "2019",
      score: "CGPA: 8.5"
    }
  ];

  return (
    <section id="education">
      <div class="container">
         <div class="section-header">
                <h2 class="section-title">Education</h2>
      
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="period">{edu.period}</p>
            <p className="score">{edu.score}</p>
          </div>
        ))}
      </div>
    </div>  
      </div>
    </section>
  );
};

export default Education;
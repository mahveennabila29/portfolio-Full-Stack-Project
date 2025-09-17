import React from 'react';

const Skills = () => {
  const frontendSkills = ['React.js', 'Next.js', 'Bootstrap', 'CSS', 'JavaScript', 'HTML5'];
  const backendSkills = ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Mongoose', 'REST APIs', 'Spring Boot (Basic)'];
  const programmingLanguages = ['JavaScript', 'Java', 'Python (Basic)', 'C', 'C++'];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Frontend</h3>
        <ul className="list-disc list-inside mb-4">
          {frontendSkills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
        <h3 className="text-xl font-semibold mb-2">Backend</h3>
        <ul className="list-disc list-inside mb-4">
          {backendSkills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
        <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
        <ul className="list-disc list-inside">
          {programmingLanguages.map(lang => <li key={lang}>{lang}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Skills;

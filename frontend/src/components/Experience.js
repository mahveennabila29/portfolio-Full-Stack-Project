import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Web Developer Intern',
      company: 'IBM Skillbuild-Edunet Foundation - Remote',
      duration: '08/2025 to Current',
      description: [
        'Made Task Manager with Progress Tracker Project.',
        'Supported staff members in their daily tasks, reducing workload burden and allowing for increased focus on higher-priority assignments.',
        'Gained valuable experience working within a specific industry, applying learned concepts directly into relevant work situations.',
        'Gained hands-on experience in various software programs, increasing proficiency and expanding technical skill set.',
        'Explored new technologies and approaches to streamline processes.'
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'Codsoft - Remote',
      duration: '09/2025 to Current',
      description: [
        'Started working on Industry level Projects.',
        'Enhanced website functionality by optimizing existing code and implementing new features.',
        'Developed testing code for web-based applications.',
        'Participated in weekly team meetings to discuss project progress, share knowledge and collaborate on problem-solving strategies.',
        'Utilized version control tools like GIT/GITHUB.'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="italic">{exp.company} | {exp.duration}</p>
            <ul className="list-disc list-inside mt-2">
              {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Open Weather Dashboard',
      description: 'Open weather dashboard using open weather map API (React, Html, CSS, Javascript, Python, flask as framework) - Built a dashboard that show real-time updates of current weather updates (temperature, humidity & feels like).',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Python', 'Flask']
    },
    {
      title: 'Portfolio Website',
      description: 'The project is a full-stack web application with a React frontend and a Node.js/Express backend, using SQLite for data storage and Tailwind CSS for styling.',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js/Express' , 'SQLite' , 'GitHub Pages']
    },
    {
      title: 'Amazon Landing Page Clone',
      description: 'Developed a responsive clone of Amazon\'s landing page using HTML, CSS. Practiced pixel-perfect UI/UX design.',
      technologies: ['HTML', 'CSS']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 mb-2 text-sm">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

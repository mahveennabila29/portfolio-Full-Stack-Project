import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Created REST APIs with NODE.JS & Express certification',
      link: 'https://verify.letsupgrade.in/certificate/LUENJSJUN125239'
    },
    {
      title: 'Frontend web Development Certification',
      link: 'https://oneroadmap.io/skills/frontend/certificate/CERT-ED2E0715'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <ul className="list-disc list-inside">
        {certifications.map((cert, index) => (
          <li key={index}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {cert.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;

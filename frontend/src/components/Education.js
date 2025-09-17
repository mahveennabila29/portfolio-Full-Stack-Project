import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science And Engineering',
      institution: 'Shadan College of Engineering And Technology, Hyderabad, India',
      graduation: 'Expected in 06/2026',
      gpa: 'GPA: 8.0'
    },
    {
      degree: 'Intermediate',
      institution: 'Sravanthi Junior College, Zaheerabad, India',
      graduation: '03/2022',
      gpa: 'GPA: 91 percentage'
    },
    {
      degree: 'School',
      institution: 'Iqra High School, Zaheerabad, India',
      graduation: '03/2020',
      gpa: 'GPA: 10 percentage'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{edu.degree} in {edu.field}</h3>
            <p className="italic">{edu.institution}</p>
            <p>{edu.graduation}</p>
            <p>{edu.gpa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

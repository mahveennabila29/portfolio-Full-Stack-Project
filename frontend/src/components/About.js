import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4"><strong>Location:</strong> Hyderabad, Telangana 500086</p>
        <p className="mb-4"><strong>Phone:</strong> +918977185227</p>
        <p className="mb-4"><strong>Email:</strong> mahveennabila2985@gmail.com</p>
        <p className="mb-4"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mahveen-nabila-5a9a48366" className="text-blue-600">linkedin.com/in/mahveen-nabila-5a9a48366</a></p>
        <p className="mb-4"><strong>GitHub:</strong> <a href="https://github.com/mahveennabila29" className="text-blue-600">github.com/mahveennabila29</a></p>
        <p>
          Passionate about exploring the internet for technology-related knowledge beyond academia pursuits. Actively engage in learning programming languages and tools through online platforms using university credentials. Acquiring proficiency in software related to full stack development, cybersecurity and artificial intelligence.
        </p>
      </div>
    </div>
  );
};

export default About;

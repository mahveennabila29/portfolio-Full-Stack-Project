import React from 'react';

const Interests = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Interests & Achievements</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Interests</h3>
        <p className="mb-4">
          Passionate about exploring the internet for technology-related knowledge beyond academia pursuits. Actively engage in learning programming languages and tools through online platforms using university credentials. Acquiring proficiency in software related to full stack development, cybersecurity and artificial intelligence.
        </p>
        <h3 className="text-xl font-semibold mb-2">Achievements</h3>
        <ul className="list-disc list-inside">
          <li>Campus Ambassador for OpenAI x NxtWave Buildathon</li>
          <li>Participated in Hackathons: Built AI-powered solutions</li>
          <li>Solved 100s of Problems on LeetCode</li>
          <li>Scored A+ in Data Structure and Algorithms Course</li>
        </ul>
      </div>
    </div>
  );
};

export default Interests;

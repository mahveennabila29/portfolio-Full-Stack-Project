import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>Mahveen Nabila</div>
        <ul className="flex space-x-4">
          <li><button onClick={() => scrollToSection('home')} className="hover:text-blue-200">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-200">About</button></li>
          <li><button onClick={() => scrollToSection('skills')} className="hover:text-blue-200">Skills</button></li>
          <li><button onClick={() => scrollToSection('experience')} className="hover:text-blue-200">Experience</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="hover:text-blue-200">Projects</button></li>
          <li><button onClick={() => scrollToSection('certifications')} className="hover:text-blue-200">Certifications</button></li>
          <li><button onClick={() => scrollToSection('education')} className="hover:text-blue-200">Education</button></li>
          <li><button onClick={() => scrollToSection('interests')} className="hover:text-blue-200">Interests</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-200">Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

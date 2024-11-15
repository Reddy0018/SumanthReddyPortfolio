import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: 'Case Western Reserve University',
      degree: 'Master of Science in Computer Science',
      fieldOfStudy: 'Computer Science',
      startYear: "Aug 2023",
      endYear: "May 2025",
    },
    {
        institution: 'Lovely Professional University',
        degree: 'Bachelor of Technology in Computer Science',
        fieldOfStudy: 'Computer Science',
        startYear: "Aug 2017",
        endYear: "May 2021",
    }
  ];

  return (
    <div className="py-8 px-2 max-w-6xl m-auto" id="education">
      <h1 className="text-3xl text-teal-500 font-bold sm:text-5xl mb-8">
        Education
      </h1>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="p-4 border border-gray-700 rounded-lg">
            <h2 className="text-xl text-white font-semibold">
              {edu.institution}
            </h2>
            <p className="text-gray-300">
              {edu.degree} in {edu.fieldOfStudy}
            </p>
            <p className="text-gray-400">
              {edu.startYear} - {edu.endYear}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
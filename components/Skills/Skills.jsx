import React from 'react';

// Importing icons from react-icons
import { FaJava, FaPython, FaJs, FaGit } from 'react-icons/fa';
import { SiSpringboot, SiApachekafka, SiJenkins, SiApachemaven, SiPostgresql, SiNeo4J, SiSpringsecurity, SiMysql } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="py-8 px-2 max-w-6xl m-auto" id="skills">
      <h1 className="text-3xl text-teal-500 font-bold sm:text-5xl mb-8">
        #Skills
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <FaJava className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md">Java</span>
        </div>
        <div className="flex flex-col items-center">
          <FaPython className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md">Pythont</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJs className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md">Js</span>
        </div>
        <div className="flex flex-col items-center">
          <SiSpringsecurity className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md">Spring Security</span>
        </div>
        <div className="flex flex-col items-center">
          <SiSpringboot className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md">Spring Boot</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMysql className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md">MySQL Database</span>
        </div>
        <div className="flex flex-col items-center">
          <SiPostgresql className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md">Postgres SQL</span>
        </div>
        <div className="flex flex-col items-center">
          <SiNeo4J className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md"> Neo4J</span>
        </div>
        <div className="flex flex-col items-center">
          <SiApachekafka className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md">Apache Kafka</span>
        </div>
        <div className="flex flex-col items-center">
          <SiApachemaven className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md">Apache Maven</span>
        </div>
        <div className="flex flex-col items-center">
          <SiJenkins className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md">Jenkins</span>
        </div>
        <div className="flex flex-col items-center">
          <FaGit className="text-6xl text-gray-300 mb-2" />
          <span className="text-gray-300 text-md">Git</span>
        </div>
        {/* Add more skills as needed */}
      </div>
    </div>
  );
};

export default Skills;
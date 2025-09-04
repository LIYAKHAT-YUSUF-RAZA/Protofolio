import React, { useEffect, useState } from "react";
import axios from "axios";

// About Component with Progress Bar
const About = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects/")
      .then((response) => {
        setProjects(response.data.protofolio || []); // ✅ ensure it's always an array
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Node.js/Express", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "MongoDB/SQL", level: 82 },
    { name: "Python/Django", level: 87 },
  ];

  return (
    <div>
      {Array.isArray(projects) &&
        projects.map((p) => (
          <div
            key={p.id}   
            className="bg-gray-900 text-white py-12 sm:py-16 md:py-20"
            id="about"
          >
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                About Me
              </h2>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                {/* Profile Image */}
                <img
                  src={p.aboutme_img}
                  alt="about"
                  className="w-72 h-110 rounded object-cover mb-8 mt-16 md:mb-0"
                />

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="max-w-3xl mx-auto lg:mx-0">
                    <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-gray-300 leading-relaxed text-center lg:text-left">
                      I'm a passionate Full-Stack Developer with expertise in
                      modern web technologies. I love creating innovative
                      solutions that solve real-world problems and provide
                      exceptional user experiences. With a strong foundation in
                      both frontend and backend development, I bring ideas to
                      life through clean, efficient code.
                    </p>

                    {/* Skills Section */}
                    <div className="space-y-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">
                        Technical Skills
                      </h3>
                      {skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          {/* ✅ use skill.name instead of index */}
                          <div className="flex justify-between items-center">
                            <span className="text-sm sm:text-base font-semibold">
                              {skill.name}
                            </span>
                            <span className="text-sm sm:text-base text-green-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
                            <div
                              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import axios from "axios";

// Projects Component
const Projects = () => {
  // connecting to backend
  const [projects, setProjects] = useState([]);

  useEffect(() => {
  axios.get("http://127.0.0.1:8000/api/projects/")
    .then(response => {
      setProjects(response.data.projects || []);  // ✅ ensure it's always an array
    })
    .catch(error => {
      console.error("Error fetching projects:", error);
      setProjects([]);  // ✅ fallback to empty array
    });
}, []);


  return (
    <div className="bg-black text-white py-12 sm:py-16 md:py-20" id="project">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 sm:mb-6">
            My Projects
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Here are some of the projects I've worked on, showcasing my skills
            in full-stack development and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {[...projects].reverse().map((project) => (
            <div
              key={project.project_id}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 border border-gray-700 hover:border-green-400/50"
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
                <div className="text-6xl sm:text-7xl md:text-8xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <img src={project.project_img} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-all duration-300">
                  {project.project_name}
                </h3>

                {/* Technologies */}
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-green-400/20 to-blue-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold border border-green-400/30">
                    {project.project_tech}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 group-hover:text-gray-200 mb-4 text-sm sm:text-base leading-relaxed">
                  {project.project_desc}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(project.project_features) &&
                      project.project_features.map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded group-hover:bg-gray-600 group-hover:text-white transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.project_github}
                    className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center px-4 py-2.5 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                  <a
                    href={project.project_demo}
                    className="flex-1 bg-transparent border-2 border-green-400 text-green-400 text-center px-4 py-2.5 rounded-lg font-semibold hover:bg-green-400 hover:text-black transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://github.com/LIYAKHAT-YUSUF-RAZA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-xl text-sm sm:text-base"
          >
            View All Projects on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React, { useEffect, useState, useRef } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiDownload,
} from "react-icons/fi"; // 👈 Import icons

const Work = ({ title, description, projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modelRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modelRef.current && !modelRef.current.contains(event.target)) {
      setSelectedProject(null);
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedProject]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className="py-24 pb-24 px-[4vw] md:px-[3vw] lg:px-[6vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          {description}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects &&
          projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div
            ref={modelRef}
            className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    poster={selectedProject.image}
                    controls
                    className="lg:w-full max-h-44 sm:max-h-[400px] object-contain rounded-xl shadow-2xl"
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="lg:w-full max-h-44 sm:max-h-[400px] object-contain rounded-xl shadow-2xl"
                  />
                )}
              </div>

              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-3 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center flex items-center gap-2 justify-center"
                    >
                      <FiGithub className="text-lg" />
                      View Code
                    </a>
                  )}
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-3 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center flex items-center gap-2 justify-center"
                    >
                      <FiExternalLink className="text-lg" />
                      View Live
                    </a>
                  )}
                  {selectedProject.apk && (
                    <a
                      href={selectedProject.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-3 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center flex items-center gap-2 justify-center"
                    >
                      <FiDownload className="text-lg" />
                      Download APK
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;

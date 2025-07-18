import React from "react";
import { education } from "../../constants";
import { FaSchool } from "react-icons/fa"; // Fallback icon

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] sm:px-[0vw] lg:px-[7vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Entry Card */}
            <div
              className={`w-full sm:max-w-2xl p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transition-transform duration-300 hover:scale-105`}
            >
              {/* Top Info */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 flex justify-center items-center bg-white rounded-md overflow-hidden">
                  {edu.img ? (
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <FaSchool className="text-purple-600 text-2xl" />
                  )}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade */}
              {edu.grade && (
                <p className="mt-4 text-sm font-bold text-purple-400">
                  Grade: {edu.grade}
                </p>
              )}

              {/* Description */}
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

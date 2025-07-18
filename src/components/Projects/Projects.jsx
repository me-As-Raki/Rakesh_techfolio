import React from "react";
import { projects } from "../../constants"; // ✅ Your combined array
import Work from "../Work/Work"; // Reusable Work component

const Projects = () => {
  return (
    <Work
      projects={projects}
      title="PROJECTS"
      description="A blend of my professional and personal projects demonstrating real-world problem solving and creativity."
    />
  );
};

export default Projects;

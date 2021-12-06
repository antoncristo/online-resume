import { SectionHeader } from "src/shared";
import { myProjects } from "./projects.config";

import { ProjectContainer } from "./components";

import classes from "./projects.module.css";

export const Projects = () => {
  return (
    <div className={classes.projects}>
      <SectionHeader sectionTitle="PROJECTS" />
      {myProjects.map((project, index) => (
        <ProjectContainer
          project={project}
          key={JSON.stringify(project) + index}
        />
      ))}
    </div>
  );
};

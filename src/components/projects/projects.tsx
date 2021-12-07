import { SectionHeader } from "src/shared";
import { myProjects } from "./projects.config";

import { ProjectContainer } from "./components";

import classes from "./projects.module.css";

export const Projects = () => {
  return (
    <div className={classes.projects}>
      <SectionHeader sectionTitle="PROJECTS" />
      <div className={classes.projectsWrapper}>
        {myProjects.map((project, index) => (
          <ProjectContainer
            index={index}
            project={project}
            key={JSON.stringify(project) + index}
          />
        ))}
      </div>
    </div>
  );
};

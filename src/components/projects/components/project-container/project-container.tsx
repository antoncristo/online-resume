import { ProjectsScheme } from "src/types";

import { Description, SlideShow } from "./components";

import classes from "./project-container.module.css";

type ProjectContainerProps = {
  project: ProjectsScheme;
  index: number;
};

export const ProjectContainer = (props: ProjectContainerProps) => {
  const { project, index } = props;
  return (
    <div className={classes.projectContainer}>
      <Description index={index} project={project} />
      <SlideShow images={project.screenshots} />
    </div>
  );
};

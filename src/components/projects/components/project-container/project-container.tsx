import { ProjectsScheme } from "src/types";

import { Description } from "./components";

import classes from "./project-container.module.css";

type ProjectContainerProps = {
  project: ProjectsScheme;
  rtl?: boolean;
};

export const ProjectContainer = (props: ProjectContainerProps) => {
  const { project, rtl = false } = props;
  return (
    <div
      style={rtl ? { flexDirection: "row-reverse" } : {}}
      className={classes.projectContainer}
    >
      <Description project={project} />
      <div>slideshow</div>
    </div>
  );
};

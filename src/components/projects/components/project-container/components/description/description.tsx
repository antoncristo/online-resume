import redirectIcon from "src/assets/svg/open.svg";
import { ProjectsScheme } from "src/types";

import classes from "./description.module.css";

type DescriptionProps = {
  project: ProjectsScheme;
};

export const Description = (props: DescriptionProps) => {
  const { project } = props;

  const showProjectInNewWindow = () => {
    project.link && window.open(project.link);
  };

  return (
    <div
      onClick={showProjectInNewWindow}
      className={classes.projectDescription}
    >
      <div className={classes.title}>
        {project.title} <img src={redirectIcon} alt="open-new-window" />
      </div>
      <div className={classes.description}>{project.description}</div>
      <div className={classes.techListWrapper}>
        {project.techList.map((tech, index) => (
          <div key={tech + index}>{tech}</div>
        ))}
      </div>
    </div>
  );
};

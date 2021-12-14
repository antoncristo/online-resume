import { ProjectsScheme } from "src/types";

import { Description, SlideShow } from "./components";

import classes from "./project-container.module.css";
import { awsS3controller } from "src/storage";

type ProjectContainerProps = {
  project: ProjectsScheme;
  index: number;
};

export const ProjectContainer = (props: ProjectContainerProps) => {
  const { project, index } = props;

  !project.screenshots &&
    awsS3controller.getProjectAssetsPublicUrlFromS3ByPrefix(
      project.storagePrefix
    );

  return (
    <div className={classes.projectContainer}>
      <Description index={index} project={project} />
      {project.screenshots ? <SlideShow images={project.screenshots} /> : null}
    </div>
  );
};

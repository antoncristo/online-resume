import { RefObject, useRef } from "react";
import { SectionHeader } from "src/shared";
import { ScrollMenuMapName } from "src/stores";
import { useInitScrollMapRef } from "src/hooks";

import { myProjects } from "./projects.config";
import { ProjectContainer } from "./components";

import classes from "./projects.module.css";

const SECTION_SCROLL_KEY: ScrollMenuMapName = "PROJECTS";

export const Projects = () => {
  const projectsRef: RefObject<HTMLDivElement> = useRef(null);

  useInitScrollMapRef(SECTION_SCROLL_KEY, projectsRef);

  return (
    <div ref={projectsRef} className={classes.projects}>
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

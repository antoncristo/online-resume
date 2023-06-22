import { RefObject, useRef } from "react";
import { observer } from "mobx-react";
import { SectionHeader } from "src/shared";
import { projectsStore, ScrollMenuMapName } from "src/stores";
import { useInitScrollMapRef } from "src/hooks";

import { ProjectContainer } from "./components";

import classes from "./projects.module.css";

const SECTION_SCROLL_KEY: keyof ScrollMenuMapName = "PROJECTS";

export const Projects = observer(() => {
  const { projects } = projectsStore;
  const projectsRef: RefObject<HTMLDivElement> = useRef(null);

  useInitScrollMapRef(SECTION_SCROLL_KEY, projectsRef);

  return (
    <div ref={projectsRef} className={classes.projects}>
      <SectionHeader sectionTitle="PROJECTS" />
      <div className={classes.projectsWrapper}>
        {projects.map((project, index) => (
          <ProjectContainer
            project={project}
            key={JSON.stringify(project) + index}
          />
        ))}
      </div>
    </div>
  );
});

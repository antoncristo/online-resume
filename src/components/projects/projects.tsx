import { RefObject, useRef } from "react";
import { SectionHeader } from "src/shared";
import { scrollMenuActions } from "src/actions";
import { ScrollMenuMapKey, scrollMenuStore } from "src/stores";
import { useScrollMenu } from "src/hooks";

import { myProjects } from "./projects.config";
import { ProjectContainer } from "./components";

import classes from "./projects.module.css";

const SECTION_SCROLL_KEY: ScrollMenuMapKey = ScrollMenuMapKey.PROJECTS;

export const Projects = () => {
  const { scrollMenuMap } = scrollMenuStore;
  const projectsRef: RefObject<HTMLDivElement> = useRef(null);

  const addSectionRefToMap = () => {
    return !scrollMenuMap[SECTION_SCROLL_KEY]
      ? scrollMenuActions.addScrollSectionToMap(SECTION_SCROLL_KEY, projectsRef)
      : () => {};
  };

  useScrollMenu(projectsRef, addSectionRefToMap);

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

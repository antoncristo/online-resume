import { action } from "mobx";
import { projectsStore } from "src/stores";
import { ProjectBucketPrefix, ProjectsScheme } from "src/types";

export const setProjectsSnapshotsFromStorageByPrefix = action(
  (prefix: ProjectBucketPrefix, assetsUrls: string[]) => {
    const { projects } = projectsStore;
    const copyOfProjects: ProjectsScheme[] = projects.map((proj) => {
      return JSON.parse(JSON.stringify(proj));
    });

    const projectRefByPrefix = copyOfProjects.find(
      (proj) => proj.storagePrefix === prefix
    );

    if (!projectRefByPrefix) {
      throw Error(
        "[setProjectsSnapshotsFromStorageByPrefix]:: sonthing went wrong"
      );
    }

    projectRefByPrefix.screenshots = assetsUrls;

    projectsStore.projects = copyOfProjects;
  }
);

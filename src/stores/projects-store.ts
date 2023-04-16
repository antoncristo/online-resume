import { makeAutoObservable } from "mobx";
import { ProjectsScheme } from "src/types";

class ProjectsStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _projects: ProjectsScheme[] = [
    {
      title: "T-Ask-In",
      storagePrefix: "taskin/",
      link: "https://master.dnn3j07qayfho.amplifyapp.com/",
      description:
        "Create and Schedule your tasks. With a simple traffic light color scheme, the app helps to track your progress.",
      screenshots: undefined,
      techList: [
        "React.js",
        "Typescript",
        "MobX",
        "CSS",
        "Google OAuth",
        "AWS S3",
        "Node.js",
      ],
    },
  ];
  get projects() {
    return this._projects;
  }
  set projects(projectsUpdate: ProjectsScheme[]) {
    this._projects = projectsUpdate;
  }
}

export const projectsStore = new ProjectsStore();

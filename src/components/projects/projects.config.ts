import { ProjectsScheme } from "src/types";
import screenshot1 from "src/assets/image/taskin-11.png";
import screenshot2 from "src/assets/image/taskin-22.png";
import screenshot3 from "src/assets/image/taskin-33.png";

export const myProjects: ProjectsScheme[] = [
  {
    title: "T-Ask-In",
    link: "https://www.taskin-app.com",
    description:
      "Create and Schedule your tasks. With a simple traffic light color scheme, the app helps to track your progress.",
    screenshots: [screenshot3, screenshot2, screenshot1],
    techList: ["React.js", "MobX", "CSS", "Google OAuth", "AWS S3", "Node.js"],
  },
];

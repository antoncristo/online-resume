import reactIcon from "src/assets/svg/react.svg";
import cssIcon from "src/assets/svg/css3.svg";
import typescriptIcon from "src/assets/svg/typescript.svg";
import mobxIcon from "src/assets/svg/mobx.svg";
import reduxIcon from "src/assets/svg/redux.svg";
import htmlIocn from "src/assets/svg/html5.svg";
import awsIcon from "src/assets/svg/aws.svg";
import nodeIcon from "src/assets/svg/nodejs.svg";
import gitHubIcon from "src/assets/svg/github.svg";
import gitIcon from "src/assets/svg/git.svg";
import webpackICon from "src/assets/svg/webpack.svg";
import firebaseIcon from "src/assets/svg/firebase.svg";
import { TechStackScheme } from "src/types/tech";

export const techStacks: TechStackScheme[] = [
  {
    stackTitle: "Toolbox",
    stackItems: [
      {
        itemName: "Webpack",
        iconUrl: webpackICon,
      },
      {
        itemName: "React",
        iconUrl: reactIcon,
      },
      {
        itemName: "Typescript",
        iconUrl: typescriptIcon,
      },
      {
        itemName: "MobX",
        iconUrl: mobxIcon,
      },
      {
        itemName: "Redux",
        iconUrl: reduxIcon,
      },
      {
        itemName: "CSS",
        iconUrl: cssIcon,
      },
      {
        itemName: "HTML",
        iconUrl: htmlIocn,
      },
    ],
  },
  {
    stackTitle: "Other",
    stackItems: [
      {
        itemName: "Github",
        iconUrl: gitHubIcon,
      },
      {
        itemName: "Git",
        iconUrl: gitIcon,
      },
      {
        itemName: "AWS",
        iconUrl: awsIcon,
      },
      {
        itemName: "Node.js",
        iconUrl: nodeIcon,
      },
      {
        itemName: "Firebase",
        iconUrl: firebaseIcon,
      },
    ],
  },
];

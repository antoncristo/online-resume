import dayjs from "dayjs";
import { SectionHeader } from "src/shared";
import { TimeLineItem, TimeLineItemType } from "src/types";

import { TimeLineFactory } from "./components";

import classes from "./experience.module.css";

const myExperienceTimeline: TimeLineItem<TimeLineItemType>[] = [
  {
    content: {
      checkpoint: "Software Engineer B.sc",
      date: "July 2019",
    },
  },
  {
    content: {
      companyName: "difftone.com",
      role: "Junior Front-End Developer",
      startDate: "Sep 2020",
      endDate: "Oct 2021",
      roleDescription: `Developed responsive UI with a pixel-perfect approach.\nConverted design into functional client facing components.\nCollaborated with product team members to improve existing UX.\nGained experience working in an agile environment with weekly sprints.\nAssisted senior developers in implementation discussions and \ndebugging sessions.\nAssisted with the onboarding process of new front-end team members.`,
    },
  },

  {
    content: {
      checkpoint: "Today",
      date: dayjs().format("MMMM YYYY"),
    },
  },
];

export const Experience = () => {
  return (
    <div className={classes.experience}>
      <SectionHeader sectionTitle="Professional timeline" />
      <div className={classes.experienceContainer}>
        {myExperienceTimeline.map((timeLineItem, index) => (
          <TimeLineFactory
            timeLineItem={timeLineItem}
            key={JSON.stringify(timeLineItem) + index}
          />
        ))}
      </div>
    </div>
  );
};

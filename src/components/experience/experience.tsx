import dayjs from "dayjs";
import { RefObject, useRef } from "react";
import { scrollMenuActions } from "src/actions";
import { useScrollMenu } from "src/hooks";
import { SectionHeader } from "src/shared";
import { ScrollMenuMapKey, scrollMenuStore } from "src/stores";
import { TimeLineItem, TimeLineItemType } from "src/types";

import { TimeLineFactory } from "./components";

import classes from "./experience.module.css";

const SECTION_SCROLL_KEY: ScrollMenuMapKey = ScrollMenuMapKey.TIMELINE;

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
      date: dayjs().format("MMM YYYY"),
    },
  },
];

export const Experience = () => {
  const { scrollMenuMap } = scrollMenuStore;
  const experienceRef: RefObject<HTMLDivElement> = useRef(null);

  const addSectionRefToMap = () => {
    return !scrollMenuMap[SECTION_SCROLL_KEY]
      ? scrollMenuActions.addScrollSectionToMap(
          SECTION_SCROLL_KEY,
          experienceRef
        )
      : () => {};
  };

  useScrollMenu(experienceRef, addSectionRefToMap);

  return (
    <div ref={experienceRef} className={classes.experience}>
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

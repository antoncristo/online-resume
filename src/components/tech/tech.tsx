import { RefObject, useRef } from "react";
import { SectionHeader } from "src/shared";
import { observer } from "mobx-react";
import { ScrollMenuMapName, techPopupStore } from "src/stores";
import { useInitScrollMapRef } from "src/hooks";

import { techStacks } from "./tech-stacks.config";
import { TechStack, TechEvaluation } from "./components";

import classes from "./tech.module.css";

const SECTION_SCROLL_KEY: keyof ScrollMenuMapName = "TECH";

export const Tech = observer(() => {
  const { visibleStack } = techPopupStore;
  const techRef: RefObject<HTMLDivElement> = useRef(null);

  const selectedTechStack = techStacks.find(
    (stack) => stack.stackTitle === visibleStack
  );

  useInitScrollMapRef(SECTION_SCROLL_KEY, techRef);

  return (
    <div ref={techRef} className={classes.tech}>
      <SectionHeader sectionTitle="Tech Skills" />
      <div className={classes.techSummary}>
        <div>Mainly focused on client-side tech</div>
        <div>Passionate about translating design to great UI/UX</div>
        <div>
          Proficient In creating and maintaining front-end functionality
        </div>
        <div>
          Understand back-end concepts and capable of assiting in related tasks
        </div>
        <div>
          Implemented RESTful API's with various requirements, 3rd party API's
          and Databases
        </div>
        <div>
          Constantly working on improving my skills and knowledge, Then share
          and discuss it with my team
        </div>
      </div>
      <div className={classes.projAndTechItem}>
        {techStacks.map((techStackItem, index) => (
          <TechStack
            key={JSON.stringify(techStackItem) + index}
            stackItems={techStackItem.stackItems}
            stackTitle={techStackItem.stackTitle}
          />
        ))}
      </div>
      {selectedTechStack ? <TechEvaluation stack={selectedTechStack} /> : null}
    </div>
  );
});

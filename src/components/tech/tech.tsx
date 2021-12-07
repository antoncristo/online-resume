import { RefObject, useRef } from "react";
import { SectionHeader } from "src/shared";
import { observer } from "mobx-react";
import { ScrollMenuMapKey, scrollMenuStore, techPopupStore } from "src/stores";
import { useScrollMenu } from "src/hooks";
import { scrollMenuActions } from "src/actions";

import { techStacks } from "./tech-stacks.config";
import { TechStack, TechEvaluation } from "./components";

import classes from "./tech.module.css";

const SECTION_SCROLL_KEY: ScrollMenuMapKey = ScrollMenuMapKey.TECH;

export const Tech = observer(() => {
  const { visibleStack } = techPopupStore;
  const { scrollMenuMap } = scrollMenuStore;
  const techRef: RefObject<HTMLDivElement> = useRef(null);

  const selectedTechStack = techStacks.find(
    (stack) => stack.stackTitle === visibleStack
  );

  const addSectionRefToMap = () => {
    return !scrollMenuMap[SECTION_SCROLL_KEY]
      ? scrollMenuActions.addScrollSectionToMap(SECTION_SCROLL_KEY, techRef)
      : () => {};
  };

  useScrollMenu(techRef, addSectionRefToMap);

  return (
    <div ref={techRef} className={classes.tech}>
      <SectionHeader sectionTitle="Tech Skills" />
      <div className={classes.techSummary}>
        <div>I'm mainly focused on client-side tech</div>
        <div>Proficient In creating and maintaining the UI</div>
        <div>Also, I'm familiar with server side concepts</div>
        <div>
          Implemented RESTful API's with various requirements and 3rd party
          API's
        </div>
        <div>Worked with SQL/NoSQL Databases</div>
        <div>Constantly working on improving my skills and knowledge</div>
        <div>Then share and discuss it with my team</div>
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
      {/* <div className={classes.techSummary}>
        <div>Also, I'm familiar with server side concepts</div>
        <div>
          Implemented RESTful API's with various requirements and 3rd party
          API's
        </div>
        <div>Worked with SQL/NoSQL Databases</div>
        <div>Constantly working on improving my skills and knowledge</div>
        <div>Then share and discuss it with my team</div>
      </div> */}
      {selectedTechStack ? <TechEvaluation stack={selectedTechStack} /> : null}
    </div>
  );
});

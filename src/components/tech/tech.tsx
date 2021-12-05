import { SectionHeader } from "src/shared";
import { observer } from "mobx-react";
import { techPopupStore } from "src/stores";

import { techStacks } from "./tech-stacks.config";
import { TechStack, TechEvaluation } from "./components";

import classes from "./tech.module.css";

export const Tech = observer(() => {
  const { visibleStack } = techPopupStore;

  const selectedTechStack = techStacks.find(
    (stack) => stack.stackTitle === visibleStack
  );

  return (
    <div className={classes.tech}>
      <SectionHeader sectionTitle="Projects & Tech" />
      <div className={classes.projectsAndTech}>
        <div className={classes.projAndTechItem}>
          {techStacks.map((techStackItem, index) => (
            <TechStack
              key={JSON.stringify(techStackItem) + index}
              stackItems={techStackItem.stackItems}
              stackTitle={techStackItem.stackTitle}
            />
          ))}
        </div>
      </div>
      {selectedTechStack ? <TechEvaluation stack={selectedTechStack} /> : null}
      {/* <div className={classes.projAndTechItem}>propjects</div> */}
    </div>
  );
});

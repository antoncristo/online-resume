import { SectionHeader } from "src/shared";

import { techStacks } from "./tech-stacks.config";
import { TechStack, TechEvaluation } from "./components";

import classes from "./tech.module.css";

export const Tech = () => {
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
      {false ? <TechEvaluation /> : null}
      {/* <div className={classes.projAndTechItem}>propjects</div> */}
    </div>
  );
};

import classes from "./tech-evaluation.module.css";

import { techStacks } from "../../tech-stacks.config";

import { Header, ListItem } from "./components";

const tempStackList = techStacks[0];

export const TechEvaluation = () => {
  return (
    <div className={classes.techEvaluationContainer}>
      <div className={classes.techEvaluation}>
        <Header />
        <div className={classes.stackItemsList}>
          {tempStackList.stackItems.map((stackItem, index) => (
            <ListItem
              listItem={stackItem}
              key={JSON.stringify(stackItem) + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

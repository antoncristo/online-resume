import { StackItem as StackItemType } from "src/types/tech";
import { StackItem } from "./components";

import classes from "./tech-stack.module.css";

type TechStackProps = {
  stackTitle: string;
  stackItems: StackItemType[];
};

export const TechStack = (props: TechStackProps) => {
  const { stackTitle, stackItems } = props;

  return (
    <div className={classes.techStack}>
      <div className={classes.stackTitle}>{stackTitle}</div>
      <div className={classes.caruselContainer}>
        <div className={classes.caruselBlock1}>
          {stackItems.map((stackItem, index) => (
            <StackItem key={index} stackItem={stackItem} />
          ))}
        </div>
        <div className={classes.caruselBlock2}>
          {stackItems.map((stackItem, index) => (
            <StackItem key={index} stackItem={stackItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

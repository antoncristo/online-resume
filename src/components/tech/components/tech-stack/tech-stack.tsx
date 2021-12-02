import { useState } from "react";
import { StackItem as StackItemType } from "src/types/tech";
import { StackItem } from "./components";

import classes from "./tech-stack.module.css";

type TechStackProps = {
  stackTitle: string;
  stackItems: StackItemType[];
};

export const TechStack = (props: TechStackProps) => {
  const { stackTitle, stackItems } = props;
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const onMouseEnterHandler = () => {
    setIsAnimationPaused(true);
  };

  const onMouseOutHandler = () => {
    setIsAnimationPaused(false);
  };

  return (
    <div className={classes.techStack}>
      <div className={classes.stackTitle}>{stackTitle}</div>
      <div className={classes.caruselContainer}>
        <div
          className={[
            classes.caruselBlock1,
            isAnimationPaused && classes.pauseAnimation,
          ].join(" ")}
        >
          {stackItems.map((stackItem, index) => (
            <StackItem
              onMouseEnter={onMouseEnterHandler}
              onMouseOut={onMouseOutHandler}
              key={index}
              stackItem={stackItem}
            />
          ))}
        </div>
        <div
          onMouseEnter={onMouseEnterHandler}
          onMouseOut={onMouseOutHandler}
          className={[
            classes.caruselBlock2,
            isAnimationPaused && classes.pauseAnimation,
          ].join(" ")}
        >
          {stackItems.map((stackItem, index) => (
            <StackItem
              onMouseEnter={onMouseEnterHandler}
              onMouseOut={onMouseOutHandler}
              key={index}
              stackItem={stackItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

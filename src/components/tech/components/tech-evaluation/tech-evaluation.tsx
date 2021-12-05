import React, { RefObject, useEffect, KeyboardEvent, MouseEvent } from "react";
import { techPopupActions } from "src/actions";
import { TechStackScheme } from "src/types";

import { Header, ListItem } from "./components";

import classes from "./tech-evaluation.module.css";

type TechEvaluationProps = {
  stack: TechStackScheme;
};

export const TechEvaluation = (props: TechEvaluationProps) => {
  const { stack } = props;
  const containerRef: RefObject<HTMLDivElement> = React.createRef();

  const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      techPopupActions.setTechPopupTitleState(null);
    }
  };

  const onOutsideClickHandler = () => {
    techPopupActions.setTechPopupTitleState(null);
  };

  const preventParentOutsideClickHandler = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
  };

  useEffect(() => {
    containerRef.current && containerRef.current.focus();
  }, [containerRef]);

  return (
    <div
      tabIndex={0}
      onClick={onOutsideClickHandler}
      onKeyDown={onKeyDownHandler}
      ref={containerRef}
      className={classes.techEvaluationContainer}
    >
      <div
        onClick={preventParentOutsideClickHandler}
        className={classes.techEvaluation}
      >
        <Header />
        <div className={classes.stackItemsList}>
          {stack.stackItems.map((stackItem, index) => (
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

import { MouseEvent } from "react";
import { StackItem as StackItemType, StackTitle } from "src/types/tech";
import { techPopupActions } from "src/actions";
import listIcon from "src/assets/svg/list.svg";

import { StackItem } from "./components";

import classes from "./tech-stack.module.css";

type TechStackProps = {
  stackTitle: StackTitle;
  stackItems: StackItemType[];
};

export const TechStack = (props: TechStackProps) => {
  const { stackTitle, stackItems } = props;

  const onStackTitleClicked = (event: MouseEvent<HTMLDivElement>) => {
    const clickedTitle = event.currentTarget.getAttribute(
      "data-title"
    ) as StackTitle;

    if (!clickedTitle) {
      throw Error("[onStackTitleClicked]:: unexpected error");
    }

    techPopupActions.setTechPopupTitleState(clickedTitle);
  };

  return (
    <div className={classes.techStack}>
      <div
        onClick={onStackTitleClicked}
        data-title={stackTitle}
        className={classes.stackTitle}
      >
        {stackTitle}
        <div className={classes.seeAsListSpan}>
          (see as
          <img src={listIcon} alt="list-icon" />)
        </div>
      </div>
      <div className={classes.caruselContainer}>
        {stackItems.map((stackItem, index) => (
          <StackItem key={index} stackItem={stackItem} />
        ))}
      </div>
    </div>
  );
};

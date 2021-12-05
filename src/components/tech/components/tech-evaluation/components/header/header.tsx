import { MouseEvent } from "react";
import closeIcon from "src/assets/svg/close.svg";
import { observer } from "mobx-react";
import { StackTitle } from "src/types";
import { techPopupStore } from "src/stores";
import { techPopupActions } from "src/actions";

import classes from "./header.module.css";

const stackTitles: StackTitle[] = ["Toolbox", "Other"];

export const Header = observer(() => {
  const { visibleStack } = techPopupStore;

  const showStackByTitle = (event: MouseEvent<HTMLDivElement>) => {
    const clickedTitle = event.currentTarget.getAttribute(
      "data-title"
    ) as StackTitle;

    if (!clickedTitle) {
      throw Error("[showStackByTitle]:: unexpected error");
    }

    techPopupActions.setTechPopupTitleState(clickedTitle);
  };

  const closeTechEvaluationPopup = () => {
    techPopupActions.setTechPopupTitleState(null);
  };

  return (
    <div className={classes.header}>
      {stackTitles.map((stackTitle, index) => (
        <div
          onClick={showStackByTitle}
          data-title={stackTitle}
          key={stackTitle + index}
          className={[
            classes.headerButton,
            visibleStack === stackTitle && classes.activeButton,
          ].join(" ")}
        >
          {stackTitle}
        </div>
      ))}
      <button
        onClick={closeTechEvaluationPopup}
        className={classes.closeTechEvaluation}
      >
        <img src={closeIcon} alt="close" />
      </button>
    </div>
  );
});

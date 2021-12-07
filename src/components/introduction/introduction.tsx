import { MouseEvent, RefObject, useRef } from "react";
import { ScrollMenuMapKey, scrollMenuStore, textShadowStore } from "src/stores";
import { scrollMenuActions, textShadowActions } from "src/actions";
import { ResumeButton } from "src/shared";

import classes from "./introduction.module.css";
import { useScrollMenu } from "src/hooks";
import { observer } from "mobx-react";

const SECTION_SCROLL_KEY: ScrollMenuMapKey = ScrollMenuMapKey.INTRODUCTION;

export const Introduction = observer(() => {
  const { textShadowX, textShadowY, pauseEffect } = textShadowStore;
  const { scrollMenuMap } = scrollMenuStore;
  const introductionRef: RefObject<HTMLDivElement> = useRef(null);

  const onMouseMoveHandler = (event: MouseEvent<HTMLDivElement>) => {
    textShadowActions.textShadowCoordRelativeToMouse(
      event.clientX,
      event.clientY
    );
  };

  const toggleTextShadowEffectOnMouseClick = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    pauseEffect && onMouseMoveHandler(event);
    textShadowActions.shouldPauseTextShadowEffect(!pauseEffect);
  };

  const addSectionRefToMap = () => {
    return !scrollMenuMap[SECTION_SCROLL_KEY]
      ? scrollMenuActions.addScrollSectionToMap(
          SECTION_SCROLL_KEY,
          introductionRef
        )
      : () => {};
  };

  useScrollMenu(introductionRef, addSectionRefToMap);

  return (
    <div
      ref={introductionRef}
      onMouseMove={pauseEffect ? () => {} : onMouseMoveHandler}
      onClick={toggleTextShadowEffectOnMouseClick}
      className={classes.introduction}
    >
      <div
        style={{
          filter: `drop-shadow(${textShadowX}px ${textShadowY}px 4px #000)`,
        }}
      >
        Hello, I'm <span className={classes.myName}>Anton</span>
      </div>
      <div
        style={{
          filter: `drop-shadow(${textShadowX}px ${textShadowY}px 4px #000)`,
        }}
      >
        Software Developer
      </div>
      <ResumeButton absoluteStyle={{ right: "20px", top: "20px" }} />
    </div>
  );
});

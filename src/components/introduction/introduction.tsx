import { MouseEvent, RefObject, useRef } from "react";
import { ScrollMenuMapName, textShadowStore } from "src/stores";
import { textShadowActions } from "src/actions";
import { ResumeButton } from "src/shared";

import classes from "./introduction.module.css";
import { useInitScrollMapRef } from "src/hooks";
import { observer } from "mobx-react";

const SECTION_SCROLL_KEY: ScrollMenuMapName = "INTRODUCTION";

export const Introduction = observer(() => {
  const { textShadowX, textShadowY, pauseEffect } = textShadowStore;
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

  useInitScrollMapRef(SECTION_SCROLL_KEY, introductionRef);

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

import { MouseEvent } from "react";
import { observer } from "mobx-react";
import { textShadowStore } from "src/stores";
import { textShadowActions } from "src/actions";

import classes from "./introduction.module.css";

export const Introduction = observer(() => {
  const { textShadowX, textShadowY, pauseEffect } = textShadowStore;

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

  return (
    <div
      onMouseMove={pauseEffect ? () => {} : onMouseMoveHandler}
      onClick={toggleTextShadowEffectOnMouseClick}
      style={{
        filter: `drop-shadow(${textShadowX}px ${textShadowY}px 4px #000)`,
      }}
      className={classes.introduction}
    >
      <div>Hello, I'm Anton</div>
      <div>Front-End Developer</div>
    </div>
  );
});

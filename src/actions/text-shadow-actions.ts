import { action } from "mobx";
import { textShadowStore } from "src/stores";

export const textShadowCoordRelativeToMouse = action(
  (mouseX: number, mouseY: number) => {
    const clientXCenter = window.innerWidth / 2;
    const clientYCenter = window.innerHeight / 2;

    const xAxisDelta = mouseX - clientXCenter;
    const yAxisDelta = mouseY - clientYCenter;

    textShadowStore.textShadowX = -xAxisDelta;
    textShadowStore.textShadowY = yAxisDelta;
  }
);

export const shouldPauseTextShadowEffect = action((isPaused: boolean) => {
  textShadowStore.pauseEffect = isPaused;
});

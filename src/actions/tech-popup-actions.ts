import { action } from "mobx";
import { techPopupStore } from "src/stores/tech-popup-store";
import { StackTitle } from "src/types";

export const setTechPopupTitleState = action(
  (titleUpdate: StackTitle | null) => {
    techPopupStore.visibleStack = titleUpdate;
  }
);

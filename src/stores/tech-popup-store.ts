import { makeAutoObservable } from "mobx";
import { StackTitle } from "src/types";

class TechPopupStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _visibleStack: StackTitle | null = null;
  get visibleStack() {
    return this._visibleStack;
  }
  set visibleStack(titleUpdate: StackTitle | null) {
    this._visibleStack = titleUpdate;
  }
}

export const techPopupStore = new TechPopupStore();

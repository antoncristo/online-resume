import { makeAutoObservable } from "mobx";

class TextShadowStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _pauseEffect: boolean = false;
  get pauseEffect() {
    return this._pauseEffect;
  }
  set pauseEffect(isPaused: boolean) {
    this._pauseEffect = isPaused;
  }

  private _textShadowX: number = 0;
  get textShadowX() {
    return this._textShadowX;
  }
  set textShadowX(newXValue: number) {
    this._textShadowX = newXValue;
  }

  private _textShadowY: number = 0;
  get textShadowY() {
    return this._textShadowY;
  }
  set textShadowY(newYValue: number) {
    this._textShadowY = newYValue;
  }
}

export const textShadowStore = new TextShadowStore();

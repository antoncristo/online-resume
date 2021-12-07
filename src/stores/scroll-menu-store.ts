import { makeAutoObservable } from "mobx";
import { RefObject } from "react";

export type ScrollMenuMap = {
  [x: string]: RefObject<HTMLDivElement>;
};

export enum ScrollMenuMapKey {
  INTRODUCTION = 0,
  TIMELINE = 1,
  TECH = 2,
  PROJECTS = 3,
}

class ScrollMenuStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _scrollMenuMap: ScrollMenuMap = {};
  get scrollMenuMap() {
    return this._scrollMenuMap;
  }
  set scrollMenuMap(mapUpdate: ScrollMenuMap) {
    this._scrollMenuMap = mapUpdate;
  }

  private _activeSectionIndex: number = ScrollMenuMapKey.INTRODUCTION;
  get activeSectionIndex() {
    return this._activeSectionIndex;
  }
  set activeSectionIndex(newIndex: number) {
    this._activeSectionIndex = newIndex;
  }

  private _blockScrollUpdate: boolean = false;
  get blockScrollUpdate() {
    return this._blockScrollUpdate;
  }
  set blockScrollUpdate(update: boolean) {
    this._blockScrollUpdate = update;
  }
}

export const scrollMenuStore = new ScrollMenuStore();

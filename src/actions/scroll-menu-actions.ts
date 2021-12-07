import { action } from "mobx";
import { RefObject, MouseEvent } from "react";
import { ScrollMenuMapKey, scrollMenuStore, ScrollMenuMap } from "src/stores";

export const addScrollSectionToMap = action(
  (key: ScrollMenuMapKey, value: RefObject<HTMLDivElement>) => {
    const copyOfScrollMap: ScrollMenuMap = Object.assign(
      {},
      scrollMenuStore.scrollMenuMap
    );

    copyOfScrollMap[key] = value;

    scrollMenuStore.scrollMenuMap = copyOfScrollMap;
  }
);

export const setActiveSectionIndex = action((newIndex: ScrollMenuMapKey) => {
  scrollMenuStore.scrollMenuMap[newIndex]?.current?.scrollIntoView({
    behavior: "smooth",
  });

  scrollMenuStore.activeSectionIndex = newIndex;
});

export const autoSetActiveSectionOnScroll = action(
  (event: MouseEvent<HTMLDivElement>) => {
    const sectionsScrollOffsetY = Object.keys(
      scrollMenuStore.scrollMenuMap
    ).map((key) => {
      return scrollMenuStore.scrollMenuMap[key].current?.offsetTop || 0;
    });

    let _activeIndex = 0;

    sectionsScrollOffsetY.forEach((offsetY, index) => {
      if (event.currentTarget.scrollTop >= offsetY) {
        _activeIndex = index;
      }
    });

    scrollMenuStore.activeSectionIndex = _activeIndex;
  }
);

export const blockScrollUpdateSetter = action((shouldBlock: boolean) => {
  scrollMenuStore.blockScrollUpdate = shouldBlock;
});

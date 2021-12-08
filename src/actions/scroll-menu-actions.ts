import { action } from "mobx";
import { RefObject, MouseEvent } from "react";
import { ScrollMenuMapName, scrollMenuStore, ScrollMenuMap } from "src/stores";

export const addScrollSectionToMap = action(
  (key: ScrollMenuMapName, value: RefObject<HTMLDivElement>) => {
    const copyOfScrollMap: ScrollMenuMap[] = scrollMenuStore.scrollMenuMap.map(
      (mapItem) => Object.assign({}, mapItem)
    );

    const scrollItemByKey = copyOfScrollMap.find((item) => item.name === key);
    if (!scrollItemByKey) {
      throw Error("[addScrollSectionToMap]:: somthing went wrong");
    }

    scrollItemByKey.ref = value;

    scrollMenuStore.scrollMenuMap = copyOfScrollMap;
  }
);

export const setActiveSectionIndex = action((newIndex: number) => {
  scrollMenuStore.scrollMenuMap[newIndex]?.ref?.current?.scrollIntoView({
    behavior: "smooth",
  });

  scrollMenuStore.activeSectionIndex = newIndex;
});

export const autoSetActiveSectionOnScroll = action(
  (event: MouseEvent<HTMLDivElement>) => {
    const sectionsScrollOffsetY = scrollMenuStore.scrollMenuMap.map((item) => {
      return item.ref?.current?.offsetTop || 0;
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

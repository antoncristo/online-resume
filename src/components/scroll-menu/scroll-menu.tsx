import { MouseEvent } from "react";
import { observer } from "mobx-react";
import { ScrollMenuMapName, scrollMenuStore } from "src/stores";
import { scrollMenuActions } from "src/actions";

import classes from "./scroll-menu.module.css";

const SystemToDisplaySectionName: ScrollMenuMapName = {
  INTRODUCTION: "Main",
  TIMELINE: "Experience",
  PROJECTS: "Projects",
  TECH: "Tech",
};

export const ScrollMenu = observer(() => {
  const { activeSectionIndex, scrollMenuMap } = scrollMenuStore;

  const scrollSectionIntoView = (event: MouseEvent<HTMLDivElement>) => {
    const clickedSection = event.currentTarget.getAttribute("data-section-key");

    if (!clickedSection) {
      throw Error("[scrollSectionIntoView]:: somthing is wrong with the menu!");
    }

    const indexOfClickedSection = scrollMenuMap.findIndex(
      (scrollSection) => scrollSection.name === clickedSection
    );

    scrollMenuActions.setActiveSectionIndex(
      indexOfClickedSection > -1 ? indexOfClickedSection : 0
    );

    scrollMenuActions.blockScrollUpdateSetter(true);
    setTimeout(() => {
      scrollMenuActions.blockScrollUpdateSetter(false);
    }, 1000);
  };

  return (
    <div className={classes.scrollMenu}>
      {scrollMenuMap.map((menuMapItem, index) => {
        const _isActive = activeSectionIndex === index;

        return (
          <div
            key={menuMapItem.name + index}
            onClick={scrollSectionIntoView}
            data-section-key={menuMapItem.name}
            className={[
              classes.scrollButton,
              _isActive && classes.activeButton,
            ].join(" ")}
          >
            {index + 1}
            <div className={classes.onHoverText}>
              {SystemToDisplaySectionName[menuMapItem.name]}
            </div>
          </div>
        );
      })}
    </div>
  );
});

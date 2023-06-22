import { MouseEvent,useEffect } from "react";
import { observer } from "mobx-react";
import anime from "animejs/lib/anime.es";
import { ScrollMenuMapName, scrollMenuStore } from "src/stores";
import { scrollMenuActions } from "src/actions";

import classes from "./scroll-menu.module.css";

const SystemToDisplaySectionName: ScrollMenuMapName = {
  INTRODUCTION: "Hello",
  TIMELINE: "Experience",
  PROJECTS: "Projects",
  TECH: "Tech",
  CONTACT: "Contact ",
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

  useEffect(() => {
    anime({
      targets: '.container .staggered',
      translateX: 'calc(100vw - 60px)',
      delay: anime.stagger(100)
    })
  }, [])

  return (
    <div className={[classes.scrollMenu,"container"].join(" ")}>
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
              "staggered"
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

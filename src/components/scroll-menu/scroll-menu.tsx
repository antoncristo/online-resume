import { MouseEvent } from "react";
import { observer } from "mobx-react";
import { ScrollMenuMapKey, scrollMenuStore } from "src/stores";
import { scrollMenuActions } from "src/actions";

import classes from "./scroll-menu.module.css";

export const ScrollMenu = observer(() => {
  const { activeSectionIndex } = scrollMenuStore;

  const scrollSectionIntoView = (event: MouseEvent<HTMLDivElement>) => {
    const clickedSection = event.currentTarget.getAttribute("data-section-key");

    if (!clickedSection) {
      alert("somthing is wrong with the menu!");
      return;
    }

    scrollMenuActions.setActiveSectionIndex(parseInt(clickedSection));

    scrollMenuActions.blockScrollUpdateSetter(true);
    setTimeout(() => {
      scrollMenuActions.blockScrollUpdateSetter(false);
    }, 1000);
  };

  return (
    <div className={classes.scrollMenu}>
      {Object.keys(ScrollMenuMapKey)
        .filter((key) => !isNaN(parseInt(key)))
        .map((menuMapKey, index) => {
          const _isActive = activeSectionIndex === index;

          return (
            <div
              key={menuMapKey + index}
              onClick={scrollSectionIntoView}
              data-section-key={menuMapKey}
              className={[
                classes.scrollButton,
                _isActive && classes.activeButton,
              ].join(" ")}
            >
              {index + 1}
            </div>
          );
        })}
    </div>
  );
});

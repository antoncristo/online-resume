import { useState } from "react";
import leftArrowIcon from "src/assets/svg/left.svg";
import rightArrowIcon from "src/assets/svg/right.svg";
import playIcon from "src/assets/svg/play.svg";
import pauseIcon from "src/assets/svg/pause.svg";
import { useInterval } from "src/hooks";

import { NavigationButton } from "./components";

import classes from "./slideshow.module.css";

type SlideShowProps = {
  images: string[];
};

export const SlideShow = (props: SlideShowProps) => {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playSlideShow, setPlaySlideshow] = useState(true);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const previous = () => {
    const previousIndex = (currentIndex - 1) % images.length;
    const lastImageIndex = images.length - 1;

    setCurrentIndex(previousIndex < 0 ? lastImageIndex : previousIndex);
  };

  const toggleSlideShowState = () => {
    setPlaySlideshow(!playSlideShow);
  };

  useInterval(next, 6000, playSlideShow);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => {
        return (
          index === currentIndex && (
            <div
              key={image + index}
              className={classes.imageHolderDiv}
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            ></div>
          )
        );
      })}

      <div className={classes.controller}>
        <NavigationButton icon={leftArrowIcon} onClick={previous} />
        <NavigationButton
          icon={playSlideShow ? pauseIcon : playIcon}
          onClick={toggleSlideShowState}
        />

        <NavigationButton icon={rightArrowIcon} onClick={next} />
      </div>
    </div>
  );
};

import { scrollMenuActions } from "src/actions";
import { scrollMenuStore } from "src/stores";
import { observer } from "mobx-react";

import {
  Experience,
  Introduction,
  Tech,
  Projects,
  ScrollMenu,
} from "./components";

import classes from "./app.module.css";

export const App = observer(() => {
  const isMobile = () => {
    return window.innerWidth <= 800;
  };

  return (
    <div
      onScroll={
        scrollMenuStore.blockScrollUpdate || isMobile()
          ? () => {}
          : scrollMenuActions.autoSetActiveSectionOnScroll
      }
      className={classes.app}
    >
      <Introduction />
      <Experience />
      <Tech />
      <Projects />
      <ScrollMenu />
    </div>
  );
});

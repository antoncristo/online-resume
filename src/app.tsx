import { Experience, Introduction, Tech } from "./components";

import classes from "./app.module.css";

export const App = () => {
  return (
    <div className={classes.app}>
      <Introduction />
      <Experience />
      <Tech />
    </div>
  );
};

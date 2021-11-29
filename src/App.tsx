import { Introduction } from "./components";

import classes from "./app.module.css";

export const App = () => {
  return (
    <div className={classes.app}>
      <Introduction />
    </div>
  );
};

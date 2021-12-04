import classes from "./header.module.css";
import closeIcon from "src/assets/svg/close.svg";

const mockTechStackTitle: string[] = ["Toolbox", "Other"];

export const Header = () => {
  return (
    <div className={classes.header}>
      {mockTechStackTitle.map((stackTitle, index) => (
        <div
          key={stackTitle + index}
          className={[
            classes.headerButton,
            index === 0 && classes.activeButton,
          ].join(" ")}
        >
          {stackTitle}
        </div>
      ))}
      <button className={classes.closeTechEvaluation}>
        <img src={closeIcon} alt="close" />
      </button>
    </div>
  );
};

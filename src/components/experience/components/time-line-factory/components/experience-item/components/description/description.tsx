import { ExperienceItem, TimeLineItem } from "src/types";
import classes from "./description.module.css";

type DescriptionProps = {
  item: TimeLineItem<ExperienceItem>;
};

export const Description = (props: DescriptionProps) => {
  const { item } = props;
  return (
    <div className={classes.description}>
      <div className={classes.title}>Description</div>
      <div>{item.content.roleDescription}</div>
    </div>
  );
};

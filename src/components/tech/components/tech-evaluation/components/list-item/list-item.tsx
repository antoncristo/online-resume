import { StackItem } from "src/types";

import { SkillGradeBar } from "./components";

import classes from "./list-item.module.css";

type ListItemProps = {
  listItem: StackItem;
};

export const ListItem = (props: ListItemProps) => {
  const { listItem } = props;
  return (
    <div className={classes.listItem}>
      <img
        className={classes.itemIcon}
        src={listItem.iconUrl}
        alt="item-icon"
      />
      <div className={classes.itemName}>{listItem.itemName}</div>
      <div className={classes.spaceBreak}>
        ........................................................................
      </div>
      <div className={classes.skillRate}>
        <SkillGradeBar grade={listItem.skillGrade} />
      </div>
    </div>
  );
};

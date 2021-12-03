import { StackItem as StackItemType } from "src/types/tech";
import classes from "./stack-item.module.css";

type StackItemProps = {
  stackItem: StackItemType;
};

export const StackItem = (props: StackItemProps) => {
  const { stackItem } = props;
  return (
    <div className={classes.stackItem}>
      <div className={classes.stackItemTitle}>{stackItem.itemName}</div>
      <img src={stackItem.iconUrl} alt="stack-icon" />
    </div>
  );
};

import {
  TimeLineItem,
  TimeLineItemType,
  Checkpoint,
  ExperienceItem,
} from "src/types";

import {
  TimeLineDot,
  CheckpointItem,
  ExperienceItemComponent,
} from "./components";

import classes from "./time-line-factory.module.css";

type TimeLineFactoryProps = {
  timeLineItem: TimeLineItem<TimeLineItemType>;
};

export const TimeLineFactory = (props: TimeLineFactoryProps) => {
  const { timeLineItem } = props;

  const isCheckpointItemType = () => {
    return !!(timeLineItem.content as Checkpoint).checkpoint;
  };

  const _isCheckpoint = isCheckpointItemType();

  return (
    <div className={classes.timeLineFactory}>
      <TimeLineDot isCheckpoint={_isCheckpoint} />
      {_isCheckpoint ? (
        <CheckpointItem item={timeLineItem as TimeLineItem<Checkpoint>} />
      ) : (
        <ExperienceItemComponent
          item={timeLineItem as TimeLineItem<ExperienceItem>}
        />
      )}
    </div>
  );
};

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
  DirectionHelper,
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
  const _isLastItem =
    isCheckpointItemType() &&
    (timeLineItem as TimeLineItem<Checkpoint>).content.checkpoint === "Today";

  return (
    <div className={classes.timeLineFactory}>
      <TimeLineDot isCheckpoint={_isCheckpoint} />
      {_isLastItem ? null : <DirectionHelper />}
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

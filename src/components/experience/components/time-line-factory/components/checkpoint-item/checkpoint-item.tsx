import { Checkpoint, TimeLineItem } from 'src/types';

import classes from './checkpoint-item.module.css';

type CheckpointItemProps = {
	item: TimeLineItem<Checkpoint>;
};

export const CheckpointItem = (props: CheckpointItemProps) => {
	const { item } = props;
	return (
		<div className={classes.checkPointItem}>
			<div className={classes.date}>{item.content.date}</div>
			<div>{item.content.checkpoint}</div>
		</div>
	);
};

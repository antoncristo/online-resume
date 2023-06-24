import { useMovement } from '../../useMovement';

import classes from './moving-item.module.css';

interface MovingItemProps {
	index: number;
}

export const MovingItem = (props: MovingItemProps) => {
	// todo: create a vector map by index
	const { index } = props;
	const { xAxisPosition, yAxisPosition } = useMovement();

	return (
		<div
			className={classes.movingItem}
			style={{ left: `${xAxisPosition}%`, top: `${yAxisPosition}%` }}
		>
			moving item {index}
		</div>
	);
};

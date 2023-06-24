import classes from './time-line-dot.module.css';

type TimeLineDotProps = {
	isCheckpoint: boolean;
};

export const TimeLineDot = (props: TimeLineDotProps) => {
	const { isCheckpoint } = props;
	return (
		<div className={classes.timeLineDot}>
			<div className={classes.dot}>
				<div
					className={[classes.innerDot, isCheckpoint && classes.checkpointColor].join(
						' '
					)}
				></div>
			</div>
			<div className={classes.leftHookRope}></div>
			<div className={classes.rightHookRope}></div>
		</div>
	);
};

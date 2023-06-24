import { MouseEvent } from 'react';
import { awsS3controller } from 'src/storage';

import classes from './resume-button.module.css';

type ResumeButtonProps = {
	absoluteStyle?: {
		left?: string;
		top?: string;
		right?: string;
		bottom?: string;
	};
};

export const ResumeButton = (props: ResumeButtonProps) => {
	const { absoluteStyle = {} } = props;

	const _isAbsolute = Object.keys(absoluteStyle).length;

	const onResumeClickHandler = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();

		if (!awsS3controller.resumePublicUrl) {
			alert('Sorry, somthing is wrong with the button, try refreshing the resume :)');
			return;
		}
		window.open(awsS3controller.resumePublicUrl);
	};

	return (
		<div
			onClick={onResumeClickHandler}
			style={_isAbsolute ? { position: 'absolute', ...absoluteStyle } : {}}
			className={classes.resumeButton}
		>
			Resume
		</div>
	);
};

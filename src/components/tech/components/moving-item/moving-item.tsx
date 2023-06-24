import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es';
import { StackItem } from 'src/types';

import { useMovement } from '../../useMovement';

import classes from './moving-item.module.css';
import { observer } from 'mobx-react';

interface MovingItemProps {
	index: number;
	numberOfItems: number;
	techItem: StackItem;
}

export const MovingItem = observer((props: MovingItemProps) => {
	const { index, numberOfItems, techItem } = props;
	const { xAxisPosition, yAxisPosition } = useMovement({
		dx: (index * numberOfItems) / numberOfItems / 100 + 0.1,
		dy: (numberOfItems - index) / 100 + 0.1
	});

	const rotationDirection = index % 2 === 0 ? 360 : -360;

	useEffect(() => {
		anime({
			targets: `.moving-item-${index}`,
			rotate: {
				value: rotationDirection,
				duration: 16000,
				easing: 'easeInOutSine'
			},
			opacity: [
				{ value: `0.${index}`, duration: 3000 },
				{ value: '1', duration: 3000 }
			],
			easing: 'easeInOutSine',
			loop: true
		});
	}, [index, rotationDirection]);

	return (
		<div
			className={[classes.movingItem, `moving-item-${index}`].join(' ')}
			style={{ left: `${xAxisPosition}%`, top: `${yAxisPosition}%` }}
		>
			<div className={classes.title}>{techItem.itemName}</div>
			<img src={techItem.iconUrl} alt='icon' />
		</div>
	);
});

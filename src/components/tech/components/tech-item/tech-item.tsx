import { StackItem } from 'src/types';
import classes from './tech-item.module.css';

export const TechItem = ({ techItem }: { techItem: StackItem }) => (
	<div className={classes.techItem}>
		{techItem.iconUrl ? <img src={techItem.iconUrl} alt='icon' /> : null}
		<div className={classes.title}>{techItem.itemName}</div>
	</div>
);

import { ExperienceItem, TimeLineItem } from 'src/types';

import { CompanyAndRole, Description } from './components';

import classes from './experience-item.module.css';

type ExperienceItemProps = {
	item: TimeLineItem<ExperienceItem>;
};

export const ExperienceItemComponent = (props: ExperienceItemProps) => {
	const { item } = props;
	return (
		<div className={classes.experienceItem}>
			<div className={classes.durationAtCompany}>
				{item.content.startDate} - {item.content.endDate}
			</div>
			<div className={classes.experienceContent}>
				<CompanyAndRole item={item} />
				<Description item={item} />
			</div>
		</div>
	);
};

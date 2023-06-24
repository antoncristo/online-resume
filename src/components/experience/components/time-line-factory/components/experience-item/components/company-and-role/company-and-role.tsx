import { ExperienceItem, TimeLineItem } from 'src/types';

import classes from './company-and-role.module.css';

type CompanyAndRoleProps = {
	item: TimeLineItem<ExperienceItem>;
};

export const CompanyAndRole = (props: CompanyAndRoleProps) => {
	const { item } = props;
	return (
		<div className={classes.companyAndRole}>
			<div className={classes.title}>Company</div>
			<div>{item.content.companyName}</div>
			<div className={classes.title}>Role</div>
			<div>{item.content.role}</div>
		</div>
	);
};

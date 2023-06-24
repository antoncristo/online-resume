export type ExperienceItem = {
	companyName: string;
	role: string;
	roleDescription: string;
	startDate: string;
	endDate: string;
};

export type Checkpoint = {
	checkpoint: string;
	date: string;
};

export type TimeLineItemType = ExperienceItem | Checkpoint;

export type TimeLineItem<TimeLineItemType> = {
	content: TimeLineItemType;
};

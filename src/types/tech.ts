export type StackTitle = 'Front-End' | 'Back-End' | 'Other';

export type StackItem = {
	iconUrl: string;
	itemName: string;
	skillGrade: number;
};

export type TechStackScheme = {
	stackTitle: StackTitle;
	stackItems: StackItem[];
};

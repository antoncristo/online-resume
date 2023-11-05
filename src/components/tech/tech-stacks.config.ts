import reactIcon from 'src/assets/svg/react.svg';
import cssIcon from 'src/assets/svg/css3.svg';
import typescriptIcon from 'src/assets/svg/typescript.svg';
import mobxIcon from 'src/assets/svg/mobx.svg';
import reduxIcon from 'src/assets/svg/redux.svg';
import nodeIcon from 'src/assets/svg/nodejs.svg';
import gitIcon from 'src/assets/svg/git.svg';
import scssIcon from 'src/assets/svg/sass.svg';
import viteIcon from 'src/assets/svg/vite.svg';
import dockerIcon from 'src/assets/svg/docker.svg';
import { TechStackScheme } from 'src/types/tech';

export const wordsCloud: string[] = [
	'Responsive',
	'Pixel Perfect',
	'Reusable',
	'Clean',
	'Readable',
	'Maintainable',
	'Testable',
	'Powerful',
	'User Friendly',
	'Modern',
	'Creative',
	'Design'
];

export const techStacks: TechStackScheme[] = [
	{
		stackTitle: 'Front-End',
		stackItems: [
			{
				itemName: 'React',
				iconUrl: reactIcon,
				skillGrade: 9
			},
			{
				itemName: 'Javascript/Typescript',
				iconUrl: typescriptIcon,
				skillGrade: 8
			},
			{
				itemName: 'MobX',
				iconUrl: mobxIcon,
				skillGrade: 8.5
			},
			{
				itemName: 'Redux',
				iconUrl: reduxIcon,
				skillGrade: 8.5
			},
			{
				itemName: 'CSS/SCSS',
				iconUrl: cssIcon,
				skillGrade: 9.5
			},
			{
				itemName: 'Styled components',
				iconUrl: scssIcon,
				skillGrade: 8
			}
		]
	},
	{
		stackTitle: 'Other',
		stackItems: [
			{
				itemName: 'Git',
				iconUrl: gitIcon,
				skillGrade: 5
			},
			{
				itemName: 'vite',
				iconUrl: viteIcon,
				skillGrade: 9
			},
			{
				itemName: 'Docker',
				skillGrade: 6,
				iconUrl: dockerIcon
			},
			{
				itemName: 'Node.js',
				iconUrl: nodeIcon,
				skillGrade: 6
			},

			{
				itemName: '& MANY MORE...',
				iconUrl: '',
				skillGrade: 100
			}
		]
	}
];

import { makeAutoObservable } from 'mobx';
import { ProjectsScheme } from 'src/types';

class ProjectsStore {
	constructor() {
		makeAutoObservable(this);
	}

	private _projects: ProjectsScheme[] = [
		{
			title: 'React-EV',
			storagePrefix: '',
			link: 'https://github.com/antoncristo/react-ev',
			description:
				'React components library, created with a modern, customizable design.',
			screenshots: undefined,
			techList: [
				'React.js',
				'Typescript',
				'Styled-components',
				'Storybook',
				'Vite',
				'Rollup',
				'NPM',
				'Github packages'
			]
		},
		{
			title: 'Cook-E',
			storagePrefix: 'cooke/',
			link: 'https://main.d3uhn2n4y7fxos.amplifyapp.com',
			description: 'Recipes Book Keeper - keep your hobby online.',
			screenshots: undefined,
			techList: [
				'React.js',
				'Typescript',
				'MobX',
				'react-query',
				'Styled-components',
				'Vite',
				'Docker',
				'NodeJS',
				'REST API',
				'Firebase AUTH',
				'Firebase Database'
			]
		},
		{
			title: 'T-Ask-In',
			storagePrefix: 'taskin/',
			link: 'https://master.dnn3j07qayfho.amplifyapp.com/',
			description:
				'Create and Schedule your tasks. With a simple traffic light color scheme, the app helps to track your progress.',
			screenshots: undefined,
			techList: [
				'React.js',
				'Typescript',
				'MobX',
				'CSS',
				'Google OAuth',
				'AWS S3',
				'Node.js'
			]
		}
	];
	get projects() {
		return this._projects;
	}
	set projects(projectsUpdate: ProjectsScheme[]) {
		this._projects = projectsUpdate;
	}
}

export const projectsStore = new ProjectsStore();

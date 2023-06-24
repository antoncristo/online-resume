import { MouseEvent } from 'react';
import { scrollMenuActions } from 'src/actions';
import { scrollMenuStore } from 'src/stores';
import { observer } from 'mobx-react';

import {
	Experience,
	Introduction,
	Tech,
	Projects,
	ScrollMenu,
	Contact
} from './components';

import classes from './app.module.css';

const MOBILE_VIEWPORT_WIDTH_BREAKPOINT = 800;

export const App = observer(() => {
	const isMobileWidth = () => {
		return window.innerWidth <= MOBILE_VIEWPORT_WIDTH_BREAKPOINT;
	};

	const onAppScrollHandler = (event: MouseEvent<HTMLDivElement>) => {
		return scrollMenuStore.blockScrollUpdate || isMobileWidth()
			? () => {}
			: scrollMenuActions.autoSetActiveSectionOnScroll(event);
	};

	return (
		<div onScroll={onAppScrollHandler} className={classes.app}>
			<Introduction />
			<Experience />
			<Tech />
			<Projects />
			<Contact />
			<ScrollMenu />
		</div>
	);
});

import { RefObject, useRef } from 'react';
import { SectionHeader } from 'src/shared';
import { observer } from 'mobx-react';
import { ScrollMenuMapName } from 'src/stores';
import { useInitScrollMapRef } from 'src/hooks';

import { techStacks } from './tech-stacks.config';

import classes from './tech.module.css';
import { TechItem } from './components';

const SECTION_SCROLL_KEY: keyof ScrollMenuMapName = 'TECH';

export const Tech = observer(() => {
	const techRef: RefObject<HTMLDivElement> = useRef(null);
	const icons = techStacks.flatMap(stack => stack.stackItems);

	useInitScrollMapRef(SECTION_SCROLL_KEY, techRef);

	return (
		<div ref={techRef} className={classes.tech}>
			<SectionHeader sectionTitle='Tech Skills' />
			<div className={classes.techGround}>
				{icons.map((item, index) => (
					<TechItem key={item.itemName + index} techItem={item} />
				))}
			</div>
		</div>
	);
});

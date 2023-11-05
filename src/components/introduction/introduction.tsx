import { RefObject, useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import anime from 'animejs/lib/anime.es';
import { ScrollMenuMapName } from 'src/stores';
import { useInitScrollMapRef, useWindowResize } from 'src/hooks';
import { ResumeButton } from 'src/shared';

import { wordsCloud } from 'src/components/tech/tech-stacks.config';

import classes from './introduction.module.css';

const SECTION_SCROLL_KEY: keyof ScrollMenuMapName = 'INTRODUCTION';

export const Introduction = observer(() => {
	const introductionRef: RefObject<HTMLDivElement> = useRef(null);
	const wordCloudRef: RefObject<HTMLDivElement> = useRef(null);
	const { width } = useWindowResize();
	const isMobile = width < 800;

	useEffect(() => {
		if (!isMobile && wordCloudRef.current) {
			anime({
				targets: '.cloud .word',
				translateX: function (_: unknown, i: number) {
					if (i % 2 === 0) {
						return 100;
					}
					return width - 200;
				},
				delay: anime.stagger(100),
				easing: 'easeInOutSine'
			});
		}
	}, [isMobile, width]);

	useInitScrollMapRef(SECTION_SCROLL_KEY, introductionRef);

	return (
		<div ref={introductionRef} className={classes.introduction}>
			<div ref={wordCloudRef} className={[classes.wordsCloud, 'cloud'].join(' ')}>
				{wordsCloud.map((word, index) => (
					<div className={[classes.wordText, 'word'].join(' ')} key={word + index}>
						{word}
					</div>
				))}
			</div>
			<div
				style={{
					filter: `drop-shadow(${3}px ${3}px 4px #000)`
				}}
			>
				Hello, I'm <span className={classes.myName}>Anton</span>
			</div>
			<div
				style={{
					filter: `drop-shadow(${3}px ${3}px 4px #000)`
				}}
			>
				Front-End Engineer
			</div>
			<ResumeButton absoluteStyle={{ right: '20px', top: '20px' }} />
		</div>
	);
});

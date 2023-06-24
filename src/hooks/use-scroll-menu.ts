import { useEffect, RefObject } from 'react';
import { scrollMenuActions } from 'src/actions';
import { ScrollMenuMapName, scrollMenuStore } from 'src/stores';

const useScrollMenu = (sectionRef: RefObject<HTMLDivElement>, callback: () => void) => {
	useEffect(() => {
		sectionRef.current && callback();
		//eslint-disable-next-line
	}, [sectionRef]);
};

export const useInitScrollMapRef = (
	sectionRefName: keyof ScrollMenuMapName,
	sectionRef: RefObject<HTMLDivElement>
) => {
	const addSectionRefToMap = () => {
		const sectionObjectFromStore = scrollMenuStore.scrollMenuMap.find(
			item => item.name === sectionRefName
		);

		if (!sectionObjectFromStore) {
			throw Error('[addSectionRefToMap]:: somthing went wrong');
		}

		scrollMenuActions.addScrollSectionToMap(sectionRefName, sectionRef);
	};

	useScrollMenu(sectionRef, addSectionRefToMap);
};

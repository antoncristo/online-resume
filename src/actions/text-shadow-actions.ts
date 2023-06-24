import { action } from 'mobx';
import { textShadowStore } from 'src/stores';

export const textShadowCoordRelativeToMouse = action((mouseX: number, mouseY: number) => {
	const isMobilwWidth = window.innerWidth < 800;

	const clientXCenter = window.innerWidth / 2;
	const clientYCenter = window.innerHeight / 2;

	const xAxisDelta = mouseX - clientXCenter;
	const yAxisDelta = mouseY - clientYCenter;

	textShadowStore.textShadowX = isMobilwWidth ? 0 : -xAxisDelta;
	textShadowStore.textShadowY = isMobilwWidth ? 0 : yAxisDelta;
});

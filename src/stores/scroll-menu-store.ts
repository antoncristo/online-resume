import { makeAutoObservable } from 'mobx';
import { RefObject } from 'react';

export type ScrollMenuMapName = {
	INTRODUCTION: string;
	TIMELINE: string;
	TECH: string;
	PROJECTS: string;
	CONTACT: string;
};

export type ScrollMenuMap = {
	name: keyof ScrollMenuMapName;
	ref: RefObject<HTMLDivElement> | null;
};

class ScrollMenuStore {
	constructor() {
		makeAutoObservable(this);
	}

	private _scrollMenuMap: ScrollMenuMap[] = [
		{
			name: 'INTRODUCTION',
			ref: null
		},
		{
			name: 'TIMELINE',
			ref: null
		},
		{
			name: 'TECH',
			ref: null
		},
		{
			name: 'PROJECTS',
			ref: null
		},
		{
			name: 'CONTACT',
			ref: null
		}
	];
	get scrollMenuMap() {
		return this._scrollMenuMap;
	}
	set scrollMenuMap(mapUpdate: ScrollMenuMap[]) {
		this._scrollMenuMap = mapUpdate;
	}

	private _activeSectionIndex: number = 0;
	get activeSectionIndex() {
		return this._activeSectionIndex;
	}
	set activeSectionIndex(index: number) {
		this._activeSectionIndex = index;
	}

	private _blockScrollUpdate: boolean = false;
	get blockScrollUpdate() {
		return this._blockScrollUpdate;
	}
	set blockScrollUpdate(update: boolean) {
		this._blockScrollUpdate = update;
	}
}

export const scrollMenuStore = new ScrollMenuStore();

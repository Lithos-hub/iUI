export interface MenuItem {
	label: string;
	value: string;
}

export interface NavegableItem {
	text: string;
	to: {
		name: string;
	};
}

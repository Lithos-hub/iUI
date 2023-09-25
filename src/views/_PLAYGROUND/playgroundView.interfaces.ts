import { ComponentsRouteName } from "@/router/componentsRoutes";

import { Button } from "@/shared/iui-button/iui-button.interfaces";

interface PlaygroundButton extends Button {
	text: string;
}

type ComponentProps = PlaygroundButton;

export interface PlaygroundComponent {
	category: string;
	components: {
		text: string;
		to: {
			name: ComponentsRouteName;
		};
		props: ComponentProps[]
	}[];
}
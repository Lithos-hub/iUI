export type ColorName =
	| 'amber'
	| 'black'
	| 'blue'
	| 'blueGray'
	| 'coolGray'
	| 'cyan'
	| 'emerald'
	| 'fuchsia'
	| 'gray'
	| 'green'
	| 'indigo'
	| 'lime'
	| 'orange'
	| 'pink'
	| 'purple'
	| 'red'
	| 'rose'
	| 'teal'
	| 'trueGray'
	| 'violet'
	| 'warmGray'
	| 'white'
	| 'yellow'
	| 'lightBlue'

	export type TailwindColors = {
		[key in ColorName]: string | { [key: string]: string; };
	};
	
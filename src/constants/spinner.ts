import { Spinner } from '@/shared/iui-spinner/iui-spinner.interfaces';

interface SpinnerComponent {
	description: string;
	components_props: Spinner[];
	type: string;
}

export const SPINNER_VIEW: SpinnerComponent[] = [
	{
		type: 'color',
		description: `The <code>color</code> prop is used to set the color of the progress bar. The default value is <code>white</code>.`,
		components_props: [
			{
				color: 'red',
			},
			{
				color: 'green',
			},
			{
				color: 'blue',
			},
			{
				color: 'cyan',
			},
		],
	},
	{
		type: 'displayText',
		description: `The <code>displayText</code> prop is used to set the display of the value of the progress bar. The default value is <code>false</code>.`,
		components_props: [
			{
                color: 'red',
				displayText: true,
			},
			{
                color: 'green',
				displayText: true,
			},
			{
                color: 'blue',
				displayText: true,
			},
		],
	},
    {
        type: 'textColor',
        description: `The <code>textColor</code> prop is used to set the color of the value of the progress bar. The default value is <code>white</code>.`,
        components_props: [
            {
                color: 'red',
                displayText: true,
                textColor: 'blue',
            },
            {
                color: 'green',
                displayText: true,
                textColor: 'cyan',
            },
            {
                color: 'blue',
                displayText: true,
                textColor: 'orange',
            },
        ],
    }
];

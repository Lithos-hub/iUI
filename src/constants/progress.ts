import { Progress } from '@/shared/iui-progress/iui-progress.interfaces';

interface ProgressComponent {
	description: string;
	components_props: Progress[];
	type: string;
}

export const PROGRESS_VIEW: ProgressComponent[] = [
    {
        type: 'indeterminate',
        description: `The <code>indeterminate</code> prop is used to set the progress bar to indeterminate. The default value is <code>false</code>.`,
        components_props: [
            {
                indeterminate: true,
            },
        ]
    },
    {
        type: 'value',
        description: `The <code>value</code> prop is used to set the value of the progress bar. The default value is <code>0</code> and the maximum value is <code>100</code>.`,
        components_props: [
            {
                value: 10,
            },
            {
                value: 50,
            },
            {
                value: 100,
            },
        ]
    },
    {
        type: 'color',
        description: `The <code>color</code> prop is used to set the color of the progress bar. The default value is <code>white</code>.`,
        components_props: [
            {
                value: 10,
                color: 'red',
            },
            {
                value: 50,
                color: 'green',
            },
            {
                value: 100,
                color: 'blue',
            },
            {
                indeterminate: true,
                color: 'cyan',
            }
        ]
    },
    {
        type: 'displayValue',
        description: `The <code>displayValue</code> prop is used to set the display of the value of the progress bar. The default value is <code>false</code>.`,
        components_props: [
            {
                value: 10,
                displayValue: true,
            },
            {
                value: 50,
                displayValue: true,
            },
            {
                value: 100,
                displayValue: true,
            },
        ]
    }
];

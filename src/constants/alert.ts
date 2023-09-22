import { Alert } from '@/shared/iui-alert/iui-alert.interfaces';

interface AlertComponent {
	description: string;
	components_props: Alert[];
	type: string;
}

export const ALERT_SUMMARY: Alert[] = [
	{
        title: 'Alert',
        message: 'This is an alert message',
        type: 'success',
	},
];

export const ALERT_VIEW: AlertComponent[] = [
	{
        type: 'title',
        description: `The <code>title</code> prop is used to set the title of the alert. The default value is <code>Alert: </code>.`,
        components_props: [
            {
                title: 'Alert',
                message: 'This is an alert message',
            },
        ]
	},
    {
        type: 'message',
        description: `The <code>message</code> prop is used to set the message of the alert. The default value is <code>This is an alert message</code>.`,
        components_props: [
            {
                title: 'Welcome!',
                message: 'Thanks for visiting our site.',
            },
            {
            }
        ]
    },
    {
        type: 'type',
        description: `The <code>type</code> prop is used to set the type of the alert. The default value is <code>default</code>.`,
        components_props: [
            {
                title: 'Alert',
                message: 'This is an alert message',
                type: 'success',
            },
            {
                title: 'Alert',
                message: 'This is an alert message',
                type: 'warning',
            },
            {
                title: 'Alert',
                message: 'This is an alert message',
                type: 'error',
            },
            {
                title: 'Alert',
                message: 'This is an alert message',
                type: 'info',
            },
        ]
    }
];

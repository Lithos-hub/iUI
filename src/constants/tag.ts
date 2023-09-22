import { Tag } from '@/shared/iui-tag/iui-tag.interfaces';

interface TagComponent {
	description: string;
	components_props: Tag[];
	type: string;
}

export const TAG_SUMMARY: Tag[] = [
    {
        content: 'Tag'
    },
	{
        appendIcon: 'eye',
        content: 'Tag',
	},
    {
        prependIcon: 'layers',
        content: 'Tag',
    },
    {
        content: 'Tag',
        closable: true,
    },
    {
        content: 'Tag',
    },
    {
        content: 'Tag',
        variant: 'primary',
    },
    {
        content: 'Tag',
        variant: 'secondary',
    },
    {
        content: 'Tag',
        variant: 'success',
    },
    {
        content: 'Tag',
        variant: 'danger',
    },
    {
        content: 'Tag',
        variant: 'warning',
    },
    {
        content: 'Tag',
        variant: 'info',
    },
    {
        content: 'Tag',
        variant: 'light',
    },
    {
        content: 'Tag',
        variant: 'dark',
    }

];

export const TAG_VIEW: TagComponent[] = [
	{
		type: 'Default',
		description: `The default tag is used to highlight an item.`,
		components_props: [
			{
                content: 'Tag',
			},
		],
	},
    {
        type: 'Prepend Icon',
        description: `The <code>prepend-icon</code> prop is used to set a specific icon in the left side`,
        components_props: [
            {
                prependIcon: 'sun',
                content: 'Light mode',
            },
        ],
    },
    {
        type: 'Append Icon',
        description: `The <code>append-icon</code> prop is used to set a specific icon in the right side`,
        components_props: [
            {
                appendIcon: 'shopingCart',
                content: 'See products',
            },
        ],
    },
    {
        type: 'Closable',
        description: `The <code>closable</code> prop is used to set the tag as closable. When the tag is closable, a close icon will appear on the right side.`,
        components_props: [
            {
                content: 'Tag',
                closable: true,
            },
        ],
    },
    {
        type: 'Variant',
        description: `The <code>variant</code> prop is used to set the tag color. The default value is <code>default</code>.`,
        components_props: [
            {
                content: 'Tag',
            },
            {
                content: 'Tag',
                variant: 'primary',
            },
            {
                content: 'Tag',
                variant: 'secondary',
            },
            {
                content: 'Tag',
                variant: 'success',
                appendIcon: 'check',
            },
            {
                content: 'Tag',
                variant: 'danger',
                prependIcon: 'alertTriangle'
            },
            {
                content: 'Tag',
                variant: 'warning',
            },
            {
                content: 'Tag',
                variant: 'info',
            },
            {
                content: 'Tag',
                variant: 'light',
            },
            {
                content: 'Tag',
                variant: 'dark',
            }
        ]
    }
];

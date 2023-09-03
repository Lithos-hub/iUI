import { Button } from "@/interfaces";

interface SummaryComponent extends Button {
  text: string;
}

interface ButtonComponent {
  description: string;
  components_props: Button[];
  type: string;
}

export const BUTTONS_SUMMARY: SummaryComponent[] = [
  {
    variant: "solid",
    text: "Button solid",
  },
  {
    variant: "outline",
    text: "Button outline",
  },
  {
    variant: "ghost",
    text: "Button ghost",
  },
  {
    variant: "neon",
    text: "Button neon",
  },
  {
    variant: "stealth",
    text: "Button stealth",
  },
  {
    variant: "cyber",
    text: "Button cyber",
  },
  {
    color: "primary",
    text: "Button primary",
  },
  {
    color: "secondary",
    text: "Button secondary",
  },
  {
    color: "tertiary",
    text: "Button tertiary",
  },
  {
    color: "info",
    text: "Button info",
  },
  {
    color: "success",
    text: "Button success",
  },
  {
    color: "warning",
    text: "Button warning",
  },
  {
    color: "danger",
    text: "Button danger",
  },
  {
    disabled: true,
    text: "Button disabled",
  },
  {
    size: "xs",
    text: "Button extrasmall",
  },
  {
    size: "sm",
    text: "Button small",
  },
  {
    size: "md",
    text: "Button medium",
  },
  {
    size: "lg",
    text: "Button large",
  },
  {
    size: "xl",
    text: "Button extralarge",
  },
  {
    radius: "none",
    text: "Button radius none",
  },
  {
    radius: "sm",
    text: "Button radius sm",
  },
  {
    radius: "md",
    text: "Button radius md",
  },
  {
    radius: "lg",
    text: "Button radius lg",
  },
  {
    radius: "xl",
    text: "Button radius xl",
  },
  {
    radius: "full",
    text: "Button radius full",
  },
];

export const BUTTONS_VIEW: ButtonComponent[] = [
  {
    type: "Variant",
    description: `The <code>variant</code> prop is used to set a special style to the button. The default value is <code>solid</code>.`,
    components_props: [
      {
        variant: "solid",
        text: "Button solid",
      },
      {
        variant: "outline",
        text: "Button outline",
      },
      {
        variant: "ghost",
        text: "Button ghost",
      },
      {
        variant: "neon",
        text: "Button neon",
      },
      {
        variant: "stealth",
        text: "Button stealth",
      },
      {
        variant: "cyber",
        text: "Button cyber",
      },
    ]
  },
  {
    type: "Color",
    description: `The <code>color</code> prop is used to set a color to the button. The default value is <code>primary</code>.`,
    components_props: [
      {
        color: "primary",
        text: "Button primary",
      },
      {
        color: "secondary",
        text: "Button secondary",
      },
      {
        color: "tertiary",
        text: "Button tertiary",
      },
      {
        color: "info",
        text: "Button info",
      },
      {
        color: "success",
        text: "Button success",
      },
      {
        color: "warning",
        text: "Button warning",
      },
      {
        color: "danger",
        text: "Button danger",
      },
    ]
  },
  {
    type: "Size",
    description: `The <code>size</code> prop is used to set a size to the button. The default value is <code>md</code>.`,
    components_props: [
      {
        size: "xs",
        text: "Button extrasmall",
      },
      {
        size: "sm",
        text: "Button small",
      },
      {
        size: "md",
        text: "Button medium",
      },
      {
        size: "lg",
        text: "Button large",
      },
      {
        size: "xl",
        text: "Button extralarge",
      },
    ]
  },
  {
    type: "Radius",
    description: `The <code>radius</code> prop is used to set a radius to the button. The default value is <code>none</code>.`,
    components_props: [
      {
        radius: "none",
        text: "Button radius none",
      },
      {
        radius: "sm",
        text: "Button radius sm",
      },
      {
        radius: "md",
        text: "Button radius md",
      },
      {
        radius: "lg",
        text: "Button radius lg",
      },
      {
        radius: "xl",
        text: "Button radius xl",
      },
      {
        radius: "full",
        text: "Button radius full",
      },
    ]
  },
  {
    type: "Disabled",
    description: `The <code>disabled</code> prop is used to disable the button. The default value is <code>false</code>.`,
    components_props: [
      {
        disabled: true,
        text: "Button disabled",
      },
    ]
  }
]
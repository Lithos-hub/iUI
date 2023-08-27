import { Button } from "@/interfaces";

interface SummaryComponent extends Button {
  text: string;
}

export const BUTTONS: SummaryComponent[] = [
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

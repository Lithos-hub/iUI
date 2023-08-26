export interface Button {
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  text: string;
}

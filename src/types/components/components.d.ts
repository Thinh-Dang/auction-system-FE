declare interface IButtonProps {
  classes: string;
  content: string;
  onClick?: () => void;
}

declare interface IInputProps {
  classes: string;
  content: string;
  onClick?: () => void;
}
declare interface INavItemProps {
    href: string,
    content: string,
    classes: string,
    active: boolean
}

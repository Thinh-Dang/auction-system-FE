declare interface IButtonProps {
   classes: string;
   content: string;
   type?: "submit" | "reset" | "button";
   onClick?: () => void;
}

declare interface IInputProps {
   classes: string;
   content: string;
   onClick?: () => void;
}
declare interface INavItemProps {
   href: string;
   content: string;
   classes: string;
   active: boolean;
}
declare interface ISelectInputProps {
  label: string, 
  options: string[],
  classes?: string,
}
declare interface IIconContainerProps{
  iconSrc: string,
  classes?: string,
  onClick?: () => void,
}
declare interface Product {
  id: string,
  img: string,
  productName: string,
  year: number,
  type: string,
  bids: number,
  price: number,
  endDate: string,
}
enum productTypes {
  'Weapons',
  'Vases',
  'Clocks',
  'Statues',
  'Jewels'
}
declare interface IProductsSectionProps {
  title: string,
  description: string,
  products: Product[],
}
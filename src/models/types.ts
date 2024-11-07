export interface CartItem {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  quantity: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description: string;
  features: string;
  includes: { quantity: number; item: string }[];
  others: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
}

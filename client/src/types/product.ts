export interface Product {
  id: string;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description: string;
  category: string;
  new: boolean;
  price: number;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
}


export type Category = 'Gaming' | 'Business' | 'Student' | 'Creator' | 'All';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  category: Category;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    gpu?: string;
    display: string;
  };
  description: string;
  image: string;
  isFeatured?: boolean;
  stock: number;
}

export interface Accessory {
  id: string;
  name: string;
  category: 'Mouse' | 'Keyboard' | 'Storage' | 'Power' | 'Other';
  price: number;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  items: { productId: string; quantity: number }[];
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
}

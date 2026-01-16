
import { Product, Service } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'l1',
    name: 'Asus ROG Zephyrus G14',
    brand: 'Asus',
    price: 1499,
    oldPrice: 1699,
    category: 'Gaming',
    specs: {
      cpu: 'Ryzen 9 7940HS',
      ram: '16GB DDR5',
      storage: '1TB NVMe SSD',
      gpu: 'RTX 4060',
      display: '14" QHD+ 165Hz'
    },
    description: 'The world\'s most powerful 14-inch gaming laptop just got better. High performance meets ultimate portability with a stunning Nebula display.',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    stock: 5
  },
  {
    id: 'l2',
    name: 'MacBook Air M3',
    brand: 'Apple',
    price: 1099,
    category: 'Business',
    specs: {
      cpu: 'Apple M3 Chip',
      ram: '8GB Unified Memory',
      storage: '256GB SSD',
      gpu: '8-Core GPU',
      display: '13.6" Liquid Retina'
    },
    description: 'Strikingly thin and fast, so you can work, play or create anywhere. The M3 chip brings even greater capabilities to the world\'s most popular laptop.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    stock: 12
  },
  {
    id: 'l3',
    name: 'Dell XPS 15',
    brand: 'Dell',
    price: 1899,
    category: 'Creator',
    specs: {
      cpu: 'Intel Core i9-13900H',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      gpu: 'RTX 4070',
      display: '15.6" 4K OLED Touch'
    },
    description: 'A perfect balance of power and portability. The XPS 15 is built for those who value premium aesthetics and top-tier performance.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    stock: 3
  },
  {
    id: 'l4',
    name: 'Lenovo IdeaPad Slim 3',
    brand: 'Lenovo',
    price: 499,
    oldPrice: 599,
    category: 'Student',
    specs: {
      cpu: 'Ryzen 5 7520U',
      ram: '8GB LPDDR5',
      storage: '512GB SSD',
      display: '15.6" FHD IPS'
    },
    description: 'Smart and reliable travel companion. This thin and light laptop is perfect for handling everyday tasks with ease.',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ec696e5237?auto=format&fit=crop&q=80&w=800',
    stock: 20
  },
  {
    id: 'l5',
    name: 'HP Spectre x360',
    brand: 'HP',
    price: 1349,
    category: 'Business',
    specs: {
      cpu: 'Intel Core i7-1355U',
      ram: '16GB LPDDR5',
      storage: '512GB NVMe',
      display: '13.5" 3K2K OLED Touch'
    },
    description: 'Elegance meets versatility. This 2-in-1 convertible laptop features a stunning OLED display and exceptional battery life.',
    image: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=800',
    stock: 8
  },
  {
    id: 'l6',
    name: 'Razer Blade 16',
    brand: 'Razer',
    price: 2999,
    category: 'Gaming',
    specs: {
      cpu: 'Intel Core i9-13950HX',
      ram: '32GB DDR5',
      storage: '1TB Gen4 SSD',
      gpu: 'RTX 4080',
      display: '16" Dual UHD+ 120Hz/240Hz'
    },
    description: 'The ultimate desktop replacement. Featuring the world\'s first dual-mode mini-LED display for professional workflows and elite gaming.',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800',
    stock: 2
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Hardware Repairs',
    description: 'Expert diagnostics and repair for laptop screens, keyboards, and internal components.',
    icon: 'wrench'
  },
  {
    id: 's2',
    title: 'SSD & RAM Upgrades',
    description: 'Boost your laptop performance with lightning-fast storage and more memory.',
    icon: 'zap'
  },
  {
    id: 's3',
    title: 'OS & Software Support',
    description: 'Windows/MacOS installation, driver updates, and laptop software troubleshooting.',
    icon: 'monitor'
  }
];

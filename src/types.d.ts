declare type ItemStatus = 'Available' | 'Unavailable';

interface Fish {
  name: string;
  price: number;
  status: ItemStatus;
  description: string;
  imageSrc: string;
}

interface Clothing {
  
}

interface CartEntry<T extends Item> {
  item: T;
  quantity: number;
}

type Item = Fish;

declare type ItemStatus = 'Available' | 'Unavailable';

interface Fish {
  name: string;
  price: number;
  status: ItemStatus;
  description: string;
  imageSrc: string;
}

interface CartItem {
  fish: Fish;
  quantity: number;
}

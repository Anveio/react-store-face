import * as React from 'react';
import FishCard from './FishCard';
import { ResourceList } from '@shopify/polaris';

export interface Props {
  fishes: Fish[];
  addToCart: (item: CartItem) => void;
}

const FishList = ({ fishes, addToCart }: Props) => {
  return (
    <ResourceList
      items={fishes}
      renderItem={(fish: Fish, index: number) => {
        return <FishCard fish={fish} primaryAction={addToCart} />;
      }}
    />
  );
};

export default FishList;

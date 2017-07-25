import * as React from 'react';
import FishCard from './FishCard';
import { ResourceList } from '@shopify/polaris';

export interface Props {
  fishes: Fish[];
  addToCart: (item: CartEntry<Fish>) => void;
}

const FishList = ({ fishes, addToCart }: Props) => {
  return (
    <ResourceList
      items={fishes}
      renderItem={(fish: Fish, index: number) => {
        return <FishCard fish={fish} onAddToCart={addToCart} />;
      }}
    />
  );
};

export default FishList;

import * as React from 'react';
import FishCard from './FishCard';
import { Stack, ResourceList } from '@shopify/polaris';

export interface Props {
  readonly fishes: Fish[];
  readonly addToCart: (item: Fish) => void;
}

const FishList = ({ fishes, addToCart }: Props) => {
  return (
    <Stack distribution="fillEvenly" >

      <ResourceList
        items={fishes}
        renderItem={(fish: Fish, index: number) => {
          return <FishCard fish={fish} onAddToCart={addToCart} />;
        }}
      />
    </Stack>
  );
};

export default FishList;

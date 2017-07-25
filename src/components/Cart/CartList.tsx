import * as React from 'react';
import { ResourceList } from '@shopify/polaris';
import ItemCard from './ItemCard';

export interface Props {
  readonly cartArray: CartEntry<Item>[];
}

const CartList = ({ cartArray }: Props) => {
  return (
    <ResourceList
      items={cartArray}
      renderItem={(entry: CartEntry<Item>, key) =>
        <ItemCard entry={entry} key={key} />}
    />
  );
};

export default CartList;

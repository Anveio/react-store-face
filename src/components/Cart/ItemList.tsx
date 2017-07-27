import * as React from 'react';
import { Stack, DisplayText, ResourceList } from '@shopify/polaris';
import ItemCard from './ItemCard';

import { cartTotalPrice, formatPrice } from '../../utils';

export interface Props {
  readonly cartArray: CartEntry<Item>[];
  readonly onNewQuant: (item: Item, value: number) => void;
}

const ItemList = ({ cartArray, onNewQuant }: Props) => {
  return (
    <Stack vertical>
      <DisplayText size="medium">
        Total: {formatPrice(cartTotalPrice(cartArray))}
      </DisplayText>
      <ResourceList
        items={cartArray}
        renderItem={(entry: CartEntry<Item>, key) =>
          <ItemCard entry={entry} key={key} onNewQuant={onNewQuant} />}
      />
    </Stack>
  );
};

export default ItemList;

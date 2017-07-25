import * as React from 'react';
import { Stack, DisplayText, ResourceList } from '@shopify/polaris';
import ItemCard from './ItemCard';

import { cartTotalPrice, formatPrice } from '../../utils';

export interface Props {
  readonly cartArray: CartEntry<Item>[];
}

const CartList = ({ cartArray }: Props) => {
  return (
    <Stack vertical>
      <DisplayText>
        Total: {formatPrice(cartTotalPrice(cartArray))}
      </DisplayText>
      <ResourceList
        items={cartArray}
        renderItem={(entry: CartEntry<Item>, key) =>
          <ItemCard entry={entry} key={key} />}
      />
    </Stack>
  );
};

export default CartList;

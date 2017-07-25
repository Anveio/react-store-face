import * as React from 'react';
import { Card, Thumbnail, Stack } from '@shopify/polaris';

import { formatPrice } from '../../utils';

interface Props {
  readonly entry: CartEntry<Item>;
}

const CartListItem = ({ entry }: Props) => {
  const { description, imageSrc, name, price } = entry.item;
  return (
    <Card sectioned>
      <Stack>
        <Thumbnail source={imageSrc} alt={description} size="small" />
        <p>
          {name} : {formatPrice(price)}
        </p>
      </Stack>
    </Card>
  );
};

export default CartListItem;

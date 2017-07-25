import * as React from 'react';
import {
  Card,
  Thumbnail,
  Stack,
  TextField,
  DisplayText
} from '@shopify/polaris';

import { formatPrice } from '../../utils';

interface Props {
  readonly entry: CartEntry<Item>;
  readonly onNewQuant: (item: Item, value: number) => void;
}

const CartListItem = ({ entry, onNewQuant }: Props) => {
  const { description, imageSrc, name, price } = entry.item;

  const updateQuantity = (value: string) => {
    onNewQuant(entry.item, parseFloat(value));
  };

  return (
    <Card sectioned title={name}>
      <Stack vertical={false} distribution="fillEvenly">
        <Thumbnail source={imageSrc} alt={description} size="small" />
        <DisplayText size="small">
          {formatPrice(price * entry.quantity)}
        </DisplayText>
        <TextField
          type="number"
          name="price"
          id="add-fish-price"
          min={0}
          max={9999}
          label="Quantity"
          onChange={updateQuantity}
          value={entry.quantity.toString()}
        />
      </Stack>
    </Card>
  );
};

export default CartListItem;

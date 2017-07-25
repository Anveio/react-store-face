import * as React from 'react';
import { Card, Thumbnail, Stack } from '@shopify/polaris';

import { formatPrice } from '../../utils';

export interface Props {
  readonly fish: Fish;
  readonly onAddToCart: (item: Fish) => void;
}

const FishCard = ({ fish, onAddToCart }: Props) => {
  const { name, price, imageSrc, description, status } = fish;

  const available = status === 'Available' ? true : false;

  const onPrimaryAction = () => {
    onAddToCart(fish);
  };

  const addAction = {
    content: 'Add to cart',
    onAction: onPrimaryAction
  };

  const unavailableAction = {
    content: 'Sold out',
    destructive: true
  };

  return (
    <Card
      sectioned
      title={`${name}, ${formatPrice(price)}`}
      primaryFooterAction={available ? addAction : unavailableAction}
      subdued={!available}
    >
      <Stack>
        <Thumbnail
          source={imageSrc}
          alt={name + ': ' + description}
          size="large"
        />
        <p>
          {fish.description}
        </p>
      </Stack>
    </Card>
  );
};

export default FishCard;

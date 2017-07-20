import * as React from 'react';
import { Card, Thumbnail, Stack } from '@shopify/polaris';

import { formatPrice } from '../../utils';

export interface Props {
  fish: Fish;
}

export default ({ fish }: Props) => {
  const { name, price, imageSrc, description, status } = fish;

  const available = status === 'Available' ? true : false;

  const addAction = {
    content: available ? 'Add to order' : 'Sold out',
    destructive: !available
  };

  return (
    <Card
      sectioned
      title={`${name}, ${formatPrice(price)}`}
      primaryFooterAction={addAction}
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

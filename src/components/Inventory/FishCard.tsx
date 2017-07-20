import * as React from 'react';
import { Card, Thumbnail, Stack, DestructableAction } from '@shopify/polaris';

import { formatPrice } from '../../utils';

export interface Props {
  fish: Fish;
}

export default ({ fish }: Props) => {
  const { name, price, imageSrc, description } = fish;

  const deleteAction = {
    content: 'Delete',
    destructive: true
  } as DestructableAction;

  return (
    <Card
      sectioned
      title={`${name}, ${formatPrice(price)}`}
      secondaryFooterAction={deleteAction}
    >
      <Stack>
        <Thumbnail source={imageSrc} alt={name + ': ' + description} />
        <p>
          {fish.description}
        </p>
      </Stack>
    </Card>
  );
};

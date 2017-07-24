import * as React from 'react';
import {
  Layout,
  EmptyState,
  ResourceList,
  Card,
  Stack,
  Thumbnail
} from '@shopify/polaris';

import { formatPrice } from '../../utils';

const emptyState = require('../Navigation/empty-state.svg');

interface Props {
  items: CartItem[];
}

const Cart = ({ items }: Props) => {
  const emptyCartMarkup = () => {
    return (
      <EmptyState
        heading="You have no items in your cart."
        image={emptyState}
        action={{
          content: 'Browse items'
        }}
      >
        <p>Add items to proceed to checkout.</p>
      </EmptyState>
    );
  };

  const generateCartListItem = (item: CartItem, index: number) => {
    const { description, imageSrc, name, price } = item.fish;

    return (
      <Card sectioned>
        <Stack>
          <Thumbnail source={imageSrc} alt={description} size="small" />
          <p>
            {name}, {item.quantity} : {formatPrice(price)}
          </p>
        </Stack>
      </Card>
    );
  };

  const cartItemsMarkup = () => {
    return <ResourceList items={items} renderItem={generateCartListItem} />;
  };

  return (
    <Layout.AnnotatedSection title="Cart">
      {items.length > 0 ? cartItemsMarkup() : emptyCartMarkup()}
    </Layout.AnnotatedSection>
  );
};

export default Cart;

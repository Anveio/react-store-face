import * as React from 'react';
import { Layout, EmptyState } from '@shopify/polaris';
import CartList from './CartList';

import { cartListFromMap } from '../../utils';

const emptyState = require('../Navigation/empty-state.svg');

interface Props {
  readonly cart: Map<Item, number>;
  onBrowse: (tabIndex: number) => void;
}

const Cart = ({ cart, onBrowse }: Props) => {
  const switchToInventoryTab = () => {
    onBrowse(0);
  };

  const emptyCartMarkup = () => {
    return (
      <EmptyState
        heading="You have no items in your cart."
        image={emptyState}
        action={{
          onAction: switchToInventoryTab,
          content: 'Browse items'
        }}
      >
        <p>Add items to proceed to checkout.</p>
      </EmptyState>
    );
  };

  return (
    <Layout.AnnotatedSection title="Cart">
      {cart.size > 0
        ? <CartList cartArray={cartListFromMap(cart)} />
        : emptyCartMarkup()}
    </Layout.AnnotatedSection>
  );
};

export default Cart;

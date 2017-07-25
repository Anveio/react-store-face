import * as React from 'react';
import Cart from './Cart/Cart';
import Inventory from './Inventory/Inventory';
import { Page } from '@shopify/polaris';

interface State {
  cart: Map<CartEntry<Fish>, number>;
}

export default class Home extends React.PureComponent<{}, State> {
  state = {
    cart: new Map<CartEntry<Fish>, number>()
  };

  addToCart = (item: CartEntry<Item>) => {
    this.setState((prevState: State): Partial<State> => {
      prevState.cart.set(item, (prevState.cart.get(item) || 0) + 1);
      return { ...prevState };
    });
  };

  render() {
    return (
      <Page title="Catch of the Day">
        <Cart cart={this.state.cart} />
        <Inventory handleAddToCart={this.addToCart} />
      </Page>
    );
  }
}

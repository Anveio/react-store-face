import * as React from 'react';
import Cart from './Cart/Cart';
import Inventory from './Inventory/Inventory';
import { Page } from '@shopify/polaris';

interface State {
  readonly cart: Map<Item, number>;
}

export default class Home extends React.PureComponent<{}, State> {
  readonly state = {
    cart: new Map<Item, number>()
  };

  addToCart = (item: Item) => {
    this.setState((prevState: State): Partial<State> => {
      const newCart = new Map<Item, number>(prevState.cart);
      newCart.set(item, (prevState.cart.get(item) || 0) + 1);
      return { cart: newCart };
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

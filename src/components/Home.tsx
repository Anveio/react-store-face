import * as React from 'react';
import Cart from './Cart/Cart';
import Inventory from './Inventory/Inventory';
import { Page } from '@shopify/polaris';

interface State {
  cart: CartItem[];
}

export default class App extends React.PureComponent<{}, State> {
  state = {
    cart: []
  };

  addToCart = (item: CartItem) => {
    this.setState((prevState: State): Partial<State> => {
      return {
        cart: [...prevState.cart, item]
      };
    });
  };

  render() {
    return (
      <Page title="Catch of the Day">
        <Cart items={this.state.cart} />
        <Inventory handleAddToCart={this.addToCart} />
      </Page>
    );
  }
}

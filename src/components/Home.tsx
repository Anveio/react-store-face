import * as React from 'react';
import Cart from './Cart/Cart';
import Inventory from './Inventory/Inventory';
import { Page, Tabs } from '@shopify/polaris';

interface State {
  readonly cart: Map<Item, number>;
  readonly currentTabIndex: number;
}

interface TabDescriptor {
  readonly id: string;
  readonly url?: string;
  readonly title: string;
  readonly panelID?: string;
}

const tabInformation = (cartSize: number): TabDescriptor[] => [
  {
    id: 'inventory',
    title: 'Inventory'
  },
  {
    id: 'cart',
    title: `Cart (${cartSize})`
  }
];

export default class Home extends React.PureComponent<{}, State> {
  readonly state = {
    cart: new Map<Item, number>(),
    currentTabIndex: 0
  };

  private readonly addToCart = (item: Item) => {
    this.setState((prevState: State): Partial<State> => {
      const newCart = new Map<Item, number>(prevState.cart);
      newCart.set(item, (prevState.cart.get(item) || 0) + 1);
      return { cart: newCart };
    });
  };

  private readonly changeItemQuantity = (item: Item, quantity: number) => {
    this.setState((prevState: State): Partial<State> => {
      const newCart = new Map<Item, number>(prevState.cart);
      newCart.set(item, quantity);
      return { cart: newCart };
    });
  };

  private readonly changeTab = (tabIndex: number) => {
    this.setState((prevState: State): Partial<State> => {
      return { currentTabIndex: tabIndex };
    });
  };

  private readonly tabComponentLookup = () => {
    const { currentTabIndex, cart } = this.state;

    switch (currentTabIndex) {
      case 0:
        return <Inventory handleAddToCart={this.addToCart} />;
      case 1:
        return (
          <Cart
            cart={cart}
            onTabChange={this.changeTab}
            onNewQuant={this.changeItemQuantity}
          />
        );
      default:
        return;
    }
  };

  public render() {
    return (
      <Page title="Catch of the Day">
        <Tabs
          tabs={tabInformation(this.state.cart.size)}
          selected={this.state.currentTabIndex}
          onSelect={this.changeTab}
        />
        {this.tabComponentLookup()}
      </Page>
    );
  }
}

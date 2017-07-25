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

const tabs: TabDescriptor[] = [
  {
    id: 'inventory',
    title: 'Inventory'
  },
  {
    id: 'cart',
    title: 'Cart'
  }
];

export default class Home extends React.PureComponent<{}, State> {
  readonly state = {
    cart: new Map<Item, number>(),
    currentTabIndex: 0
  };

  addToCart = (item: Item) => {
    this.setState((prevState: State): Partial<State> => {
      const newCart = new Map<Item, number>(prevState.cart);
      newCart.set(item, (prevState.cart.get(item) || 0) + 1);
      return { cart: newCart };
    });
  };

  changeTab = (tabIndex: number) => {
    this.setState((prevState: State): Partial<State> => {
      return {
        ...prevState,
        currentTabIndex: tabIndex
      };
    });
  };

  tabComponentLookup = () => {
    switch (this.state.currentTabIndex) {
      case 0:
        return <Inventory handleAddToCart={this.addToCart} />;
      case 1:
        return <Cart cart={this.state.cart} onBrowse={this.changeTab} />;
      default:
        return;
    }
  };

  render() {
    return (
      <Page title="Catch of the Day">
        <Tabs
          tabs={tabs}
          selected={this.state.currentTabIndex}
          onSelect={this.changeTab}
        />
        {this.tabComponentLookup()}
      </Page>
    );
  }
}

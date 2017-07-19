import * as React from 'react';
import Order from './Order';
import Inventory from './Inventory';
import { Page } from '@shopify/polaris';

export default class App extends React.PureComponent<{}, never> {
  render() {
    return (
      <Page title="Catch of the Day">
        <Order />
        <Inventory />
      </Page>
    );
  }
}

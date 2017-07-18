import * as React from 'react';
import { Route } from 'react-router-dom';
import { Page } from '@shopify/polaris';

import PageHeader from './Navigation/PageHeader';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <main>
        <PageHeader account={false} />
        <Page title={window.location.href}>
          <Route exact path="/" />
        </Page>
      </main>
    );
  }
}

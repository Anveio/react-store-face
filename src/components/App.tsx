import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageHeader from './Navigation/PageHeader';
import StorePicker from './StorePicker';
import Home from './Home';
import NotFound from './Navigation/NotFound';

export default class App extends React.PureComponent<{}, never> {
  render() {
    return (
      <main>
        <PageHeader account={false} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store-picker" component={StorePicker} />
          <Route path="" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

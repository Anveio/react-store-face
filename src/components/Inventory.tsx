import * as React from 'react';
import { Layout, Card } from '@shopify/polaris';
import AddFishForm from './AddFishForm';

interface State {
  fishes: Fish[];
}

export default class Inventory extends React.Component<{}, State> {
  readonly state = {
    fishes: []
  };

  handleNewFish = (newFish: Fish) => {
    this.setState(prevState => {
      return prevState.fishes.concat(newFish);
    });
  }

  render() {
    return (
      <Layout.AnnotatedSection title="Inventory">
        <Card sectioned>
          <AddFishForm onNewFish={this.handleNewFish} />
        </Card>
      </Layout.AnnotatedSection>
    );
  }
}

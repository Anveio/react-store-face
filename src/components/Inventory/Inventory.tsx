import * as React from 'react';
import { Layout, Card, Button, Stack } from '@shopify/polaris';
import AddFishForm from './AddFishForm';
import FishList from './FishList';

import { sampleData } from '../../utils';

interface State {
  readonly fishes: Fish[];
  readonly formActive: boolean;
}

interface Props {
  handleAddToCart: (item: Item) => void;
}

export default class Inventory extends React.Component<Props, State> {
  readonly state = {
    fishes: sampleData,
    formActive: false
  };

  handleNewFish = (newFish: Fish) => {
    this.setState((prevState): Partial<State> => {
      return {
        fishes: [...prevState.fishes, newFish]
      };
    });
  };

  formActiveMarkup = () => {
    return (
      <AddFishForm onNewFish={this.handleNewFish} onClose={this.toggleForm} />
    );
  };

  formInactiveMarkup = () => {
    return (
      <Card sectioned>
        <Button primary onClick={this.toggleForm}>
          Add new fish.
        </Button>
      </Card>
    );
  };

  toggleForm = () => {
    this.setState((prevState): Partial<State> => {
      return {
        formActive: !prevState.formActive
      };
    });
  };

  render() {
    return (
      <Layout.AnnotatedSection title="Inventory">
        <Stack vertical={true}>
          {this.state.formActive
            ? this.formActiveMarkup()
            : this.formInactiveMarkup()}
          <FishList
            fishes={this.state.fishes}
            addToCart={this.props.handleAddToCart}
          />
        </Stack>
      </Layout.AnnotatedSection>
    );
  }
}

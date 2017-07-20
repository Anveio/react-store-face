import * as React from 'react';
import { Layout, Card, Button, Stack } from '@shopify/polaris';
import AddFishForm from './AddFishForm';
import FishCard from './FishCard';

import { sampleData } from '../../utils';

interface State {
  fishes: Fish[];
  formActive: boolean;
}

export default class Inventory extends React.Component<{}, State> {
  readonly state = {
    fishes: sampleData,
    formActive: false
  };

  generateFishList = () => {
    return this.state.fishes.map((fish: Fish, index: number) =>
      <FishCard fish={fish} key={index} />
    );
  };

  handleNewFish = (newFish: Fish) => {
    this.setState((prevState): Partial<State> => {
      return {
        fishes: [...prevState.fishes, newFish]
      };
    });
  }; // tslint:disable-line:semicolon

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
          {this.generateFishList()}
        </Stack>
      </Layout.AnnotatedSection>
    );
  }
}

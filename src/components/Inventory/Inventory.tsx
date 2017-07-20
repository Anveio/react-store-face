import * as React from 'react';
import { Layout, Card, Button } from '@shopify/polaris';
import AddFishForm from './AddFishForm';

interface State {
  fishes: Fish[];
  formActive: boolean;
}

export default class Inventory extends React.Component<{}, State> {
  readonly state = {
    fishes: [
      {
        name: 'Marlin',
        price: 32,
        status: 'Available' as ItemStatus,
        description: 'The greatest.',
        imageSrc: 'google.com'
      }
    ],
    formActive: false
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
        {this.state.formActive
          ? this.formActiveMarkup()
          : this.formInactiveMarkup()}
        <br />
        {this.state.fishes.map((fish: Fish, index: number) => {
          return (
            <Card sectioned title={`${fish.name}, $${fish.price}`} key={index}>
              <p>
                {fish.description}
              </p>
            </Card>
          );
        })}
      </Layout.AnnotatedSection>
    );
  }
}

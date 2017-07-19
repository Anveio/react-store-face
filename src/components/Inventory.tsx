import * as React from 'react';
import { Layout, Card } from '@shopify/polaris';
import AddFishForm from './AddFishForm';

interface State {
  fishes: Fish[];
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
    ]
  };

  handleNewFish = (newFish: Fish) => {
    this.setState((prevState): Partial<State> => {
      return {
        fishes: [...prevState.fishes, newFish]
      };
    });
  }; // tslint:disable-line:semicolon

  render() {
    return (
      <Layout.AnnotatedSection title="Inventory">
        {this.state.fishes.map((fish: Fish, index: number) => {
          return (
            <Card sectioned title={`${fish.name}, $${fish.price}`} key={index}>
              <p>
                {fish.description}
              </p>
            </Card>
          );
        })}
        <Card sectioned>
          <AddFishForm onNewFish={this.handleNewFish} />
        </Card>
      </Layout.AnnotatedSection>
    );
  }
}

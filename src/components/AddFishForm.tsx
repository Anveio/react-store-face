import * as React from 'react';
import {
  FormLayout,
  DisplayText,
  TextField,
  Select,
  Button
} from '@shopify/polaris';

export interface Props {
  onNewFish: (fish: Fish) => void;
}

interface State extends Fish {}

export default class AddFishForm extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      name: '',
      price: 0,
      status: 'Available',
      description: '',
      imageSrc: ''
    };
  }

  readonly options: ItemStatus[] = ['Available', 'Unavailable'];

  createFish = () => {
    this.props.onNewFish(this.state);
  }; // tslint:disable-line:semicolon

  updateField = (key: keyof Fish) => (value: string) => {
    this.setState(() => {
      return {
        [key]: value
      };
    });
  }; // tslint:disable-line:semicolon

  render() {
    return (
      <FormLayout>
        <DisplayText size="medium">Add a new fish.</DisplayText>
        <TextField
          label="Name"
          name="name"
          id="add-fish-name"
          onChange={this.updateField('name')}
          value={this.state.name}
        />
        <TextField
          type="number"
          name="price"
          id="add-fish-price"
          prefix="$"
          min={0}
          max={9999}
          label="Price"
          onChange={this.updateField('price')}
          value={this.state.price.toString()}
        />
        <Select
          label="Status"
          name="status"
          options={this.options}
          placeholder="Choose an availability"
        />
        <TextField
          label="Description"
          name="description"
          id="add-fish-description"
          onChange={this.updateField('description')}
          value={this.state.description}
        />
        <TextField
          label="Image URL"
          name="image-url"
          id="add-fish-image-url"
          onChange={this.updateField('imageSrc')}
          value={this.state.imageSrc}
        />
        <Button primary submit icon="add" onClick={this.createFish}>
          Add
        </Button>
      </FormLayout>
    );
  }
}

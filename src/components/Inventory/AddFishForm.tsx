import * as React from 'react';
import {
  FormLayout,
  DisplayText,
  TextField,
  Select,
  ButtonGroup,
  Button
} from '@shopify/polaris';

export interface Props {
  readonly onNewFish: (fish: Fish) => void;
  readonly onClose: () => void;
}

const options: ItemStatus[] = ['Available', 'Unavailable'];

export default class AddFishForm extends React.Component<Props, Fish> {
  readonly state: Fish = {
    name: '',
    price: 0,
    status: 'Available',
    description: '',
    imageSrc: ''
  };

  private readonly createFish = () => {
    this.props.onNewFish(this.state);
    this.setState((): Partial<Fish> => {
      return {
        name: '',
        price: 0,
        status: 'Available',
        description: '',
        imageSrc: ''
      };
    });
  };

  private readonly updateField = (key: keyof Fish) => (value: string) => {
    this.setState(() => {
      return {
        [key]: value
      };
    });
  };

  private readonly watchForEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.charCode === 13) {
      this.createFish();
    }
  };

  public render() {
    return (
      <FormLayout>
        <DisplayText size="medium">Add a new fish.</DisplayText>
        <div onKeyPress={this.watchForEnter}>
          <TextField
            autoFocus
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
            options={options}
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
        </div>
        <ButtonGroup>
          <Button primary submit icon="add" onClick={this.createFish}>
            Add
          </Button>
          <Button onClick={this.props.onClose}>Done</Button>
        </ButtonGroup>
      </FormLayout>
    );
  }
}

import * as React from 'react';
import { Page, Layout, FormLayout, TextField, Button } from '@shopify/polaris';
import { getFunName } from '../utils';

export interface State {
  text: string;
}

export default class StorePicker extends React.PureComponent<{}, State> {
  readonly state = {
    text: getFunName()
  };

  private generateNewName() {
    this.setState(() => {
      return { text: getFunName() };
    });
  }

  public render() {
    return (
      <Page title="Store Picker">
        <Layout.AnnotatedSection title="Store Picker">
          <FormLayout>
            <TextField
              label="Store name"
              value={this.state.text}
              placeholder="e.g. The Hungry Harbor"
            />
            <Button primary submit onClick={this.generateNewName}>
              Visit Store
            </Button>
          </FormLayout>
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

import * as React from 'react';
import { Page, Layout, FormLayout, TextField, Button } from '@shopify/polaris';
import { getFunName } from '../utils';
import history from '../history';

export interface State {
  text: string;
}

export default class StorePicker extends React.PureComponent<{}, State> {
  readonly state = {
    text: getFunName()
  };

  private visitStore = () => {
    history.push(`/${this.state.text}`);
  };

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
            <Button primary submit onClick={this.visitStore}>
              Visit Store
            </Button>
          </FormLayout>
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

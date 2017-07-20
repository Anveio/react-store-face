import * as React from 'react';
import { Page, Layout, FormLayout, TextField, Button } from '@shopify/polaris';
import { getFunName } from '../utils';
import { Link } from 'react-router-dom';

export interface State {
  text: string;
}

export default class StorePicker extends React.PureComponent<{}, State> {
  readonly state = {
    text: getFunName()
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
            <Link to={this.state.text}>
              <Button primary submit>
                Visit Store
              </Button>
            </Link>
          </FormLayout>
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

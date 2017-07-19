import * as React from 'react';
import { Page, Layout, FormLayout, TextField, Button } from '@shopify/polaris';

export default class StorePicker extends React.PureComponent<{}, never> {
  render() {
    return (
      <Page title="Store Picker">
        <Layout.AnnotatedSection title="Store Picker">
          <FormLayout>
            <TextField
              label="Store name"
              placeholder="e.g. The Hungry Harbor"
            />
            <Button primary submit>
              Visit Store
            </Button>
          </FormLayout>
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

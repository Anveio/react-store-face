import * as React from 'react';
import { Page, EmptyState } from '@shopify/polaris';
import history from '../../history';

const emptySvg = require('./empty-state.svg');

export default () => {
  return (
    <Page title="Page not found.">
      <EmptyState
        heading="This page doesn't exist."
        action={{
          content: 'Back to Home',
          onAction: () => {
            history.push('/');
          }
        }}
        image={emptySvg}
        largeImage={emptySvg}
      >
        <p>It may have been deleted or moved somewhere else.</p>
      </EmptyState>
    </Page>
  );
};

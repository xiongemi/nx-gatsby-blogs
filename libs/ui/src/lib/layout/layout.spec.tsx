import { grey } from '@material-ui/core/colors';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import React from 'react';

import Layout from './layout';

export const mockTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[400],
    },
  },
});

jest.mock('gatsby', () => ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  graphql: () => {},
  Link: ({ children }) => {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return children;
  },
  useStaticQuery: () => ({
    site: {
      siteMetadata: {
        title: 'mock title',
      },
    },
  }),
}));

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Layout theme={mockTheme} homeLink="random-link">
        content
      </Layout>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully', () => {
    const { getByTestId } = render(
      <Layout theme={mockTheme} homeLink="random-link">
        content
      </Layout>
    );
    expect(getByTestId('title').innerHTML).toEqual('mock title');
  });
});

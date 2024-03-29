import { grey } from '@material-ui/core/colors';
import { createTheme, Theme } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import React from 'react';

import Layout from './layout';

export const mockTheme: Theme = createTheme({
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

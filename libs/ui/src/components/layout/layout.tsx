import React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme, ThemeProvider } from '@material-ui/core';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode;
  theme: Theme;
}

export function Layout({ children, theme }: LayoutProps) {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        {children}
      </ThemeProvider>
    </>
  );
}

export default Layout;

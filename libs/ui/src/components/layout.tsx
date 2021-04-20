import React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  AppBar,
  Box,
  Container,
  Theme,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Link } from 'gatsby';

export interface LayoutProps {
  children: React.ReactNode;
  theme: Theme;
  homeLink: string;
  title: string;
}

export function Layout({ children, theme, title, homeLink }: LayoutProps) {
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
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component={Link} to={homeLink}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <Box mt={3}>{children}</Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Layout;

import {
  AppBar,
  Box,
  Container,
  Theme,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export interface LayoutProps {
  children: React.ReactNode;
  theme: Theme;
  homeLink: string;
}

export function Layout({ children, theme, homeLink }: LayoutProps) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  const title = data?.site?.siteMetadata?.title;

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
            <Typography
              variant="h5"
              component={Link}
              to={homeLink}
              color="inherit"
            >
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Box mt={3}>{children}</Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Layout;

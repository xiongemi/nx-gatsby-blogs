import { Layout } from '@nx-gatsby-blogs/ui';
import { graphql, useStaticQuery } from 'gatsby';

import React from 'react';
import { theme } from '../theme';

export interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
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
    <Layout
      theme={theme}
      title={title}
      homeLink={process.env.NX_BLOGS_BASE_HREF}
    >
      {children}
    </Layout>
  );
}

export default AppLayout;

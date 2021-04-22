import { Layout } from '@nx-gatsby-blogs/ui';
import React from 'react';

import { theme } from './theme';

export function AppLayout({ children }) {
  return (
    <Layout theme={theme} homeLink={process.env.NX_BLOGS_BASE_HREF}>
      {children}
    </Layout>
  );
}

export default AppLayout;

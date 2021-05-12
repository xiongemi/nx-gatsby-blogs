import { Layout } from '@nx-gatsby-blogs/ui';
import React from 'react';

import { theme } from '../theme';

export function AppLayout({ children }) {
  return (
    <Layout theme={theme} homeLink={process.env.BLOGS_BASE_HREF + '/1'}>
      {children}
    </Layout>
  );
}

export default AppLayout;

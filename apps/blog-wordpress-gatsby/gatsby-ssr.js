/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import { Layout } from '@nx-gatsby-blogs/ui';
import React from 'react';

import { theme } from './src/theme';

export const wrapRootElement = ({ element }) => {
  return <Layout theme={theme}>{element}</Layout>;
};

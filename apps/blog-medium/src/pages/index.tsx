import { Redirect } from '@reach/router';
import React from 'react';

export function Index() {
  return <Redirect noThrow to={process.env.BLOGS_BASE_HREF + '/1'} />;
}

export default Index;

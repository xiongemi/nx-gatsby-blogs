import React from 'react';
import { Redirect } from '@reach/router';

export function Index() {
  return <Redirect noThrow to="/blogs" />;
}

export default Index;

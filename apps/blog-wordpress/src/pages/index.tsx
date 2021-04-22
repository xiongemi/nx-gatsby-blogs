import { Redirect } from '@reach/router';
import React from 'react';

export function Index() {
  return <Redirect noThrow to="/blogs" />;
}

export default Index;

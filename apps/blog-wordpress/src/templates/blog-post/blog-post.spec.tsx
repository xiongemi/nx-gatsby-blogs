import { render } from '@testing-library/react';
import React from 'react';

import BlogPost from './blog-post';

describe('BlogPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogPost />);
    expect(baseElement).toBeTruthy();
  });
});

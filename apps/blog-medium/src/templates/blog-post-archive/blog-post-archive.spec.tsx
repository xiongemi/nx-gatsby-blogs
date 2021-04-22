import { render } from '@testing-library/react';
import React from 'react';

import BlogPostArchive from './blog-post-archive';

describe('BlogPostArchive', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogPostArchive />);
    expect(baseElement).toBeTruthy();
  });
});

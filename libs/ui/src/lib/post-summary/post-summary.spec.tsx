import { render } from '@testing-library/react';
import React from 'react';

import { mockBlogPost } from '../../models/blog-post.mock';

import PostSummary from './post-summary';

describe('PostSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostSummary post={mockBlogPost} />);
    expect(baseElement).toBeTruthy();
  });
});

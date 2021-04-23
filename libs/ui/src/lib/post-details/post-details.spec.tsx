import { render } from '@testing-library/react';
import React from 'react';

import { mockBlogPost } from '../../models/blog-post.mock';

import PostDetails from './post-details';

describe('PostDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PostDetails
        post={mockBlogPost}
        previous={mockBlogPost}
        next={mockBlogPost}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';
import React from 'react';

import { mockBlogPost } from '../../models/blog-post.mock';

import PostSummaryList from './post-summary-list';

describe('PostSummaryList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PostSummaryList
        posts={[mockBlogPost]}
        currentPageNumber={1}
        totalPageCount={1}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});

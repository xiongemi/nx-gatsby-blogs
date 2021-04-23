import { render } from '@testing-library/react';
import React from 'react';

import BlogPostArchive from './blog-post-archive';
import { mockBlogPostArchivePropsData } from './models/blog-post-archive-props-data.mock';

describe('BlogPostArchive', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogPostArchive
        data={mockBlogPostArchivePropsData}
        pageContext={{ pageNumber: 1, totalPages: 1 }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
